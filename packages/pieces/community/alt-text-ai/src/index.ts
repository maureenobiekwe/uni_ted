
    import { createPiece } from "@united/pieces-framework";
import { generateAltTextAction } from "./lib/actions/generate-alt-text";
import { createCustomApiCallAction } from "@united/pieces-common";
import { altTextAiAuth } from "./lib/common/auth";
import { BASE_URL } from "./lib/common/constants";
import { PieceCategory } from '@united/pieces-framework';

    export const altTextAi = createPiece({
      displayName: "AltText.ai",
      categories:[PieceCategory.ARTIFICIAL_INTELLIGENCE],
      auth: altTextAiAuth,
      minimumSupportedRelease: '0.36.1',
      logoUrl: "https://cdn.united.com/pieces/alt-text-ai.png",
      authors: ['kishanprmr'],
      actions: [generateAltTextAction,
        createCustomApiCallAction({
          auth:altTextAiAuth,
          baseUrl:()=>BASE_URL,
          authMapping:async (auth)=>{
            return{
              'X-API-Key':auth.secret_text
            }
          }
        })
      ],
      triggers: [],
    });
    