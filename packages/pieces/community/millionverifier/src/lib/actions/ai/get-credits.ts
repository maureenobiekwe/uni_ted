import { createAction } from '@united/pieces-framework';
import { HttpMethod } from '@united/pieces-common';
import { millionVerifierAuth } from '../../auth';
import { millionVerifierClient } from '../../common/client';
import type { MillionVerifierCredits } from '../../common/types';
import { millionverifierGetCreditsOutputSchema } from '../../output-schemas';

export const getCreditsAction = createAction({
  auth: millionVerifierAuth,
  name: 'millionverifier_get_credits',
  outputSchema: millionverifierGetCreditsOutputSchema,
  displayName: 'Get Credits',
  description: 'Returns the account\'s remaining verification credits.',
  audience: 'ai',
  classification: 'READ',
  aiMetadata: {
    description: 'Returns the account\'s remaining verification credits. Check it before Upload Emails for Bulk Verification, which spends one credit per unique email.',
    idempotent: true,
  },
  props: {},
  async run(context) {
    return await millionVerifierClient.requestOrThrow<MillionVerifierCredits>({
      auth: context.auth,
      method: HttpMethod.GET,
      path: '/credits',
    });
  },
});
