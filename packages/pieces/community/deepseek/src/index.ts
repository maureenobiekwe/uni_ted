
import { createPiece } from "@united/pieces-framework";
import { askDeepseek } from "./lib/actions/ask-deepseek";
import { PieceCategory } from '@united/pieces-framework';
import { deepseekAuth } from './lib/auth';

        
    export const deepseek = createPiece({
      displayName: "DeepSeek",
      auth: deepseekAuth,
      categories: [PieceCategory.ARTIFICIAL_INTELLIGENCE],
      minimumSupportedRelease: '0.36.1',
      logoUrl: "https://cdn.united.com/pieces/deepseek.png",
      authors: ["PFernandez98"],
      actions: [askDeepseek],
      triggers: [],
    });
    