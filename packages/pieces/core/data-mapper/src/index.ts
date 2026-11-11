import { PieceAuth, createPiece } from '@united/pieces-framework';
import { PieceCategory } from '@united/pieces-framework';
import { advancedMapping } from './lib/actions/advanced-mapping';

export const dataMapper = createPiece({
  displayName: 'Data Mapper',
  description: 'tools to manipulate data structure',

  minimumSupportedRelease: '0.30.0',
  logoUrl: 'https://cdn.united.com/pieces/new-core/data-mapper.svg',
  auth: PieceAuth.None(),
  categories: [PieceCategory.CORE],
  authors: ["kishanprmr","MoShizzle","AbdulTheunited","khaledmashaly","abuaboud"],
  actions: [advancedMapping],
  triggers: [],
});
