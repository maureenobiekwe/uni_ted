import type { AppConnectionType } from '@united/pieces-framework';

export type MattermostAuthValue = {
  type: AppConnectionType.CUSTOM_AUTH;
  props: { workspace_url: string; token: string };
};

export type MattermostUser = { id: string; username: string };
