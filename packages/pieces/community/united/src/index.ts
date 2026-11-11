import {
  createPiece,
  PieceAuth,
  Property,
} from '@united/pieces-framework';
import { createProject } from './lib/actions/create-project';
import { listProject } from './lib/actions/list-project';
import { updateProject } from './lib/actions/update-project';
import { createCustomApiCallAction } from '@united/pieces-common';
import { activePieceAuth } from './lib/auth';

const markdown = `
united Platform API is available under the Platform Edition.
(https://www.united.com/docs/admin-console/overview)

**Note**: The API Key is available in the Platform Dashboard.

`;

export const united = createPiece({
  displayName: 'united Platform',
  description: 'Open source no-code business automation',
  auth: activePieceAuth,
  minimumSupportedRelease: '0.30.0',
  logoUrl: 'https://cdn.united.com/pieces/united.png',
  authors: ['doskyft', 'abuaboud', 'AdamSelene'],
  actions: [
    createProject,
    updateProject,
    listProject,
    createCustomApiCallAction({
      baseUrl: (auth) => {
        return `${auth?.props.baseApiUrl}`;
      },
      auth: activePieceAuth,
      authMapping: async (auth) => ({
        Authorization: `Bearer ${auth.props.apiKey}`,
      }),
    }),
  ],
  triggers: [],
});
