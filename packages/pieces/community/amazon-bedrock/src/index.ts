import {
  createPiece,
} from '@united/pieces-framework';
import { PieceCategory } from '@united/pieces-framework';
import { sendPrompt } from './lib/actions/send-prompt';
import { generateContentFromImage } from './lib/actions/generate-content-from-image';
import { generateImage } from './lib/actions/generate-image';
import { generateEmbeddings } from './lib/actions/generate-embeddings';
import { customApiCall } from './lib/actions/custom-api-call';
import { awsBedrockCombinedAuth } from './lib/auth';
import { amazonBedrockAiActions } from './lib/actions/ai';

export const awsBedrock = createPiece({
  displayName: 'AWS Bedrock',
  description: 'Build generative AI applications with foundation models',
  auth: awsBedrockCombinedAuth,
  minimumSupportedRelease: '0.90.1',
  logoUrl: 'https://cdn.united.com/pieces/amazon-bedrock.png',
  categories: [PieceCategory.ARTIFICIAL_INTELLIGENCE],
  authors: ["onyedikachi-david"],
  actions: [sendPrompt, generateContentFromImage, generateImage, generateEmbeddings, ...amazonBedrockAiActions, customApiCall],
  triggers: [],
});
