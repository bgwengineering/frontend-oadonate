import React from "react";
import { useDispatch } from "react-redux";
import { clearItemFromCart, addItem, removeItem } from "store/actions/cart/cart.actions";


const CheckoutItem = ({cartItem}) => {
  const dispatch = useDispatch()

  const { donate_item_img, donate_mkt_price, donate_item_name, quantity, donate_currency } = cartItem;  
  const subTotal =  quantity * donate_mkt_price
  
  return (
    <>
    <div className="checkout-item">
      <div className="image-container">
        <img src={donate_item_img} alt="item" />
      </div>
      <span className="name">{donate_item_name}</span>
      <span className="quantity">
      <div className='arrow' onClick={()=>dispatch(removeItem(cartItem))}>&#10094;</div>
      <span className='value'>{quantity}</span>
      <div className='arrow' onClick={()=>dispatch(addItem(cartItem))}>&#10095;</div>
      </span>
      <span className="price">{donate_mkt_price}</span>
      <span className="price">{subTotal}</span>
      <div className="remove-button" onClick={()=>dispatch(clearItemFromCart(cartItem))}>
        &#10005;
      </div>
     
      </div>
    </>
  );
};


export default CheckoutItem;
