import * as types from "../constants/petition.constants";

const initialState = {
  recivers: [],
  providers: [],
  totalPageNum: 1,
  selectedPetition: null,
  loading: false,
};

const petitionReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_RECEIVERS_REQUEST:
    case types.GET_PROVIDERS_REQUEST:
    case types.GET_SINGLE_RECEIVER_REQUEST:
      return { ...state, loading: true };

    case types.GET_RECEIVERS_SUCCESS:
      return {
        ...state,
        recivers: payload,
        totalPageNum: payload,
        loading: false,
      };

    case types.GET_PROVIDERS_SUCCESS:
      return {
        ...state,
        providers: payload,
        totalPageNum: payload,
        loading: false,
      };
    case types.GET_SINGLE_RECEIVER_SUCCESS:
      return {
        ...state,
        selectedPetition: payload,
        loading: false,
      };

    case types.GET_RECEIVERS_FAILURE:
    case types.GET_SINGLE_RECEIVER_FAILURE:
    case types.GET_PROVIDERS_FAILURE:
      return { ...state, loading: false };

    default:
      return state;
  }
};
export default petitionReducer;
