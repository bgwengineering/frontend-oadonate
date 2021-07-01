import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { donateCashToOga } from "store/actions/fund_donate/FundDonate";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import { setLoading } from "store/actions/Common";

const stripePromise = window.Stripe(
  "pk_test_51Ihz1EJtAhKBp45zJXZLT2RmTKQLDbpZRPerC1uKcnQ69N1R1IchlmRhCBMp3cwJ4DIVpSf9iHe4Hnq9wUdAC6OA00DNznJtw5"
);

const Message = ({ message }) => (
  <section>
    <p>{message}</p>
  </section>
);
<<<<<<< HEAD
=======

>>>>>>> 5ee521180f26cd5a1b7e9c8b021b479ad5ff1dad
const DonateOgaCashForm = ({ fund_cash, setIsDonateOgaForm, setCurrentOpenForm }) => {
  const paystackUrl = useSelector((state) => state.fundDonateReducer.ogadonatePaystackUrl);
  useEffect(() => {
    if (paystackUrl.length) {
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

<<<<<<< HEAD
=======


>>>>>>> 5ee521180f26cd5a1b7e9c8b021b479ad5ff1dad
  const [giveOgadonate, setGiveOgadonate] = useState(false);
  const [message, setMessage] = useState("");
  const [donateFields, setDonateFields] = useState({
    donate_amount: "",
    donate_payment_method: "",
    donate_comment: "",
    donate_currency: "",
    donate_collect_per: false,
    donate_as_unknown: "",
    donate_accept: "",
  });

  const [paystack, setPaystack] = useState(true);
  const [stripe, setStripe] = useState(false);
<<<<<<< HEAD
=======
  const [checked, setChecked] = useState(false);

  const handleChecked = e => {
    setChecked(e.target.checked);
    setDonateFields({ ...donateFields, [e.target.name]: e.target.value });
  }
>>>>>>> 5ee521180f26cd5a1b7e9c8b021b479ad5ff1dad

  const setPaystackBtn = () => {
    setStripe(false);
    setPaystack(true);
  };
  const setStripeBtn = () => {
    setPaystack(false);
    setStripe(true);
  };
  const dispatch = useDispatch();
  const UserEmail = useSelector((state) => state.authReducer.user) || "Customer@gmail.com";
<<<<<<< HEAD
  const { email } = UserEmail;
=======
  
>>>>>>> 5ee521180f26cd5a1b7e9c8b021b479ad5ff1dad

  const {
    donate_amount,
    donate_payment_method,
    donate_comment,
    donate_currency,
    donate_as_unknown,
    donate_accept,
  } = donateFields;

  const handleSubmitPaystack = (e) => {
    e.preventDefault();
    const formData = {
      donate_amount,
      donate_payment_method,
      donate_comment,
      donate_currency,
      donate_collect_per: giveOgadonate,
      donate_as_unknown,
      donate_accept,
      fund_cash: fund_cash,
    };
    dispatch(donateCashToOga(formData));
  };
  
  const handleSubmitStripe = (e) => {
    e.preventDefault();
    const formData = {
      donate_amount,
      donate_payment_method,
      donate_comment,
      donate_currency,
      donate_collect_per: giveOgadonate,
      donate_as_unknown,
      donate_accept,
      fund_cash: fund_cash,
    };
    dispatch(donateCashToOga(formData));
  };

  const handleChange = (e) => {
    setDonateFields({ ...donateFields, [e.target.name]: e.target.value });
  };


  const [activeStep, setActiveStep] = useState(0);
  const getSteps = () => {
    return ["Amount", "Attestation", "Payment Information"];
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
      default:
        return "Uknown stepIndex";
    }
  };

  // you can call this function anything

  const getPersonalInformation = () => {
    return (
      <fieldset>
        <h2 className="fs-title">
          How much do you want to donate <span className="text-danger">*</span>
        </h2>
        <div className="d-flex">
          <h6 className="mr-3">currency type :</h6>
<<<<<<< HEAD
          <select name="donate_currency" className="mb-4" onChange={handleChange}>
            <option value="">select currency</option>
            <option value="$">$</option>
            <option value="₦">₦</option>
          </select>
=======
           <select name="donate_currency" className="mb-4" onChange={handleChange}>
            <option value="">select currency</option>
            <option value="$">$</option>
            <option value="₦">₦</option>
           </select>
>>>>>>> 5ee521180f26cd5a1b7e9c8b021b479ad5ff1dad
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
<<<<<<< HEAD
=======
          value={donate_amount}
>>>>>>> 5ee521180f26cd5a1b7e9c8b021b479ad5ff1dad
        />
      </fieldset>
    );
  };

  const getTrack = () => {
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
<<<<<<< HEAD
=======
          value={donate_comment}
>>>>>>> 5ee521180f26cd5a1b7e9c8b021b479ad5ff1dad
        />
      </fieldset>
    );
  };

  const getItems = () => {
    return (
      <>
        <fieldset>
          {giveOgadonate ? (
            <input
              type="number"
              id="fixins"
              placeholder="I authorize Ogadonate to take .."
              name="donate_percentage_value"
              onChange={handleChange}
              className="all-input-fields input-number"
            />
          ) : null}
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
              className="mr-1 mt-2 ml-3"
              onChange={handleChange}
              value="Stripe"
              onClick={setStripeBtn}
            />
            <p className="mt-4">Stripe</p>
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
  const handleReset = () => {
    setActiveStep(0);
  };

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
<<<<<<< HEAD
                    // disabled={true}
=======
>>>>>>> 5ee521180f26cd5a1b7e9c8b021b479ad5ff1dad
                  >
                    {activeStep === steps.length - 1 ? "Finish" : "Next"}
                  </Button>
                </div>
              </div>
            ) : (
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
<<<<<<< HEAD
                    onChange={handleChange}
=======
                    onChange={handleChecked}
                      
>>>>>>> 5ee521180f26cd5a1b7e9c8b021b479ad5ff1dad
                  />
                  <p className="attest">
                    I attest that this donation is willful and I am not being forced into giving
                  </p>
                </div>
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
                      setIsDonateOgaForm(false);
                      setCurrentOpenForm(null);
                      handleReset();
                    }}
                    className="mr-2 ml-2 float-left"
                    color="primary"
                  >
                    Cancel
                  </Button>
                {paystack ? (
                  <Button
                    type="submit"
                    name="submit"
                    className="MuiButton-containedPrimary"
<<<<<<< HEAD
                    onClick={handleSubmitPaystack}
=======
                      onClick={handleSubmitPaystack}
                      disabled={!checked ? true : false}
                      style={{cursor: !checked?"alias" : "pointer"}}
>>>>>>> 5ee521180f26cd5a1b7e9c8b021b479ad5ff1dad
                  >
                    Paystack
                  </Button>
                ) : (
                  // <Button
                  //   type="submit"
                  //   name="submit"
                  //   className="MuiButton-containedPrimary"
                  //   onClick={handleSubmitStripe}
                  // >
                  //   Stripe
                  // </Button>
                  null
                )}
              </>
            )}
          </div>
        </form>
      </div>
    </>
  );
};

export default DonateOgaCashForm;
