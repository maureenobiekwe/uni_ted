import { createCustomApiCallAction } from '@united/pieces-common';
import { PieceAuth, createPiece } from '@united/pieces-framework';

import { hackernewsAiActions } from './lib/actions/ai';
import { fetchTopStoriesAction } from './lib/actions/fetch-top-stories';
import { hackernewsClient } from './lib/common/client';

export const hackernews = createPiece({
	displayName: 'Hacker News',
	description: 'A social news website',

	minimumSupportedRelease: '0.88.2',
	logoUrl: 'https://cdn.united.com/pieces/hackernews.png',
	auth: PieceAuth.None(),
	categories: [],
	authors: ['kishanprmr', 'AbdulTheunited', 'khaledmashaly', 'abuaboud'],
	actions: [
		fetchTopStoriesAction,
		...hackernewsAiActions,
		createCustomApiCallAction({
			baseUrl: () => hackernewsClient.baseUrl(),
		}),
	],
	triggers: [],
});
