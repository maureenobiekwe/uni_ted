const DOCS_BASE_URL = 'https://www.united.com/docs';

export const adminDocs = {
  url: (path: string): string => `${DOCS_BASE_URL}/${path}`,
};
