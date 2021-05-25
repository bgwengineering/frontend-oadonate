import React from "react";
import {useSelector, useDispatch} from "react-redux"
// import { placeOrder, removeCartItems } from "../../actions/cart/actions";
// import { placeOrder, removeItem } from './../../store/actions/cart/cart.actions';



const OrderPreview = ({ nextPage, previousPage, history }) => {
  const dispatch = useDispatch()

  const cartState = useSelector(state => state.cartReducer)
  const {cartItems} = cartState
  
  let subTotal = 0;
  
 let  orders = cartItems.map(cart => {
    subTotal += cart.donate_mkt_price * cart.quantity
   return (
     <ul className="order-product-total d-flex mt-3">
       <ul key={cart.id} className=" d-flex order-details">
         <li className="order-list text-uppercase font-weight-bold">
           {cart.donate_item_name}
         </li>
         <li className="order-list ml-3 font-weight-bold">x</li>
         <li className="order-list mr-4 font-weight-bold">{cart.quantity}</li>
       </ul>

       <li className="d-flex justify-content-end order-subtotal-price order-list">
         {cart.donate_currency + cart.donate_mkt_price}
       </li>
     </ul>
   );
  })

  return (
    <div className="orderpreview">
      <div className="d-flex justify-content-between product-subtotal-row">
        <p className="product-heading text-uppercase">Product</p>
        <p className="subtotal-heading">Subtotal</p>
      </div>
      {orders}
     
      <hr />
      <div className="d-flex justify-content-between subtotal-price-row">
        <p className="subtotal">Subtotal</p>
        <p className="subprice">₦{subTotal.toFixed(2)}</p>
      </div>
      <hr />

      {/* form */}
      <form>
        <div>
          <p className="order-shipping-heading text-uppercase">Shipping</p>
          <div className="d-flex  justify-content-between">
            <div className="d-flex flat-rate-container">
              <input type="radio" name="pickup" value="1000" id="flatrate" />
              <span className="ml-2">Flat Rate:</span>
            </div>
            <span className="order-flatrate-amount">₦1,000</span>
          </div>
          {/* store-pickup */}
          <div className="d-flex justify-content-between">
            <div className="d-flex store-pickup-container">
              <input
                type="radio"
                name="store-pickup"
                value="1000"
                id="pickup"
                id="pickup"
              />
              <span className="ml-2">In Store Pickup:</span>
            </div>
            <span className="order-flatrate-amount"></span>
          </div>
          <hr />
        </div>
      </form>

      <div className="d-flex justify-content-between order-total">
        <p className="text-uppercase order-total">Total</p>
        <p className="amount-order">₦{(subTotal + 1000).toFixed(2)}</p>
      </div>

      <div>
        <h4 className="text-uppercase ">Payment</h4>
        {/* payment order box */}
        <div className="order-payment-mode">
          <p className="font-weight-bold ml-2 mt-2">
            Make payment using your debit and credit cards
          </p>
          <div className="pl-2">
            <input type="checkbox" />
            <span className="pl-2">Pay using Paystack</span>
          </div>

          <div className="pl-2 mt-2">
            <input type="checkbox" />
            <span className="pl-2">Pay using Stripe</span>
          </div>
        </div>

        <p className="order-note">
          Your personal data will be used to process your order, support your
          experience throughout this website, and for other purposes described
          in our privacy policy.
        </p>
      </div>

      <div className="d-flex order-approval">
        <input type="checkbox" />
        <p className="order-approval-note mt-3 ml-3">
          I have read and agreed to the website
          <span className="approval-note  ml-3">terms and conditions *</span>
        </p>
      </div>
      <div className="order-payment-button-container">
        <button
          onClick={() => {
            history.push("/");
          }}
          className="order-payment-button"
        >
          Pay now
        </button>
      </div>
      <hr className="profile_hr my-4" />
      {/* cancel next button */}                   
      <div className="next-prev--container d-flex justify-content-between">
        <div className="order-cancel-btn-container">
          <button className="cancel-btn">
            Cancel
          </button>
        </div>
        <div className="order-end-button-container d-flex justify-content-end">
          <button
            className="previous-action-btn mr-3"
            onClick={() => previousPage()}
           >
            Previous
          </button>
          <button className="next-action-btn" onClick={() => nextPage()}>
            Back to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderPreview;
