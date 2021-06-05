import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { Button } from "@material-ui/core";
import { reduxForm, Field } from "redux-form";
import { updateShippingAddress, singleShippingAddress } from "store/actions/auth/Dashboard";
import { validateShipping, checkoutRenderField } from "util/RenderValidate";

const EditShipping = ({ handleSubmit, pristine, submitting, id }) => {
    const dispatch = useDispatch();
    useEffect(() => {
        document.title = 'Ogadonate| Shipping'
        dispatch(singleShippingAddress(`${id}`));
    }, []);
    const [checked, setChecked] = useState(false);

    const updateShipping = (formValues) => {
        dispatch(updateShippingAddress(id, formValues));
    };
    const ToggleSwitch = ({ checked, onChange, id }) => (
        <div>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        id={id}
      />
    </div>
    );
    return (
        <div className="container-fluid mt--7">
      <div className="row">
        <div className="col-xl-12 order-xl-1">
          <div className="card shadow">
            <div className="card-header bg-white border-0"></div>
            <div className="card-body">
              <h6 className="heading-small text-muted all-heading mb-4">Shipping information</h6>
              <hr className="my-4" />
              <div className="shipping-show">
                <ToggleSwitch checked={checked} id="form" onChange={setChecked} />
                <span className="shipping-msg">Ship to a different address?</span>
              </div>
              <form onSubmit={handleSubmit(updateShipping)}>
                <div className="pl-lg-4">
                  {checked ? (
                    <>
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label className="profile-control-label" for="input-first_name">
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
                            <label className="profile-control-label" for="input-first_name">
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
                            <label className="profile-control-label" for="input-address">
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
                            <label className="profile-control-label" for="input-city">
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
                            <label className="profile-control-label" for="input-state">
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
                            <label className="profile-control-label" for="input-country">
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
                    <label>
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
                <Link to="/dashboard">
                  <Button className="shipping-btn" type="button">
                    Cancel
                  </Button>
                  </Link>
                  <Button className="shipping-btn" type="submit" disabled={pristine||submitting}>
                    Update Address
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
    previousPage: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
    const { singleAddress } = state.userTypeReducer;
    return {
        initialValues: singleAddress,
    };
}

export default connect(mapStateToProps, { updateShippingAddress, singleShippingAddress })(
    reduxForm({ form: "shipping", enableReinitialize: true, validateShipping })(EditShipping));