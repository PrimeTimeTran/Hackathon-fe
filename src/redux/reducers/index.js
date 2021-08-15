import { combineReducers } from "redux";
import ToastReducer from "../Toast/ToastReducer";
import requestsReducer from "./request.reducers";
import petitionReducer from "./petition.reducers";
import formReducer from "./form.reducers";
import mapReducer from "./map.reducer";

export default combineReducers({
  toast: ToastReducer,
  requestReducer: requestsReducer,
  petition: petitionReducer,
  form: formReducer,
  map: mapReducer,
  // TODO: add reducers in here
});
