import path from 'path';

import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@united/shared': path.resolve(
        __dirname,
        '../../packages/core/shared/src',
      ),
      '@united/pieces-framework': path.resolve(
        __dirname,
        '../../packages/pieces/framework/src',
      ),
      '@united/core-utils': path.resolve(
        __dirname,
        '../../packages/core/utils/src',
      ),
      '@united/core-formula': path.resolve(
        __dirname,
        '../../packages/core/formula/src',
      ),
      '@united/core-piece-types': path.resolve(
        __dirname,
        '../../packages/core/piece-types/src',
      ),
      '@united/core-execution': path.resolve(
        __dirname,
        '../../packages/core/execution/src',
      ),
    },
  },
});
