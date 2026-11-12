import { createPiece } from '@united/pieces-framework';
import { importInvoice } from './lib/actions/import-invoice';
import { tidelyAuth } from './lib/common/auth';
import { createCustomApiCallAction } from '@united/pieces-common';
import { createAPlan } from './lib/actions/create-a-plan';

export const tidely = createPiece({
  displayName: 'Tidely',
  auth: tidelyAuth,
  minimumSupportedRelease: '0.36.1',
  logoUrl: 'https://cdn.activepieces.com/pieces/tidely.png',
  authors: ['sanket-a11y'],
  actions: [
    importInvoice,
    createAPlan,
    createCustomApiCallAction({
      auth: tidelyAuth,
      baseUrl: () => 'https://api.tidely.com/api/v1',
      authMapping: async (auth) => {
        return {
          'X-Authorization': auth.secret_text,
        };
      },
    }),
  ],
  triggers: [],
});
