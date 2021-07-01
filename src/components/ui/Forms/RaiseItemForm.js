import React, { useState } from "react";
import {
  Field,
  reduxForm,
  stopSubmit,
  reset,
  formValueSelector
} from "redux-form";
import axiosInstance from "util/api";
import { setLoading, offLoading } from "store/actions/Common";
import * as actionTypes from "store/actions/ActionTypes";
import { useDispatch } from "react-redux";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";

let RaiseItem = ({
  setCurrentOpenForm,
  setIsRaiseCardButtonsOpen,
  mime,
  handleSubmit,
  submitting,
  pristine,
  titleValue,
  fundItem,
  fundImage,
  fundCategory,
  fundDate
  // fundImage,
  // fundCategory,
  // fundDate
}) => {
  const dispatch = useDispatch();

  const renderInput = ({ input, type, meta }) => {
    return (
      <div>
        <input
          name={input.name}
          type={type}
          accept={mime}
          onChange={event => handleChange(event, input)}
        />
        {meta && meta.invalid && meta.error && (
          <p style={{ color: "red", fontSize: "10px" }}>{meta.error}</p>
        )}
      </div>
    );
  };

  const handleChange = (event, input) => {
    event.preventDefault();
    let imageFile = event.target.files[0];
    if (imageFile) {
      const localImageUrl = URL.createObjectURL(imageFile);
      const imageObject = new window.Image();

      imageObject.onload = () => {
        imageFile.width = imageObject.naturalWidth;
        imageFile.height = imageObject.naturalHeight;
        input.onChange(imageFile);
        URL.revokeObjectURL(imageFile);
      };
      imageObject.src = localImageUrl;
    }
  };

  const onSubmit = async formValues => {
    let formData = new FormData();
    formData.append("fund_title", formValues.fund_title);
    formData.append("fund_category", formValues.fund_category);
    formData.append("fund_currency_type", formValues.fund_currency_type);
    formData.append("fund_endAt", formValues.fund_endAt);
    formData.append("fund_purpose", formValues.fund_purpose);
    formData.append("fund_item_value", formValues.fund_item_value);
    formData.append("fund_item_desc", formValues.fund_item_desc);
    formData.append("fund_img", formValues.fund_img);

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.getItem("access")}`,
        Accept: "application/json"
      }
    };
    dispatch(setLoading());

    try {
      const res = await axiosInstance.post(
        "campaign/create/fundraise-item",
        formData,
        config
      );
      dispatch({
        type: actionTypes.SHOW_SUCCESS_MESSAGE,
        payload: "Campaign Created!"
      });
      dispatch(stopSubmit("itemFund"));
      dispatch(reset("itemFund"));
      dispatch(offLoading());
    } catch (error) {
      dispatch({ type: actionTypes.CREATE_FUND_ITEM_FAIL });
      if (error.response == "undefined") {
        dispatch({
          type: actionTypes.SHOW_ERROR_MESSAGE,
          payload: `Error: ${error.response.data}`
        });
        dispatch(offLoading());
      } else if (error.response.data) {
        error.response.data.fund_category.map(err => {
          return dispatch({
            type: actionTypes.SHOW_ERROR_MESSAGE,
            payload: "Category Field: Must not be empty"
          });
        });
        dispatch(offLoading());
      } else if (error.response.data) {
        error.response.data.fund_cash_amount.map(err => {
          return dispatch({
            type: actionTypes.SHOW_ERROR_MESSAGE,
            payload: "Amount Field: Must not be empty"
          });
        });
        dispatch(offLoading());
      } else if (error.response.data) {
        error.response.data.fund_img.map(err => {
          return dispatch({
            type: actionTypes.SHOW_ERROR_MESSAGE,
            payload: `Fund Image Field: ${err}`
          });
        });
        dispatch(offLoading());
      } else if (error.response.data) {
        error.response.data.fund_purpose.map(err => {
          return dispatch({
            type: actionTypes.SHOW_ERROR_MESSAGE,
            payload: `Purpose Field: ${err}`
          });
        });
        dispatch(offLoading());
      } else if (error.response.data) {
        error.response.data.fund_currency_type.map(err => {
          return dispatch({
            type: actionTypes.SHOW_ERROR_MESSAGE,
            payload: `Currency Field: ${err}`
          });
        });
        dispatch(offLoading());
      } else {
        dispatch({
          type: actionTypes.SHOW_ERROR_MESSAGE,
          payload: "internal server error"
        });
        dispatch(offLoading());
      }
      dispatch(stopSubmit("cashfund"));
      dispatch(reset("cashfund"));
      dispatch(offLoading());
    }
  };

  const [activeStep, setActiveStep] = useState(0);
  const getSteps = () => {
    return ["Item Title", "Description & Item Value", "Add a photo"];
  };
  const steps = getSteps();
  const getStepContent = stepIndex => {
    switch (stepIndex) {
      case 0:
        return getPersonalInformation();
      case 1:
        return getTrack();
      case 2:
        return getItems();
      default:
        return "Uknown stepIndex";
    }
  };

  const getPersonalInformation = () => {
    return (
      <fieldset>
        <h2 className="fs-title text-uppercase font-weight-bold">
          Fundraise Title
        </h2>
        <Field
          type="text"
          className="input-text"
          placeholder="what should your cause be called?"
          component="input"
          name="fund_title"
        />
        <div className="d-flex mt-3">
          <h2 className="fs-title mr-4 text-uppercase font-weight-bold">
            Select fund raise categories
          </h2>
          <Field component="select" name="fund_category" id="categories">
            <option value="">categories</option>
            <option value="Personal_need">Personal</option>
            <option value="Community">Community</option>
            <option value="Start_up">Start up</option>
            <option value="NGO">NGO</option>
          </Field>
        </div>
      </fieldset>
    );
  };

  const getTrack = () => {
    return (
      <fieldset>
        <h2 className="fs-title text-uppercase font-weight-bold">
          <i>item description</i>
        </h2>
        <Field
          type="text"
          className="input-textarea"
          name="fund_item_desc"
          component="textarea"
          placeholder="breifly describe the item you need"
        />

        <div className="d-flex mt-3">
          <h2 className="fs-title mr-3 text-uppercase font-weight-bold">
            <i>Select currency type</i>
          </h2>
          <Field component="select" name="fund_currency_type">
            <option value="">select currency</option>
            <option value="$">$</option>
            <option value="₦">₦</option>
          </Field>
        </div>
        <h2 className="fs-title mt-4 text-uppercase font-weight-bold">
          <i>item cash value</i>
        </h2>
        <Field
          id="amount"
          name="fund_item_value"
          required="required"
          component="input"
          placeholder="what's the value of the item when converted to cash"
          data-msg-required="Please enter a valid number"
          type="number"
          normalize={val => (val || "").replace(/[^\d]/g, "")}
          className="input-number"
        />
      </fieldset>
    );
  };
  const getItems = () => {
    return (
      <fieldset>
        <h2 className="fs-title text-uppercase font-weight-bold">
          Add a cover photo
        </h2>
        <h3 className="fs-subtitle text-uppercase font-weight-bold">
          Please upload a picture that describes your need
        </h3>
        <label className="text-uppercase font-weight-bold">
          Choose your image file
        </label>

        <div>
          <Field
            name="fund_img"
            type="file"
            component={renderInput}
            className="input-file"
          />
        </div>

        <h2 className="fs-title mt-4 text-uppercase font-weight-bold">
          Campaign end date
        </h2>
        <Field
          type="date"
          name="fund_endAt"
          component="input"
          className="input-date"
        />
        <h2 className="fs-title mt-4 text-uppercase font-weight-bold">
          Tell your story
        </h2>
        <Field
          name="fund_purpose"
          className="input-textarea"
          col="50"
          row="50"
          placeholder="Briefly tell a story why you need the item"
          component="textarea"
        />
      </fieldset>
    );
  };

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };
  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="fundforms_container">
        <div className="w-80">
          <Stepper
            activeStep={activeStep}
            alternativeLabel
            className="horizontal-stepper-linear"
          >
            {steps.map((label, index) => {
              return (
                <Step
                  key={label}
                  className={`horizontal-stepper ${
                    index === activeStep ? "active" : ""
                  }`}
                >
                  <StepLabel className="stepperlabel">{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>

          <div>
            {activeStep !== steps.length ? (
              <div>
                {getStepContent(activeStep)}
                <div className="mt-4">
                  {activeStep !== 0 && (
                    <Button
                      disabled={activeStep === 0}
                      onClick={handleBack}
                      className="mr-2 float-left"
                      color="primary"
                    >
                      Back
                    </Button>
                  )}
                  <Button
                    onClick={() => {
                      setIsRaiseCardButtonsOpen(false);
                      setCurrentOpenForm(null);
                    }}
                    className="mr-2 float-left"
                    color="primary"
                  >
                    Cancel
                  </Button>

                  <Button
                    className="mr-2 float-right"
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    disabled={titleValue == null  ? true : false}
                  >
                    {activeStep === steps.length - 1 ? "Finish" : "Next"}
                  </Button>
                </div>
              </div>
            ) : (
              <>
                <Button
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  className="mr-2 float-left"
                  color="primary"
                >
                  Back
                </Button>
                <Button
                  type="submit"
                  name="submit"
                  className="MuiButton-containedPrimary"
                  disabled={pristine || submitting}
                  onClick={() => {
                    setTimeout(() => {
                      setIsRaiseCardButtonsOpen(false);
                      setCurrentOpenForm(null);
                      handleReset();
                    }, 7000);
                    window.scrollTo({
                      top:0,
                      behavior:'smooth'
                    })
                  }}
                >
                  Submit
                </Button>
              </>
            )}
          </div>
        </div>
      </form>
    </>
  );
};

RaiseItem = reduxForm({
  form: "itemFund"
})(RaiseItem);
const selector = formValueSelector("itemFund");

RaiseItem = connect(state => {
  const titleValue = selector(
    state,
    "fund_title"
  );
  
  const fundItem = selector(state, "fund_item_desc")
  return {
    titleValue,
    fundItem
  };
})(RaiseItem);

export default RaiseItem;
