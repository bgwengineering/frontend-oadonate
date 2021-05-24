import React from "react";
import { connect } from "react-redux";
// import { placeOrder, removeCartItems } from "../../actions/cart/actions";
// import { placeOrder, removeItem } from './../../store/actions/cart/cart.actions';
import _ from "lodash";

const OrderPreview = ({ nextPage, previousPage, history }) => {
  let subtotal = 0;
  // let orders = _.map(cartItems, (cartItem) => {
  //   subtotal += cartItem.product.price * cartItem.quantity
  //  return <ul key={cartItem.id} className="order-details">
  //     <div className="order-product-details">
  //       <li>
  //         <p>{cartItem.quantity}</p>
  //       </li>
  //       <p>x</p>
  //       <li>
  //         <p>{cartItem.product.item}</p>
  //       </li>
  //     </div>
  //     <br />
  //     <li className="order-subtotal-price">
  //       <p>{cartItem.product.price}</p>
  //     </li>
  //   </ul>;

  // })
  return (
    <div className="orderpreview">
      <div className="d-flex justify-content-between product-subtotal-row">
        <p className="product-heading text-uppercase">Product</p>
        <p className="subtotal-heading">Subtotal</p>
      </div>
      <hr />
      <div className="d-flex justify-content-between subtotal-price-row">
        <p className="subtotal">Subtotal</p>
        <p className="subprice">₦{subtotal.toFixed(2)}</p>
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
        <p className="amount-order">₦{(subtotal + 1000).toFixed(2)}</p>
      </div>

      <div>
        <h5 className="text-uppercase">Payment</h5>
        {/* payment order box */}
        <div className="order-payment-mode">
          <p className="font-weight-bold">
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
