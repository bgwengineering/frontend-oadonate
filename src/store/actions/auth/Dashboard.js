import axiosInstance from "util/api";
import { tokenConfig } from "util/TokenConfig";
import { stopSubmit, reset } from "redux-form";
import * as actionTypes from "../ActionTypes";
import { setLoading, offLoading } from "store/actions/Common";



// fetch personal profile
export const fetchPersonalProfile = () => async (dispatch, getState) => {
  try {
    const res = await axiosInstance.get("accounts/profile/personal", tokenConfig(getState));
    dispatch({ type: actionTypes.FETCH_PERSONAL_PROFILE_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: actionTypes.FETCH_PERSONAL_PROFILE_FAIL, payload: error.message });
  }
};
// fetch single personal profile
export const singlePersonalProfile = (id) => async (dispatch, getState) => {
  try {
    const res = await axiosInstance.get(`/accounts/profile/personal/${id}`, tokenConfig(getState));
    dispatch({
      type: actionTypes.GET_SINGLE_PERSONAL_PROFILE_SUCCESS,
      payload: {id, res},
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_SINGLE_PERSONAL_PROFILE_FAIL,
    });
  }
};

// create comapny profile
export const companyProfile = (formValues) => async (dispatch, getState) => {
  dispatch(setLoading());
  try {
    const res = await axiosInstance.post(
      "accounts/profile/company",
      { ...formValues },
      tokenConfig(getState)
    );
    dispatch({
      type: actionTypes.CREATE_COMPANY_PROFILE_SUCCESS,
      payload: res.data,
    });
    dispatch(stopSubmit("Form"));
    dispatch(reset("Form"));
    dispatch({ type: actionTypes.SHOW_SUCCESS_MESSAGE, payload: "Company Profile Created" });
  } catch (err) {
    dispatch({
      type: actionTypes.CREATE_COMPANY_PROFILE_FAIL,
    });
    dispatch(stopSubmit("companyForm"));
    dispatch(reset("companyForm"));
    dispatch({ type: actionTypes.SHOW_ERROR_MESSAGE, payload: err.response.data.detail });
  }
};

// fetch company profile
export const fetchCompanyProfile = () => async (dispatch, getState) => {
  try {
    const res = await axiosInstance.get("/accounts/profile/company", tokenConfig(getState));
    dispatch({
      type: actionTypes.FETCH_COMPANY_PROFILE_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.FETCH_COMPANY_PROFILE_FAIL,
    });
  }
};

// fetch user donations received
export const fetchUserDonationsReceived = () => async (dispatch, getState) => {
  try {
    const res = await axiosInstance.get("/accounts/user/fundraised", tokenConfig(getState));
    dispatch({
      type: actionTypes.GET_USER_DONATIONS_RECEIVED,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_USER_DONATIONS_FAILED,
    });
    dispatch({ type: actionTypes.SHOW_ERROR_MESSAGE, payload: `Detail: ${error.response}` });
  }
};



// create shipping address
export const createShippingAddress = (address) => async (dispatch, getState) => {
  dispatch(setLoading());
  try {
    const res = await axiosInstance.post(
      "buy-to-support/shipping",
      { ...address },
      tokenConfig(getState)
    );
    dispatch({ type: actionTypes.CREATE_SHIPPING_ADDRESS_SUCCESS, payload: res.data });
    dispatch(reset("shipping"));
    dispatch(stopSubmit("shipping"));
    dispatch(offLoading());
    dispatch({ type: actionTypes.SHOW_SUCCESS_MESSAGE, payload: "Shipping Address Created!" });
  } catch (error) {
    dispatch({ type: actionTypes.CREATE_SHIPPING_ADDRESS_FAIL });
    dispatch(stopSubmit("shipping"));
    dispatch(reset("shipping"));
    dispatch({ type: actionTypes.SHOW_ERROR_MESSAGE, payload: "Shipping Address Fail!" });
    setTimeout(() => {
      dispatch(offLoading());
    }, 5000);
  }
};

//update shipping address
export const updateShippingAddress = (id, address) => async (dispatch, getState) => {
  dispatch(setLoading());
  try {
    const res = await axiosInstance.patch(
      `buy-to-support/shipping/${id}`,
      { ...address },
      tokenConfig(getState)
    );
    dispatch({ type: actionTypes.UPDATE_SHIPPING_ADDRESS_SUCCESS, payload: res.data });
    dispatch(reset("editshipping"));
    dispatch(stopSubmit("editshipping"));
    dispatch(offLoading());
    dispatch({ type: actionTypes.SHOW_SUCCESS_MESSAGE, payload: "Shipping Address Updated!" });
  } catch (error) {
    dispatch({ type: actionTypes.UPDATE_SHIPPING_ADDRESS_FAIL });
    dispatch(stopSubmit("editshipping"));
    dispatch(reset("editshipping"));
    dispatch({ type: actionTypes.SHOW_ERROR_MESSAGE, payload: "Shipping Address Fail!" });
    setTimeout(() => {
      dispatch(offLoading());
    }, 5000);
  }
};
export const updateShippingAddressCheckout = (id, address) => async (dispatch, getState) => {
  dispatch(setLoading());
  try {
    const res = await axiosInstance.patch(
      `buy-to-support/shipping/${id}`,
      { ...address },
      tokenConfig(getState)
    );
    dispatch({ type: actionTypes.UPDATE_SHIPPING_ADDRESS_SUCCESS, payload: res.data });
    dispatch(reset("editshipping"));
    dispatch(stopSubmit("editshipping"));
    dispatch(offLoading());
  } catch (error) {
    dispatch({ type: actionTypes.UPDATE_SHIPPING_ADDRESS_FAIL });
    dispatch(stopSubmit("editshipping"));
    dispatch(reset("editshipping"));
    setTimeout(() => {
      dispatch(offLoading());
    }, 5000);
  }
};

//get shipping address
export const fetchShippingAddress = () => async (dispatch, getState) => {
  try {
    const res = await axiosInstance.get("buy-to-support/shipping", tokenConfig(getState));
    dispatch({ type: actionTypes.FETCH_SHIPPING_ADDRESS_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: actionTypes.FETCH_SHIPPING_ADDRESS_FAIL, payload: error.message });
  }
};

//get single shipping address
export const singleShippingAddress = (id) => async (dispatch, getState) => {
  try {
    const res = await axiosInstance.get(`buy-to-support/shipping/${id}`, tokenConfig(getState));
    dispatch({ type: actionTypes.GET_SINGLE_SHIPPING_ADDRESS_SUCCESS, payload: { id, res } });
  } catch (error) {
    dispatch({ type: actionTypes.GET_SINGLE_SHIPPING_ADDRESS_FAIL, payload: error.message });
  }
};
