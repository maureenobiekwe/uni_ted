import { PieceAuth, createPiece } from '@united/pieces-framework';
import { PieceCategory } from '@united/pieces-framework';
import { convertJsonToXml } from './lib/actions/convert-json-to-xml';
import { convertXmlToJson } from './lib/actions/convert-xml-to-json';
import { createXml } from './lib/actions/create-xml';

export const xml = createPiece({
  displayName: 'XML',
  description: 'Extensible Markup Language for storing and transporting data',

  minimumSupportedRelease: '0.30.0',
  logoUrl: 'https://cdn.united.com/pieces/xml.png',
  categories: [PieceCategory.CORE],
  auth: PieceAuth.None(),
  authors: ["Willianwg","kishanprmr","AbdulTheunited","khaledmashaly","abuaboud"],
  actions: [convertJsonToXml, convertXmlToJson, createXml],
  triggers: [],
});
