import React, { useState } from "react";
import { Field, reduxForm, stopSubmit, reset } from "redux-form";
import axiosInstance from "util/api";
import { useDispatch } from "react-redux";
import {
  SHOW_ERROR_MESSAGE,
  SHOW_SUCCESS_MESSAGE,
  CREATE_DONATION_ITEM_SUCCESS,
} from "store/actions/ActionTypes";
import DonateShareQuestionnaire from "components/containers/subpages/campaign/donate/DonateShareQuestionnaire";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import { setLoading, offLoading } from "store/actions/Common";
import noImg from "assets/images/logo.jpeg";



const DonateItemForm = ({
  fund_item,
  setCurrentOpenForm,
  setIsDonateCardButtonsOpen,
  pristine,
  submitting,
  handleSubmit
}) => {
  const [isPriceOgadonate, setIsPriceOgadonate] = useState(false);
  const [isPriceAuction, setIsPriceAuction] = useState(false);

  const handlePriceForOgadonate = () => {
    setIsPriceOgadonate(true);
    setIsPriceAuction(false);
  };

  const handleDetermineAuctionPrice = () => {
    setIsPriceAuction(true);
    setIsPriceOgadonate(false);
  };

  const [currentQuestionnaireOpen, setCurrentQuestionnaireOpen] = useState(null);
  const [isQuestionAnswerShown, setIsQuestionAnswerShown] = useState(false);

  const handleSwitchCurrentQuestion = (formToShow) => {
    setCurrentQuestionnaireOpen(formToShow);
  };

  // dispatch
  const dispatch = useDispatch();

  const renderInput = ({ input, type, meta, mime }) => {
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

  const onSubmitForm = async (postData) => {
    let formData = {
      fund_item, fund_item,
      ...postData
    }

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.getItem("access")}`,
        Accept: "application/json",
      },
    };
    dispatch(setLoading());
    try {
      const res = await axiosInstance.post(`campaign/create/donation-itemsell`, formData, config);
      dispatch({ type: CREATE_DONATION_ITEM_SUCCESS });
      dispatch({ type: SHOW_SUCCESS_MESSAGE, payload: "Thank you for donating!" });
      dispatch(stopSubmit("donateItemForm"));
      dispatch(reset("donateItemForm"));
      dispatch(offLoading());
    } catch (error) {
        if (error.response.data) {
        error.response.data.donate_item_name.map((err) => {
          return dispatch({ type: SHOW_ERROR_MESSAGE, payload: `Item Name: Can not be empty` });
        });
      }
        if (error.response.data) {
        error.response.data.donate_item_img.map((err) => {
          return dispatch({ type: SHOW_ERROR_MESSAGE, payload: `Image Field: No file selected` });
        });
      }
      if (error.response.data) {
        error.response.data.donate_determine_price.map(err => {
          return dispatch({
            type: SHOW_ERROR_MESSAGE,
            payload: `Item Image Field: ${err}`
          });
        });
      }
      // if (error.response.data) {
      //   error.response.data.donate_item_img.map((err) => {
      //     return dispatch({ type: SHOW_ERROR_MESSAGE, payload: `Validiate Image Field: ${err}` });
      //   });
      // }
    }
   
  };

  const [activeStep, setActiveStep] = useState(0);
  const getSteps = () => {
    return [
      "Item Information",
      "Upload Image",
      "Determine Sales, share, percentage",
      "Attestation",
    ];
  };

  const steps = getSteps();
  const getStepContent = (stepIndex) => {
    switch (stepIndex) {
      case 0:
        return getPersonalInformation();
      case 1:
        return getTrack();
      case 2:
        return getItems();
      case 3:
        return getAttestation();
      default:
        return "Uknown stepIndex";
    }
  };

  const getPersonalInformation = () => {
    return (
      <fieldset className="mb-3">
        <h2 className="fs-title">
          Item Name <span className="text-danger">*</span>
        </h2>
        <Field type="text" component="input" name="donate_item_name" className="input-text" />
        <h2 className="fs-title mt-3">
          Item Description <span className="text-danger">*</span>
        </h2>
        <Field
          col="50"
          row="40"
          name="donate_item_desc"
          placeholder=" Explain the state of the item, does it need minor or major repair"
          component="textarea"
          className="input-textarea"
        />
        <div className="d-flex mt-3 mb-3">
          <h2 className="fs-title mr-2">Item Category</h2>
          <Field component="select" name="donate_product_category">
            <option value="" disabled>
            </option>
            <option value="Supermarket">Supermarket</option>
            <option value="Health & Beauty">Health & Beauty</option>
            <option value="Home & Office">Home & Office</option>
            <option value="Phones & Tablets">Phones & Tablets</option>
            <option value="Computing">Computing</option>
            <option value="Electronics">Electronics</option>
            <option value="Fashion">Fashion</option>
            <option value="Baby Products">Baby Products</option>
            <option value="Gaming">Gaming</option>
            <option value="Automobile">Automobile</option>
            <option value="Other categories">Other categories</option>
          </Field>

          <h2 className="fs-title mr-2">Item Condition</h2>
          <Field component="select" name="donate_item_condition">
            <option value="" disabled>
            </option>
            <option value="New">New</option>
            <option value="Good">Good</option>
            <option value="Very Good">Very Good</option>
            <option value="Acceptable">Acceptable</option>
            <option value="Bad">bad</option>
            <option value="Fairly Used">Fairly used</option>
          </Field>
        </div>
      </fieldset>
    );
  };

  const getTrack = () => {
    return (
      <fieldset>
        <h2 className="fs-title mt-3">
          Upload image of item you wish to donate
          <span className="text-danger">*</span>
        </h2>
        <Field name="donate_item_img" type="file" component={renderInput} className="input-file" />
        {/* <h2 className="fs-title mt-3">
          upload image of proof of ownership on items above
          <b>one million naira</b>
        </h2>
        <Field
          name="donate_item_validation"
          type="file"
          component={renderInput}
          className="input-file"
        /> */}
        <div className="d-block">
          <h2 className="fs-title mt-3">Your message</h2>
          <Field
            placeholder="Give a brief message on the item"
            component="textarea"
            name="donate_comment"
            className="input-textarea"
          />
        </div>
      </fieldset>
    );
  };
  const getItems = () => {
    return (
      <fieldset>
        <div
          id="donate__share__questionnaire"
          style={{ display: !currentQuestionnaireOpen ? "block" : "none" }}
        >
          <DonateShareQuestionnaire
            setIsQuestionAnswerShown={setIsQuestionAnswerShown}
            handleSwitchCurrentQuestion={handleSwitchCurrentQuestion}
          />
        </div>
        <div
          id="donation__share__percentage"
          style={{
            display:
              isQuestionAnswerShown && currentQuestionnaireOpen === "donation__share__percentage"
                ? "block"
                : "none",
          }}
        >
          {/* percentage value */}
          <div className="d-block">
            <label>Percentage Value</label>
            <Field
              component="input"
              name="donate_percentage_value"
              className="input-textarea"
              placeholder="what's the percentage share you want if the item is sold?"
            />
            <label>Enter the price</label>
            <Field
              component="input"
              name="donate_mkt_price"
              className="input-textarea"
              placeholder="how much do you want it to be sold"
            />
          </div>
        </div>

        {/* item sell, auction */}
        <div
          id="donate__item__sell__form"
          className="mt-4"
          style={{
            display: currentQuestionnaireOpen === "donate__item__sell__form" ? "block" : "none",
          }}
        >
          {/* donate items market form */}
          <>
            {/* item sell*/}
            <h2 className="fs-title">How do you want the price to be determined?</h2>
            <label className="mr-3">
              Price Determined by <span className="text-danger">*</span>
            </label>
            <Field name="donate_determine_by" className="mb-4" component="select">
              <option value="" disabled>select</option>
              <option value="Market" onClick={handleDetermineAuctionPrice}>
                Auction Market
              </option>
              <option value="Ogadonate" onClick={handlePriceForOgadonate}>
                Ogadonate
              </option>
            </Field>

            <div>
              <label className="mr-3">
                Currency <span className="text-danger">*</span>
              </label>
              <Field name="donate_currency" className="mb-4" component="select">
                <option value="" disabled>Currency</option>
                <option value="$">$</option>
                <option value="₦">₦</option>
              </Field>
            </div>

            <div
              className="item-cash-value"
              style={{ display: isPriceOgadonate ? "block" : "none" }}
            >
              <label>
                Item Cash Value <span className="text-danger">*</span>
              </label>
              <Field
                id="price_determination"
                name="donate_determine_price"
                component="input"
                data-msg-required="Please enter a valid number"
                type="number"
                normalize={(val) => (val || "").replace(/[^\d]/g, "")}
                className="input-number"
                placeholder="What's the value of the item when converted to cash"
              />
            </div>

            {/* item category */}
            <div style={{ display: isPriceAuction ? "block" : "none" }}>
              <label className="mt-3 mr-3">Auction Type</label>
              <Field component="select" name="donate_mkt_bid">
                <option value="" disabled></option>
                <option value="Open">Open</option>
                <option value="Close">Close</option>
              </Field>
            </div>
          </>
        </div>
      </fieldset>
    );
  };

  const getAttestation = () => {
    return (
      <fieldset>
        <h2 className="fs-title">Attestation</h2>
        <div className="d-flex">
          <Field
            type="checkbox"
            id="declaration_prompt"
            name="donate_accept"
            className="mr-3 mt-1"
            defaultChecked={false}
            component="input"
          />
          <p className="attest">
            I attest that this donation is willful and I am not being forced into giving
          </p>
        </div>
        <label>
          <Field
            type="checkbox"
            id="declaration_prompt"
            name="donate_as_unknown"
            className="mr-3 mt-1"
            defaultChecked={false}
            component="input"
          />
          Donate Anonymously
        </label>
      </fieldset>
    );
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmitForm)} className="fundforms_container">
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
                      setCurrentOpenForm(null);
                      setIsDonateCardButtonsOpen(false);
                    }}
                    className="mr-2 ml-2 float-left"
                    color="primary"
                  >
                    Cancel
                  </Button>
                  <Button
                    className="mr-2 float-right"
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
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
  form: "donateItemForm",
})(DonateItemForm);
