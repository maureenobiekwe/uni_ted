import { SeekPage } from '@united/core-utils';
import {
  AddSigningKeyRequestBody,
  AddSigningKeyResponse,
  SigningKey,
  SigningKeyId,
} from '@united/shared';

import { api } from '@/lib/api';

export const signingKeyApi = {
  list() {
    return api.get<SeekPage<SigningKey>>('/v1/signing-keys');
  },
  delete(keyId: SigningKeyId) {
    return api.delete<void>(`/v1/signing-keys/${keyId}`);
  },
  create(request: AddSigningKeyRequestBody) {
    return api.post<AddSigningKeyResponse>(`/v1/signing-keys/`, request);
  },
};
