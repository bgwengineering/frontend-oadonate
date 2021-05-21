import React,{useEffect} from "react";
import { Field, reduxForm } from "redux-form";
import {connect,useDispatch} from "react-redux";
import { Button } from "@material-ui/core";
import { updatePersonalProfile,singlePersonalProfile } from "store/actions/auth/Dashboard";


const EditProfile = ({ handleSubmit, pristine, submitting, id }) => {
    const dispatch = useDispatch()
    useEffect(() => {
        document.title = 'Ogadonate|Shipping'
        // dispatch(singlePersonalProfile(`${id}`));
      }, []);
  const onEditProfile = (formvalues) => {
    dispatch(updatePersonalProfile(id, formvalues))
  };
  return (
    <>
      <form onSubmit={handleSubmit(onEditProfile)}>
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
        <button>Update</button>
      </form>
    </>
  );
};


function mapStateToProps(state) {
    const { profile_user } = state.userTypeReducer;
    return {
      initialValues: profile_user,
    };
  }
  
  export default connect(mapStateToProps, {  })(
    reduxForm({ form: "shipping", enableReinitialize: true})(EditProfile));
  