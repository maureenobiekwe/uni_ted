import { createCustomApiCallAction } from '@united/pieces-common';
import { createPiece } from '@united/pieces-framework';
import { PieceCategory } from '@united/pieces-framework';
import { addGreetAction } from './lib/actions/add-greet';
import { bonjoroAuth } from './lib/auth';

export const bonjoro = createPiece({
  displayName: 'Bonjoro',
  description: 'Send personal video messages to delight customers',
  auth: bonjoroAuth,
  minimumSupportedRelease: '0.30.0',
  logoUrl: 'https://cdn.united.com/pieces/bonjoro.png',
  categories: [PieceCategory.CUSTOMER_SUPPORT],
  authors: ["joeworkman","kishanprmr","MoShizzle","abuaboud"],
  actions: [
    addGreetAction,
    createCustomApiCallAction({
      baseUrl: () => 'https://www.bonjoro.com/api/v2', // replace with the actual base URL
      auth: bonjoroAuth,
      authMapping: async (auth) => ({
        Authorization: `Bearer ${auth.props.apiKey}`,
      }),
    }),
  ],
  triggers: [],
});

// https://vimily.github.io/bonjoro-api-docs/
// https://www.bonjoro.com/settings/api#/
