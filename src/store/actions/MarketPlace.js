import * as actionTypes from "./ActionTypes"
import axiosInstance  from 'util/api'


<<<<<<< HEAD

=======
>>>>>>> 5ee521180f26cd5a1b7e9c8b021b479ad5ff1dad
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
<<<<<<< HEAD
      const res = await axiosInstance.get(`/buy-to-support/products/${id}/details`);
      const responseD = await res
       console.log(responseD)
       
=======
      const res = await axiosInstance.get(`/buy-to-support/products/${id}/details`);       
>>>>>>> 5ee521180f26cd5a1b7e9c8b021b479ad5ff1dad
      dispatch({type:actionTypes.GET_SINGLE_MARKET_COLLECTIONS_SUCCESS, payload:res.data})
    }catch(error){
      dispatch({type:actionTypes.GET_SINGLE_MARKET_COLLECTIONS_FAIL});
    }
}