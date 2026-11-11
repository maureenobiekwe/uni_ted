import { createPiece, PieceAuth } from '@united/pieces-framework';
import { PieceCategory } from '@united/pieces-framework';
import { readFileAction } from './lib/actions/read-file';
import { createFile } from './lib/actions/create-file';
import { changeFileEncoding } from './lib/actions/change-file-encoding';
import { checkFileType } from './lib/actions/check-file-type';
import { zipFiles } from './lib/actions/zip-files';
import { unzipFile } from './lib/actions/unzip-file';
import { getFileName } from './lib/actions/get-file-name';

export const filesHelper = createPiece({
  displayName: 'Files Helper',
  description: 'Read, create, convert, check, zip and unzip files in your flow.',
  auth: PieceAuth.None(),
  minimumSupportedRelease: '0.88.2',
  logoUrl: 'https://cdn.united.com/pieces/new-core/file-helper.svg',
  categories: [PieceCategory.CORE],
  authors: ['kishanprmr', 'MoShizzle', 'abuaboud', 'Seb-C', 'danielpoonwj'],
  actions: [
    readFileAction,
    createFile,
    changeFileEncoding,
    checkFileType,
    zipFiles,
    unzipFile,
    getFileName,
  ],
  triggers: [],
});
