import { isNil, sanitizeHttpHeaders, toSendableHttpBody, tryCatch } from '@united/core-utils'
import { EngineHttpResponse } from '@united/shared'
import { FastifyReply } from 'fastify'

export const webhookResponse = {
    async send({ reply, response }: SendWebhookResponseParams): Promise<void> {
        const headers = sanitizeHttpHeaders(response.headers)
        const body = toSendableHttpBody({ body: response.body, headers })
        const { error } = await tryCatch(async () => {
            await reply
                .status(response.status)
                .headers(headers)
                .send(body)
        })
        if (isNil(error) || reply.raw.headersSent) {
            return
        }
        reply.log.error({ error }, 'Failed to send webhook response')
        Object.keys(headers).forEach((name) => {
            void reply.removeHeader(name)
        })
        await reply.status(500).type('application/json').send({ message: 'Failed to send webhook response' })
    },
}

type SendWebhookResponseParams = {
    reply: FastifyReply
    response: EngineHttpResponse
}
