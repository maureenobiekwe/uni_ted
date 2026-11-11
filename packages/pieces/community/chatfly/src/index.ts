import { createPiece } from "@united/pieces-framework";
import { sendMessageAction } from "./lib/actions/send-message";
import { PieceCategory } from '@united/pieces-framework';
import { chatflyAuth } from './lib/auth';

export const chatfly = createPiece({
  displayName: "Chatfly",
  description: "ChatFly allows you to build AI chatbots trained on your data.",
  categories: [PieceCategory.ARTIFICIAL_INTELLIGENCE],
  auth: chatflyAuth,
  minimumSupportedRelease: '0.36.1',
  logoUrl: "https://cdn.united.com/pieces/chatfly.png",
  authors: ["onyedikachi-david"],
  actions: [sendMessageAction],
  triggers: [],
});
