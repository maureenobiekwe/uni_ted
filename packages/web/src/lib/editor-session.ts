import { apId } from '@united/core-utils';

const editorSessionId = apId();

export const editorSession = {
  getId: () => editorSessionId,
};
