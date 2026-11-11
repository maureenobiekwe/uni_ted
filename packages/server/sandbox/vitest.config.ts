import path from 'path'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    pool: 'forks',
    include: [path.resolve(__dirname, 'test/**/*.test.ts').replaceAll(path.sep, '/')],
    exclude: [path.resolve(__dirname, 'test/e2e/**').replaceAll(path.sep, '/')],
  },
  resolve: {
    alias: {
      '@united/ai-providers': path.resolve(__dirname, '../../../packages/core/ai-providers/src/index.ts'),
      '@united/shared': path.resolve(__dirname, '../../../packages/core/shared/src/index.ts'),
      '@united/server-utils': path.resolve(__dirname, '../../../packages/server/utils/src/index.ts'),
      '@united/core-utils': path.resolve(__dirname, '../../../packages/core/utils/src/index.ts'),
    },
  },
})
