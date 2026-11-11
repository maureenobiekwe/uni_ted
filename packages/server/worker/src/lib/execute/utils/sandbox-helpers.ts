import { unitedError, ErrorCode, SandboxExecutionTimeoutParams } from '@united/core-utils'

export function isSandboxTimeout(e: unknown): e is unitedError & { error: SandboxExecutionTimeoutParams } {
    return e instanceof unitedError && e.error.code === ErrorCode.SANDBOX_EXECUTION_TIMEOUT
}
