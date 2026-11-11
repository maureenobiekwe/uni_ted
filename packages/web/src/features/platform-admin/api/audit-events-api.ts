import { SeekPage } from '@united/core-utils';
import { ApplicationEvent, ListAuditEventsRequest } from '@united/shared';

import { api } from '@/lib/api';

export const auditEventsApi = {
  list(request: ListAuditEventsRequest) {
    return api.get<SeekPage<ApplicationEvent>>('/v1/audit-events', request);
  },
};
