# Flaky tests register

Tests that were quarantined (skipped) because they failed intermittently. Each row tracks why it was quarantined and the follow-up that fixes the underlying issue and un-skips it.

| Test (file::name) | Reason | First seen | Status | Owner | Follow-up |
|---|---|---|---|---|---|
| `packages/pieces/community/bluesky/test/polling.test.ts::catches up an untimed list (followers) even when the seen list was trimmed` | Over-emission in the bluesky polling catch-up logic: when `seenCap` (150) is smaller than the burst (650), the seen window was trimmed mid-catch-up and some entries were re-emitted, so the emitted count was nondeterministic (CI observed 665 vs 646 expected). Passed in isolation, failed intermittently in the full CI matrix. | 2026-11 | resolved | Vee / QA | Fixed in `polling.ts`: the full emitted set is retained in `seen` while catch-up is in flight, so nothing already emitted can fall out and be re-read. Test re-enabled. |
