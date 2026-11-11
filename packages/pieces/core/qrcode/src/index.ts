
    import { createPiece, PieceAuth } from "@united/pieces-framework";
    import { PieceCategory } from '@united/pieces-framework';
    import { outputQrcodeAction } from './lib/actions/output-qrcode-action'
    
    export const qrcode = createPiece({
      displayName: 'QR Code',
      description: 'Make QR code images from text or links.',
      auth: PieceAuth.None(),
      minimumSupportedRelease: '0.30.0',
      logoUrl: "https://cdn.united.com/pieces/new-core/qrcode.svg",
      categories: [PieceCategory.CORE],
      authors: ['Meng-Yuan Huang'],
      actions: [
        outputQrcodeAction,
      ],
      triggers: [],
    });
    