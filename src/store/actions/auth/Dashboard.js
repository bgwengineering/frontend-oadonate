import axiosInstance from "util/api";
import { tokenConfig } from "util/TokenConfig";
import { stopSubmit, reset } from "redux-form";
import * as actionTypes from "../ActionTypes";
import { setLoading,offLoading } from 'store/actions/Common';


export const personalProfile = (formValues) => async (dispatch, getState) => {
  dispatch(setLoading())
  try {
    const res = await axiosInstance.post("/accounts/profile/personal", { ...formValues }, tokenConfig(getState));
    dispatch({
      type: actionTypes.CREATE_PERSONAL_PROFILE_SUCCESS,
      payload: res.data,
    });
    // dispatch(stopSubmit("personalForm"));
    // dispatch(reset("personalForm"));
    dispatch({ type: actionTypes.SHOW_SUCCESS_MESSAGE, payload: "Personal Profile Created" });
  } catch (err) {
    dispatch({
      type: actionTypes.CREATE_PERSONAL_PROFILE_FAIL,
    });
    // dispatch(stopSubmit("personalForm"));
    // dispatch(reset("personalForm"));
    dispatch({ type: actionTypes.SHOW_ERROR_MESSAGE, payload: err.response.data.detail });
  }
};

// update personal profile
export const updatePersonalProfile = (id, formValues) => async (dispatch, getState) => {
  dispatch(setLoading())
  try {
    const res = await axiosInstance.patch(`/accounts/profile/personal/${id}`, { ...formValues }, tokenConfig(getState));
    dispatch({
      type: actionTypes.UPDATE_PERSONAL_PROFILE_SUCCESS,
      payload: res.data,
    });
    dispatch(stopSubmit("editForm"));
    dispatch(reset("editForm"));
    dispatch({ type: actionTypes.SHOW_SUCCESS_MESSAGE, payload: "Personal Profile updated" });
  } catch (err) {
    dispatch({
      type: actionTypes.UPDATE_PERSONAL_PROFILE_FAIL
    });
    dispatch(stopSubmit("editForm"));
    dispatch(reset("editForm"));
    dispatch({ type: actionTypes.SHOW_ERROR_MESSAGE, payload:err.response.data.detail });
  }
};

// fetch personal profile
export const fetchPersonalProfile = () => async (dispatch, getState) => {
  try {
    const res = await axiosInstance.get("/accounts/profile/personal", tokenConfig(getState));
    dispatch({
      type: actionTypes.FETCH_PERSONAL_PROFILE_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.FETCH_PERSONAL_PROFILE_FAIL,
    });
    dispatch({ type: actionTypes.SHOW_ERROR_MESSAGE, payload: `Detail: ${error.response}` });
  }
};

// create comapny profile
export const companyProfile = (formValues) => async (dispatch, getState) => {
  dispatch(setLoading())
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
    dispatch(stopSubmit("personalForm"));
    dispatch(reset("personalForm"));
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
    dispatch({ type: actionTypes.SHOW_ERROR_MESSAGE, payload: `Detail: ${error.response}` });
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
      type: actionTypes.GET_USER_DONATIONS_FAILED
    });
    dispatch({type: actionTypes.SHOW_ERROR_MESSAGE, payload: `Detail: ${error.response}` });
  }
};



//billing address create
export const saveBillingAddress = (address) => async (dispatch, getState) => {
  dispatch(setLoading())
  try {
    const res = await axiosInstance.post("buy-to-support/billing", { ...address }, tokenConfig(getState));
    dispatch({ type: actionTypes.CREATE_BILLING_ADDRESS_SUCCESS, payload: res.data });
    dispatch(reset("billing"));
    dispatch(stopSubmit("billing"));
  } catch (error) {
    dispatch({ type: actionTypes.CREATE_BILLING_ADDRESS_FAILS, payload: error.message });
    dispatch(offLoading());
    dispatch(reset("billing"));
    dispatch(stopSubmit("billing"));
  }
};

//get single billing address
export const getSingleBillngAddress = (id) => async (dispatch, getState) => {
  try {
    const res = await axiosInstance.get(`buy-to-support/billing/${id}`, tokenConfig(getState));
    dispatch({ type: actionTypes.GET_SINGLE_BILLING_ADDRESS_SUCCESS, payload: { id, res } });
  } catch (error) {
    dispatch({ type: actionTypes.GET_SINGLE_BILLING_ADDRESS_FAILS, payload: error.message });
  }
};

//update billing address
export const updateBillingAddress = (id, address) => async (dispatch, getState) => {
  dispatch(setLoading())
  try {
    const res = await axiosInstance.patch(
      `buy-to-support/billing/${id}`,
      { ...address },
      tokenConfig(getState)
    );
    dispatch({ type: actionTypes.UPDATE_BILLING_ADDRESS_SUCCESS, payload: { id, res } });
  } catch (error) {
    dispatch({ type: actionTypes.UPDATE_BILLING_ADDRESS_FAILS, payload: error.message });
  }
};

// fetch all billing address
export const fetchAddressBook = () => async (dispatch, getState) => {
  try {
    const res = await axiosInstance.get("buy-to-support/billing", tokenConfig(getState));
    dispatch({ type: actionTypes.FETCH_BILLING_ADDRESS_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: actionTypes.FETCH_BILLING_ADDRESS_FAILS, payload: error.message });
  }
};

// create shipping address
export const createShippingAddress = (address) => async (dispatch, getState) => {
  dispatch(setLoading())
  try {
    const res = await axiosInstance.post("buy-to-support/shipping", {...address}, tokenConfig(getState));
    dispatch({ type: actionTypes.CREATE_SHIPPING_ADDRESS_SUCCESS, payload: res.data });
    dispatch(reset("shipping"));
  } catch (error) {
    dispatch({ type: actionTypes.CREATE_SHIPPING_ADDRESS_FAILS, payload: error.message });
    dispatch(offLoading());
    dispatch(stopSubmit("shipping"));
  }
};

//update shipping address
export const updateShippingAddress = (id, address) => async (dispatch, getState) => {
  dispatch(setLoading())
  try {
    const res = await axiosInstance.patch(
      `buy-to-support/shipping/${id}`,
      { ...address },
      tokenConfig(getState)
    );
    dispatch({ type: actionTypes.UPDATE_SHIPPING_ADDRESS_SUCCESS, payload: { id, address } });
  } catch (error) {
    dispatch({ type: actionTypes.UPDATE_SHIPPING_ADDRESS_FAILS, payload: error.message });
  }
};

//get shipping address
export const fetchShippingAddress = () => async (dispatch, getState) => {
  try {
    const res = await axiosInstance.get("buy-to-support/shipping", tokenConfig(getState));
    dispatch({ type: actionTypes.FETCH_SHIPPING_ADDRESS_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: actionTypes.FETCH_SHIPPING_ADDRESS_FAILS, payload: error.message });
  }
};

//get single shipping address
export const singleShippingAddress = (id) => async (dispatch, getState) => {
  try {
    const res = await axiosInstance.get(`buy-to-support/shipping/${id}`, tokenConfig(getState));
    dispatch({ type: actionTypes.GET_SINGLE_SHIPPING_ADDRESS_SUCCESS, payload: { id, res } });
  } catch (error) {
    dispatch({ type: actionTypes.GET_SINGLE_SHIPPING_ADDRESS_FAILS, payload: error.message });
  }
};