# Flaky tests register

Tests that were quarantined (skipped) because they failed intermittently. Each row tracks why it was quarantined and the follow-up that fixes the underlying issue and un-skips it.

| Test (file::name) | Reason | First seen | Status | Owner | Follow-up |
|---|---|---|---|---|---|
| `packages/pieces/community/bluesky/test/polling.test.ts::catches up an untimed list (followers) even when the seen list was trimmed` | Over-emission in the bluesky polling catch-up logic: when `seenCap` (150) is smaller than the burst (650), the seen window was trimmed mid-catch-up and some entries were re-emitted, so the emitted count was nondeterministic (CI observed 665 vs 646 expected). Passed in isolation, failed intermittently in the full CI matrix. | 2026-11 | resolved | Vee / QA | Fixed in `polling.ts`: the full emitted set is retained in `seen` while catch-up is in flight, so nothing already emitted can fall out and be re-read. Test re-enabled. |

## Flake-rate report: Step 1 trust-the-suite hunt (2026-11)

Ran on the Linux CI baseline (not the owner's Windows machine). Each target was run 5 times back to back. Env for the ce API suite is `packages/server/api/.env.tests` (PGlite + in-memory Redis, no Docker), edition `UNI_EDITION=ce`.

### Packages run and raw per-run counts

| Target | Runs | Per-run result (identical across all runs) |
|---|---|---|
| `packages/server/engine` | 5 | 50 files, 676 passed, 0 failed, 0 skipped |
| `packages/server/sandbox` | 5 | 23 files, 318 passed, 0 failed, 2 skipped |
| `packages/server/worker` | 5 | 49 files, 622 passed, 0 failed, 1 skipped |
| `packages/server/utils` (server-utils) | 5 | 28 files, 382 passed, 0 failed, 0 skipped |
| `packages/server/api` ce integration (`UNI_EDITION=ce`) | 5 | 135 files, 1670 passed, 16 failed, 3 skipped |

### Flaky tests found

None. No test flipped between pass and fail across the 5 runs of any target. The exact set of 16 failing ce tests was byte-for-byte identical in all 5 runs (verified by diffing the failing-test name list per run), so nothing is nondeterministic and nothing was quarantined. The register above is unchanged apart from this report.

### Deterministic / environment failures excluded from the flake classification

These fail the same way on every run for a known environment reason, so they are deterministic env failures, not flakes. They are not added to the register as flakes.

- `packages/server/api/test/integration/ce/flows/flow-run/execute-flow-e2e.test.ts` (15 tests) and `packages/server/api/test/integration/ce/pieces/piece-options-e2e.test.ts` (1 test), 16 tests total. Reason: these need Docker piece-materialization, which is not available in this no-Docker env. The sandbox dies during cold-cache provision and runs return `INTERNAL_ERROR`, so the ce gate reports 16 failed / 1670 passed / 3 skipped every run. This matches the expected ~1669 passing excluding the two Docker-gated files.
- Not hit in this hunt (api unit suite was out of scope, only the ce integration gate was run), but noted for completeness: `packages/server/api/test/unit/app/workers/job-queue/active-invariant.test.ts` and `packages/server/api/test/unit/app/helper/system-jobs/remove-deprecated-jobs.test.ts` are deterministic env failures when run, because they need a real Redis at `127.0.0.1:6379` (ECONNREFUSED).

### Follow-ups

- None required for flakiness. The two Docker-gated ce files remain a known env limitation of the no-Docker test environment; running them needs a Docker-capable host so pieces can be materialized.
