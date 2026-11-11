
import { createPiece } from "@united/pieces-framework";
import { hastewireAuth } from "./lib/common/auth";
import { PieceCategory } from '@united/pieces-framework';
import { detectTextAction } from "./lib/actions/detect-text";
import { humanizeTextAction } from "./lib/actions/humanize-text";

export const hastewire = createPiece({
  displayName: "Hastewire",
  auth: hastewireAuth,
  categories: [PieceCategory.ARTIFICIAL_INTELLIGENCE],
  minimumSupportedRelease: '0.36.1',
  logoUrl: "https://cdn.united.com/pieces/hastewire.png",
  authors: ['kishanprmr'],
  actions: [detectTextAction,humanizeTextAction],
  triggers: [],
});
