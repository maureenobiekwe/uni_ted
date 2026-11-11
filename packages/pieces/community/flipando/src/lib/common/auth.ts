import { PieceAuth } from '@united/pieces-framework';

export const flipandoAuth = PieceAuth.SecretText({
  displayName: 'API Key',
  description: 'Flipando API Key',
  required: true,
});
