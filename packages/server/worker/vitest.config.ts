import path from 'path'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    pool: 'forks',
    include: [path.resolve(__dirname, 'test/**/*.test.ts')],
    exclude: [path.resolve(__dirname, 'test/e2e/**')],
    setupFiles: [path.resolve(__dirname, 'vitest.setup.ts')],
  },
  resolve: {
    alias: {
      '@united/ai-providers': path.resolve(__dirname, '../../../packages/core/ai-providers/src/index.ts'),
      '@united/shared': path.resolve(__dirname, '../../../packages/core/shared/src/index.ts'),
      '@united/pieces-framework': path.resolve(__dirname, '../../../packages/pieces/framework/src/index.ts'),
      '@united/server-utils': path.resolve(__dirname, '../../../packages/server/utils/src/index.ts'),
    },
  },
})
