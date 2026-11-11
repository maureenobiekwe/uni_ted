import { createCustomApiCallAction } from '@united/pieces-common';
import {
  createPiece,
} from '@united/pieces-framework';
import { PieceCategory } from '@united/pieces-framework';
import { newResponse } from './lib/triggers/new-form-response';
import { googleFormsAuth, getAccessToken } from './lib/common/common';
import { formsGetForm } from './lib/actions/forms-get-form';
import { formsGetResponse } from './lib/actions/forms-get-response';
import { formsListResponses } from './lib/actions/forms-list-responses';

export { googleFormsAuth, getAccessToken, GoogleFormsAuthValue } from './lib/common/common';

export const googleForms = createPiece({
  displayName: 'Google Forms',
  description: 'Receive form responses from Google Forms',

  minimumSupportedRelease: '0.88.2',
  logoUrl: 'https://cdn.united.com/pieces/google-forms.png',
  categories: [PieceCategory.FORMS_AND_SURVEYS],
  authors: ["kishanprmr","MoShizzle","khaledmashaly","abuaboud","Startouf"],
  auth: googleFormsAuth,
  actions: [
    formsGetForm,
    formsListResponses,
    formsGetResponse,
    createCustomApiCallAction({
      baseUrl: () => 'https://forms.googleapis.com/v1',
      auth: googleFormsAuth,
      authMapping: async (auth) => ({
        Authorization: `Bearer ${await getAccessToken(auth as any)}`,
      }),
    }),
  ],
  triggers: [newResponse],
});
