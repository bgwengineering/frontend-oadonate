import React, {useState,useEffect } from "react";
import {useSelector } from "react-redux";
import PropTypes from "prop-types";
import ShippingPrompt from './ShippingPrompt'
import OrderPreview from '../../checkout/OrderPreview'
import {fetchAddressBook, fetchShippingAddress} from 'store/actions/auth/Dashboard'
import {placeOrder} from '../../../store/actions/cart/cart.actions'
import Stepper from '../../checkout/Stepper'
import { withRouter } from "react-router-dom";
import CheckLogin from '../../checkout/CheckLogin';


const CheckoutForm = () => {
  useEffect(() => {
    document.title = 'Ogadonate | Checkout'
  }, []);
  const shippingState = useSelector((state) => state.userTypeReducer);
  const id = shippingState.shippingAddress.map(_id=>_id.id)
  const currentUser = useSelector((state) => state.authReducer.isAuthenticated);
  const [page, setPage] = useState(1);

  const nextPage = () => {
    setPage(page + 1);
  };  
  const previousPage = () => {
    setPage(page - 1);
  };

  const showStep = () => {
    switch (page) {
      case 1:
        return (
           <ShippingPrompt
          nextPage={nextPage}
          shippingState={shippingState}
           previousPage={previousPage} 
           id={id}
          />
        );  
      case 2:
        return (
          <OrderPreview 
          nextPage={nextPage}
           previousPage={previousPage} 
          />
        );
      default:
        return;
    }
  };

  return (
    <div className="checkout-page-container">
      <h1 className="checkout-title"> Checkout</h1>
      <div className="step-container">
        <Stepper page={page} currentUser={currentUser} />
        {currentUser ? showStep() : <CheckLogin nextPage={nextPage} />}
      </div>
    </div>
  );
};

export default CheckoutForm;
