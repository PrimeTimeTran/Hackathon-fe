import * as types from "../constants/form.constants";
import api from "../apiService";
import { toast } from "react-toastify";

const addItem = (item) => async (dispatch) => {
  dispatch({ type: types.ADD_ITEM, payload: item });
  dispatch({ type: types.CHANGE_PAGE, payload: "index" });
  try {
    toast.success("New item added!");
  } catch (err) {
    // dispatch({ type: types.CREATE_form_FAILURE, payload: err });
  }
};

const changePage = (toPage) => async (dispatch) => {
  dispatch({ type: types.CHANGE_PAGE, payload: toPage });
};

const changeSubpage = (toPage) => async (dispatch) => {
  dispatch({ type: types.CHANGE_SUBPAGE, payload: toPage });
};

const submitItems = ({ selectedItems, user }) => async (dispatch) => {
  const { phone, firstName, lat, lng, petitionType } = user;
  const postRequest = {
    phone,
    firstName,
    lat,
    lng,
    petitionType,
    itemArray: selectedItems,
  };

  try {
    const res = await api.post("/petitions/new", postRequest);
    dispatch({ type: types.SUBMIT_ITEMS, payload: res.data.data.newPetitions });
  } catch (err) {
    toast.error(err.message);
  }
};
const matchingForm = (user) => async (dispatch) => {
  try {
    const res = await api.get(`/petitions/matching/${user.phone}`);
    const data = res.data.data.newPetitions;
    dispatch({ type: types.MATCHING_FORM, payload: data });
  } catch (err) {
    toast.error(err.message);
  }
};

const getSingleForm = ({ id }) => async (dispatch) => {
  try {
    const res = await api.get(`/form/${id}`);
    const data = res.data.data.form;
    dispatch({ type: types.GET_RECEIVER, payload: data });
  } catch (err) {
    toast.error(err.message);
  }
};

const submitPhone = ({ phone, firstName, lat, lng, petitionType }) => async (
  dispatch
) => {
  try {
    dispatch({
      type: types.POST_PHONE,
      payload: { phone, firstName, lat, lng, petitionType },
    });
  } catch (err) {
    toast.error(err.message);
  }
};

export const formActions = {
  addItem,
  changePage,
  changeSubpage,
  matchingForm,
  getSingleForm,
  submitItems,
  submitPhone,
};
