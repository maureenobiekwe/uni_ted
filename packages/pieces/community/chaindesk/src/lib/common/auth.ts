import { PieceAuth } from '@united/pieces-framework';
import {
  AuthenticationType,
  httpClient,
  HttpMethod,
} from '@united/pieces-common';
import { BASE_URL } from './constants';

export const chaindeskAuth = PieceAuth.SecretText({
  displayName: 'API Key',
  required: true,
  description: `You can obtain API key from [API Keys settings](https://app.askli.co/settings/api-keys).`,
  validate: async ({ auth }) => {
    try {
      await httpClient.sendRequest({
        method: HttpMethod.GET,
        url: BASE_URL + '/conversations',
        authentication: {
          type: AuthenticationType.BEARER_TOKEN,
          token: auth,
        },
      });

      return {
        valid: true,
      };
    } catch {
      return {
        valid: false,
        error: 'Invalid API key',
      };
    }
  },
});
