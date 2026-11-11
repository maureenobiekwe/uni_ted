import {
  PieceAuth,
  Property,
  createPiece,
} from '@united/pieces-framework';

import { PieceCategory } from '@united/pieces-framework';
import actions from './lib/actions';
import triggers from './lib/triggers';
import { clockodoAuth } from './lib/auth';

export const clockodo = createPiece({
  displayName: 'Clockodo',
  description: 'Time tracking made easy',
  minimumSupportedRelease: '0.30.0',
  logoUrl: 'https://cdn.united.com/pieces/clockodo.png',
  categories: [PieceCategory.PRODUCTIVITY],
  authors: ["JanHolger","kishanprmr","MoShizzle","khaledmashaly","abuaboud"],
  auth: clockodoAuth,
  actions,
  triggers,
});
