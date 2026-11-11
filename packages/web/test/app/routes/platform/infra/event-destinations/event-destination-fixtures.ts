import {
  ApplicationEventName,
  EventDestinationFormat,
  EventDestinationScope,
} from '@united/shared';
import type { EventDestination } from '@united/shared';

export function makeDestination(
  overrides: Partial<Omit<EventDestination, 'scope'>> = {},
): EventDestination {
  return {
    id: 'dest1',
    created: '2026-01-01T00:00:00.000Z',
    updated: '2026-01-01T00:00:00.000Z',
    platformId: 'platform1',
    scope: EventDestinationScope.PLATFORM,
    events: [ApplicationEventName.FLOW_CREATED],
    url: 'https://example.com/hook',
    enabled: true,
    headers: {},
    format: EventDestinationFormat.RAW,
    ...overrides,
  };
}
