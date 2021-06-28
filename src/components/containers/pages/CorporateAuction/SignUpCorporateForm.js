import React,{useState} from 'react'
import { Field, reduxForm } from "redux-form";


const SignUpCorporateForm = ({handleSubmit, pristine, submitting}) => {
  const Submit = formValues => { }
  
  const [checked, setChecked] = useState(false)
  const handleChecked = e => {
    setChecked(e.target.checked)
  }
    const ToggleSwitch = ({ checked, id }) => (
        <div>
            <input
                type="checkbox"
                checked={checked}
                onChange={handleChecked}
                id={id}
            />
        </div>
  );
  
    return (
        <div>
            <div className="container-fluid mt-5">
            {/* account info */}
            <div className="col-xl-8 order-xl-1 mx-auto">
              <div className="card shadow">
                <div className="card-header bg-white border-0">
                  <div className="row align-items-center">
                    <div className="col-8">
                      <h3 className="all-heading mb-0 mx-auto text-capitalize">
                        Create Your Organisational Account
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <h6 className="heading-small text-muted mb-4">
                    Basic information
                  </h6>

                  <form onSubmit={handleSubmit(Submit)}>
                    <div className="pl-lg-4">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="form-group ">
                            <label
                              className="profile-control-label"
                              htmlFor="input-company-name"
                            >
                              Organisational Name
                            </label>
                            <Field
                              type="text"
                              id="input-company-name"
                              className="form-control form-control-alternative"
                              placeholder="Organisational Name"
                              value="company_name"
                              component="input"
                              name="company_name"
                            />
                          </div>
                        </div>

                        <div className="col-lg-6">
                          <div className="form-group ">
                            <label
                              className="profile-control-label"
                              htmlFor="input-company-address"
                            >
                              Password
                            </label>
                            <Field
                              type="password"
                              id="password"
                              className="form-control form-control-alternative"
                              placeholder="Password"
                              value="company_password"
                              component="input"
                              name="company_password"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label
                              className="profile-control-label"
                              htmlFor="input-email"
                            >
                              Organisational Email
                            </label>
                            <Field
                              type="email"
                              id="input-email"
                              className="form-control form-control-alternative"
                              placeholder="email"
                              value="myEmail"
                              component="input"
                              name="email"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label
                              className="profile-control-label"
                              htmlFor="phone"
                            >
                              Organisational Phone
                            </label>
                            <Field
                              type="text"
                              id="phone"
                              className="form-control form-control-alternative"
                              placeholder="phone number"
                              value="company_phone"
                              component="input"
                              name="company_phone"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="pl-lg-4">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group ">
                            <label
                              className="profile-control-label"
                              htmlFor="input-address"
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

                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label
                            className="profile-control-label"
                            htmlFor="Representative_Name"
                          >
                            Representative Name
                          </label>
                          <Field
                            type="text"
                            id="phone"
                            className="form-control form-control-alternative"
                            placeholder="Rep Name"
                            value="representative_name"
                            component="input"
                            name="representative_name"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label
                            className="profile-control-label"
                            htmlFor="input-email"
                          >
                            Representative Email
                          </label>
                          <Field
                            type="email"
                            id="input-email"
                            className="form-control form-control-alternative"
                            placeholder="email"
                            value="myEmail"
                            component="input"
                            name="email"
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <label
                        className="profile-control-label"
                        htmlFor="input-contact"
                      >
                        Representative Roles:
                      </label>
                      <div className="row">
                        <div className="form-group">
                          <label className="ml-3">CEO</label>
                          <Field
                            name="CEO"
                            component="input"
                            type="radio"
                            value="CEO"
                            className="field-inputs ml-2"
                          />
                        </div>
                        <div className="form-group">
                          <label className="ml-4">Admin</label>
                          <Field
                            name="ADMIN"
                            component="input"
                            value="ADMIN"
                            type="radio"
                            className="field-inputs ml-2"
                          />
                        </div>
                        <div className="form-group">
                          <label className="ml-4">Human Resources</label>
                          <Field
                            name="human_resources"
                            component="input"
                            value="human_resources"
                            type="radio"
                            className="field-inputs ml-2"
                          />
                        </div>
                      </div>

                      <div className="shipping-show d-flex">
                        <ToggleSwitch
                          checked={checked}
                          id="form"
                        />
                        <span className="shipping-msg ml-2">
                          Add Supervisor
                        </span>
                    </div>
                    
                      {checked && (
                        <>
                          <div className="row">
                            <div className="col-lg-6">
                              <div className="form-group">
                                <label
                                  className="profile-control-label"
                                  htmlFor="phone"
                                >
                                  Supervisor's Name
                                </label>
                                <Field
                                  type="text"
                                  id="phone"
                                  className="form-control form-control-alternative"
                                  placeholder="company phone number"
                                  value="company_phone"
                                  component="input"
                                  name="company_phone"
                                />
                              </div>
                            </div>

                            <div className="col-lg-6">
                              <div className="form-group">
                                <label
                                  className="profile-control-label"
                                  htmlFor="input-email"
                                >
                                  Supervisor's Email
                                </label>
                                <Field
                                  type="email"
                                  id="input-email"
                                  className="form-control form-control-alternative"
                                  placeholder="email"
                                  value="myEmail"
                                  component="input"
                                  name="email"
                                />
                              </div>
                            </div>
                          </div>
                        </>
                      )}
                    </div>

                    {/* SUBMIT */}
                    <hr className="profile_hr my-4" />
                    <div className="pl-lg-4">
                      <div className="form-group">
                        <button className="btn btn-sm profile-sbm-btn">
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
    )
}

export default reduxForm({ form: "corporateSignup" })(SignUpCorporateForm)
