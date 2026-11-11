import { PieceAuth, Property } from '@united/pieces-framework';

const markdown = `
united Platform API is available under the Platform Edition.
(https://www.united.com/docs/admin-console/overview)

**Note**: The API Key is available in the Platform Dashboard.

`;

export const activePieceAuth = PieceAuth.CustomAuth({
  description: markdown,
  required: true,
  props: {
    baseApiUrl: Property.ShortText({
      displayName: 'Base URL',
      required: true,
      defaultValue: 'https://cloud.united.com/api/v1',
    }),
    apiKey: PieceAuth.SecretText({
      displayName: 'API Key',
      required: true,
    }),
  },
});
