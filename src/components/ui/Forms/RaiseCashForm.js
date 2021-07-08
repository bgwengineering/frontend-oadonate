import React, { useState } from "react";
import { useDispatch} from "react-redux";
import { Field, reduxForm, stopSubmit, reset } from "redux-form";
import axiosInstance from "util/api";
import * as actionTypes from "store/actions/ActionTypes";
import { setLoading, offLoading } from "store/actions/Common";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";


const RaiseCash = ({
  setIsRaiseCardButtonsOpen,
  setCurrentOpenForm,
  mime,
  handleSubmit,
  submitting,
  pristine,
}) => {
  
  const dispatch = useDispatch();
  const renderInput = ({ input, type, meta }) => {
    return (
      <div>
        <input
          name={input.name}
          type={type}
          accept={mime}
          onChange={(event) => handleChange(event, input)}
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

  // onSubmit
  const onSubmit = async (formValues) => {
    let formData = new FormData();
    formData.append("fund_title", formValues.fund_title);
    formData.append("fund_category", formValues.fund_category);
    formData.append("fund_currency_type", formValues.fund_currency_type);
    formData.append("fund_cash_amount", formValues.fund_cash_amount);
    formData.append("fund_endAt", formValues.fund_endAt);
    formData.append("fund_purpose", formValues.fund_purpose);
    formData.append("fund_img", formValues.fund_img);

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.getItem("access")}`,
        Accept: "application/json",
      },
    };
    dispatch(setLoading());
    try {
      const response = await axiosInstance.post("campaign/create/fundraise-cash", formData, config);
      dispatch({ type: actionTypes.CREATE_FUND_CASH_SUCCESS });
      dispatch({ type: actionTypes.SHOW_SUCCESS_MESSAGE, payload: "Campaign Created!" });
      dispatch(stopSubmit("cashfund"));
      dispatch(reset("cashfund"));
      dispatch(offLoading());
    } catch (error) {
    
      dispatch(setLoading());
      dispatch({ type: actionTypes.CREATE_FUND_CASH_FAIL });
      if (error.response === "undefined") {
        dispatch({
          type: actionTypes.SHOW_ERROR_MESSAGE,
          payload: `Error: ${error.response.data}`,
        });
        dispatch(offLoading());
      }
      if (error.response.data) {
        error.response.data.fund_category.map((err) => {
          return dispatch({
            type: actionTypes.SHOW_ERROR_MESSAGE,
            payload: "Category Field: Must not be empty",
          });
        });
        dispatch(offLoading());
      }
      if (error.response.data) {
        error.response.data.fund_img.map((err) => {
          return dispatch({
            type: actionTypes.SHOW_ERROR_MESSAGE,
            payload: `Fund Image Field: Must not be empty`,
          });
        });
      }
      // if (error.response.data) {
      //   error.response.data.fund_title.map((err) => {
      //     return dispatch({
      //       type: actionTypes.SHOW_ERROR_MESSAGE,
      //       payload: `Fund Title Field: ${err}`,
      //     });
      //   });
        // dispatch(offLoading());
      // }
      // if (error.response.data) {
      //   error.response.data.fund_purpose.map((err) => {
      //     return dispatch({
      //       type: actionTypes.SHOW_ERROR_MESSAGE,
      //       payload: `Purpose Field: ${err}`,
      //     });
      //   });
      //   dispatch(offLoading());
      // }
      if (error.response.data) {
        error.response.data.fund_currency_type.map((err) => {
          return dispatch({
            type: actionTypes.SHOW_ERROR_MESSAGE,
            payload: `Currency Field: Must not be empty`,
          });
        });
        dispatch(offLoading());
      }
      if (error.response.data) {
        error.response.data.fund_cash_amount.map((err) => {
          return dispatch({
            type: actionTypes.SHOW_ERROR_MESSAGE,
            payload: `Currency Field: ${err}`,
          });
        });
        dispatch(offLoading());
      }
      dispatch(stopSubmit("cashfund"));
      dispatch(reset("cashfund"));
      dispatch(offLoading());
    
  };
  }

  // stepper and steps
  const [activeStep, setActiveStep] = useState(0);
  const getSteps = () => {
    return ["Basic Information", "Add a photo"];
  };

  const steps = getSteps();
  const getStepContent = (stepIndex) => {
    switch (stepIndex) {
      case 0:
        return getPersonalInformation();
      case 1:
        return getPhoto();

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
          component="input"
          type="text"
          placeholder="what should your cause be called?"
          name="fund_title"
          className="input-text"
        />
        <div>
          <label className="mr-3 mt-3 text-uppercase font-weight-bold">
            Select fund raise categories
          </label>
          <Field name="fund_category" id="categories" component="select">
            <option value="">Select Category</option>
            <option value="Personal_need">Personal</option>
            <option value="Community">Community</option>
            <option value="Start_up">Start up</option>
            <option value="NGO">NGO</option>
          </Field>
        </div>
        <div className="mt-4 d-flex">
          <h2 className="fs-title mr-2 text-uppercase font-weight-bold">
            How much would you like to raise?
          </h2>
        </div>
        <span>
          <i className="mr-3">select option for dollar, naira</i>
          <Field name="fund_currency_type" component="select">
            <option value="">Select Currency</option>
            <option value="$">$</option>
            <option value="₦">₦</option>
          </Field>
        </span>

        <Field
          id="amount"
          name="fund_cash_amount"
          required="required"
          component="input"
          data-msg-required="Please enter a valid number"
          type="number"
          normalize={val => (val || "").replace(/[^\d]/g, "")}
          className="mt-3 input-number"
          placeholder="Type the amount you need"
        />

        <p>
          <i>
            Keep in mind that transaction fees of (5%) including credit and
            debit charges are deducted from each donation
          </i>
        </p>
      </fieldset>
    );
  };

  const getPhoto = () => {
    return (
      <fieldset>
        <h2 className="fs-title text-uppercase font-weight-bold">
          Add a cover photo
        </h2>
        <h3 className="fs-subtitle">
          Please upload a picture that describes your need
        </h3>
        <label>Choose your image file</label>
        <div>
          <Field
            name="fund_img"
            type="file"
            component={renderInput}
            className="input-number"
          />
        </div>
        <h2 className="fs-title mt-4 text-uppercase font-weight-bold">
          Campaign End date
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
          type="text"
          name="fund_purpose"
          component="textarea"
          placeholder="Briefly explain the reason for raising funds"
          className="input-textarea"
        />
      </fieldset>
    );
  };

  const handleFinish = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      }, setActiveStep((prevActiveStep) => prevActiveStep + 1))
  };

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  }
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="fundforms_container">
        <div className="w-80">
          <Stepper activeStep={activeStep} alternativeLabel className="horizontal-stepper-linear">
            {steps.map((label, index) => {
              return (
                <Step
                  key={label}
                  className={`horizontal-stepper ${index === activeStep ? "active" : ""}`}
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
                    className="ml-2 mr-2"
                    color="primary"
                  >
                    Cancel
                  </Button>

                  <Button
                    className="mr-2 float-right"
                    variant="contained"
                    color="primary"
                    onClick={activeStep === steps.length - 1 ? handleFinish : handleNext}
                    // disabled={true}
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
                  onClick={() => {
                    setIsRaiseCardButtonsOpen(false);
                    setCurrentOpenForm(null);
                  }}
                  className="ml-2 mr-2"
                  color="primary"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  name="submit"
                  className="MuiButton-containedPrimary"
                  onClick={() => {
                    setTimeout(() => {
                      setIsRaiseCardButtonsOpen(false);
                      setCurrentOpenForm(null);
                      handleReset();
                    }, 9000);
                    window.scrollTo({
                      top: 0,
                      behavior:'smooth'
                    })
                  }}
                  disabled={pristine || submitting}
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

export default reduxForm({
  form: "cashfund",
})(RaiseCash);
