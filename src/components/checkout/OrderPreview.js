import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axiosInstance from "util/api";
import { clearCartItems, placeOrder } from "store/actions/cart/cart.actions";
import { Link } from 'react-router-dom';
import { Modal, ModalBody} from "reactstrap";
import TermsCondition from './TermsCondition';


// const stripePromise = window.Stripe(
//   "pk_test_51Ihz1EJtAhKBp45zJXZLT2RmTKQLDbpZRPerC1uKcnQ69N1R1IchlmRhCBMp3cwJ4DIVpSf9iHe4Hnq9wUdAC6OA00DNznJtw5"
// );

const Message = ({ message }) => (
  <section>
    <p>{message}</p>
  </section>
);


const OrderPreview = ({ nextPage, previousPage}) => {
  const [message, setMessage] = useState("");
  const [paystack, setPaystack] = useState(true);
  const [Stripebtn, setStripebtn] = useState(false);
  const [storepickup, setStorepickup] = useState(true);
  const [flatrate, setFlatrate] = useState(false);

  const [orderFields, setOrderFields] = useState({
    payment_method: "",
    delivery_method: "",
  });

  const cartState = useSelector(state => state.cartReducer);
  const { cartItems,checkoutUrl } = cartState;

  
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const [checked, setChecked] = useState(false);

  const handleChecked = e => {
    setChecked(e.target.checked)
  }

  useEffect(() => {
    if (checkoutUrl && checkoutUrl.length) {
      window.location = checkoutUrl;
    }
  }, [checkoutUrl]);

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get("success")) {
      setMessage("Order placed! You will receive an email confirmation.");
    }
    if (query.get("canceled")) {
      setMessage("Order canceled -- continue to shop around and checkout when you're ready.");
    }
  }, []);
 
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behaviour:'smooth'
    })
  }
  const dispatch = useDispatch();

  let subTotal = 0;
  let orders = cartItems.map(cart => {
    subTotal += cart.donate_mkt_price * cart.quantity;

    return (
      <ul className="order-product-total d-flex mt-3">
        <ul key={cart.id} className=" d-flex order-details">
          <li className="order-list text-uppercase font-weight-bold">{cart.donate_item_name}</li>
          <li className="order-list ml-3 font-weight-bold">x</li>
          <li className="order-list mr-4 font-weight-bold">{cart.quantity}</li>
        </ul>
        <li className="d-flex justify-content-end order-subtotal-price order-list">
          {cart.donate_currency + cart.donate_mkt_price}
        </li>
      </ul>
    );
  });
  const flatTotal = (subTotal + 1000)
  const storeTotal = (subTotal + 0)
  const { payment_method, delivery_method } = orderFields;
  
  // submit with paystack gateway
  const PayWithPaystack = () => {  
    const formData = {
      payment_method,
      delivery_method,
      totalPrice: flatrate ? flatTotal : storeTotal,
      orderItem: cartItems,
    };
    dispatch(placeOrder(formData));
  };

  // submit with stripe gateway
  // const PayWithStripe = () => {
  //   let productsArr = [];
  //   let quantitiesArr = [];
  //   cartItems.forEach(items => {
  //     productsArr.push(items.donate_item_name);
  //     quantitiesArr.push(items.quantity);
  //   });
    
  //      const formData = {
  //         products: productsArr,
  //         quantities: quantitiesArr,
  //         total_price: flatrate ? flatTotal : storeTotal,
  //         ordered: true,
  //         payment_method,
  //         delivery_method 
  //   };

  //   const config = {
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `JWT ${localStorage.getItem("access")}`,
  //       Accept: "application/json",
  //     },
  //   };
  //   const stripe = stripePromise;
    
  //   axiosInstance
  //     .post("buy-to-support/orders", formData, config)
  //     .then((res) => {
  //       const session = res.data;
  //       const result = stripe.redirectToCheckout({ sessionId: session });
  //       if (result.error) {
  //         setMessage(result.error.message);
  //       }
  //       return message ? <Message message={message} /> : null;
  //     })
  //     .catch((error) => {
  //       console.log(error.message);
  //     });
  // };
  const handleChange = (e) => {
    setOrderFields({ ...orderFields, [e.target.name]: e.target.value });
  };

  const setPaystackBtn = () => {
    setPaystack(true);
    setStripebtn(false);
  };

  // const setStripeBtn = () => {
  //   setStripebtn(true);
  //   setPaystack(false);
  // };
  const FlatRateBtn = () => {
    setStorepickup(false);
    setFlatrate(true);
  };
  const StorePickupBtn = () => {
    setFlatrate(false);
    setStorepickup(true);
  };

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
              <input
                name="delivery_method"
                type="radio"
                className="mr-1 ml-3 mt-2"
                onChange={handleChange}
                value="Flat Rate"
                onClick={FlatRateBtn}
              />
              <span className="ml-2">Flat Rate:</span>
            </div>
            <span className="order-flatrate-amount">₦1,000</span>
          </div>

          {/* store-pickup */}
          <div className="d-flex justify-content-between">
            <div className="d-flex store-pickup-container">
              <input
                name="delivery_method"
                type="radio"
                className="mr-1 ml-3 mt-2"
                onChange={handleChange}
                value="Store"
                onClick={StorePickupBtn}
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
        <p className="amount-order font-weight-bold">
          ₦{flatrate ? flatTotal : storeTotal}
        </p>
      </div>

      <div>
        <h4 className="order-shipping-heading text-uppercase">Payment</h4>
        {/* payment order box */}
        <div className="order-payment-mode">
          <p className="font-weight-bold ml-2 mt-2">
            Make payment using your debit and credit cards
          </p>
          <div className="pay-method-container">
            <div className="mr-3">
              <input
                name="payment_method"
                type="radio"
                className="mr-1 ml-2 border-alert-secondary"
                onChange={handleChange}
                value="PayStack"
                onClick={setPaystackBtn}
              />
              <span className="paystack-text">PayStack Gateway</span>
            </div>
            {/* <div className="stripe-paytext">
              <input
                name="payment_method"
                type="radio"
                className="mr-1 ml-2"
                onChange={handleChange}
                value="Stripe"
                onClick={setStripeBtn}
              />
              <span>Stripe Gateway</span>
            </div> */}
          </div>
        </div>

        <p className="order-note mt-3">
          Your personal data will be used to process your order, support your
          experience throughout this website, and for other purposes described
          in our privacy policy.
        </p>
      </div>

      <div className="d-flex order-approval">
        <input
          type="checkbox"
          checked={checked}
          onChange={handleChecked}
          id="terms-condition"
        />
        <p className="order-approval-note mt-3 ml-3">
          I have read and agreed to the website
          <span className="approval-note  ml-3" onClick={toggle}>
            terms and conditions <span className="text-danger">*</span>
          </span>
        </p>
      </div>
      <div className="order-payment-button-container">
        {paystack ? (
          <button
            onClick={() => {
              PayWithPaystack();
              clearCartItems();
              window.scrollTo({
                top: 0,
                behavior: "smooth"
              });
            }}
            className="order-payment-button"
            disabled={!checked ? true : false}
            style={{
              cursor: !checked || !PayWithPaystack ? "alias" : "pointer",
              opacity: !checked || !PayWithPaystack ? "1" : "0.8"
            }}
          >
            Pay Now
          </button>
        ) : (
          // <button
          //   onClick={() => {
          //     PayWithStripe();
          //     clearCartItems();
          //     window.scrollTo({
          //       top: 0,
          //       behavior: "smooth"
          //     });
          //   }}
          //   className="order-payment-button"
          // >
          //   Pay Now
          // </button>
          null
        )}
      </div>
      <hr className="profile_hr my-4" />
      {/* cancel next button */}
      <div className="next-prev--container d-flex justify-content-between flex-wrap">
        <div className="order-cancel-btn-container">
          <Link className="link-router-inverted" to="/cart">
            <button className="cancel-btn" onClick={scrollToTop}>
              Cancel
            </button>
          </Link>
        </div>
        <div className="order-end-button-container justify-content-end">
          <button
            className="previous-action-btn mr-3"
            onClick={() => previousPage()}
          >
            Previous
          </button>
          <Link to='/cart'>
            <button className="next-action-btn" onClick={scrollToTop}>Back to cart</button>
          </Link>
        </div>
      </div>

      {/* modal   */}
      <Modal
        isOpen={modal}
        toggle={toggle}
        // className={className}
        id="terms-modal"
      >
        <ModalBody>
          <TermsCondition />
        </ModalBody>
      </Modal>
    </div>
  );
};

export default OrderPreview;
