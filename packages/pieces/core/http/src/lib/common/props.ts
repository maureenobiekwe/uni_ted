import { Property } from '@united/pieces-framework';
import { HttpMethod } from '@united/pieces-common';

const httpMethodDropdownOptions = Object.values(HttpMethod).map((m) => ({
  label: m,
  value: m,
}));

export const httpMethodDropdown = Property.StaticDropdown<HttpMethod>({
  displayName: 'Method',
  description: 'GET reads data, POST creates it.',
  required: true,
  defaultValue: HttpMethod.GET,
  options: { options: httpMethodDropdownOptions },
});
