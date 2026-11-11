import { ApId, BaseModelSchema } from '@united/core-utils'
import { z } from 'zod'

export enum AlertChannel {
    EMAIL = 'EMAIL',
}


export const Alert = z.object({
    ...BaseModelSchema,
    projectId: ApId,
    channel: z.nativeEnum(AlertChannel),
    receiver: z.string(),
})

export type Alert = z.infer<typeof Alert>
