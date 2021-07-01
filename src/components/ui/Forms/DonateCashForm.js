import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { donateToCash } from "store/actions/fund_donate/FundDonate";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import axiosInstance from "util/api";
import { setLoading } from "store/actions/Common";
import { useMediaQuery } from "react-responsive";

const stripePromise = window.Stripe(
  "pk_test_51Ihz1EJtAhKBp45zJXZLT2RmTKQLDbpZRPerC1uKcnQ69N1R1IchlmRhCBMp3cwJ4DIVpSf9iHe4Hnq9wUdAC6OA00DNznJtw5"
);

const DonateCashForm = ({
  fund_cash,
  setCurrentOpenForm,
  setIsDonateCardButtonsOpen
}) => {
  const paystackUrl = useSelector(state => state.fundDonateReducer.paystackUrl);

  useEffect(() => {
    if (paystackUrl.length >= 1) {
      window.location = paystackUrl;
    }
  }, [paystackUrl]);

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get("success")) {
      setMessage("Order placed! You will receive an email confirmation.");
    }
    if (query.get("canceled")) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);

  const [giveOgadonate, setGiveOgadonate] = useState(true);
  const [message, setMessage] = useState(false);
  const [percentage, setPercentage] = useState(true);
  const [paystack, setPaystack] = useState(false);
  const [Stripebtn, setStripebtn] = useState(false);

  const [donateFields, setDonateFields] = useState({
    donate_amount: "",
    donate_payment_method: "",
    donate_comment: "",
    donate_currency: "",
    donate_collect_per: false,
    donate_as_unknown: "",
    donate_accept: "",
    donate_percentage_value: ""
  });

  const setPaystackBtn = () => {
    setStripebtn(false);
    setPaystack(true);
  };

  const setStripeBtn = () => {
    setPaystack(false);
    setStripebtn(true);
  };

  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 768px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 767px)' })

  const dispatch = useDispatch();

  const {
    donate_amount,
    donate_payment_method,
    donate_comment,
    donate_currency,
    donate_as_unknown,
    donate_accept,
    donate_percentage_value
  } = donateFields;

  const fivePercent = (5 / 100) * donate_amount;
  const initial_amount = parseInt(donate_amount);
  const tol_5_percentage = parseInt(donate_amount) + parseInt(fivePercent);
  const amount_given =
    parseInt(initial_amount) + (parseInt(donate_percentage_value) || 0);

  const handleSubmit = e => {
    e.preventDefault();
    const formData = {
      donate_amount: giveOgadonate ? tol_5_percentage : amount_given,
      donate_payment_method,
      donate_comment,
      donate_currency,
      donate_collect_per: giveOgadonate,
      donate_as_unknown,
      donate_percentage_value,
      donate_accept,
      fund_cash: fund_cash,
      donate_percent_amount: giveOgadonate ? fivePercent : initial_amount
    };
    dispatch(donateToCash(formData));
  };

  const Message = ({ message }) => (
    <section>
      <p>{message}</p>
    </section>
  );
  const handleClick = async e => {
    e.preventDefault();
    const formData = {
      donate_amount: giveOgadonate ? tol_5_percentage : amount_given,
      donate_payment_method,
      donate_comment,
      donate_currency,
      donate_collect_per: giveOgadonate,
      donate_as_unknown,
      donate_percentage_value,
      donate_accept,
      fund_cash: fund_cash,
      donate_percent_amount: giveOgadonate ? fivePercent : initial_amount
    };

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.getItem("access")}`,
        Accept: "application/json"
      }
    };
    const stripe = stripePromise;
      const res = await axiosInstance.post("campaign/create/donation-cash", formData, config)
      const session = res.data;
      const result = stripe.redirectToCheckout({ sessionId: session });
      if(result.error){
        setMessage(true);
        return message ? <Message message={result.error.message} /> : null;
      }
  };

  const handleChange = e => {
    setDonateFields({ ...donateFields, [e.target.name]: e.target.value });
  };


  const ToggleSwitch = ({ checked, onChange, id, name }) => (
    <div>
      <input
        name={name}
        type="checkbox"
        checked={checked}
        onChange={e => {
          onChange(e.target.checked);
          setGiveOgadonate(!percentage);
        }}
        id={id}
      />
    </div>
  );

  const [activeStep, setActiveStep] = useState(0);
  const getSteps = () => {
    return ["Amount", "Message", "Support Ogadonate", "Attestation"];
  };

  const steps = getSteps();

  const getStepContent = stepIndex => {
    switch (stepIndex) {
      case 0:
        return getPersonalInformation();
      case 1:
        return getMessage();
      case 2:
        return supportOgd();
      case 3:
        return getPayment();
      default:
        return "Uknown stepIndex";
    }
  };

  // you can call this function anything
  const getPayment = () => {
    return (
      <>
        <label className="mt-3 text-uppercase font-weight-bold">
          Please indicate if you want to donate anonymously
        </label>
        <div className="d-flex">
          <input
            type="checkbox"
            id="anonymous_check"
            name="donate_as_unknown"
            className="mr-3 mt-1"
            defaultChecked={false}
            onChange={handleChange}
          />
          <label className='mt-2'> Yes, I want to donate anonymously </label>
        </div>
        <h2 className="fs-title font-weight-bold text-uppercase mt-3"> Attestation </h2>
        <div className="d-flex">
          <input
            name="donate_accept"
            type="checkbox"
            required
            className="mr-3 mt-4"
            defaultChecked={false}
            onChange={handleChange}
          />
          <p className="attest">
            I attest that this donation is willful and I am not being forced
            into giving
          </p>
        </div>
      </>
    );
  };

  const getPersonalInformation = () => {
    return (
      <fieldset>
        <h2 className="fs-title">
          <b>How much do you want to donate</b><span className="text-danger">*</span>
        </h2>
        <div className="d-flex mt-4">
          <h6 className="mr-3 ">currency type :</h6>
          <select
            name="donate_currency"
            className="mb-4"
            onChange={handleChange}
          >
            <option value="">select currency</option>
            <option value="$">$</option>
            <option value="₦">₦</option>
          </select>
        </div>
        <input
          id="amount"
          name="donate_amount"
          required="required"
          type="number"
          className="input-number all-input-fields"
          placeholder="Amount you want to give"
          data-rule-required="true"
          data-msg-required="Please enter a valid number"
          onChange={handleChange}
          value={donate_amount}
        />
      </fieldset>
    );
  };

  const getMessage = () => {
    return (
      <fieldset>
        <label className='font-weight-bold text-uppercase'> Message</label>
        <textarea
          className="donate-message-comment all-input-fields"
          col="50"
          row="50"
          onChange={handleChange}
          placeholder="write a Message or Comment to the fund Raiser"
          name="donate_comment"
          value={donate_comment}
        />
      </fieldset>
    );
  };

  const supportOgd = () => {
    return (
      <>
        <fieldset>
          <label className="mt-2 mb-3 font-weight-bold text-uppercase">
            Would you like to donate an extra amount to ogadonate?
          </label>
          <div className="d-flex">
            <ToggleSwitch
              checked={percentage}
              id="form"
              onChange={setPercentage}
              name="donate_collect_per"
            />
            <label className="ml-3">
              Yes, I would like to donate an extra amount to ogadonate
            </label>
          </div>
          {percentage ? null : (
            <input
              name="donate_percentage_value"
              type="number"
              className="mr-1 ml-2 mt-2"
              onChange={handleChange}
              value={donate_percentage_value}
            />
          )}
          <div>
            <h3>{percentage ? tol_5_percentage : amount_given}</h3>
          </div>
          <h2 className="fs-title mt-3 font-weight-bold text-uppercase">Payment Information</h2>
          <div className="pay-input-field d-flex">
            <input
              name="donate_payment_method"
              type="radio"
              className="mr-1 ml-2 mt-2"
              onChange={handleChange}
              value="PayStack"
              onClick={setPaystackBtn}
            />
            <p className="mt-2">PayStack</p>
            <input
              name="donate_payment_method"
              type="radio"
              className="mr-1 ml-3 mt-2"
              onChange={handleChange}
              value="Stripe"
              onClick={setStripeBtn}
            />
            <p className="mt-2">Stripe</p>
          </div>
        </fieldset>
      </>
    );
  };

  //
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
      <div className="fundforms_container">
        <form className="w-80">
          <div>
            {isDesktopOrLaptop && (
              <div>
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
              </div>
            )}

            {isTabletOrMobile && (
              <>
                <div style={{ marginTop: 20, textAlign: "center" }}>
                  <span>{steps[activeStep]}</span>
                </div>
                <Stepper
                  activeStep={activeStep}
                  style={{ padding: "24px 0px 24px 0px" }}
                >
                  {steps.map((label, index) => {
                    const props = {};
                    return (
                      <Step
                        style={{ width: 24, padding: 0 }}
                        key={label}
                        {...props}
                      >
                        {/* <StepLabel {...labelProps}></StepLabel> */}
                      </Step>
                    );
                  })}
                </Stepper>
              </>
            )}
          </div>

          {activeStep !== steps.length ? (
            <div>
              {getStepContent(activeStep)}
              <div className="mt-4 flex-wrap d-flex justify-content-between">
                <div>
                {activeStep !== 0 && (
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className="mr-2"
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
                  className="mr-2 ml-2"
                  color="primary"
                >
                  Cancel
                </Button>
                </div>

                <Button
                  className="mr-2"
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                >
                  {activeStep === steps.length - 1
                    ? "Proceed to payment"
                    : "Next"}
                </Button>
              </div>        
            </div>
          ) : (
            <>
              {paystack ? (
                <Button
                  onClick={handleSubmit}
                  type="submit"
                  name="submit"
                  color="primary"
                  variant="contained"
                >
                  Donate With Paystack
                </Button>
              ) : (
                <Button
                  onClick={handleClick}
                  type="submit"
                  name="submit"
                  color="primary"
                  variant="contained"
                >
                  Donate With Stripe
                </Button>
              )}

              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className="mr-2 float-left"
                color="primary"
              >
                Back
              </Button>
              <Button
                disabled={activeStep === 0}
                onClick={handleReset}
                className="mr-2 float-left"
                color="primary"
               >
                Cancel
              </Button>
            </>
          )}
        </form>
      </div>
    </>
  );
};

export default DonateCashForm;
