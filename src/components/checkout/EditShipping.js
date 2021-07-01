import React, { useState, useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { Button } from "@material-ui/core";
import { reduxForm, Field } from "redux-form";
<<<<<<< HEAD
import { updateShippingAddressCheckout, singleShippingAddress } from "store/actions/auth/Dashboard";
import { validateShipping, checkoutRenderField } from "util/RenderValidate";
import {Link} from 'react-router-dom'


const EditShipping = ({ nextPage, handleSubmit, id }) => {
  
=======
import {
  updateShippingAddressCheckout,
  singleShippingAddress
} from "store/actions/auth/Dashboard";
import { validateShipping, checkoutRenderField } from "util/RenderValidate";
import { Link } from "react-router-dom";

const EditShipping = ({ nextPage, handleSubmit, id }) => {
>>>>>>> 5ee521180f26cd5a1b7e9c8b021b479ad5ff1dad
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(singleShippingAddress(`${id}`));
  }, []);
  const [checked, setChecked] = useState(false);

<<<<<<< HEAD
  const updateShipping = (formValues) => {
=======
  const updateShipping = formValues => {
>>>>>>> 5ee521180f26cd5a1b7e9c8b021b479ad5ff1dad
    dispatch(updateShippingAddressCheckout(id, formValues));
    nextPage();
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
<<<<<<< HEAD
      behaviour: 'smooth'
    })
  }
=======
      behaviour: "smooth"
    });
  };
  
>>>>>>> 5ee521180f26cd5a1b7e9c8b021b479ad5ff1dad
  // toggle switch
  const ToggleSwitch = ({ checked, onChange, id }) => (
    <div>
      <input
        type="checkbox"
        checked={checked}
<<<<<<< HEAD
        onChange={(e) => onChange(e.target.checked)}
=======
        onChange={e => onChange(e.target.checked)}
>>>>>>> 5ee521180f26cd5a1b7e9c8b021b479ad5ff1dad
        id={id}
      />
    </div>
  );
<<<<<<< HEAD
  
=======

