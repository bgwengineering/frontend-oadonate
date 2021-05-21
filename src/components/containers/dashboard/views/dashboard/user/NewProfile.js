import React from "react";
import { Field, reduxForm } from "redux-form";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { createPersonalProfile } from "./../../../../../../store/actions/auth/Dashboard";
import { Button } from "@material-ui/core";

const NewProfile = ({ handleSubmit, pristine, submitting, id }) => {
  const dispatch = useDispatch();
  const newProfile = formValues => {
    dispatch(createPersonalProfile(formValues));
  };

  return (
    <>
      <form onSubmit={handleSubmit(newProfile)}>
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
                <label className="profile-control-label" for="input-city">
                  City
                </label>
                <Field
                  component="input"
                  name="city"
                  type="text"
                  id="input-city"
                  className="form-control form-control-alternative"
                  placeholder="City"
                />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="form-group focused">
                <label className="profile-control-label" for="input-country">
                  Country
                </label>
                <Field
                  component="input"
                  type="text"
                  id="input-country"
                  className="form-control form-control-alternative"
                  placeholder="country"
                  name="country"
                />
              </div>
            </div>

            {/* contact method */}
            <div>
              <label className="profile-control-label" for="input-contact">
                Contact Method:
              </label>
              <div className="row">
                <div className="form-group focused">
                  <label className="ml-3"> Phone Call </label>
                  <Field
                    name="contact_method"
                    component="input"
                    type="radio"
                    className="field-inputs ml-2"
                  />
                </div>
                <div className="form-group focused">
                  <label className="ml-4"> Email </label>
                  <Field
                    name="contact_method"
                    component="input"
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
            <Field
              name="picture"
              component="input"
              type="file"
              className="form-control form-control-alternative"
            />
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
          <div className="d-flex justify-content-between">
            <Button  type="button">
              <Link to = '/dashboard'>        
               Cancel
              </Link>
            </Button>
            <Button
         
              type="submit"
              disabled={pristine || submitting}
            >
              Save Address
            </Button>
          </div>
        </div>
      </form>
    </>
  );
};

export default reduxForm({
  form: "personalForm"
})(NewProfile);
