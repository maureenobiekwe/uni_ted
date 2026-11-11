import { PieceAuth, Property } from '@united/pieces-framework';

export const mattermostAuth = PieceAuth.CustomAuth({
  description: `
**Workspace URL**: The url of mattermost instance (e.g \`https://united.mattermost.com\`)

**Bot Token**: Obtain it from settings > integrations > bot accounts > add bot account
`,
  required: true,
  props: {
    workspace_url: Property.ShortText({
      displayName: 'Workspace URL',
      description:
        'The workspace URL of the Mattermost instance (e.g https://united.mattermost.com)',
      required: true,
    }),
    token: Property.ShortText({
      displayName: 'Bot Token',
      description: 'The bot token to use to authenticate',
      required: true,
    }),
  },
});
