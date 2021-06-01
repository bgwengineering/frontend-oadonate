import React from "react";
import { useDispatch } from "react-redux";
import { clearItemFromCart, addItem, removeItem } from "store/actions/cart/cart.actions";


var numeral = require('numeral');


const CheckoutItem = ({ cartItem }) => {
  const dispatch = useDispatch()

  const { donate_item_img, donate_mkt_price, donate_item_name, quantity } = cartItem;
  const subTotal = quantity * donate_mkt_price

  return (
    <>
      <div className="checkout-item">
        <div className="image-container">
          <img src={donate_item_img} alt="item" />
        </div>
        <div className='checkout-name-price-container'>
        <span className="name">{donate_item_name}</span>
        <span className="price">{numeral(donate_mkt_price).format('0,0')}</span>
          <span className="price">{numeral(subTotal).format('0,0.00')}</span>
        </div>
        <div className="remove-button" onClick={() => dispatch(clearItemFromCart(cartItem))}>
          &#10005;
      </div>

      </div>
    </>
  );
};


export default CheckoutItem;
