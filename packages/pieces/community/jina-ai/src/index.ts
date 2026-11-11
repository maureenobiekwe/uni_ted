import { createPiece } from '@united/pieces-framework';
import { PieceCategory } from '@united/pieces-framework';
import {
  extractWebpageContentAction,
  webSearchSummarizationAction,
  deepSearchQueryAction,
  classifyContentAction,
  trainCustomClassifierAction,
  createEmbeddingsAction,
  rerankDocumentsAction,
  createBatchEmbeddingsAction,
  getBatchAction,
  listBatchesAction,
  listModelsAction,
  getModelAction,
} from './lib/actions';
import { jinaAiAuth } from './lib/auth';
import { JinaAICommon } from './lib/common';
import { createCustomApiCallAction } from '@united/pieces-common';

const markdownDescription = `
You can get your API key from [Jina AI](https://jina.ai).
`;

export const jinaAi = createPiece({
  displayName: 'Jina AI',
  description: 'AI-powered web content extraction, search, and classification',
  auth: jinaAiAuth,
  minimumSupportedRelease: '0.88.2',
  logoUrl: 'https://cdn.united.com/pieces/jinaai.jpeg',
  categories: [PieceCategory.ARTIFICIAL_INTELLIGENCE],
  authors: ['denieler'],
  actions: [
    extractWebpageContentAction,
    webSearchSummarizationAction,
    deepSearchQueryAction,
    classifyContentAction,
    trainCustomClassifierAction,
    createEmbeddingsAction,
    rerankDocumentsAction,
    createBatchEmbeddingsAction,
    getBatchAction,
    listBatchesAction,
    listModelsAction,
    getModelAction,
    createCustomApiCallAction({
      auth: jinaAiAuth,
      baseUrl: () => JinaAICommon.baseUrl,
      authMapping: async (auth) => ({
        Authorization: `Bearer ${auth.secret_text}`,
      }),
    }),
  ],
  triggers: [],
});