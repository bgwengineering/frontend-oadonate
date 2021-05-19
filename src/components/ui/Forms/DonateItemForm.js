import React, { useState } from "react";
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
import { setLoading } from 'store/actions/Common';


const DonateItemForm = ({
  fund_item,
  setCurrentOpenForm,
  setIsDonateCardButtonsOpen,
}) => {
  // all states
  const [postData, updateFormData] = useState({
    donate_comment: "",
    donate_item_name: "",
    donate_item_desc: "",
    donate_item_condition: "",
    donate_as_unknown: "",
    donate_accept: "",
    donate_determine_by: "",
    donate_currency: "",
    donate_determine_price: "",
    donate_mkt_bid: "",
    donate_mkt_price: "",
    donate_percentage_value: "",
    donate_product_category:""
  });


  // item sell or market states

  const [isPriceOgadonate, setIsPriceOgadonate] = useState(false)
  const [isPriceAuction, setIsPriceAuction] = useState(false)

  const handlePriceForOgadonate = () => {
    setIsPriceOgadonate(true);
    setIsPriceAuction(false)  
  }
 
  const handleDetermineAuctionPrice = () => {
    setIsPriceAuction(true)
    setIsPriceOgadonate(false);  
 }

  // hooks
  const [itemImage, setItemImage] = useState(null);
  const [validiateImage, setValidateImage] = useState(null);

  const [currentQuestionnaireOpen, setCurrentQuestionnaireOpen] = useState(null);
  const [isQuestionAnswerShown, setIsQuestionAnswerShown] = useState(false);

  const handleSwitchCurrentQuestion = (formToShow) => {
    setCurrentQuestionnaireOpen(formToShow);
  };




  // dispatch
  const dispatch = useDispatch();

  const handleChange = (e) => {
    if ([e.target.name] == "donate_item_img") {
      setItemImage({
        donate_item_img: e.target.files,
      });
      console.log(e.target.files);
    }
    if ([e.target.name] == "donate_item_validation") {
      setValidateImage({
        donate_item_validation: e.target.files,
      });
      console.log(e.target.files);
    }
    if ([e.target.name] == "donate_item_name") {
      updateFormData({
        ...postData,
        [e.target.name]: e.target.value.trim(),
      });
    } else {
      updateFormData({
        ...postData,
        [e.target.name]: e.target.value.trim(),
      });
    }
  };

  const handleSubmit = (e) => {
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
    //  sell
    formData.append("donate_mkt_bid", postData.donate_mkt_bid);
    formData.append("donate_mkt_price", postData.donate_mkt_price);
    formData.append("donate_currency", postData.donate_currency);
    formData.append("donate_determine_price", postData.donate_determine_price);
    formData.append("donate_determine_by", postData.donate_determine_by);
    formData.append("donate_percentage_value", postData.donate_percentage_value);
    formData.append("donate_product_category", postData.donate_product_category);
    formData.append("fund_item", fund_item);

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.getItem("access")}`,
        Accept: "application/json",
      },
    };
    dispatch(setLoading())
    axiosInstance.post(`campaign/create/donation-itemsell`, formData, config)
      .then(res => {
      dispatch({type:CREATE_DONATION_ITEM_SUCCESS})
        dispatch({ type: SHOW_SUCCESS_MESSAGE, payload: "Thank you for donating!" });
      })
      .catch(error => {
        if (error.response.data) {
          error.response.data.donate_item_name.map(err => {
            return (

              dispatch({ type: SHOW_ERROR_MESSAGE, payload: `Item Name Field: ${err}` })
            )
          })
        } if (error.response.data) {
          error.response.data.donate_item_img.map(err => {
            return (
              dispatch({ type: SHOW_ERROR_MESSAGE, payload: `Item Image Field: ${err}` })
            )
          })
        } if (error.response.data) {
          error.response.data.donate_item_img.map(err => {
            return (
              dispatch({ type: SHOW_ERROR_MESSAGE, payload: `Validiate Image Field: ${err}` })
            )
          })
        }

      })
  };

  const [activeStep, setActiveStep] = useState(0);
  const getSteps = () => {
    return ["Item Information", "Upload Image", "Determine Sales, share, percentage", "Attestation"];
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
        <input
          type="text"
          name="donate_item_name"
          placeholder="please list out the items you wish to donate"
          onChange={handleChange}
          className='input-text'
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
          className='input-textarea'
        />
        <div className="d-flex mt-3 mb-3">
          <h2 className="fs-title mr-2">Item Category</h2>
          <select onChange={handleChange} name="donate_product_category">
            <option value="">Select</option>
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
          </select>
          
          <h2 className="fs-title mr-2">Item Condition</h2>
          <select onChange={handleChange} name="donate_item_condition">
            <option value="">Select</option>
            <option value="New">New</option>
            <option value="Good">Good</option>
            <option value="Very Good">Very Good</option>
            <option value="Acceptable">Acceptable</option>
            <option value="Bad">bad</option>
            <option value="Fairly Used">Fairly used</option>
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
          className='input-file'
        />
        <h2 className="fs-title mt-3">
           upload image of proof of ownership on items above{" "}
          <b>one million naira</b>
        </h2>
        <input
          name="donate_item_validation"
          type="file"
          accept="image/*"
          onChange={handleChange}
          className='input-file'
        />
        <div className="d-block">
          <h2 className="fs-title mt-3">Your message</h2>
          <textarea
            type="text"
            placeholder="Give a brief message on the item"
            onChange={handleChange}
            name="donate_comment"
            className='input-textarea'
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
        // style={{ display: !currentQuestionnaireOpen ? "block" : "none" }}
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
                : "none"
          }}
        >
          {/* percentage value */}

          <div className="d-block">
            <label>Percentage Value</label>
            <input
              type="text"
              onChange={handleChange}
              name="donate_percentage_value"
              className='input-textarea'
              placeholder="what's the percentage share you want if the item is sold?"
            />
            <label>Enter the price</label>
            <input
              type="text"
              onChange={handleChange}
              name="donate_mkt_price"
              className='input-textarea'
              placeholder="how much do you want it to be sold"
            />
          </div>
        </div>

        {/* item sell, auction */}
        <div
          id="donate__item__sell__form"
          className='mt-4'
          style={{
            display:
              currentQuestionnaireOpen === "donate__item__sell__form"
                ? "block"
                : "none"
            }}
           >
          {/* donate items market form */}
          <>
           {/* item sell*/}
           <h2 className="fs-title">How do you want the price to be determined?</h2>
          <label className='mr-3'>Price Determined by <span className='text-danger'>*</span></label>
          <select
            name="donate_determine_by"
            className="mb-4"
            onChange={handleChange}
            >
            <option value="">Select</option>
            <option value="Market" onClick={handleDetermineAuctionPrice }>Auction Market</option>
            <option value="Ogadonate" onClick={handlePriceForOgadonate}>Ogadonate</option>
          </select>

          <div>
          <label className='mr-3'>Currency <span className='text-danger'>*</span></label>
          <select
            name="donate_currency"
            className="mb-4"
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="$">$</option>
            <option value="₦">₦</option>
          </select>
          </div>

          <div className="item-cash-value" style={{display: isPriceOgadonate ? "block" : "none" }}>
          <label >Item Cash Value <span className='text-danger'>*</span></label>
          <input
            id="price_determination"
            name="donate_determine_price"
            onChange={handleChange}
            data-msg-required="Please enter a valid number"
            type="number"
            normalize={(val) => (val || "").replace(/[^\d]/g, "")}
            className='input-number'
            placeholder="What's the value of the item when converted to cash"
          />
       </div>

        {/* item category */}
        <div style={{display: isPriceAuction ? "block" : "none" }}>
          <label className='mt-3 mr-3'>Auction Type</label>
          <select onChange={handleChange} name="donate_mkt_bid">
            <option value="">Select</option>
            <option value="Open">Open</option>
            <option value="Close">Close</option>
          </select>
        </div>
          </>
        </div>
      </fieldset>
    );
  };

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
      <form onSubmit={handleSubmit} className='fundforms_container'>
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

          <div >
            {activeStep !== steps.length ? (
              <div>
                {getStepContent(activeStep)}
                <div className='mt-4'>
                  {activeStep !== 0 &&
                    <Button
                      disabled={activeStep === 0}
                      onClick={handleBack}
                      className="mr-2 float-left"
                      color="primary"
                    >
                      Back
                  </Button>
                  }
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
                    className='MuiButton-containedPrimary'
                  >
                    Submit
                </Button>
                </>
              )}
          </div>
        </div>
      </form>
    </>
  )




};

export default DonateItemForm;
