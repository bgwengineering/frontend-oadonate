import React, { useState, useEffect } from "react";
import RaiseCashForm from "./RaiseCashForm";
import RaiseItemForm from "./RaiseItemForm";
import RaiseFundPrompt from "components/containers/subpages/campaign/raisfund/RaiseFundPrompt";
// import { useSelector } from "react-redux";
// import { ReactComponent as LoaderSpinn } from "assets/images/244.svg";

const RaiseFundFormStep = () => {
  // const isLoading = useSelector((state) => state.commonReducer.loading);
  const [currentOpenForm, setCurrentOpenForm] = useState(null);
  const [isRaiseCardButtonsOpen, setIsRaiseCardButtonsOpen] = useState(false);

  const handleCurrentOpenForm = (formOpen) => {
    setCurrentOpenForm(formOpen);
  };

  return (
    <>
      <div className="raisefund-container">
        <div
          id="raise-form-stepper"
          style={{ display: isRaiseCardButtonsOpen && currentOpenForm ? "none" : "block" }}
        >
          <RaiseFundPrompt
            setIsRaiseCardButtonsOpen={setIsRaiseCardButtonsOpen}
            handleCurrentOpenForm={handleCurrentOpenForm}
          />
        </div>

        <div
          id="RaiseCashForm"
          style={{
            display: currentOpenForm === "RaiseCashForm" ? "block" : "none",
          }}
        >
          <RaiseCashForm
            setIsRaiseCardButtonsOpen={setIsRaiseCardButtonsOpen}
            setCurrentOpenForm={setCurrentOpenForm}
          />
        </div>

        <div
          id="RaiseItemForm"
          style={{ display: currentOpenForm === "RaiseItemForm" ? "block" : "none" }}
        >
          <RaiseItemForm
            setCurrentOpenForm={setCurrentOpenForm}
            setIsRaiseCardButtonsOpen={setIsRaiseCardButtonsOpen}
          />
        </div>
      </div>
    </>
  );
};

export default RaiseFundFormStep;
