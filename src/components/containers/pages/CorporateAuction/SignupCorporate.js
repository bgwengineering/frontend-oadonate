import React, { useState } from "react";
import SignUpCorporateForm from "./SignUpCorporateForm";

const SignupCorporate = () => {
  const [checked, setChecked] = useState({
    ngoChecked: false,
    corporateChecked: false,
    religiousChecked: false,
    auctioneerChecked: false
  });

  const {
    ngoChecked,
    corporateChecked,
    auctioneerChecked,
    religiousChecked
  } = checked;

  // toggle switch
  const ToggleCorporate = ({ checked, onChange, id }) => (
    <div>
      <input
        type="checkbox"
        checked={corporateChecked}
        onChange={e => {
          onChange({ ...checked, corporateChecked: e.target.checked });
        }}
        id={id}
      />
    </div>
  );

  const ToggleNgo = ({ checked, onChange, id }) => (
    <div>
      <input
        type="checkbox"
        checked={ngoChecked}
        onChange={e => {
          onChange({ ...checked, ngoChecked: e.target.checked });
        }}
        id={id}
      />
    </div>
  );

  const ToggleReligious = ({ checked, onChange, id }) => (
    <div>
      <input
        type="checkbox"
        checked={religiousChecked}
        onChange={e => { 
          onChange({ ...checked, religiousChecked: e.target.checked });
        }}
        id={id}
      />
    </div>
  );

  const ToggleAuctioneer = ({ checked, onChange, id }) => (
    <div>
      <input
        type="checkbox"
        checked={auctioneerChecked}
        onChange={e => {
          onChange({ ...checked, auctioneerChecked: e.target.checked });
        }}
        id={id}
      />
    </div>
  );

  return (
    <div>
      <h2 className="text-uppercase mt-5 d-flex justify-content-center">
         Select Your Category
      </h2>
      <div className="d-flex justify-content-center align-items-center corporate-category">
        <span className="d-flex ml-3">
          <ToggleNgo checked={ngoChecked} id="form" onChange={setChecked} />
          <span className="shipping-msg ml-2">NGO</span>
        </span>

        <span className="d-flex ml-3">
          <ToggleCorporate
            checked={corporateChecked}
            id="form-ui"
            onChange={setChecked}
          />
          <span className="shipping-msg ml-2">Corporate</span>
        </span>

        <span className="d-flex ml-3">
          <ToggleReligious
            checked={religiousChecked}
            id="form-rel"
            onChange={setChecked}
          />
          <span className="shipping-msg ml-2">Religious Organisation</span>
        </span>

        <span className="d-flex ml-3">
          <ToggleAuctioneer
            checked={auctioneerChecked}
            id="form-auct"
            onChange={setChecked}
          />
          <span className="shipping-msg ml-2">Auctioneer</span>
        </span>
      </div>

      {ngoChecked && <SignUpCorporateForm />}
      {corporateChecked && <SignUpCorporateForm />}
      {religiousChecked && <SignUpCorporateForm />}
      {auctioneerChecked && <SignUpCorporateForm />}
    </div>
  );
};

export default SignupCorporate;
