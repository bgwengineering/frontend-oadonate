import React from "react";
import { Link } from "react-router-dom";
import CheckoutItem from "components/cart/CheckoutItem";
import { useSelector } from "react-redux";
import CheckoutForm from './CheckoutPage';
var numeral = require('numeral')

const CartPage = () => {
  const cartItemState = useSelector(state => state.cartReducer);
  const { cartItems } = cartItemState;


  let mapTotal = cartItems.reduce(
    (accumulatedQuantity, cartItem) =>
      accumulatedQuantity + cartItem.quantity * cartItem.donate_mkt_price,
    0
  );

  let formatTotal = numeral(mapTotal).format("0,0.00");
  console.log(typeof (formatTotal));
  // let total = 0;
  let total = formatTotal
  const currency = cartItems.map(cartItem => cartItem.donate_currency)

  return (
    <div className="cart-page">
      <div className='cart-subpage'>
      <div className="cart-header">
        <div className="header-block">
            <span className="header-block-item">Product</span>
        </div>
        <div className="header-block">
            <span className="header-block-item">Description</span>
        </div>
        <div className="header-block">
            <span className="header-block-item">Price</span>
        </div>
        <div className="header-block">
            <span className="header-block-item">Sub Total</span>
        </div>
        <div className="header-block">
          <span></span>
        </div>
      </div>
      {cartItems.map(cartItem => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </div>
      <div className="total">
        <span>TOTAL: {currency + total}</span>
      </div>
      {cartItems.length > 0 ? (
        <div className='w-100 d-flex justify-content-end mt-5'>
          <Link to="/checkout">
            <button className="cart-paybtn text-uppercase">
              Checkout
        </button>
          </Link>
        </div>
      ) : null}
    </div>
  );
};

export default CartPage;