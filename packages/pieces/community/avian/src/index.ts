import { createPiece } from '@united/pieces-framework';
import { askAvian } from './lib/actions/ask-avian';
import { PieceCategory } from '@united/pieces-framework';
import { avianAuth } from './lib/auth';

export const avian = createPiece({
  displayName: 'Avian',
  description: 'Integrate with Avian  to leverage its powerful language models for generating human-like text based on your prompts.',
  auth: avianAuth,
  categories: [PieceCategory.ARTIFICIAL_INTELLIGENCE],
  minimumSupportedRelease: '0.36.1',
  logoUrl: 'https://cdn.united.com/pieces/avian.png',
  authors: ['avianion'],
  actions: [askAvian],
  triggers: [],
});
