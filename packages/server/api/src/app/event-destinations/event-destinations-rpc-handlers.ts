import { isNil } from '@united/core-utils'
import { ResolveEventDestinationHeadersRequest, ResolveEventDestinationHeadersResponse } from '@united/shared'
import { FastifyBaseLogger } from 'fastify'
import { eventDestinationService } from './event-destinations.service'

export const eventDestinationRpcHandlers = (log: FastifyBaseLogger) => ({
    async resolveEventDestinationHeaders({ platformId, destinationId, destinationUrl }: ResolveEventDestinationHeadersRequest): Promise<ResolveEventDestinationHeadersResponse> {
        const headers = await eventDestinationService(log).resolveDeliveryHeaders({ platformId, destinationId, destinationUrl })
        if (isNil(headers)) {
            return null
        }
        return { headers }
    },
})
