import * as actionTypes from "../ActionTypes"
import axiosInstance from 'util/api'
import { setLoading, offLoading } from './../Common';
import { stopSubmit, reset } from "redux-form";

export const affiliateSignup = ({first_name, last_name, email, password, affiliate_user_role}) => async(dispatch) => {
    const body = {
      first_name,
      last_name,
      email,
      password,
      affiliate_user_role
    };
     try {
         const res = await axiosInstance.post("auth/users", body);
        dispatch({
          type: actionTypes.CREATE_AFFILIATE_SUCCESS,
          payload: res.data
        });
        dispatch({ type: actionTypes.SHOW_SUCCESS_MESSAGE, payload: "Affiliate Created: Please check your email to verify your account." })
         dispatch(stopSubmit("affiliateSignup"));
         dispatch(reset("affiliateSignup"));
         dispatch(offLoading());
         
    } catch (err) {
        dispatch(setLoading())
         dispatch({ type: actionTypes.CREATE_AFFILIATE_FAIL });
        if (err.response.data) {
            err.response.data.email &&
                err.response.data.email.map(err => {
                    return (
                        dispatch({ type: actionTypes.SHOW_ERROR_MESSAGE, payload: `Email: ${err}` })
                    )
         });
            err.response.data.password &&
                err.response.data.password.map(err => {
                    return dispatch({
                      type: actionTypes.SHOW_ERROR_MESSAGE,
                      payload: `Password: ${err}`
                    });
                });
            err.response.data.first_name &&
                err.response.data.first_name.map((err) => {
                    return dispatch({
                      type: actionTypes.SHOW_ERROR_MESSAGE,
                      payload: `First Name: ${err}`
                    });
                });
            err.response.data.last_name &&
                err.response.data.last_name.map((err) => {
                    return dispatch({
                      type: actionTypes.SHOW_ERROR_MESSAGE,
                      payload: `Last Name: ${err}`
                    });
                });
            err.response.data.affiliate_user_role &&
                err.response.data.affiliate_user_role.map((err) => {
                    return dispatch({
                      type: actionTypes.SHOW_ERROR_MESSAGE,
                        payload: `affiliate role not selected: ${err}`
                    });
                });
        }
        dispatch(offLoading());
         dispatch(stopSubmit("affiliateSignup"));
         dispatch(reset("affiliateSignup"));
    }
};

