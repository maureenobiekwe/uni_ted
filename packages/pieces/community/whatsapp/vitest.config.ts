import path from 'path';
import { defineConfig } from 'vitest/config';

const repoRoot = path.resolve(__dirname, '../../../..');

export default defineConfig({
	test: {
		globals: true,
		environment: 'node',
	},
	resolve: {
		alias: {
			'@united/pieces-framework': path.resolve(repoRoot, 'packages/pieces/framework/src/index.ts'),
			'@united/pieces-common': path.resolve(repoRoot, 'packages/pieces/common/src/index.ts'),
		},
	},
});
