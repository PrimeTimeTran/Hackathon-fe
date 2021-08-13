import * as types from "../constants/fund.constants";

const initialState = {};
const fundReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_FUND_REQUEST_REQUEST:
      return state;
    default:
      return state;
  }
};
export default fundReducer;
