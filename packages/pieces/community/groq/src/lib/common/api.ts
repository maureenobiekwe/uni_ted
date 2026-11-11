import { HttpMethod } from '@united/pieces-common';
import { groqClient } from './client';
import type { GroqAuthValue, GroqModelList } from './types';

async function listModels({
  auth,
}: {
  auth: GroqAuthValue;
}): Promise<GroqModelList> {
  return await groqClient.request<GroqModelList>({
    auth,
    method: HttpMethod.GET,
    path: '/models',
  });
}

export const groqApi = { listModels };
