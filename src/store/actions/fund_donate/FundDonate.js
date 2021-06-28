import axiosInstance  from 'util/api'
import { tokenConfig } from 'util/TokenConfig';
import * as actionTypes from '../ActionTypes';
import { setLoading,offLoading } from './../Common';


export const raiseCashFund = (formValues) => async(dispatch, getState) => {
  dispatch(setLoading());
  try{
    const res = await axiosInstance.post('campaign/create/fundraise-cash', {...formValues}, tokenConfig(getState));
    dispatch({type: actionTypes.CREATE_FUND_CASH_SUCCESS, payload:res.data})
    dispatch(offLoading());
    dispatch({type:actionTypes.SHOW_SUCCESS_MESSAGE, payload:"Fund Created"})
  }catch(error){
    dispatch(setLoading());
    dispatch({type:actionTypes.CREATE_FUND_CASH_FAIL})
    dispatch({type:actionTypes.SHOW_ERROR_MESSAGE, payload:error.message})
    dispatch(offLoading());
  }
}

//  FUND CREATE AND FETCH
export const getfundCashCampaigns = () => async(dispatch,getState) =>{
   try{
     const res = await axiosInstance.get('campaign/create/fundraise-cash', tokenConfig(getState))
     dispatch({type:  actionTypes.FETCH_FUND_CASH_SUCCESS, payload:res.data})
   }catch(error){
     dispatch({type: actionTypes.FETCH_FUND_CASH_FAIL})
   }
}


// GET FUNDRAISE  ITEM
export const getfundITEMCampaigns = () => async(dispatch,getState) =>{
   try{
     const res = await axiosInstance.get('campaign/create/fundraise-item', tokenConfig(getState))
     dispatch({type:  actionTypes.FETCH_FUND_ITEM_SUCCESS, payload:res.data})
   }catch(error){
     dispatch({type: actionTypes.FETCH_FUND_ITEM_FAIL})
   }
}

// DONATE CASH TO ITEM OR CASH FUND
export const donateToCash = (formValues) => async (dispatch, getState) => {
  dispatch(setLoading());
    try {
        const res = await axiosInstance.post("campaign/create/donation-cash", {...formValues}, tokenConfig(getState));
        dispatch({type: actionTypes.CREATE_DONATION_CASH_SUCCESS, payload: res.data});
    } catch (error) {
      dispatch({ type: actionTypes.CREATE_DONATION_CASH_FAIL });
      dispatch(offLoading());
        dispatch({type:actionTypes.SHOW_ERROR_MESSAGE, payload:error})
    }
}

// map error to donate to cash

// GET DONATE TO CASH
export const getdonateToCash = () => async(dispatch, getState) => {
    try{
      const res = await axiosInstance.get('campaign/create/donation-cash', tokenConfig(getState))
      dispatch({type:actionTypes.FETCH_DONATION_CASH_SUCCESS, payload:res.data})
    }catch(error){
      dispatch({type: actionTypes.FETCH_DONATION_CASH_FAIL})
      // dispatch({type:actionTypes.SHOW_ERROR_MESSAGE, payload:error.response.message})
    }
 }

// GET DONATE TO ITEM
export const getdonateToItem = () => async(dispatch, getState) =>{
    try{
      const res = await axiosInstance.get('campaign/create/donation-item', tokenConfig(getState))
      dispatch({type:actionTypes.FETCH_DONATION_ITEM_SUCCESS, payload:res.data})
    }catch(error){
      dispatch({type: actionTypes.FETCH_DONATION_ITEM_FAIL})
      // dispatch({type:actionTypes.SHOW_ERROR_MESSAGE, payload:"500: Internal Server Error"})
    }
 }



//POST DONATE CASH TO OGADONATE
export const donateCashToOga = (formValues) => async(dispatch, getState) => {
  dispatch(setLoading());
  try{
    const res = await axiosInstance.post('admin/donate/donate-cash', {...formValues}, tokenConfig(getState));
    dispatch({type: actionTypes.CREATE_CASH_DONATION_OGAFUND_SUCCESS, payload:res.data})
    dispatch({type:actionTypes.SHOW_SUCCESS_MESSAGE, payload:"successfully donated to ogadonate"})
    dispatch(offLoading());
    }catch(error){
      dispatch({type:actionTypes.CREATE_CASH_DONATION_OGAFUND_FAIL})
      dispatch({type:actionTypes.SHOW_ERROR_MESSAGE, payload:error.message})
      dispatch(offLoading());
  }
}


//GET DONATE CASH TO OGADONATE
export const getdonateCashToOga = () => async(dispatch, getState) => {
  try{
    const res = await axiosInstance.post('/admin/donate/donate-cash', tokenConfig(getState));
    dispatch({type: actionTypes.CREATE_CASH_DONATION_OGAFUND_SUCCESS, payload:res.data})
    dispatch({type:actionTypes.SHOW_SUCCESS_MESSAGE, payload:"successfully donated to ogadonate"})
   }catch(error){
      dispatch({type:actionTypes.CREATE_CASH_DONATION_OGAFUND_FAIL})
      dispatch({type:actionTypes.SHOW_ERROR_MESSAGE, payload:error})
  }
}

//GET DONATE ITEM TO OGADONATE
export const getdonateItemToOga = () => async(dispatch, getState) => {
  try{
    const res = await axiosInstance.post('/admin/donate/donate-item', tokenConfig(getState));
    dispatch({type: actionTypes.CREATE_ITEM_DONATION_OGAFUND_SUCCESS, payload:res.data})
    dispatch({type:actionTypes.SHOW_SUCCESS_MESSAGE, payload:"successfully donated to ogadonate"})
   }catch(error){
      dispatch({type:actionTypes.CREATE_ITEM_DONATION_OGAFUND_FAIL})
    dispatch({ type: actionTypes.SHOW_ERROR_MESSAGE, payload: error })
    
    
  }
}

// FETCH ALL & SINGLE CAMPAIGNS
export const fetchAllCampaign = () => async(dispatch) =>{
    try {
        const res = await axiosInstance.get("campaign/fundraise");
        dispatch({type: actionTypes.GET_ALL_CAMPAIGN_SUCCESS, payload: res.data});
    } catch (error) {
        dispatch({type:actionTypes.GET_ALL_CAMPAIGN_FAIL});
        // dispatch({type:actionTypes.SHOW_ERROR_MESSAGE, payload:"500: Internal Server Error"})
    }
}

export const fetchSingleCampaign = (id) => async(dispatch) =>{
    try {
        const res = await axiosInstance.get(`campaign/fundraise/${id}/details`);
        dispatch({type: actionTypes.GET_SINGLE_CAMPAIGN_SUCCESS, payload: res.data});
    } catch (error) {
        dispatch({type:actionTypes.GET_SINGLE_CAMPAIGN_FAIL});
        // dispatch({type:actionTypes.SHOW_ERROR_MESSAGE, payload:"500: Internal Server Error"})
    }
}