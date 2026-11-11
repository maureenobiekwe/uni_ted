
import { createPiece, PieceAuth } from "@united/pieces-framework";
import { query } from "./lib/actions/query";
import { PieceCategory } from "@united/pieces-framework";
    
    export const graphql = createPiece({
      displayName: "GraphQL",
      auth: PieceAuth.None(),
      minimumSupportedRelease: '0.30.0',
      logoUrl: "https://cdn.united.com/pieces/graphql.svg",
      categories:[PieceCategory.CORE],
      authors: ['mahmuthamet'],
      actions: [query],
      triggers: [],
    });
    