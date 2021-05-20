import React, { useState,useEffect } from "react";
import { useDispatch} from "react-redux";
import PropTypes from "prop-types";
import { reduxForm,Field } from "redux-form";
import { createShippingAddress} from "store/actions/auth/Dashboard";
import {validateShipping, renderField} from 'util/RenderValidate'


const Shipping = ({ handleSubmit, pristine, submitting, }) => {
  const dispatch = useDispatch();
 const [checked, setChecked] = useState(false);

 const createShipping = (formValues) => {
  dispatch(createShippingAddress(formValues));
};
  
  return (
    <>
        <form className="checkout-shipping-form" onSubmit={handleSubmit(createShipping)}>
          <div className="form-body">
            <div className="checkout-shipping-header">
              <p className="shipping-header">Shipping Details</p>
            </div>

                <div className="user-names">
                <label className="label"> Names* </label>
                <Field type="text" name="first_name" component={renderField} className="input-first" />
                <Field type="text" name="last_name" component={renderField} className="input-last" />
                </div>
                <div className="address">
            <label className="label"> State address * </label>
            <Field
              type="text"
              placeholder="House number and Street name"
              component={renderField}
              className="input-address"
              name="address"
            />
          </div>
          <div className="city-zip">
          <label className="label"> Town / City * </label>
          <div className="inputs">
            <Field
              className="city"
              type="text"
              placeholder="town/city"
              name="city_name"
              component={renderField}
            />
            <Field
              className="zip"
              type="text"
              placeholder="Postcode/Zip"
              component={renderField}
              name="zip"
            />
          </div>
        </div>
                <div className="state-label"> State * </div>
          <Field
              className="zip"
              type="text"
              placeholder="State"
              component={renderField}
              name="state_name"
            />
            <Field
              className="ordernote"
              type="textarea"
              placeholder="Order Notes:Notes about your order e.g. special notes for delivery"
              component="textarea"
              name="note"
            />
          </div>
        <div className="next-prev-cart">
            <button
              className="next-submit-btn"
              type="submit"
            >
              SAVE
            </button>
        </div>
      </form>
    </>
  );
};

export default reduxForm({ form: "shipping",validateShipping})(Shipping);