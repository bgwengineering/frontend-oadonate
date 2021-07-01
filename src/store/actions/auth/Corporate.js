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
         address,
         email,
         company_name,
         state
       }) => async dispatch => {
         const formBody = {
           otherAdmin_email,
           otherAdmin_fullname,
           otherAdmin,
           company_role,
           rep_email,
           rep_fullname,
           company_category,
           address,
           email,
           company_name,
           state
         };

         dispatch(setLoading());
         try {
           const res = await axiosInstance.post("https://ogadonate.com.ng/api/", formBody);
           dispatch({
             type: actionTypes.CREATE_CORPORATE_SUCCESS,
             payload: res.data
           });
         } catch (error) {
           dispatch({
             type: actionTypes.CREATE_CORPORATE_FAIL,
             payload: error.message
           });
           dispatch(offLoading());
           dispatch(stopSubmit("corporateSignup"));
           dispatch(reset("corporateSignup"));
         }
       };

