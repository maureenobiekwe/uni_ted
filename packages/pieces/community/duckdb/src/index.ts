import { createPiece, PieceAuth } from '@united/pieces-framework';

import { createAndQueryDB } from './lib/actions/create-and-query-db';
import { duckdbAiActions } from './lib/actions/ai';
import { PieceCategory } from '@united/pieces-framework';

export const duckdb = createPiece({
  displayName: 'DuckDB',
  auth: PieceAuth.None(),
  minimumSupportedRelease: '0.88.2',
  logoUrl: 'https://cdn.united.com/pieces/duckdb.png',
  description: 'Run SQL queries on an in-memory DuckDB database.',
  categories: [PieceCategory.DEVELOPER_TOOLS],
  authors: ['danielpoonwj'],
  actions: [createAndQueryDB, ...duckdbAiActions],
  triggers: [],
});
