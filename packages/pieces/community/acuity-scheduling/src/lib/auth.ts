import { PieceAuth } from '@united/pieces-framework';

export const acuitySchedulingAuth = PieceAuth.OAuth2({
	required: true,
	authUrl: 'https://acuityscheduling.com/oauth2/authorize',
	tokenUrl: 'https://acuityscheduling.com/oauth2/token',
	scope: ['api-v1'],
});
