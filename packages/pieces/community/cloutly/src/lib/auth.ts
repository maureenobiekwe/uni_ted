import { PieceAuth } from '@united/pieces-framework';

export const cloutlyAuth = PieceAuth.SecretText({
  displayName: 'API Key',
  required: true,
  description: 'Please enter the API Key obtained from Cloutly.',
});
