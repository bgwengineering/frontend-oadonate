import * as actionTypes from 'store/actions/ActionTypes'
import { addItemToCart, removeItemFromCart } from 'store/actions/cart/cart.utils'


const INITIAL_STATE = {
    hidden: true,
    cartItems: [],
    checkoutUrl: ""
}

const cart = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            };
         case actionTypes.ADD_ITEM:
             return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            };
        case actionTypes.CLEAR_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(
                    cartItem => cartItem.id !== action.payload.id
                )
            };
        case actionTypes.REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            };
        case actionTypes.PLACE_ORDERS_PAYSTACK_SUCCESS:
            return {
                ...state,
                checkoutUrl: action.payload
            };
        case actionTypes.PLACE_ORDERS_STRIPE_SUCCESS:
        case actionTypes.PLACE_ORDERS_PAYSTACK_CLEAR:
        case actionTypes.CLEAR_CART:
            return {
                ...state,
                cartItems: [],
                checkoutUrl: ""
            };
        default:
            return state;
    }
}

export default cart