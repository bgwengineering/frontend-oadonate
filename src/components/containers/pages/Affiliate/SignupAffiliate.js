import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Field, reduxForm } from "redux-form";


const SignupAffiliate = ({ handleSubmit }) => {
    const Submit = formValues => {   
    }

  return (
    <div className="container-fluid mt--7">
      <div className="row">
        <div className="col-xl-4 order-xl-2 mb-5 mb-xl-0">
          <div className="card card-profile shadow">
            <div className="row justify-content-center">
              <div className="col-lg-3 order-lg-2">
                <div className="card-profile-image">
                  <img
                    src=""
                    alt="rounded-circle"
                    className="rounded-circle-img"
                  />
                </div>
              </div>
            </div>

            <div className="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
              <div className="d-flex justify-content-between"></div>
            </div>

            <div className="card-body pt-0 pt-md-4">
              <div className="row">
                <div className="col">
                  <div className="card-profile-stats d-flex justify-content-center mt-md-5">
                    <div>
                      <h3 className="all-heading">
                        {/* {first_name + " " + last_name} */}
                      </h3>
                      <div className="h5 font-weight-300">
                        <i className="ni location_pin mr-2"></i>
                        {/* {city + " " + country} */}
                      </div>
                      <hr className="my-4" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* account info */}
        <div className="col-xl-8 order-xl-1">
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
              <h6 className="heading-small text-muted mb-4">
                Basic information
              </h6>
              <div className="pl-lg-4">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label
                        className="profile-control-label"
                        for="input-email"
                      >
                        Email address
                      </label>
                      <input
                        type="email"
                        id="input-email"
                        className="form-control form-control-alternative"
                        placeholder="email"
                        value="email"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label className="profile-control-label" for="phone">
                        Phone
                      </label>
                      <input
                        type="text"
                        id="phone"
                        className="form-control form-control-alternative"
                        placeholder="phone"
                        value="phone"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group ">
                      <label
                        className="profile-control-label"
                        for="input-first-name"
                      >
                        First name
                      </label>
                      <input
                        type="text"
                        id="input-first-name"
                        className="form-control form-control-alternative"
                        placeholder="First name"
                        value="first_name"
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
                      <input
                        type="text"
                        id="input-last-name"
                        className="form-control form-control-alternative"
                        placeholder="Last name"
                        value="last_name"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* address */}
              <div className="pl-lg-4">
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group ">
                      <label
                        className="profile-control-label"
                        for="input-address"
                      >
                        Address
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
              </div>
              <hr className="my-4" />

              
              {/* Affiliate Choice */}
              <div>
                <label
                  className="profile-control-label"
                  for="input-contact"
                >
                  Affiliate Choice:
                </label>
                <div className="row">
                  <div className="form-group ">
                    <label className="ml-3"> Phone Call </label>
                    <Field
                      name="contact_method"
                      component="input"
                      type="radio"
                      value="Phone Call"
                      className="field-inputs ml-2"
                    />
                  </div>
                  <div className="form-group ">
                    <label className="ml-4"> Email </label>
                    <Field
                      name="contact_method"
                      component="input"
                      value="Send Email"
                      type="radio"
                      className="field-inputs ml-2"
                    />
                  </div>
                </div>
              </div>

              <hr className="my-4" />
              {/* Guarantor information */}
              <h6 className="heading-small text-muted all-heading mb-4">
                Guarantor Details
              </h6>
              <form onSubmit={handleSubmit(Submit)}>
                <div className="pl-lg-4">
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="form-group ">
                        <label
                          className="profile-control-label"
                          for="input-city"
                        >
                          Full Name
                        </label>
                        <Field
                          component="input"
                          name="city"
                          type="text"
                          id="input-city"
                          className="form-control form-control-alternative"
                          placeholder="City"
                          value="city"
                        />
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="form-group ">
                        <label
                          className="profile-control-label"
                          for="input-country"
                        >
                          Country
                        </label>
                        <Field
                          component="input"
                          type="text"
                          id="input-country"
                          className="form-control form-control-alternative"
                          placeholder="country"
                          value="country"
                          name="country"
                        />
                      </div>
                    </div>

                    {/* contact method */}
                 
                  </div>
                </div>
                <div className="pl-lg-4">
                  <div className="form-group ">
                    <label>Profile Image</label>
                    <Field
                      name="picture"
                      component="input"
                      type="file"
                      className="form-control form-control-alternative"
                    />
                  </div>
                </div>

                {/* description */}
           
                <hr className="profile_hr my-4" />
                <div className="pl-lg-4">
                  <div className="form-group">     
                    <button className="btn btn-sm profile-sbm-btn ml-3">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default reduxForm({form:"affiliateSignup"})(SignupAffiliate);
