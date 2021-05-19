import React, { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import axiosInstance from "util/api";
import {
  SHOW_ERROR_MESSAGE,
  SHOW_SUCCESS_MESSAGE,
  CREATE_FUND_ITEM_FAIL
} from "store/actions/ActionTypes";
import { setLoading, offLoading } from 'store/actions/Common';
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";

const RaiseCash = ({ setIsRaiseCardButtonsOpen, setCurrentOpenForm }) => {
  const dispatch = useDispatch();
  const submitted = useSelector(state=>state.fundDonateReducer.submitted)
  const [postData, updateFormData] = useState({
    fund_category: "",
    fund_title: "",
    fund_cash_amount: "",
    fund_endAt: "",
    fund_currency_type: "",
    fund_purpose: ""
  });
  const [postimage, setPostImage] = useState(null);

  const handleChange = e => {
    if ([e.target.name] == "fund_img") {
      setPostImage({
        fund_img: e.target.files
      });
    }
    if ([e.target.name] == "fund_title") {
      updateFormData({
        ...postData,
        [e.target.name]: e.target.value.trim()
      });
    } else {
      updateFormData({
        ...postData,
        [e.target.name]: e.target.value.trim()
      });
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("fund_title", postData.fund_title);
    formData.append("fund_category", postData.fund_category);
    formData.append("fund_currency_type", postData.fund_currency_type);
    formData.append("fund_cash_amount", postData.fund_cash_amount);
    formData.append("fund_endAt", postData.fund_endAt);
    formData.append("fund_purpose", postData.fund_purpose);
    formData.append("fund_img", postimage.fund_img[0]);
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.getItem("access")}`,
        Accept: "application/json"
      }
    };
    dispatch(setLoading());
    axiosInstance
      .post(`campaign/create/fundraise-cash`, formData, config)
      .then(res => {
        dispatch({ type: SHOW_SUCCESS_MESSAGE, payload: "Campaign Created!" });
      })
      .catch(error => {
        dispatch({ type: CREATE_FUND_ITEM_FAIL });
        dispatch(offLoading())
        if (error.response.data) {
          error.response.data.fund_title.map(err => {
            return dispatch({
              type: SHOW_ERROR_MESSAGE,
              payload: `Fund Title Field: ${err}`
            });
          });
        }
        if (error.response.data) {
          error.response.data.fund_category.map(err => {
            return dispatch({
              type: SHOW_ERROR_MESSAGE,
              payload: `Category Field: ${err}`
            });
          });
        }
        if (error.response.data) {
          error.response.data.fund_img.map(err => {
            return dispatch({
              type: SHOW_ERROR_MESSAGE,
              payload: `Fund Image Field: ${err}`
            });
          });
        }
        if (error.response.data) {
          error.response.data.fund_purpose.map(err => {
            return dispatch({
              type: SHOW_ERROR_MESSAGE,
              payload: `Purpose Field: ${err}`
            });
          });
        }
        if (error.response.data) {
          error.response.data.fund_currency_type.map(err => {
            return dispatch({
              type: SHOW_ERROR_MESSAGE,
              payload: `Currency Field: ${err}`
            });
          });
        }
      });
  };

  const [activeStep, setActiveStep] = useState(0);
  const getSteps = () => {
    return ["Basic Information", "Add a photo"];
  };

  const steps = getSteps();
  const getStepContent = stepIndex => {
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
        <h2 className="fs-title text-capitalize">Fundraise Title</h2>
        <input
          type="text"
          placeholder="what should your cause be called?"
          onChange={handleChange}
          name="fund_title"
          className="input-text"
        />
        <div>
          <label className="mr-3 mt-3">Select fund raise categories</label>
          <select onChange={handleChange} name="fund_category" id="categories">
            <option value="">select</option>
            <option value="Personal_need">Personal</option>
            <option value="Community">Community</option>
            <option value="Start_up">Start up</option>
            <option value="NGO">NGO</option>
          </select>
        </div>
        <div className="mt-4 d-flex">
          <h2 className="fs-title mr-2">How much would you like to raise?</h2>
        </div>
        <span>
          <i className="mr-3">select option for dollar, naira, euro</i>
          <select onChange={handleChange} name="fund_currency_type">
            <option value="">select</option>
            <option value="$">$</option>
            <option value="₦">₦</option>
          </select>
        </span>

        <input
          id="amount"
          name="fund_cash_amount"
          required="required"
          onChange={handleChange}
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
        <h2 className="fs-title">Add a cover photo</h2>
        <h3 className="fs-subtitle">
          Please upload a picture that describes your need
        </h3>
        <label>Choose your image file</label>
        <div>
          <input
            name="fund_img"
            type="file"
            accept="image/*"
            onChange={handleChange}
            className="input-number"
          />
        </div>
        <h2 className="fs-title mt-4">Campaign End date</h2>
        <input
          type="date"
          name="fund_endAt"
          onChange={handleChange}
          className="input-date"
        />

        <h2 className="fs-title mt-4">Tell your story</h2>
        <textarea
          type="text"
          name="fund_purpose"
          onChange={handleChange}
          placeholder="Briefly explain the reason for raising funds"
          className="input-textarea"
        ></textarea>
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
      <form onSubmit={handleSubmit} className="fundforms_container">
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
                    className="ml-2 mr-2"
                    color="primary"
                  >
                    Cancel
                  </Button>

                  <Button
                    className="mr-2 float-right"
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
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
                      setIsRaiseCardButtonsOpen(submitted);
                      setCurrentOpenForm(null);
                    }, 5000);
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

export default RaiseCash;
