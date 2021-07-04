import * as actionTypes from "../ActionTypes";
import axiosInstance from "util/api";
import { setLoading, offLoading } from "./../Common";
import { stopSubmit, reset } from 'redux-form';


export const corporate = ({
         otherAdmin_email,
         otherAdmin_fullname,
         otherAdmin,
         company_role,
         rep_email,
         rep_fullname,
         company_category,
         company_address,
         company_email,
         company_name,
         company_phone,
         state,
         country,
         about_us,
         city,
         company_type
       }) => async dispatch => {
         const formBody = {
           otherAdmin_email,
           otherAdmin_fullname,
           otherAdmin,
           company_role,
           rep_email,
           rep_fullname,
           company_category,
           company_address,
           company_email,
         company_name,
         state,
         country,
         about_us,
         company_phone,
         city,
         company_type
         };

         dispatch(setLoading());
         try {
           const res = await axiosInstance.post("profile/company", formBody);
           dispatch({
             type: actionTypes.CREATE_CORPORATE_SUCCESS,
             payload: res.data
           });
           dispatch(stopSubmit("corporateSignup"));
           dispatch(reset("corporateSignup"));
            dispatch(offLoading());
            dispatch({ type: actionTypes.SHOW_SUCCESS_MESSAGE, payload: "Company Profile Created" });
         } catch (error) {
           dispatch({
             type: actionTypes.CREATE_CORPORATE_FAIL,
             payload: error.message
           });
           dispatch(stopSubmit("corporateSignup"));
           dispatch(reset("corporateSignup"));
           dispatch(offLoading());
           dispatch({ type: actionTypes.SHOW_ERROR_MESSAGE, payload: error.response.message});
         }
       };

