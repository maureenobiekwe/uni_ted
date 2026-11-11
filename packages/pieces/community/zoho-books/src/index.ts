import { createCustomApiCallAction } from '@united/pieces-common';
import { createPiece, PieceCategory } from '@united/pieces-framework';
import { zohoBooksAiActions } from './lib/actions/ai';
import { zohoBooksAuth } from './lib/auth';
import { zohoBooksClient } from './lib/common/client';

export const zohoBooks = createPiece({
  displayName: "Zoho Books",
  description: 'Comprehensive online accounting software for small businesses.',
  logoUrl: "https://cdn.united.com/pieces/zoho-books.png",
  minimumSupportedRelease: '0.88.2',
  categories: [PieceCategory.ACCOUNTING],
  authors: ["ikus060"],
  auth: zohoBooksAuth,
  actions: [
    ...zohoBooksAiActions,
    createCustomApiCallAction({
      baseUrl: (auth) => (auth ? zohoBooksClient.baseUrl({ auth }) : ''),
      auth: zohoBooksAuth,
      authMapping: async (auth) => zohoBooksClient.authHeaders({ auth }),
    }),
  ],
  triggers: [],
});
