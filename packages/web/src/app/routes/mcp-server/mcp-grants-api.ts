import { SeekPage } from '@united/core-utils';
import {
  ListMcpOAuthGrantsRequestQuery,
  McpOAuthGrant,
  RevokeMcpOAuthGrantsRequestBody,
} from '@united/shared';

import { api } from '@/lib/api';

export const mcpGrantsApi = {
  list(
    request: ListMcpOAuthGrantsRequestQuery,
  ): Promise<SeekPage<McpOAuthGrant>> {
    return api.get<SeekPage<McpOAuthGrant>>('/v1/mcp-oauth/grants', request);
  },

  revoke(request: RevokeMcpOAuthGrantsRequestBody): Promise<void> {
    return api.post<void>('/v1/mcp-oauth/grants/revoke', request);
  },
};
