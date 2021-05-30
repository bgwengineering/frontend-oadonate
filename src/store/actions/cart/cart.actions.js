import * as actionTypes from "../ActionTypes"
import axios from '../../../util/api';
import {tokenConfig} from '../../../util/TokenConfig'
import _ from "lodash";
import { setLoading,offLoading } from 'store/actions/Common';
import axiosInstance from "../../../util/api";


export const toggleCartHidden = () => ({
    type:actionTypes.TOGGLE_CART_HIDDEN 
})

export const addItem = item => ({
    type:actionTypes.ADD_ITEM,
    payload:item
})

export const clearItemFromCart = item => ({
    type:actionTypes.CLEAR_ITEM_FROM_CART,
    payload:item
})

export const removeItem = item => ({
    type:actionTypes.REMOVE_ITEM,
    payload:item
})

export const clearCartItems  = () =>{
  return {
    type:actionTypes.CLEAR_CART}
}
export const placeOrder = (orders) => async (dispatch, getState) => {
    const totalPrice = orders.totalPrice
    let productsArr = [];
    let quantitiesArr = [];
    orders.orderItem.forEach(items => {
      productsArr.push(items.donate_item_name);
      console.log(productsArr);
      quantitiesArr.push(items.quantity);
      console.log(quantitiesArr);
      });
      dispatch(setLoading())
    try {
      const { data } = await axios.post(
        "buy-to-support/orders",
        {
          products: productsArr,
          quantities: quantitiesArr,
          total_price: totalPrice,
          ordered: true,
          payment_method:orders.payment_method,
          delivery_method: orders.delivery_method    
        },
        tokenConfig(getState)
      );
      dispatch({ type: actionTypes.PLACE_ORDERS_PAYSTACK_SUCCESS, payload: data });
      dispatch(clearCartItems());
    } catch (error) {
      dispatch({ type: actionTypes.PLACE_ORDERS_PAYSTACK_FAIL });
    }
  };
  
