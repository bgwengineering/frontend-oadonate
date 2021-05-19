import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { donateToCash} from "store/actions/fund_donate/FundDonate";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import axiosInstance from "util/api";
import { setLoading } from 'store/actions/Common';
const stripePromise = window.Stripe(
  "pk_test_51Ihz1EJtAhKBp45zJXZLT2RmTKQLDbpZRPerC1uKcnQ69N1R1IchlmRhCBMp3cwJ4DIVpSf9iHe4Hnq9wUdAC6OA00DNznJtw5"
);

const Message = ({ message }) => (
  <section>
    <p>{message}</p>
  </section>
);

const DonateCashForm = ({ fund_cash, setCurrentOpenForm, setIsDonateCardButtonsOpen }) => {
  const paystackUrl = useSelector((state) => state.fundDonateReducer.paystackUrl);
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
      setMessage("Order canceled -- continue to shop around and checkout when you're ready.");
    }
  }, []);
  const [giveOgadonate, setGiveOgadonate] = useState(true);

  const [donateFields, setDonateFields] = useState({
    donate_amount: "",
    donate_payment_method: "",
    donate_comment: "",
    donate_currency: "",
    donate_collect_per: false,
    donate_as_unknown: "",
    donate_accept: "",
    donate_percentage_value: "",
  });
  
  const [message, setMessage] = useState("");
  const [percentage, setPercentage] = useState(true);
  const [paystack, setPaystack] = useState(false);
  const [Stripebtn, setStripebtn] = useState(false);


  const setPaystackBtn = () => {
    setStripebtn(false);
    setPaystack(true);
  };
  const setStripeBtn = () => {
    setPaystack(false);
    setStripebtn(true);
  };

  const dispatch = useDispatch();

  const {
    donate_amount,
    donate_payment_method,
    donate_comment,
    donate_currency,
    donate_as_unknown,
    donate_accept,
    donate_percentage_value,
  } = donateFields;

  const fivePercent = (5 / 100) * donate_amount;
  const initial_amount = parseInt(donate_amount);
  const tol_5_percentage = parseInt(donate_amount) + parseInt(fivePercent);
  const amount_given = parseInt(initial_amount) + (parseInt(donate_percentage_value) || 0);

  const handleSubmit = (e) => {
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
      donate_percent_amount: giveOgadonate ? fivePercent : initial_amount,
    };

    dispatch(donateToCash(formData));
  };
  const handleClick = (e) => {
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
      donate_percent_amount: giveOgadonate ? fivePercent : initial_amount,
    };
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.getItem("access")}`,
        Accept: "application/json",
      },
    };
    const stripe = stripePromise;
    axiosInstance
      .post("campaign/create/donation-cash", formData, config)
      .then((res) => {
        const session = res.data;
        const result = stripe.redirectToCheckout({ sessionId: session });
        if (result.error) {
          // If `redirectToCheckout` fails due to a browser or network
          // error, display the localized error message to your customer
          console.log(result.error.message);
        }
        return message ? <Message message={message} /> : null;
      })
      .catch((error) => {
        console.log(error.message);
      });
  };


  const handleChange = (e) => {
    setDonateFields({ ...donateFields, [e.target.name]: e.target.value });
  };

  const ToggleSwitch = ({ checked, onChange, id, name }) => (
    <div>
      <input
        name={name}
        type="checkbox"
        checked={checked}
        onChange={(e) => {
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
  const getStepContent = (stepIndex) => {
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
        <label className="mt-3">Please indicate if you want to donate anonymously</label>
        <div className="d-flex">
          <input
            type="checkbox"
            id="anonymous_check"
            name="donate_as_unknown"
            className="mr-3 mt-1"
            defaultChecked={false}
            onChange={handleChange}
          />
          <label>Yes, I want to donate anonymously</label>
        </div>
        <h2 class="fs-title">Attestation</h2>
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
            I attest that this donation is willful and I am not being forced into giving
          </p>
        </div>
      </>
    );
  };
  const getPersonalInformation = () => {
    return (
      <fieldset>
        <h2 className="fs-title">
          How much do you want to donate <span className="text-danger">*</span>
        </h2>
        <div className="d-flex">
          <h6 className="mr-3">currency type :</h6>
          <select name="donate_currency" className="mb-4" onChange={handleChange}>
            <option value="">select currency</option>
            <option value="$">$</option>
            <option value="₦">₦</option>
            <option value="€">€</option>
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
        />
      </fieldset>
    );
  };

  const getMessage = () => {
    return (
      <fieldset>
        <label> Message</label>
        <textarea
          className="donate-message-comment all-input-fields"
          col="50"
          row="50"
          onChange={handleChange}
          placeholder="write a Message or Comment to the fund Raiser"
          name="donate_comment"
        />
      </fieldset>
    );
  };

  const supportOgd = () => {
    return (
      <>
        <fieldset>
          <label className="mt-2 mb-3">
            Would you like to donate an extra amount to ogadonate?
          </label>
          <div className="d-flex">
            <ToggleSwitch
              checked={percentage}
              id="form"
              onChange={setPercentage}
              name="donate_collect_per"
            />
            <label className="ml-3">Yes, I would like to donate an extra amount to ogadonate</label>
          </div>
          {percentage ? null : (
            <input
              name="donate_percentage_value"
              type="number"
              className="mr-1 ml-2 mt-2"
              onChange={handleChange}
            />
          )}
          <div>
            <h3>{percentage ? tol_5_percentage : amount_given}</h3>
          </div>
          <h2 className="fs-title mt-3">Payment Information</h2>
          <div className="d-flex">
            <input
              name="donate_payment_method"
              type="radio"
              className="mr-1 ml-2 mt-2"
              onChange={handleChange}
              value="PayStack"
              onClick={setPaystackBtn}
            />
            <p className="mt-4">PayStack</p>
            <input
              name="donate_payment_method"
              type="radio"
              className="mr-1 ml-3 mt-2"
              onChange={handleChange}
              value="Stripe"
              onClick={setStripeBtn}
            />
            <p className="mt-4 ">Stripe</p>
          </div>
        </fieldset>
      </>
    );
  };

  //
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  // const handleReset = () => {
  //   setActiveStep(0);
  // };

  return (
    <>
      <div className="fundforms_container">
        <form className="w-80">
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
                  // disabled={true}
                >
                  {activeStep === steps.length - 1 ? "Procced Payment" : "Next"}
                </Button>
              </div>
            </div>
          ) : (
            <>
              {paystack ? (
                <button onClick={handleSubmit} type="submit" name="submit">
                  Donate With Paystack
                </button>
              ) : (
                <button onClick={handleClick} type="submit" name="submit">
                  Donate With Stripe
                </button>
              )}
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className="mr-2 float-left"
                color="primary"
              >
                Back
              </Button>
            </>
          )}
        </form>
      </div>
    </>
  );
};

export default DonateCashForm;