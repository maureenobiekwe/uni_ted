import { createPiece, PieceAuth } from '@united/pieces-framework';
import { callFlow } from './lib/actions/call-flow';
import { streamCsvToSubflows } from './lib/actions/stream-csv-to-flow';
import { callableFlow } from './lib/triggers/callable-flow';
import { response } from './lib/actions/respond';
import { PieceCategory } from '@united/pieces-framework';

export const flows = createPiece({
  displayName: 'Sub Flows',
  description: 'Trigger and call another sub flow.',
  auth: PieceAuth.None(),
  minimumSupportedRelease: '0.82.0',
  categories: [PieceCategory.CORE, PieceCategory.FLOW_CONTROL],
  logoUrl: 'https://cdn.united.com/pieces/new-core/subflows.svg',
  authors: ['hazemadelkhalel'],
  actions: [callFlow, streamCsvToSubflows, response],
  triggers: [callableFlow],
});
