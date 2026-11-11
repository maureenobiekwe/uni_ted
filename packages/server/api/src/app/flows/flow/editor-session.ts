import { ApId } from '@united/core-utils'
import { EDITOR_SESSION_ID_HEADER } from '@united/shared'
import { FastifyRequest } from 'fastify'

export const editorSession = {
    idFromRequest(request: FastifyRequest): string | null {
        const parsed = ApId.safeParse(request.headers[EDITOR_SESSION_ID_HEADER])
        return parsed.success ? parsed.data : null
    },
}
