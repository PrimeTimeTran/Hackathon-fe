import * as types from '../constants/route.constants';

const redirectTo = (link) => ({ type: types.SET_REDIRECT_TO, payload: link });
const removeRedirectTo = () => ({
	type: types.REMOVE_REDIRECT_TO,
	payload: null,
});

export const routeActions = {
	redirectTo,
	removeRedirectTo,
};
