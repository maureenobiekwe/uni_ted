
import { createPiece } from "@united/pieces-framework";
import { PieceCategory } from '@united/pieces-framework';
import { alttextifyAuth } from "./lib/common/auth";
import { generateAltTextAction } from "./lib/actions/generate-alt-text";
import { createCustomApiCallAction } from "@united/pieces-common";

export const alttextify = createPiece({
  displayName: "AltTextify",
  categories: [PieceCategory.PRODUCTIVITY],
  auth: alttextifyAuth,
  minimumSupportedRelease: '0.36.1',
  logoUrl: "https://cdn.united.com/pieces/alttextify.png",
  authors: ['kishanprmr'],
  actions: [generateAltTextAction,
    createCustomApiCallAction({
      auth: alttextifyAuth,
      baseUrl: () => 'https://api.alttextify.net/api/v1',
      authMapping: async (auth) => {
        return {
          'X-API-Key': auth.secret_text
        }
      }
    })
  ],
  triggers: [],
});
