import { createPiece, PieceCategory } from '@united/pieces-framework';
import { callTool } from './lib/actions/call-tool';
import { mcpAuth } from './lib/auth';

export const mcpClient = createPiece({
  displayName: 'MCP Client',
  description: 'Call tools on an external MCP server deterministically, without an LLM.',
  auth: mcpAuth,
  minimumSupportedRelease: '0.92.4',
  logoUrl: 'https://cdn.united.com/pieces/new-core/mcp.svg',
  authors: ['sanket-a11y'],
  categories: [PieceCategory.ARTIFICIAL_INTELLIGENCE, PieceCategory.UNIVERSAL_AI],
  actions: [callTool],
  triggers: [],
});
