import React, { useState } from "react";
<<<<<<< HEAD
import { useSelector} from "react-redux";
import { Field, reduxForm } from "redux-form";


const SignupCorporate = ({ handleSubmit }) => {
  const profileState = useSelector(state => state.userTypeReducer);
  const { profile_user } = profileState;
  const userState = useSelector(state => state.authReducer.user);


  const [checked, setChecked] = useState({  
    ngoChecked: false,
    corporateChecked: false,
    religiousChecked:false,
    auctioneerChecked:false
  });

  const { ngoChecked, corporateChecked, auctioneerChecked, religiousChecked } = checked

  
  
  // toggle switch
  const ToggleSwitch = ({ checked, onChange, id }) => (
    <div>  
      <input
        type="checkbox"
        checked={corporateChecked}
        onChange={
          (e => {
            onChange({ ...checked, corporateChecked: e.target.checked })
          })}
        id={id}
       />
    </div>
  );

  const ToggleNgo = ({ checked, onChange, id }) => (
=======
import SignUpCorporateForm from "./SignUpCorporateForm";
import { reduxForm } from "redux-form";
import { corporate } from 'store/actions/auth/Corporate';
import { useDispatch } from 'react-redux';
const SignupCorporate = ({ handleSubmit, pristine, submitting }) => {
  const [checked, setChecked] = useState({
    ngoChecked: false,
    corporateChecked: false,
    religiousChecked: false,
    auctioneerChecked: false
  });

  const {
    ngoChecked,
    corporateChecked,
    auctioneerChecked,
    religiousChecked
  } = checked;
  const dispatch = useDispatch()

  const Submit = formValues => {
    dispatch(corporate(formValues))
  }

  // toggle switch
  const ToggleCorporate = ({ checked, onChange, id, name }) => (
    <div>
      <input
        type="checkbox"
        checked={corporateChecked}
        onChange={e => {
          onChange({ ...checked, corporateChecked: e.target.checked });
        }}
        id={id}
        name={name}
      />
    </div>
  );

  const ToggleNgo = ({ checked, onChange, id, name }) => (
>>>>>>> 5ee521180f26cd5a1b7e9c8b021b479ad5ff1dad
    <div>
      <input
        type="checkbox"
        checked={ngoChecked}
<<<<<<< HEAD
        onChange={
          (e => {
            onChange({ ...checked, ngoChecked: e.target.checked })
          })}
        id={id}
       />
    </div>
  );

  const Submit = formValues => { };
  
  return (
    <div>
      <div className="shipping-show d-flex">
        <span>
          <ToggleNgo checked={ngoChecked} id="form" onChange={setChecked} />
          <span className="shipping-msg ml-2">Corporate</span>
        </span>

        <span>
          <ToggleSwitch checked={corporateChecked} id="form-ui" onChange={setChecked} />
          <span className="shipping-msg ml-2">Religious Organisation</span>
        </span>
        {/* <span>
          <ToggleSwitch checked={checked} id="form" onChange={setChecked} />
          <span className="shipping-msg ml-2">NGO</span>
        </span>
        <span>
          <ToggleSwitch checked={checked} id="form" onChange={setChecked} />
          <span className="shipping-msg ml-2">Auctioneer</span>
        </span>  */}
      </div>
      
      {ngoChecked && (
        <>
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
                              placeholder="Company Name"
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
                              placeholder="company phone number"
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
                          onChange={setChecked}
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
        </>
      )}

      {corporateChecked && (
          <>
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
                                placeholder="Company Name"
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
                                placeholder="company phone number"
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
                            onChange={setChecked}
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
          </>
        )
      }
=======
        onChange={e => {
          onChange({ ...checked, ngoChecked: e.target.checked });
        }}
        id={id}
        name={name}
      />
    </div>
  );

  const ToggleReligious = ({ checked, onChange, id, name }) => (
    <div>
      <input
        type="checkbox"
        checked={religiousChecked}
        onChange={e => {
          onChange({ ...checked, religiousChecked: e.target.checked });
        }}
        id={id}
        name={name}
      />
    </div>
  );

  const ToggleAuctioneer = ({ checked, onChange, id, name }) => (
    <div>
      <input
        type="checkbox"
        checked={auctioneerChecked}
        onChange={e => {
          onChange({ ...checked, auctioneerChecked: e.target.checked });
        }}
        id={id}
        name={name}
      />
    </div>
  );

  return (
    <div>
      <h2 className="text-uppercase mt-5 d-flex justify-content-center">
        Select Your Category
      </h2>
      <form onSubmit={handleSubmit(Submit)}>
        <div className="d-flex justify-content-center align-items-center corporate-category">
          <span className="d-flex ml-3">
            <ToggleNgo
              checked={ngoChecked}
              id="form"
              onChange={setChecked}
              name="NGO"
            />
            <span className="shipping-msg ml-2">NGO</span>
          </span>

          <span className="d-flex ml-3">
            <ToggleCorporate
              checked={corporateChecked}
              id="form-ui"
              onChange={setChecked}
              name="Corporate"
            />
            <span className="shipping-msg ml-2">Corporate</span>
          </span>

          <span className="d-flex ml-3">
            <ToggleReligious
              checked={religiousChecked}
              id="form-rel"
              onChange={setChecked}
              name="Religious Organisation"
            />
            <span className="shipping-msg ml-2">Religious Organisation</span>
          </span>

          <span className="d-flex ml-3">
            <ToggleAuctioneer
              checked={auctioneerChecked}
              id="form-auct"
              onChange={setChecked}
              name="Auctioneer"
            />
            <span className="shipping-msg ml-2">Auctioneer</span>
          </span>
        </div>

        {ngoChecked && <SignUpCorporateForm pristine={pristine} submitting={submitting} />}
        {corporateChecked && <SignUpCorporateForm />}
        {religiousChecked && <SignUpCorporateForm />}
        {auctioneerChecked && <SignUpCorporateForm />}
      </form>
>>>>>>> 5ee521180f26cd5a1b7e9c8b021b479ad5ff1dad
    </div>
  );
};

export default reduxForm({ form: "corporateSignup" })(SignupCorporate);
