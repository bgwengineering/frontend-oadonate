import React from "react";
import { Field, reduxForm } from "redux-form";

const NewProfile = ({ handleSubmit, pristine, submitting, id }) => {
  const newProfile = () => {
    //   dispatch(personalProfile(formValues));

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
                <Field name="address" component="input" type="text" className="field-inputs" />
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
                />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="form-group">
                <label className="profile-control-label" for="input-country">
                  Contact Method
                </label>
                <Field
                  name="contact_method"
                  component="input"
                  type="radio"
                  value="Phone Call"
                  className="field-inputs mr-2 "
                />
                <Field
                  name="contact_method"
                  component="input"
                  type="radio"
                  value="Phone Call"
                  className="field-inputs mr-2 "
                />
              </div>
            </div>
          </div>
        </div>
        <hr className="profile_hr my-4" />

        {/* description */}
        <h6 className="heading-small text-muted all-heading mb-4">About me</h6>
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
        <button>Save</button>
      </form>
    </>
  );
};

export default reduxForm({
  form: "personalForm",
})(NewProfile);
