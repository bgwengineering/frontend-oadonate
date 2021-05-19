import React, { useState } from "react";
import axiosInstance from "util/api";
import { useDispatch } from "react-redux";
import {
  SHOW_ERROR_MESSAGE,
  SHOW_SUCCESS_MESSAGE
} from "store/actions/ActionTypes";
// import DonateItemSellForm from "./DonateItemSellForm";
import DonateShareQuestionnaire from "components/containers/subpages/campaign/donate/DonateShareQuestionnaire";
import { setLoading } from 'store/actions/Common';
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";

const DonateOgaItemForm = ({
  fund_item_sell,
  setCurrentOpenForm,
  setIsDonateOgaForm
}) => {
  // all states
  const [postData, updateFormData] = useState({
    donate_comment: "",
    donate_item_name: "",
    donate_item_desc: "",
    donate_item_condition: "",
    donate_as_unknown: "",
    donate_accept: "",

    doante_determine_by: "",
    donate_currency: "",
    donate_determine_price: "",
    donate_mkt_bid: "",
    donate_mkt_price: "",
    donate_percentage_value: ""
  });
  const [itemImage, setItemImage] = useState(null);
  const [validiateImage, setValidateImage] = useState(null);

  const [currentQuestionnaireOpen, setCurrentQuestionnaireOpen] = useState(
    null
  );
  const [isQuestionAnswerShown, setIsQuestionAnswerShown] = useState(false);

  const handleSwitchCurrentQuestion = formToShow => {
    setCurrentQuestionnaireOpen(formToShow);
  };

  // dispatch
  const dispatch = useDispatch();

  const handleChange = e => {
    if ([e.target.name] == "donate_item_img") {
      setItemImage({
        donate_item_img: e.target.files
      });
      console.log(e.target.files);
    }
    if ([e.target.name] == "donate_item_validation") {
      setValidateImage({
        donate_item_validation: e.target.files
      });
      console.log(e.target.files);
    }
    if ([e.target.name] == "donate_item_name") {
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
    formData.append("donate_comment", postData.donate_comment);
    formData.append("donate_item_name", postData.donate_item_name);
    formData.append("donate_item_desc", postData.donate_item_desc);
    formData.append("donate_item_condition", postData.donate_item_condition);
    formData.append("donate_as_unknown", postData.donate_as_unknown);
    formData.append("donate_accept", postData.donate_accept);
    formData.append("donate_item_img", itemImage.donate_item_img[0]);

    formData.append(
      "donate_item_validation",
      validiateImage.donate_item_validation[0]
    );
    //  selll
    formData.append("donate_mkt_bid", postData.donate_mkt_bid);
    formData.append("donate_mkt_price", postData.donate_mkt_price);
    formData.append("donate_currency", postData.donate_currency);
    formData.append("donate_determine_price", postData.donate_determine_price);
    formData.append("doante_determine_by", postData.doante_determine_by);
    formData.append(
      "donate_percentage_value",
      postData.donate_percentage_value
    );

    formData.append("fund_item_sell", fund_item_sell);

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.getItem("access")}`,
        Accept: "application/json"
      }
    };
    axiosInstance
      .post(`campaign/create/donation-itemsell`, formData, config)
      .then(res => {
        dispatch({
          type: SHOW_SUCCESS_MESSAGE,
          payload: "Thank you for donating!"
        });
      })
      .catch(error => {
        if (error.response.data) {
          error.response.data.donate_item_name.map(err => {
            return dispatch({
              type: SHOW_ERROR_MESSAGE,
              payload: `Item Name Field: ${err}`
            });
          });
        }
        if (error.response.data) {
          error.response.data.donate_item_img.map(err => {
            return dispatch({
              type: SHOW_ERROR_MESSAGE,
              payload: `Item Image Field: ${err}`
            });
          });
        }
        if (error.response.data) {
          error.response.data.donate_item_img.map(err => {
            return dispatch({
              type: SHOW_ERROR_MESSAGE,
              payload: `Validiate Image Field: ${err}`
            });
          });
        }
      });
  };

  const [activeStep, setActiveStep] = useState(0);
  const getSteps = () => {
    return [
      "Item Information",
      "Upload Image",
      "Attestation"
    ];
  };

  const steps = getSteps();
  const getStepContent = stepIndex => {
    switch (stepIndex) {
      case 0:
        return getPersonalInformation();
      case 1:
        return getTrack();
      case 2:
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
        <input
          type="text"
          name="donate_item_name"
          placeholder="please list out the items you wish to donate"
          onChange={handleChange}
          className="input-text"
        />
        <h2 className="fs-title mt-3">
          Item Description <span className="text-danger">*</span>
        </h2>
        <textarea
          col="50"
          row="40"
          name="donate_item_desc"
          placeholder=" Explain the state of the item, does it need minor or major repair"
          onChange={handleChange}
          className="input-textarea"
        />
        <div className="d-flex mt-3 mb-3">
          <h2 className="fs-title mr-2">Item Condition</h2>
          <select onChange={handleChange} name="donate_item_condition">
            <option value="">Select</option>
            <option value="New">New</option>
            <option value="Good">Good</option>
            <option value="Very Good">Very Good</option>
            <option value="Acceptable">Acceptable</option>
            <option value="bad">bad</option>
            <option value="fairly used">Fairly used</option>
          </select>
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
        <input
          name="donate_item_img"
          type="file"
          accept="image/*"
          onChange={handleChange}
          className="input-file"
        />
        <h2 className="fs-title mt-3">
          {" "}
          upload image of proof of ownership on items above{" "}
          <b>one million naira</b>
        </h2>
        <input
          name="donate_item_validation"
          type="file"
          accept="image/*"
          onChange={handleChange}
          className="input-file"
        />
        <div className="d-block">
          <h2 className="fs-title mt-3">Your message</h2>
          <textarea
            type="text"
            placeholder="Give a brief message on the item"
            onChange={handleChange}
            name="donate_comment"
            className="input-textarea"
          />
        </div>
      </fieldset>
    );
  };
  // const getItems = () => {
  //   return (
  //     <fieldset>
  //       <div
  //         id="donate__share__questionnaire"
  //         style={{ display: !currentQuestionnaireOpen ? "block" : "none" }}
  //       >
  //         <DonateShareQuestionnaire
  //           setIsQuestionAnswerShown={setIsQuestionAnswerShown}
  //           handleSwitchCurrentQuestion={handleSwitchCurrentQuestion}
  //         />
  //       </div>
  //       <div
  //         id="donation__share__percentage"
  //         style={{
  //           display:
  //             isQuestionAnswerShown &&
  //             currentQuestionnaireOpen === "donation__share__percentage"
  //               ? "block"
  //               : "none"
  //         }}
  //       >
  //         <div className="d-block">
  //           <label>Percentage Value</label>
  //           <input
  //             type="text"
  //             onChange={handleChange}
  //             name="donate_percentage_value"
  //             className="input-text"
  //           />
  //         </div>
  //       </div>

  //       {/* item sell, auction */}
  //       <div
  //         id="donate__item__sell__form"
  //         style={{
  //           display:
  //             currentQuestionnaireOpen === "donate__item__sell__form"
  //               ? "block"
  //               : "none"
  //         }}
  //       >
  //         <DonateItemSellForm />
  //       </div>
  //     </fieldset>
  //   );
  // };

  //  getAttestation
  const getAttestation = () => {
    return (
      <fieldset>
        <h2 className="fs-title">Attestation</h2>
        <div className="d-flex">
          <input
            type="checkbox"
            id="declaration_prompt"
            name="donate_accept"
            className="mr-3 mt-1"
            defaultChecked={false}
            onChange={handleChange}
          />
          <p className="attest">
            I attest that this donation is willful and I am not being forced
            into giving
          </p>
        </div>
        <label>
          <input
            type="checkbox"
            id="declaration_prompt"
            name="donate_as_unknown"
            className="mr-3 mt-1"
            defaultChecked={false}
            onChange={handleChange}
          />
          Donate Anonymously
        </label>
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
                      setIsDonateOgaForm(false);
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
                  type="submit"
                  name="submit"
                  className="MuiButton-containedPrimary"
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

export default DonateOgaItemForm;
