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




const DonateItemForm = ({
    fund_item,
    setCurrentOpenForm,
    setIsDonateCardButtonsOpen,
    pristine,
    submitting,
}) => {
    const [isPriceOgadonate, setIsPriceOgadonate] = useState(false);
    const [isPriceAuction, setIsPriceAuction] = useState(false);
    const [postData, setPostData] = useState({
        donate_item_name: "",
        donate_item_desc: "",
        donate_item_condition: "",
        donate_as_unknown: "",
        donate_accept: "",
        donate_item_validation: "",
        donate_mkt_bid: "",
        donate_mkt_price: "",
        donate_currency: "",
        donate_determine_price: "",
        donate_determine_by: "",
        donate_percentage_value: "",
        donate_product_category: "",
        donate_bid_min_val: "",
        donate_bid_endAt: "",
    })
    const [itemImage, setItemImage] = useState(null);
  

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
   
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setPostData({ ...postData, [e.target.name]: e.target.value })
    }
    const handleImgChange = (event) => {
        event.preventDefault();
        let imageFile = event.target.files[0];
        if(imageFile) {
            const localImageUrl = URL.createObjectURL(imageFile);
            const imageObject = new window.Image();

            imageObject.onload = () => {
                imageFile.width = imageObject.naturalWidth;
                imageFile.height = imageObject.naturalHeight;
                URL.revokeObjectURL(imageFile);
            };
            imageObject.src = localImageUrl;
            setItemImage({
              donate_item_img: imageFile
          });
        }
    };

    const onSubmitForm = async (e) => {
      e.preventDefault();
        let formData = new FormData();
        formData.append("donate_item_img", itemImage.donate_item_img);
        formData.append("donate_bid_endAt", postData.donate_bid_endAt);
        formData.append("donate_bid_min_val", postData.donate_bid_min_val);
        formData.append("donate_item_name", postData.donate_item_name);
        formData.append("donate_item_desc", postData.donate_item_desc);
        formData.append("donate_item_condition", postData.donate_item_condition);
        formData.append("donate_as_unknown", postData.donate_as_unknown);
        formData.append("donate_accept", postData.donate_accept);
        formData.append("donate_mkt_bid ", postData.donate_mkt_bid);
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
            dispatch(offLoading());
          } else if (error.response.data) {
            error.response.data.donate_item_img.map((err) => {
              return dispatch({ type: SHOW_ERROR_MESSAGE, payload: `Image Field: No file selected` });
            });
            dispatch(offLoading());
          } else if (error.response.data) {
            error.response.data.donate_item_condition.map((err) => {
              return dispatch({ type: SHOW_ERROR_MESSAGE, payload: `Item Image Field: ${err}` });
            });
            dispatch(offLoading());
        }
            // } else {
            //     error.response.data.donate_item_img.map((err) => {
            //         return dispatch({ type: SHOW_ERROR_MESSAGE, payload: `Validiate Image Field: ${err}` });
            //       });
            //       dispatch(offLoading());
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
        <input type="text" onChange={handleChange} name="donate_item_name" className="input-text" />
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
          <h2 className="fs-title mr-2">Item Category</h2>
          <select onChange={handleChange} name="donate_product_category">
          <option value="">select category</option>
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
          <select component="select" name="donate_item_condition">
            <option value="">select condition</option>
            <option value="New">New</option>
            <option value="Good">Good</option>
            <option value="Very Good">Very Good</option>
            <option value="Acceptable">Acceptable</option>
            <option value="Bad">Bad</option>
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
        <input name="donate_item_img" type="file" accept="image/png, image/jpeg" onChange={handleImgChange} className="input-file" />
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
          <textarea
            placeholder="Give a brief message on the item"
            onChange={handleChange}
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
            <input
              onChange={handleChange}
              name="donate_percentage_value"
              className="input-textarea"
              placeholder="what's the percentage share you want if the item is sold?"
            />
            <label>Enter the price</label>
            <input
              onChange={handleChange}
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
            <select name="donate_determine_by" className="mb-4" onChange={handleChange}>
            <option value="">select market</option>
              <option value="Market" onClick={handleDetermineAuctionPrice}>
                Auction Market
              </option>
              <option value="Ogadonate" onClick={handlePriceForOgadonate}>
                Ogadonate
              </option>
            </select>

            <div className="d-flex">
            <div>
              <label className="mr-3">
                Currency <span className="text-danger">*</span>
              </label>
              <select name="donate_currency" className="mb-4" onChange={handleChange}>
              <option value="">select currency</option>
                <option value="$">$</option>
                <option value="₦">₦</option>
              </select>
            </div>
            <div style={{ display: isPriceAuction ? "block" : "none" }}>
              <label className="mt-3 mr-3">Auction Type <span className="text-danger">*</span></label>
              <select onChange={handleChange} name="donate_mkt_bid">
              <option value="">select auction type</option>
                <option value="Open">Open</option>
                <option value="Close">Close</option>
              </select>
            </div>
            </div>
            <div
              className="item-cash-value"
              style={{ display: isPriceOgadonate ? "block" : "none" }}
            >
              <label>
                Item Cash Value <span className="text-danger">*</span>
              </label>
              <input
                id="donate_bid_val"
                name="donate_determine_price"
                onChange={handleChange}
                data-msg-required="Please enter a valid number"
                type="number"
                normalize={(val) => (val || "").replace(/[^\d]/g, "")}
                className="input-number"
                placeholder="What's the value of the item when converted to cash"
              />
            </div>

            <div
              className="item-cash-value"
              style={{ display:  isPriceAuction ? "block" : "none" }}
            >
              <label>
                Auction Price <span className="text-danger">*</span>
              </label>
              <input
                id="price_determination"
                name="donate_bid_min_val"
                onChange={handleChange}
                data-msg-required="Please enter a valid number"
                type="number"
                normalize={(val) => (val || "").replace(/[^\d]/g, "")}
                className="input-number"
                placeholder="What's the minimum value of the item for auction bid(e.g 50,000)"
              />
            </div>
            
            <div
              className="item-cash-value"
            >
              <label>
                Auction End Date <span className="text-danger">*</span>
              </label>
              <input
                id="donate_bid_endAt"
                name="donate_bid_endAt"
                onChange={handleChange}
                type="date"
                className="input-date"
              />
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
          <input
            type="checkbox"
            id="declaration_prompt"
            name="donate_accept"
            className="mr-3 mt-1"
            defaultChecked={false}
            onChange={handleChange}
          />
          <p className="attest">
            I attest that this donation is willful and I am not being forced into giving
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
        <form onSubmit={onSubmitForm} className="fundforms_container">
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
                      handleReset();
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

export default DonateItemForm;