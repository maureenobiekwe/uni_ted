import { PieceAuth } from "@united/pieces-framework";

export const influencersClubAuth = PieceAuth.SecretText({
  displayName: "Influencers Club API Key",
  description: "API Key for Influencers Club",
  required: true,
});