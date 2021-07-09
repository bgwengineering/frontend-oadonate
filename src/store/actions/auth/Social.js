import axiosInstance from "util/api";
import { load_user } from './Auth';

import {
  GOOGLE_AUTH_SUCCESS,
  GOOGLE_AUTH_FAIL,
  FACEBOOK_AUTH_SUCCESS,
  FACEBOOK_AUTH_FAIL,
  SHOW_SUCCESS_MESSAGE,
  SHOW_ERROR_MESSAGE
} from "../ActionTypes";
import { setLoading, offLoading } from "store/actions/Common";
export const googleAuthenticate = (state, code) => async (dispatch) => {
    if (state && code && !localStorage.getItem("access")) {
      const config = {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      };
  
      const details = {
        state: state,
        code: code,
      };
  
      const formBody = Object.keys(details)
        .map(
          (key) =>
            encodeURIComponent(key) + "=" + encodeURIComponent(details[key])
        )
        .join("&");
        dispatch(setLoading());
      try {
        const res = await axiosInstance.post(
          `/social/o/google-oauth2/?${formBody}`,
          config
        );
  
        dispatch({
          type: GOOGLE_AUTH_SUCCESS,
          payload: res.data,
        });
        dispatch({ type: SHOW_SUCCESS_MESSAGE, payload: "You've successfully logged in" });
        dispatch(offLoading());
        dispatch(load_user());
      } catch (err) {
        dispatch({
          type: GOOGLE_AUTH_FAIL,
        });
        dispatch(offLoading());
      }
    }
  };
  
  export const facebookAuthenticate = (state, code) => async (dispatch) => {
    if (state && code && !localStorage.getItem("access")) {
      const config = {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      };
  
      const details = {
        state: state,
        code: code,
      };
  
      const formBody = Object.keys(details)
        .map(
          (key) =>
            encodeURIComponent(key) + "=" + encodeURIComponent(details[key])
        )
        .join("&");
      try {
        const res = await axiosInstance.post(
          `/social/o/facebook/?${formBody}`,
          config
        );
  
        dispatch({
          type: FACEBOOK_AUTH_SUCCESS,
          payload: res.data,
        }); 
        dispatch(load_user());
      } catch (err) {
        dispatch({
          type: FACEBOOK_AUTH_FAIL,
        });
      }
    }
  };