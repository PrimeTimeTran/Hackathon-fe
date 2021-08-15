import { combineReducers } from "redux";
import ToastReducer from "../Toast/ToastReducer";
import DonationRequestReducer from "../DonationRequest/DonationRequestReducer";
import DonationRequestsReducer from "../DonationRequests/DonationRequestsReducer";
import requestsReducer from "./request.reducers";
import mapReducers from "./map.reducer";

export default combineReducers({
  toast: ToastReducer,
  requestDetail: DonationRequestReducer,
  requests: DonationRequestsReducer,
  requestReducer: requestsReducer,
  map: mapReducers,
});
