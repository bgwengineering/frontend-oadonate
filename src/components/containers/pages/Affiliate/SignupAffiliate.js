import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { affiliateSignup } from 'store/actions/auth/Affiliate';
// import { signup } from 'store/actions/auth/Auth';


const SignupAffiliate = ({ handleSubmit, pristine, submitting }) => {
  const dispatch = useDispatch()

  const submit = formValues => {   
    dispatch(affiliateSignup(formValues));
    }

  return (
    <div className="container-fluid mt-5">
      {/* account info */}
      <div className="col-xl-8 order-xl-1 mx-auto">
        <div className="card shadow">
          <div className="card-header bg-white border-0">
            <div className="row align-items-center">
              <div className="col-8">
                <h3 className="all-heading mb-0 mx-auto text-capitalize">
                  Create Your affiliate account
                </h3>
              </div>
            </div>
          </div>
          <div className="card-body">
            <h6 className="heading-small text-muted mb-4">Basic information</h6>

            <form onSubmit={handleSubmit(submit)}>
              <div className="pl-lg-4">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group ">
                      <label
                        className="profile-control-label"
                        for="input-first-name"
                      >
                        First name
                      </label>
                      <Field
                        type="text"
                        id="input-first-name"
                        className="form-control form-control-alternative"
                        placeholder="First name"
                        value="first_name"
                        component="input"
                        name="first_name"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group ">
                      <label
                        className="profile-control-label"
                        for="input-last-name"
                       >
                        Last name
                      </label>
                      <Field
                        type="text"
                        id="input-last-name"
                        className="form-control form-control-alternative"
                        placeholder="Last name"
                        value="last_name"
                        component="input"
                        name="last_name"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label
                        className="profile-control-label"
                        for="input-email"
                      >
                        Email address
                      </label>
                      <Field
                        type="email"
                        id="input-email"
                        className="form-control form-control-alternative"
                        placeholder="email"
                        value="email"
                        component="input"
                        name="email"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label className="profile-control-label" for="phone">
                        Password
                      </label>
                      <Field
                        type="password"
                        id="password"
                        className="form-control form-control-alternative"
                        placeholder="password"
                        value="password"
                        component="input"
                        name="password"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* address */}
              <hr className="my-4" />
              {/* Affiliate Choice */}
              <div>
                <label className="profile-control-label" for="input-contact">
                  Affiliate Choice:
                </label>
                <div className="row">
                  <div className="form-group">
                    <label className="ml-4"> Contact Point(warehouse)</label>
                    <Field
                      name="affiliate_user_role"
                      component="input"
                      value="Contact Point"
                      type="radio"
                      className="field-inputs ml-2"
                    />
                  </div>

                  <div className="form-group">
                    <label className="ml-4">Referrer</label>
                    <Field
                      name="affiliate_user_role"
                      component="input"
                      value="Referrer"
                      type="radio"
                      className="field-inputs ml-2"
                    />
                  </div>
                </div>
              </div>

              {/* <hr className="my-4" /> */}

              {/* SUBMIT */}
              <hr className="profile_hr my-4" />
              <div className="pl-lg-4">
                <div className="form-group">
                  <button
                    disabled={pristine || submitting}
                    className="btn btn-sm profile-sbm-btn ml-3"
                    >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default reduxForm({form:"affiliateSignup"})(SignupAffiliate);
