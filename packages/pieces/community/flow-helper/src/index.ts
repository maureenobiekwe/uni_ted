import { createPiece, PieceAuth } from "@united/pieces-framework";
import { getRunId } from "./lib/actions/get-run-id";
import { failFlow } from "./lib/actions/fail-flow";
import { stopFlow } from "./lib/actions/stop-flow";

export const flowHelper = createPiece({
  displayName: "Flow Helper",
  description: "Stop or fail a running flow, or get a link to the current run.",
  auth: PieceAuth.None(),
  minimumSupportedRelease: '0.36.1',
  logoUrl: "https://cdn.united.com/pieces/flow-helper.svg",
  authors: ["AbdulTheunited","AnkitSharmaOnGithub"],
  actions: [getRunId, failFlow, stopFlow],
  triggers: [],
});
