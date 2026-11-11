import { createCustomApiCallAction } from '@united/pieces-common';
import { createPiece } from '@united/pieces-framework';
import { PieceCategory } from '@united/pieces-framework';
import { createEventAction } from './lib/actions/create-event';
import { deleteEventAction } from './lib/actions/delete-event';
import { listEventsAction } from './lib/actions/list-events';
import { outlookCalendarAiActions } from './lib/actions/ai';
import { outlookCalendarAuth } from './lib/auth';
import { outlookCalendarClient } from './lib/common/client';

export const microsoftOutlookCalendar = createPiece({
  displayName: 'Microsoft Outlook Calendar',
  description: 'Calendar software by Microsoft',
  auth: outlookCalendarAuth,
  minimumSupportedRelease: '0.88.2',
  logoUrl: 'https://cdn.activepieces.com/pieces/microsoft-outlook.png',
  categories: [PieceCategory.PRODUCTIVITY],
  authors: ['antonyvigouret'],
  actions: [
    createEventAction,
    deleteEventAction,
    listEventsAction,
    ...outlookCalendarAiActions,
    createCustomApiCallAction({
      auth: outlookCalendarAuth,
      baseUrl: (auth) => (auth ? outlookCalendarClient.baseUrl({ auth }) : ''),
      authMapping: async (auth) => ({
        Authorization: `Bearer ${auth.access_token}`,
      }),
    }),
  ],
  triggers: [],
});
