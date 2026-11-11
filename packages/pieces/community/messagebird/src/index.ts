import { createPiece, PieceAuth } from '@united/pieces-framework';
import { sendSMSAction } from './lib/actions/send-sms.action';
import { PieceCategory } from '@united/pieces-framework';
import { listMessages } from './lib/actions/list-messages';
import { birdAuth, BirdAuthValue } from './lib/auth';
import { createCustomApiCallAction } from '@united/pieces-common';

export const messagebird = createPiece({
  displayName: 'Bird',
  description: 'Unified CRM for Marketing, Service & Payments',
  auth: birdAuth,
  minimumSupportedRelease: '0.30.0',
  logoUrl: 'https://cdn.united.com/pieces/messagebird.png',
  categories: [PieceCategory.MARKETING, PieceCategory.COMMUNICATION],
  authors: ['kishanprmr', 'geekyme','prasanna2000-max'],
  actions: [
    sendSMSAction,
    listMessages,
    createCustomApiCallAction({
      baseUrl: (auth)=> {
        return auth ? 'https://api.bird.com/workspaces/' + (auth.props as BirdAuthValue).workspaceId : '';
      },
      auth: birdAuth,
      authMapping: async (auth) => {
        return {
          Authorization: `Bearer ${(auth.props as BirdAuthValue).apiKey}`,
        };
      }
    }),
  ],
  triggers: [],
});
