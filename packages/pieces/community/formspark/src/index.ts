import { createPiece, PieceAuth } from '@united/pieces-framework';
import { PieceCategory } from '@united/pieces-framework';
import { newSubmissionTrigger } from './lib/triggers/new-submission.trigger';

export const formspark = createPiece({
  displayName: 'Formspark',
  auth: PieceAuth.None(),
  categories: [PieceCategory.FORMS_AND_SURVEYS],
  minimumSupportedRelease: '0.36.1',
  logoUrl: 'https://cdn.united.com/pieces/formspark.png',
  authors: ['kishanprmr'],
  actions: [],
  triggers: [newSubmissionTrigger],
});
