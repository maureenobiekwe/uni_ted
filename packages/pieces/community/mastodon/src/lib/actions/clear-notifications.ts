import { createAction } from '@united/pieces-framework';
import { HttpMethod } from '@united/pieces-common';
import { mastodonAuth } from '../..';
import { mastodonClient } from '../common/client';
import { clearedNotificationsOutputSchema } from '../output-schemas';

export const clearNotifications = createAction({
  auth: mastodonAuth,
  name: 'clear_notifications',
  classification: 'DESTRUCTIVE',
  displayName: 'Clear All Notifications',
  description: 'Remove all notifications of the connected account.',
  audience: 'ai',
  aiMetadata: {
    description:
      'Permanently removes ALL notifications of the connected account in one call; this cannot be undone. Prefer Dismiss Notification to remove a single one. Repeating it is harmless.',
    idempotent: true,
  },
  outputSchema: clearedNotificationsOutputSchema,
  props: {
  },
  async run(context) {
    await mastodonClient.request<unknown>({
      auth: context.auth.props,
      method: HttpMethod.POST,
      path: '/api/v1/notifications/clear',
      operation: 'Clear All Notifications',
      scope: 'write:notifications',
    });
    return { success: true };
  },
});
