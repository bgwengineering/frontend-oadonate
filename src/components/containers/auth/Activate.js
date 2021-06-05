import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { verify } from "store/actions/auth/Auth";
import { Button } from "@material-ui/core";
import CollapsedNavbar from "components/ui/Navigation/CollapsedNavbar";

const Activate = ({ verify, match }) => {
  const [verified, setVerified] = useState(false);

  const verify_account = e => {
    const uid = match.params.uid;
    const token = match.params.token;
    const verifyValues = { uid, token };
    verify(verifyValues);
    setTimeout(() => {
      setVerified(true);
    }, 5000);
  };

  if (verified) {
    return <Redirect to="/auth" />;
  }

  return (
    <>
      <CollapsedNavbar />
      <div className="verify-container d-flex flex-column justify-content-center align-items-center">
        <div>
          <h1>Verify your Account:</h1>
          <p>Kindly verify your account to enable you login</p>
          <div className='justify-content-center d-flex'>
          <Button onClick={verify_account} type="button" className="verify-btn">
             Verify
          </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default connect(
  null,
  { verify }
)(Activate);
