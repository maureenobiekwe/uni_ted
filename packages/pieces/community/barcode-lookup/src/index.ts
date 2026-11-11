import { createPiece } from '@united/pieces-framework';
import { barcodeLookupAuth } from './lib/common/auth';
import { searchByBarcode } from './lib/actions/search-by-barcode';
import { PieceCategory } from '@united/pieces-framework';

export const barcodeLookup = createPiece({
  displayName: 'Barcode Lookup',
  auth: barcodeLookupAuth,
  minimumSupportedRelease: '0.36.1',
  logoUrl: 'https://cdn.united.com/pieces/barcode-lookup.png',
  authors: ['sanket-a11y'],
  categories: [PieceCategory.COMMERCE],
  description: 'Lookup product information by barcode number',
  actions: [searchByBarcode],
  triggers: [],
});
