import { createServer, IncomingMessage, Server, ServerResponse } from 'node:http'

async function start(): Promise<FakeHttpServer> {
    const server = createServer(handleRequest)
    await new Promise<void>((resolve) => server.listen(0, '127.0.0.1', resolve))
    const port = listeningPort(server)
    return {
        url: (path: string) => `http://127.0.0.1:${port}${path}`,
        close: () => closeServer(server),
    }
}

function listeningPort(server: Server): number {
    const address = server.address()
    if (address === null || typeof address === 'string') {
        throw new Error('fake http server is not listening on a TCP port')
    }
    return address.port
}

function handleRequest(req: IncomingMessage, res: ServerResponse): void {
    const path = new URL(req.url ?? '/', 'http://127.0.0.1').pathname
    if (path === '/brand/logo.svg') {
        res.writeHead(200, { 'content-type': 'image/svg+xml' })
        res.end(LOGO_SVG)
        return
    }
    res.writeHead(404, { 'content-type': 'application/json' })
    res.end(JSON.stringify({ statusCode: 404, error: 'Not Found', message: 'Route not found' }))
}

function closeServer(server: Server): Promise<void> {
    return new Promise((resolve, reject) => server.close((error) => (error ? reject(error) : resolve())))
}

const LOGO_SVG = '<svg xmlns="http://www.w3.org/2000/svg" width="1" height="1"/>'

export const fakeHttpServer = { start }

export type FakeHttpServer = {
    url: (path: string) => string
    close: () => Promise<void>
}
