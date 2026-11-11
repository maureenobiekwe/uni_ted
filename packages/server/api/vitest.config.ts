import path from 'path'
import { defineConfig } from 'vitest/config'

// Change CWD to repo root for compatibility with piece-loader path resolution
const repoRoot = path.resolve(__dirname, '../../..')
process.chdir(repoRoot)

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    testTimeout: 60000,
    // Every integration file boots a server in beforeAll — seconds locally, but the suites boot in
    // parallel forks and a loaded CI runner has pushed that past a minute. The timeout is here to
    // catch a hang, and two minutes still catches one.
    hookTimeout: 120000,
    pool: 'forks',
    setupFiles: [path.resolve(__dirname, 'vitest.setup.ts')],
    include: [path.resolve(__dirname, 'test/**/*.test.ts').replaceAll(path.sep, '/')],
  },
  resolve: {
    alias: {
      'isolated-vm': path.resolve(__dirname, '__mocks__/isolated-vm.js'),
      '@united/shared': path.resolve(__dirname, '../../../packages/core/shared/src/index.ts'),
      '@united/pieces-framework': path.resolve(__dirname, '../../../packages/pieces/framework/src/index.ts'),
      '@united/pieces-common': path.resolve(__dirname, '../../../packages/pieces/common/src/index.ts'),
      '@united/server-utils': path.resolve(__dirname, '../../../packages/server/utils/src/index.ts'),
      '@united/ai-providers': path.resolve(__dirname, '../../../packages/core/ai-providers/src/index.ts'),

    },
  },
})
