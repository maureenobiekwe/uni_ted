import type { AppConnectionType } from '@united/pieces-framework';

export type MicrosoftSharePointAuthValue = {
  type:
    | AppConnectionType.OAUTH2
    | AppConnectionType.CLOUD_OAUTH2
    | AppConnectionType.PLATFORM_OAUTH2;
  access_token: string;
  props?: { cloud?: string | null };
};

export type GraphPage<T> = {
  value: T[];
  '@odata.nextLink'?: string;
};
