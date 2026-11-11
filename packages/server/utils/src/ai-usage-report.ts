import { unitedAiCall, unitedAiConsumerSource, unitedAiCostEvent, AiChargeBasis } from '@united/core-utils'
import { AiUsageCharge, ReportAiUsageRequest } from '@united/shared'

export function aiUsageReportOf({ event, idempotencyKey }: AiUsageReportParams): ReportAiUsageRequest {
    const { billing, provider, providerConfigId, modelId, call } = event
    const baseProps: ReportAiUsageRequest = {
        billing,
        provider,
        providerConfigId,
        modelId,
        idempotencyKey,
        usage: chargeOf(call),
        generationId: call.generationId,
        inputTokens: call.inputTokens,
        outputTokens: call.outputTokens,
        cacheReadTokens: call.cacheReadTokens,
        cacheWriteTokens: call.cacheWriteTokens,
        reasoningTokens: call.reasoningTokens,
        observedCostUsd: call.observedCostUsd,
    }
    switch (billing.source) {
        case unitedAiConsumerSource.AI_STEP_IN_FLOW:
            return { ...baseProps, flowRun: billing.flowRun }
        case unitedAiConsumerSource.CHAT:
            return { ...baseProps, chat: billing.chat }
    }
}

function chargeOf(call: unitedAiCall): AiUsageCharge {
    if (call.charge === AiChargeBasis.FIXED_CREDITS) {
        return { type: AiChargeBasis.FIXED_CREDITS, credits: call.credits }
    }
    if (call.charge === AiChargeBasis.USAGE_ONLY) {
        return { type: AiChargeBasis.USAGE_ONLY }
    }
    return { type: AiChargeBasis.PROVIDER_REPORTED_COST, costUsd: call.costUsd }
}

export type AiUsageReportParams = {
    event: unitedAiCostEvent
    idempotencyKey: string
}
