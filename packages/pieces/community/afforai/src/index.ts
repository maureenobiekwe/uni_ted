import { createPiece } from '@united/pieces-framework';
import { askChatbotAction } from './lib/actions/ask-chatbot';
import { PieceCategory } from '@united/pieces-framework';
import { afforaiAuth } from './lib/auth';

export const afforai = createPiece({
  displayName: 'Afforai',
  description:
    'Helps you search, summarize, and translate knowledge from hundreds of documents to help you produce trustworthy research.',
  auth: afforaiAuth,
  minimumSupportedRelease: '0.30.0',
  logoUrl: 'https://cdn.united.com/pieces/afforai.png',
  categories: [PieceCategory.ARTIFICIAL_INTELLIGENCE],
  authors: ["kishanprmr","abuaboud"],
  actions: [askChatbotAction],
  triggers: [],
});
