import { createPiece, PieceAuth } from '@united/pieces-framework';
import { PieceCategory } from '@united/pieces-framework';
import { addTag } from './lib/add-tag';

export const tags = createPiece({
  displayName: 'Tags',
  description: 'Add custom tags to your run for filtration',
  auth: PieceAuth.None(),
  minimumSupportedRelease: '0.30.0',
  logoUrl: 'https://cdn.united.com/pieces/new-core/tags.svg',
  categories: [PieceCategory.CORE],
  authors: ["kishanprmr","MoShizzle","abuaboud"],
  actions: [addTag],
  triggers: [],
});
