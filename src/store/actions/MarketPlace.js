import * as actionTypes from "./ActionTypes"
import axiosInstance  from 'util/api'



export const updateMarketCollections = () => async(dispatch) => {
    try{
      const res = await axiosInstance.get('/buy-to-support/products');
       dispatch({type:actionTypes.UPDATE_MARKET_COLLECTIONS, payload:res.data})
    }catch(error){
      dispatch({type:actionTypes.UPDATE_MARKET_COLLECTIONS_FAIL, payload:error.message})
    }
}

export const getSingleMarketProductItem = id => async(dispatch) => {
    try{
      const res = await axiosInstance.get(`/buy-to-support/products/${id}/details`);
      const responseD = await res
       console.log(responseD)
       
      dispatch({type:actionTypes.GET_SINGLE_MARKET_COLLECTIONS_SUCCESS, payload:res.data})
    }catch(error){
      dispatch({type:actionTypes.GET_SINGLE_MARKET_COLLECTIONS_FAIL});
    }
}