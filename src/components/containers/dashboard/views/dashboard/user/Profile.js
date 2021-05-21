import React, { useEffect } from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { personalProfile } from "store/actions/auth/Dashboard";
import {
  fetchCompanyProfile,
  fetchPersonalProfile
} from "store/actions/auth/Dashboard";


const Profile = ({ handleSubmit }) => {
  const dispatch = useDispatch();
  const Submit = formValues => {
    dispatch(personalProfile(formValues));
  };
  useEffect(() => {
    dispatch(fetchPersonalProfile());
    dispatch(fetchCompanyProfile());
  }, []);
  const profileState = useSelector(state => state.userTypeReducer);
  const { profile_user } = profileState;
  return (
    <>
      {profile_user.map(personal => {
        const {
          user,
          address,
          gender,
          country,
          contact_method,
          city
        } = personal;
        const { email, first_name, last_name } = user;
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
                    <div className="d-flex justify-content-between">
                      {/* <a href="/#" className="btn btn-sm btn-default float-right">Message</a> */}
                    </div>
                  </div>

                  <div className="card-body pt-0 pt-md-4">
                    <div className="row">
                      <div className="col">
                        <div className="card-profile-stats d-flex justify-content-center mt-md-5">
                          <div>
                            <h3 className="all-heading">
                              {first_name + " " + last_name}
                            </h3>
                            <div className="h5 font-weight-300">
                              <i className="ni location_pin mr-2"></i>
                              {city + " " + country}
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
                        <h3 className="all-heading mb-0">My account</h3>
                      </div>
                      <div className="col-4">
                        <Link
                          to="/dashboard/profile/shipping"
                          className="main-link"
                        >
                          <Button className="shipping-btn">
                            Add Shipping Address
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <h6 className="heading-small text-muted mb-4">
                      User information
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
                              value={email}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label
                              className="profile-control-label"
                              for="gender"
                            >
                              Gender
                            </label>
                            <input
                              type="text"
                              id="gender"
                              className="form-control form-control-alternative"
                              placeholder="gender"
                              value={gender}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="form-group focused">
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
                              value={first_name}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group focused">
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
                              value={last_name}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr className="my-4" />

                    {/* contact information */}
                    <h6 className="heading-small text-muted all-heading mb-4">
                      Contact information
                    </h6>
                    <form onSubmit={handleSubmit(Submit)}>
                      <div className="pl-lg-4">
                        <div className="row">
                          <div className="col-md-12">
                            <div className="form-group focused">
                              <label className="profile-control-label" for="input-address">
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
                        <div className="row">
                          <div className="col-lg-4">
                            <div className="form-group focused">
                              <label
                                className="profile-control-label"
                                for="input-city"
                              >
                                City
                              </label>
                              <Field
                                component="input"
                                name="city"
                                type="text"
                                id="input-city"
                                className="form-control form-control-alternative"
                                placeholder="City"
                                value={city}
                              />
                            </div>
                          </div>
                          <div className="col-lg-4">
                            <div className="form-group focused">
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
                                value={country}
                                name="country"
                              />
                            </div>
                          </div>

                          {/* contact method */}
                          <div>
                            <label
                              className="profile-control-label"
                              for="input-contact"
                            >
                              Contact Method:
                            </label>
                            <div className="row">
                              <div className="form-group focused">
                                <label className="ml-3"> Phone Call </label>
                                <Field
                                  name="contact_method"
                                  component="input"
                                  type="radio"
                                  value="Phone Call"
                                  className="field-inputs ml-2"
                                />
                              </div>
                              <div className="form-group focused">
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
                        </div>
                      </div>
                      <div className="pl-lg-4">
                      <div className="form-group focused">
                        <label>Profile Image</label>
                      <Field name="picture" component="input" type="file" className="form-control form-control-alternative" />
                     </div>
                      </div>
                     
                        {/* description */}
                      <div className="pl-lg-4">
                        <div className="form-group focused">
                          <label>About Me</label>
                          <Field
                            component="textarea"
                            rows="4"
                            className="form-control form-control-alternative about_textarea"
                            placeholder="A few words about you ..."
                          />
                        </div>
                      </div>
                      <hr className="profile_hr my-4" />
                      <div className="pl-lg-4">
                        <div className="form-group focused row">
                          <Link
                            to="/dashboard/profile/edit"
                            className="btn btn-sm edit-btn"
                          >
                            Change Password
                          </Link>
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
      })}
    </>
  );
};

export default reduxForm({
  form: "personalForm",
})(Profile);
