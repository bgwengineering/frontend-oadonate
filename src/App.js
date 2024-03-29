import React, { useEffect, useState } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import { Alert } from "@material-ui/lab";
import { useSelector, useDispatch } from "react-redux";
import { load_user, checkAuthenticated } from "./store/actions/auth/Auth";
import MainApp from "./components/mainApp";
import { hideMessage } from "store/actions/Common";
import { fetchAllCampaign } from "store/actions/fund_donate/FundDonate";
import { updateMarketCollections } from "store/actions/MarketPlace";
import {
  fetchPersonalProfile,
  fetchShippingAddress,
  fetchUserDonationsReceived,
} from "store/actions/auth/Dashboard";
import Page404 from "./util/pages/page404/Page404";
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import "./styles/style.js";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const isAuthenticated = useSelector((state) => state.authReducer.isAuthenticated);
  const dispatch = useDispatch();
  useEffect(() => {
    document.title = "Ogadonate | Home";
    dispatch(checkAuthenticated());
    dispatch(load_user());
    dispatch(fetchAllCampaign());
    dispatch(updateMarketCollections());
    setIsLoading(false);
  }, [isAuthenticated]);

  // check auth state
  const commonState = useSelector((state) => state.commonReducer);
  const { showMessage, Message, error } = commonState;

  // alert func
  const AlertSnackBar = (props) => {
    return <Alert elevation={6} variant="filled" {...props} />;
  };
  const handleClose = () => {
    dispatch(hideMessage());
  };
  return (
    <>
      <BrowserRouter>  
        {isLoading ? null : <MainApp />} 
      </BrowserRouter>

      {showMessage && (
        <Snackbar
          open={showMessage}
          autoHideDuration={4000}
          onClose={handleClose}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
        </Snackbar>
      )}
    </>
  );
};

export default App;