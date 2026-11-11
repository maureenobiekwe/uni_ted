import { Property } from '@united/pieces-framework';
import { HttpMethod } from '@united/pieces-common';

const httpMethodDropdownOptions = Object.values(HttpMethod).map((m) => ({
  label: m,
  value: m,
}));

export const httpMethodDropdown = Property.StaticDropdown<HttpMethod>({
  displayName: 'Method',
  required: true,
  options: { options: httpMethodDropdownOptions },
  defaultValue: HttpMethod.POST,
});
