#!/bin/sh

if [ "$#" -gt 0 ]; then
    exec "$@"
fi

export UNI_CONTAINER_TYPE="${UNI_CONTAINER_TYPE:-WORKER_AND_APP}"
export UNI_PORT="${UNI_PORT:-80}"

echo "UNI_CONTAINER_TYPE: $UNI_CONTAINER_TYPE"
echo "UNI_PORT: $UNI_PORT"

# Auto-generate worker token if not set and JWT secret is available
if [ -z "$UNI_WORKER_TOKEN" ] && [ -n "$UNI_JWT_SECRET" ]; then
    echo "Auto-generating UNI_WORKER_TOKEN..."
    export UNI_WORKER_TOKEN=$(node -e "
        const jwt = require('jsonwebtoken');
        const crypto = require('crypto');
        const token = jwt.sign(
            { id: crypto.randomUUID(), type: 'WORKER' },
            process.env.UNI_JWT_SECRET,
            { expiresIn: '100y', keyid: '1', algorithm: 'HS256', issuer: 'united' }
        );
        process.stdout.write(token);
    ")
fi

APP_SCRIPT="packages/server/api/dist/src/bootstrap.js"
WORKER_SCRIPT="packages/server/worker/dist/src/bootstrap.js"

echo "Starting united (${UNI_CONTAINER_TYPE} mode)"

case "$UNI_CONTAINER_TYPE" in
    APP)
        exec node --enable-source-maps "$APP_SCRIPT"
        ;;
    WORKER)
        exec node --enable-source-maps "$WORKER_SCRIPT"
        ;;
    WORKER_AND_APP)
        UNI_CONTAINER_TYPE=APP node --enable-source-maps "$APP_SCRIPT" &
        app_pid=$!
        node --enable-source-maps "$WORKER_SCRIPT" &
        worker_pid=$!

        trap 'kill "$app_pid" "$worker_pid" 2>/dev/null' TERM INT

        while kill -0 "$app_pid" 2>/dev/null && kill -0 "$worker_pid" 2>/dev/null; do
            sleep 1
        done

        kill "$app_pid" "$worker_pid" 2>/dev/null
        exit 1
        ;;
    *)
        echo "Unknown UNI_CONTAINER_TYPE: $UNI_CONTAINER_TYPE" >&2
        exit 1
        ;;
esac
