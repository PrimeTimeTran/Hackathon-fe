import { combineReducers } from "redux";
import ToastReducer from "../Toast/ToastReducer";
import DonationRequestReducer from "../DonationRequest/DonationRequestReducer";
import DonationRequestsReducer from "../DonationRequests/DonationRequestsReducer";
import requestsReducer from "./request.reducers";
import petitionReducer from "./petition.reducers";
import formReducer from "./form.reducers";

export default combineReducers({
  toast: ToastReducer,
  requestDetail: DonationRequestReducer,
  requests: DonationRequestsReducer,
  requestReducer: requestsReducer,
  petition: petitionReducer,
  form: formReducer,
  // TODO: add reducers in here
});
