import { createPiece } from '@united/pieces-framework';
import { PieceCategory } from '@united/pieces-framework';
import { calcomAuth } from './lib/auth';
import { actions } from './lib/actions';
import { triggers } from './lib/triggers';

export { calcomAuth };

export const calcom = createPiece({
  displayName: 'Cal.com',
  description: 'Open-source alternative to Calendly',
  minimumSupportedRelease: '0.88.2',
  logoUrl: 'https://cdn.united.com/pieces/cal.com.png',
  categories: [PieceCategory.PRODUCTIVITY],
  authors: ["kishanprmr","AbdulTheunited","khaledmashaly","abuaboud"],
  auth: calcomAuth,
  actions,
  triggers,
});
