import { PieceAuth } from '@united/pieces-framework';

export const skyprepAuth = PieceAuth.SecretText({
  displayName: 'API Key',
  description: 'Skyprep API Key',
  required: true,
});