>>>>>>> 5ee521180f26cd5a1b7e9c8b021b479ad5ff1dad
  return (
    <div className="container-fluid mt--7">
      <div className="row">
        <div className="col-xl-12 order-xl-1">
          <div className="card shadow">
            <div className="card-header bg-white border-0"></div>
            <div className="card-body">
<<<<<<< HEAD
              <h6 className="heading-small text-muted all-heading mb-4">Shipping information</h6>
              <hr className="my-4" />

              <div className="shipping-show d-flex">
                <ToggleSwitch checked={checked} id="form" onChange={setChecked} />
                <span className="shipping-msg ml-2">Ship to a different address?</span>
=======
              <h6 className="heading-small text-muted all-heading mb-4">
                Shipping information
              </h6>
              <hr className="my-4" />

              <div className="shipping-show d-flex">
                <ToggleSwitch
                  checked={checked}
                  id="form"
                  onChange={setChecked}
                />
                <span className="shipping-msg ml-2">
                  Ship to a different address?
                </span>
>>>>>>> 5ee521180f26cd5a1b7e9c8b021b479ad5ff1dad
              </div>

              <form onSubmit={handleSubmit(updateShipping)}>
                <div className="pl-lg-4">
                  {checked ? (
                    <>
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="form-group">
<<<<<<< HEAD
                            <label className="profile-control-label" for="input-first_name">
=======
                            <label
                              className="profile-control-label"
                              for="input-first_name"
                            >
>>>>>>> 5ee521180f26cd5a1b7e9c8b021b479ad5ff1dad
                              First Name<span>*</span>
                            </label>
                            <Field
                              component={checkoutRenderField}
                              type="text"
                              id="input-first_name"
                              name="first_name"
                              className="form-control form-control-alternative"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
<<<<<<< HEAD
                            <label className="profile-control-label" for="input-first_name">
=======
                            <label
                              className="profile-control-label"
                              for="input-first_name"
                            >
>>>>>>> 5ee521180f26cd5a1b7e9c8b021b479ad5ff1dad
                              Last Name<span>*</span>
                            </label>
                            <Field
                              component={checkoutRenderField}
                              type="text"
                              id="input-first_name"
                              name="last_name"
                              className="form-control form-control-alternative"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group focused">
<<<<<<< HEAD
                            <label className="profile-control-label" for="input-address">
=======
                            <label
                              className="profile-control-label"
                              for="input-address"
                            >
>>>>>>> 5ee521180f26cd5a1b7e9c8b021b479ad5ff1dad
                              Address<span>*</span>
                            </label>
                            <Field
                              name="address"
                              component={checkoutRenderField}
                              type="text"
                              className="form-control form-control-alternative"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-4">
                          <div className="form-group focused">
<<<<<<< HEAD
                            <label className="profile-control-label" for="input-city">
=======
                            <label
                              className="profile-control-label"
                              for="input-city"
                            >
>>>>>>> 5ee521180f26cd5a1b7e9c8b021b479ad5ff1dad
                              City<span>*</span>
                            </label>
                            <Field
                              component={checkoutRenderField}
                              type="text"
                              id="input-city"
                              name="city_name"
                              className="form-control form-control-alternative"
                            />
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="form-group focused">
<<<<<<< HEAD
                            <label className="profile-control-label" for="input-state">
=======
                            <label
                              className="profile-control-label"
                              for="input-state"
                            >
>>>>>>> 5ee521180f26cd5a1b7e9c8b021b479ad5ff1dad
                              State<span>*</span>
                            </label>
                            <Field
                              component={checkoutRenderField}
                              type="text"
                              id="input-state"
                              name="state_name"
                              className="form-control form-control-alternative"
                            />
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="form-group focused">
<<<<<<< HEAD
                            <label className="profile-control-label" for="input-country">
=======
                            <label
                              className="profile-control-label"
                              for="input-country"
                            >
>>>>>>> 5ee521180f26cd5a1b7e9c8b021b479ad5ff1dad
                              Country<span>*</span>
                            </label>
                            <Field
                              component={checkoutRenderField}
                              type="text"
                              id="input-country"
                              name="country"
                              className="form-control form-control-alternative"
                            />
                          </div>
                        </div>
                      </div>
                    </>
                  ) : null}
                  <div className="form-group focused">
<<<<<<< HEAD
                    <label className='mt-3'>
=======
                    <label className="mt-3">
>>>>>>> 5ee521180f26cd5a1b7e9c8b021b479ad5ff1dad
                      Shipping Note<span>*</span>
                    </label>
                    <Field
                      component="textarea"
                      rows="4"
                      name="note"
                      className="form-control form-control-alternative about_textarea"
                      placeholder="Order Notes:Notes about your order e.g. special notes for delivery..."
                    />
                  </div>
                </div>
                <hr className="profile_hr my-4" />
                <div className="d-flex justify-content-between">
<<<<<<< HEAD
                  <Link className='link-router-inverted' to='/'>
                  <Button className="shipping-cancel-btn" type="button" onClick={scrollToTop}>
                    Cancel
                  </Button>
                  </Link>
                  <Button 
                  className="shipping-next-btn" 
                  type="submit"
                  onClick={()=>{updateShipping(); setTimeout(() => {nextPage();},10000)}}>
=======
                  <Link className="link-router-inverted" to="/">
                    <Button
                      className="shipping-cancel-btn"
                      type="button"
                      onClick={scrollToTop}
                     >
                      Cancel
                    </Button>
                  </Link>
                  <Button
                    className="shipping-next-btn"
                    type="submit"
                    onClick={() => {
                      updateShipping();
                      setTimeout(() => {
                        nextPage();
                      }, 10000);
                    }}
                    >
>>>>>>> 5ee521180f26cd5a1b7e9c8b021b479ad5ff1dad
                    Next
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

EditShipping.propTypes = {
  nextPage: PropTypes.func.isRequired,
<<<<<<< HEAD
  previousPage: PropTypes.func.isRequired,
=======
  previousPage: PropTypes.func.isRequired
>>>>>>> 5ee521180f26cd5a1b7e9c8b021b479ad5ff1dad
};

function mapStateToProps(state) {
  const { singleAddress } = state.userTypeReducer;
  return {
<<<<<<< HEAD
    initialValues: singleAddress,
  };
}

export default connect(mapStateToProps, { updateShippingAddressCheckout, singleShippingAddress })(
  reduxForm({ form: "editshipping", enableReinitialize: true, validateShipping })(EditShipping)
=======
    initialValues: singleAddress
  };
}

export default connect(
  mapStateToProps,
  { updateShippingAddressCheckout, singleShippingAddress }
)(
  reduxForm({
    form: "editshipping",
    enableReinitialize: true,
    validateShipping
  })(EditShipping)
>>>>>>> 5ee521180f26cd5a1b7e9c8b021b479ad5ff1dad
);
