# Flaky tests register

Tests that are quarantined (skipped) because they fail intermittently. Each row tracks why it was quarantined and the follow-up that will fix the underlying issue and un-skip it.

| Test (file::name) | Reason | First seen | Status | Owner | Follow-up |
|---|---|---|---|---|---|
| `packages/pieces/community/bluesky/test/polling.test.ts::catches up an untimed list (followers) even when the seen list was trimmed` | Over-emission in the bluesky polling catch-up logic: when `seenCap` (150) is smaller than the burst (650), the seen window is trimmed mid-catch-up and some entries are re-emitted, so the emitted count is nondeterministic (CI observed 665 vs 646 expected). Passes in isolation, fails intermittently in the full CI matrix. | 2026-11 | quarantined | Vee / QA | Fix the catch-up over-emission bug, then un-skip (PR TBD) |
