import React from "react";
import { useDispatch } from "react-redux";
import { Button } from "@material-ui/core";
import { reduxForm, Field } from "redux-form";
import { createShippingAddress } from "store/actions/auth/Dashboard";
import { validateShipping } from "util/RenderValidate";

const NewShipping = ({ handleSubmit, pristine, submitting }) => {
  const dispatch = useDispatch();

  const createShipping = (formValues) => {
    dispatch(createShippingAddress(formValues));
  };
  return (
    <div className="container-fluid mt--7">
      <div className="row">
        <div className="col-xl-12 order-xl-1">
          <div className="card shadow">
            <div className="card-header bg-white border-0"></div>
            <div className="card-body">
              <h6 className="heading-small text-muted all-heading mb-4">Shipping information</h6>
              <hr className="my-4" />
              <form onSubmit={handleSubmit(createShipping)}>
                <div className="pl-lg-4">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label className="profile-control-label" for="input-first_name">
                          First Name<span>*</span>
                        </label>
                        <Field
                          component="input"
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
                          component="input"
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
                          component="input"
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
                          component="input"
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
                          component="input"
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
                          component="input"
                          type="text"
                          id="input-country"
                          name="country"
                          className="form-control form-control-alternative"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pl-lg-4">
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
                <div className="d-flex flex-end">
                  <Button className="shipping-btn" type="submit" disabled={pristine || submitting}>
                    Save Address
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

export default reduxForm({ form: "shipping", validateShipping })(NewShipping);
