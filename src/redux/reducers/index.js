import { combineReducers } from 'redux';
import ToastReducer from '../Toast/ToastReducer';
import DonationRequestReducer from '../DonationRequest/DonationRequestReducer';
import DonationRequestsReducer from '../DonationRequests/DonationRequestsReducer';
import requestsReducer from './request.reducers';
import blogsReducer from './blog.reducer';
import routeReducer from './route.reducer';

export default combineReducers({
	toast: ToastReducer,
	requestDetail: DonationRequestReducer,
	requests: DonationRequestsReducer,
	requestReducer: requestsReducer,
	blog: blogsReducer,
	route: routeReducer,
	// TODO: add reducers in here
});
