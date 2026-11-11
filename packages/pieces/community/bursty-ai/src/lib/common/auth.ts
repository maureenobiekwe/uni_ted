import { PieceAuth } from "@united/pieces-framework";

export const burstyAiAuth = PieceAuth.SecretText({
  displayName: "API Key",
  description: "API Key for Bursty-ai",
  required: true,
});