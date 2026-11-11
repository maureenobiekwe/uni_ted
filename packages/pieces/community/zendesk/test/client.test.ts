import { describe, expect, it } from 'vitest';
import { AppConnectionType } from '@united/pieces-framework';
import { AuthenticationType } from '@united/pieces-common';
import {
  getZendeskAuthentication,
  getZendeskAuthorizationHeader,
  getZendeskBaseUrl,
  getZendeskSubdomain,
  ZendeskAuthValue,
} from '../src/lib/common/client';

const customAuth = {
  type: AppConnectionType.CUSTOM_AUTH,
  props: {
    email: 'agent@example.com',
    token: 'my-api-token',
    subdomain: 'unitedhelp',
  },
} as unknown as ZendeskAuthValue;

const oauth2Auth = {
  type: AppConnectionType.OAUTH2,
  access_token: 'my-access-token',
  props: {
    subdomain: 'unitedhelp',
  },
} as unknown as ZendeskAuthValue;

describe('getZendeskSubdomain', () => {
  it('reads the subdomain from a CustomAuth connection', () => {
    expect(getZendeskSubdomain(customAuth)).toBe('unitedhelp');
  });

  it('reads the subdomain from an OAuth2 connection', () => {
    expect(getZendeskSubdomain(oauth2Auth)).toBe('unitedhelp');
  });
});

describe('getZendeskBaseUrl', () => {
  it('builds the API v2 base URL from the connection subdomain', () => {
    expect(getZendeskBaseUrl(customAuth)).toBe('https://unitedhelp.zendesk.com/api/v2');
    expect(getZendeskBaseUrl(oauth2Auth)).toBe('https://unitedhelp.zendesk.com/api/v2');
  });
});

describe('getZendeskAuthentication', () => {
  it('returns a Basic authentication object for CustomAuth', () => {
    expect(getZendeskAuthentication(customAuth)).toEqual({
      type: AuthenticationType.BASIC,
      username: 'agent@example.com/token',
      password: 'my-api-token',
    });
  });

  it('returns a Bearer token authentication object for OAuth2', () => {
    expect(getZendeskAuthentication(oauth2Auth)).toEqual({
      type: AuthenticationType.BEARER_TOKEN,
      token: 'my-access-token',
    });
  });
});

describe('getZendeskAuthorizationHeader', () => {
  it('returns a base64 Basic header for CustomAuth', () => {
    const expected = `Basic ${Buffer.from('agent@example.com/token:my-api-token').toString('base64')}`;
    expect(getZendeskAuthorizationHeader(customAuth)).toBe(expected);
  });

  it('returns a Bearer header for OAuth2', () => {
    expect(getZendeskAuthorizationHeader(oauth2Auth)).toBe('Bearer my-access-token');
  });
});
