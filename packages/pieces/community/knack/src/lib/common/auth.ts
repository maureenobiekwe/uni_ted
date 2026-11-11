import { PieceAuth, Property } from '@united/pieces-framework';
import { HttpMethod } from '@united/pieces-common';
import { AppConnectionType } from '@united/pieces-framework';
import { knackApiCall } from './client';

export const knackAuth = PieceAuth.CustomAuth({
  props: {
    apiKey: PieceAuth.SecretText({
      displayName: 'API Key',
      description: 'Your Knack API Key available in the Settings section of the Builder.',
      required: true,
    }),
    applicationId: Property.ShortText({
      displayName: 'Application ID',
      description: 'Your Application ID available in the Settings section of the Builder.',
      required: true,
    }),
  },
  validate: async ({ auth }) => {
    try {
      await knackApiCall({
        method: HttpMethod.GET,
        auth: {
          type: AppConnectionType.CUSTOM_AUTH,
          props: auth,
        },
        resourceUri: '/objects',
      });
      return { valid: true };
    } catch (e) {
      return {
        valid: false,
        error: e instanceof Error ? e.message : 'Could not connect to Knack.',
      };
    }
  },
  required: true,
});
