import { createCustomApiCallAction } from '@united/pieces-common';
import { createPiece } from '@united/pieces-framework';
import { PieceCategory } from '@united/pieces-framework';
import { askLocalAI } from './lib/actions/send-prompt';
import { listModels } from './lib/actions/list-models';
import { createEmbedding } from './lib/actions/create-embedding';
import { textToSpeech } from './lib/actions/text-to-speech';
import { transcribeAudio } from './lib/actions/transcribe-audio';
import { localaiAuth } from './lib/auth';
import { localaiCommon } from './lib/common';

export const openai = createPiece({
  displayName: 'LocalAI',
  description:
    'The free, Self-hosted, community-driven and local-first. Drop-in replacement for OpenAI running on consumer-grade hardware. No GPU required.',
  minimumSupportedRelease: '0.30.0',
  logoUrl: 'https://cdn.united.com/pieces/localai.jpeg',
  categories: [PieceCategory.ARTIFICIAL_INTELLIGENCE],
  auth: localaiAuth,
  actions: [
    askLocalAI,
    listModels,
    createEmbedding,
    textToSpeech,
    transcribeAudio,
    createCustomApiCallAction({
      baseUrl: (auth) => (auth ? localaiCommon.baseUrl(auth) : ''),
      auth: localaiAuth,
      authMapping: async (auth) => localaiCommon.authHeaders(auth),
    }),
  ],
  authors: ["hkboujrida","kishanprmr","MoShizzle","abuaboud"],
  triggers: [],
});

export { localaiAuth };
