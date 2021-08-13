import * as types from "../constants/petition.constants";
import api from "../apiService";

import { toastSuccess, toastFail } from "../Toast/ToastAction";

const receiverRequest =
  (pageNum = 1, limit = 6, query = null, sortBy = null) =>
  async (dispatch) => {
    dispatch({ type: types.GET_RECEIVERS_REQUEST, payload: null });
    try {
      let queryString = "";

      if (query) {
        queryString = `&name[$regex]=${query}&name[$options]=i`;
      }

      let sortByString = "";
      if (sortBy?.key) {
        sortByString = `&sortBy[${sortBy.key}]=${sortBy.ascending}`;
      }

      const res = await api.get(
        `/petitions/receiver?page=${pageNum}&limit=${limit}${queryString}${sortByString}`
      );

      dispatch({ type: types.GET_RECEIVERS_SUCCESS, payload: res.data.data });
    } catch (err) {
      console.log(err);
      dispatch({ type: types.GET_RECEIVERS_FAILURE, payload: err });
    }
  };

const providerRequest =
  (pageNum = 1, limit = 6, query = null, sortBy = null) =>
  async (dispatch) => {
    dispatch({ type: types.GET_PROVIDERS_REQUEST, payload: null });
    try {
      let queryString = "";

      if (query) {
        queryString = `&name[$regex]=${query}&name[$options]=i`;
      }

      let sortByString = "";
      if (sortBy?.key) {
        sortByString = `&sortBy[${sortBy.key}]=${sortBy.ascending}`;
      }

      const res = await api.get(
        `/petitions/provider?page=${pageNum}&limit=${limit}${queryString}${sortByString}`
      );

      dispatch({ type: types.GET_PROVIDERS_SUCCESS, payload: res.data.data });
    } catch (err) {
      console.log(err);
      dispatch({ type: types.GET_PROVIDERS_FAILURE, payload: err });
    }
  };

const getSinglePetition = (petitionId) => async (dispatch) => {
  dispatch({ type: types.GET_SINGLE_RECEIVER_REQUEST, payload: null });
  try {
    const res = await api.get(`/petitions/${petitionId}`);
    dispatch({
      type: types.GET_SINGLE_RECEIVER_SUCCESS,
      payload: res.data.data,
    });
  } catch (err) {
    dispatch({
      type: types.GET_SINGLE_RECEIVER_FAILURE,
      payload: err,
    });
  }
};

export const petitionActions = {
  receiverRequest,
  providerRequest,
  getSinglePetition,
};
