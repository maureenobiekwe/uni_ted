import { createPiece } from '@united/pieces-framework';
import { PieceCategory } from '@united/pieces-framework';
import { createChatCompletionAction } from './lib/actions/create-chat-completion';
import { perplexityAiAuth } from './lib/auth';
import { perplexityAiAiActions } from './lib/actions/ai';

export const perplexityAi = createPiece({
  displayName: 'Perplexity AI',
  auth: perplexityAiAuth,
  minimumSupportedRelease: '0.88.2',
  logoUrl: 'https://cdn.activepieces.com/pieces/perplexity-ai.png',
  categories: [PieceCategory.ARTIFICIAL_INTELLIGENCE],
  description: 'AI powered search engine',
  authors: ['kishanprmr', 'AbdulTheunited'],
  actions: [createChatCompletionAction, ...perplexityAiAiActions],
  triggers: [],
});
