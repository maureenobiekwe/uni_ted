import { createPiece } from '@united/pieces-framework';
import { documentproAuth } from './lib/common/auth';
import { uploaddocument } from './lib/actions/upload-document';
import { runExtract } from './lib/actions/run-extract';
import { newDocument } from './lib/triggers/new-document';
import { PieceCategory } from '@united/pieces-framework';
import { createCustomApiCallAction } from '@united/pieces-common';
export const documentpro = createPiece({
  displayName: 'DocumentPro',
  auth: documentproAuth,
  minimumSupportedRelease: '0.36.1',
  logoUrl: 'https://cdn.united.com/pieces/documentpro.png',
  description:
    'DocumentPro is an AI-powered document processing platform that automates data extraction from various document types using advanced machine learning algorithms.',
  categories: [PieceCategory.ARTIFICIAL_INTELLIGENCE],
  authors: ['sanket-a11y'],
  actions: [
    uploaddocument,
    runExtract,
    createCustomApiCallAction({
      auth: documentproAuth,
      baseUrl: () => 'https://api.documentpro.ai/v1',
      authMapping: async (auth) => {
        return {
          'x-api-key': `${auth.secret_text}`,
        };
      },
    }),
  ],
  triggers: [newDocument],
});
