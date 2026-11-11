import { createCustomApiCallAction } from '@united/pieces-common';
import { createPiece } from '@united/pieces-framework';
import { youformAiActions } from './lib/actions/ai';
import { youformAuth } from './lib/auth';
import { PieceCategory } from '@united/pieces-framework';
import { youformClient } from './lib/common/client';
import { newSubmissionTrigger } from './lib/triggers/new-form-submission';

export const youform = createPiece({
  displayName: 'Youform',
  auth: youformAuth,
  minimumSupportedRelease: '0.88.2',
  logoUrl: 'https://cdn.united.com/pieces/youform.png',
  authors: ['kishanprmr'],
  categories: [PieceCategory.FORMS_AND_SURVEYS],
  actions: [
    ...youformAiActions,
    createCustomApiCallAction({
      auth: youformAuth,
      baseUrl: () => youformClient.baseUrl(),
      authMapping: async (auth) => ({
        Authorization: `Bearer ${auth.secret_text}`,
      }),
    }),
  ],
  triggers: [newSubmissionTrigger],
});
