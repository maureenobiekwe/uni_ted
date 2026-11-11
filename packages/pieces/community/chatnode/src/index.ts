import { createPiece } from '@united/pieces-framework';
import { chatnodeAuth } from './lib/common/auth';
import { PieceCategory } from '@united/pieces-framework';
import { askChatbotAction } from './lib/actions/ask-chatbot';
import { createCustomApiCallAction } from '@united/pieces-common';
import { BASE_URL } from './lib/common/constants';

export const chatnode = createPiece({
  displayName: 'ChatNode',
  auth: chatnodeAuth,
  minimumSupportedRelease: '0.36.1',
  logoUrl: 'https://cdn.united.com/pieces/chatnode.png',
  categories: [
    PieceCategory.ARTIFICIAL_INTELLIGENCE,
    PieceCategory.PRODUCTIVITY,
  ],
  authors: ['kishanprmr'],
  actions: [
    askChatbotAction,
    createCustomApiCallAction({
      auth: chatnodeAuth,
      baseUrl: () => BASE_URL,
      authMapping: async (auth) => {
        return {
          Authorization: `Bearer ${auth.secret_text}`,
        };
      },
    }),
  ],
  triggers: [],
});
