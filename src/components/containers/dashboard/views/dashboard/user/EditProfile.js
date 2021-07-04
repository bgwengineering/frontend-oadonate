import React, { useEffect, useState } from "react";
import { Field, reduxForm, stopSubmit, reset } from "redux-form";
import { connect, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import axiosInstance from "util/api";
import * as actionTypes from "store/actions/ActionTypes";
import { singlePersonalProfile } from "store/actions/auth/Dashboard";
import { setLoading, offLoading } from "store/actions/Common";
import { renderField } from "util/RenderValidate";

const EditProfile = ({ handleSubmit, pristine, submitting, history, profileId }) => {
    const [submit, setSubmit] = useState(false);
    const dispatch = useDispatch();
    useEffect(() => {
        document.title = "Ogadonate | Profile";
        dispatch(singlePersonalProfile(profileId));
    }, []);
    const onFormSubmit = (formValues) => {
        let formData = new FormData();
        formData.append("address", formValues.address);
        formData.append("city", formValues.city);
        formData.append("state", formValues.state);
        formData.append("country", formValues.country);
        formData.append("phone", formValues.phone);
        formData.append("gender", formValues.gender);
        formData.append("about_me", formValues.about_me);
        formData.append("contact_method", formValues.contact_method);
        const config = {
            headers: {
                "content-type": "multipart/form-data",
                Authorization: `JWT ${localStorage.getItem("access")}`,
            },
        };
        const url = `profile/personal/${profileId}`;
        dispatch(setLoading());
        axiosInstance
            .patch(url, formData, config)
            .then(function(response) {
                dispatch({
                    type: actionTypes.UPDATE_PERSONAL_PROFILE_SUCCESS,
                    payload: response.data,
                });
                dispatch(stopSubmit("editpersonalForm"));
                dispatch(reset("editpersonalForm"));
                dispatch(offLoading());
                dispatch({ type: actionTypes.SHOW_SUCCESS_MESSAGE, payload: "Personal Profile Updated" });
                setTimeout(() => {
                    setSubmit(true)
                }, 2000)
            })
            .catch(function(error) {
                console.log(error.response);
                dispatch({
                    type: actionTypes.UPDATE_PERSONAL_PROFILE_FAIL,
                });
                dispatch(setLoading());
                dispatch(stopSubmit("editpersonalForm"));
                dispatch(reset("editpersonalForm"));
                dispatch(offLoading());
                dispatch({ type: actionTypes.SHOW_ERROR_MESSAGE, payload: error.response.message });
            });
    };
    if (submit) {
        history.push("/dashboard")
    }
    return ( 
      <>
        <form onSubmit={handleSubmit(onFormSubmit)}>
        <div className="pl-lg-4">
          <div className="row">
            <div className="col-md-12">
              <div className="form-group focused">
                <label className="profile-control-label" for="input-address">
                  Address <span style={{ color: "red" }}>*</span>
                </label>
                <Field
                  name="address"
                  component={renderField}
                  type="text"
                  className="form-control form-control-alternative"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="form-group focused">
                <label className="profile-control-label" for="input-phone">
                  Phone <span style={{ color: "red" }}>*</span>
                </label>
                <Field
                  component={renderField}
                  name="phone"
                  type="text"
                  id="input-phone"
                  className="form-control form-control-alternative"
                />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="form-group focused">
                <label className="profile-control-label" for="input-city">
                  City <span style={{ color: "red" }}>*</span>
                </label>
                <Field
                  component={renderField}
                  type="text"
                  id="input-city"
                  className="form-control form-control-alternative"
                  name="city"
                />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="form-group focused">
                <label className="profile-control-label" for="input-country">
                  Country <span style={{ color: "red" }}>*</span>
                </label>
                <Field
                  component={renderField}
                  type="text"
                  id="input-country"
                  className="form-control form-control-alternative"
                  placeholder="country"
                  name="country"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="form-group focused">
                <label className="profile-control-label" for="input-gender">
                  Gender <span style={{ color: "red" }}>*</span>
                </label>
                <div>
                  <div className="row">
                    <div className="form-group focused">
                      <label className="ml-3"> Male</label>
                      <Field
                        name="gender"
                        component="input"
                        type="radio"
                        value="Male"
                        className="field-inputs ml-2"
                      />
                    </div>
                    <div className="form-group focused">
                      <label className="ml-4"> Female </label>
                      <Field
                        name="gender"
                        component="input"
                        type="radio"
                        value="Female"
                        className="field-inputs ml-2"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="form-group focused">
                <label className="profile-control-label" for="input-city">
                  Contact Method <span style={{ color: "red" }}>*</span>
                </label>
                <div>
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
                        type="radio"
                        value="Send Email"
                        className="field-inputs ml-2"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* description */}
        <div className="pl-lg-4">
          <div className="form-group focused">
            <label>About Me</label>
            <Field
              component="textarea"
              rows="4"
              name="about_me"
              className="form-control form-control-alternative about_textarea"
              placeholder="A few words about you ..."
            />
          </div>
        </div>
        <hr className="profile_hr my-4" />
        <div className="pl-lg-4">
          <div className="d-flex justify-content-between">
            <Button type="button">
              <Link to="/dashboard">Cancel</Link>
            </Button>
            <Button
              type="submit"
              style={{ backgroundColor: "#C75A00", color: "#fff" }}
              disabled={pristine || submitting}
            >
              Update
            </Button>
          </div>
        </div>
      </form> 
      </>
    );
};

function mapStateToProps(state) {
    const { singleProfile } = state.userTypeReducer;
    return {
        initialValues: singleProfile,
    };
}

export default connect(mapStateToProps, { singlePersonalProfile })(
    reduxForm({ form: "editpersonalForm", enableReinitialize: true })(EditProfile)
);