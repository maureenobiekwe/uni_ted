import { PieceAuth, createPiece } from '@united/pieces-framework';
import { PieceCategory } from '@united/pieces-framework';
import { readConnection } from './lib/actions/read-connection';

export const connections = createPiece({
  displayName: 'Connections',
  description: "Look up a connection's credentials while the flow runs",
  minimumSupportedRelease: '0.36.1',
  logoUrl: 'https://cdn.united.com/pieces/new-core/connections.svg',
  categories: [PieceCategory.CORE],
  auth: PieceAuth.None(),
  authors: ["kishanprmr","AbdulTheunited","khaledmashaly","abuaboud"],
  actions: [readConnection],
  triggers: [],
});
