import * as actionTypes from "../ActionTypes"
import axios from '../../../util/api';
import {tokenConfig} from '../../../util/TokenConfig'
import _ from "lodash";
import { setLoading } from 'store/actions/Common';


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


export const placeOrder = (items) => async (dispatch, getState) => {
    let totalPrice = 0;
    let productsArr = [];
    let quantitiesArr = [];
  
    _.forEach(items, (element) => {
      totalPrice += element.product.price * element.quantity;
      productsArr.push(element.product.item);
      console.log(productsArr);
      quantitiesArr.push(element.quantity);
      });
      dispatch(setLoading())
    try {
      const { data } = await axios.post(
        "/api/orders",
        {
          products: productsArr,
          quantities: quantitiesArr,
          total_price: totalPrice.toFixed(2),
          ordered: true,
        },
        tokenConfig(getState)
      );
      dispatch({ type: actionTypes.PLACE_ORDERS_SUCCESS, payload: data });
      dispatch(clearItemFromCart())
    } catch (error) {
      dispatch({ type: actionTypes.PLACE_ORDER_FAILS });
    }
  };
  
  