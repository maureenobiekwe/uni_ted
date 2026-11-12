import { createPiece } from '@united/pieces-framework';
import { braveWebSearchAction } from './lib/actions/web-search';
import { createCustomApiCallAction } from '@united/pieces-common';
import { braveSearchAuth } from './lib/auth';

export const braveSearch = createPiece({
  displayName: 'Brave Search',
  description: 'Privacy-preserving search engine',
  auth: braveSearchAuth,
  minimumSupportedRelease: '0.30.0',
  logoUrl: 'https://cdn.united.com/pieces/brave-search.png',
  authors: ['ErisMorn', 'sanket-a11y'],
  actions: [
    braveWebSearchAction,
    createCustomApiCallAction({
      auth: braveSearchAuth,
      baseUrl: () => 'https://api.search.brave.com/res/v1',
      authMapping: async (auth) => {
        return {
          'X-Subscription-Token': auth.secret_text,
        };
      },
    }),
  ],
  triggers: [],
});
