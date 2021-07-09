import React, {useEffect} from "react";
import {useLocation} from "react-router-dom"
import { TheContent, TheSidebar, TheFooter, TheHeader } from "./index";
import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as LoaderSpinn } from "assets/images/244.svg";
import {
  fetchOrders, fetchPersonalProfile,
  fetchUserDonationsReceived, } from 'store/actions/auth/Dashboard';
import { load_user } from 'store/actions/auth/Auth.js';
import {
  getfundCashCampaigns, getfundITEMCampaigns,getdonateToCash} from "store/actions/fund_donate/FundDonate";
  import { googleAuthenticate } from 'store/actions/auth/Social';
  import queryString from 'query-string';

const TheLayout = () => {
  const dispatch = useDispatch();
  let location = useLocation();
  useEffect(() => {
    document.title = "Ogadonate | Dashboard";
    dispatch(load_user())
    dispatch(fetchPersonalProfile());
   dispatch(getfundCashCampaigns());
   dispatch(getfundITEMCampaigns());
   dispatch(fetchUserDonationsReceived());
   dispatch(fetchOrders());
   // dispatch(getdonateToCash())
  }, [])
  useEffect(() => {

    const values = queryString.parse(location.search);
    const state = values.state ? values.state : null;
    const code = values.code ? values.code : null;

    console.log('State: ' + state);
    console.log('Code: ' + code);

    if (state && code) {
        googleAuthenticate(state, code);
    }
}, [location]);


  const isLoading = useSelector(state => state.commonReducer.loading);
  return (
    <div className="c-app c-default-layout">
      <TheSidebar />
      <div className="c-wrapper">
        <div className="c-body">
          {isLoading ? (
            <div className="d-flex justify-content-center">
              <LoaderSpinn />
              <LoaderSpinn />
              <LoaderSpinn />
              <LoaderSpinn />
              <LoaderSpinn />
            </div>
           ) : null}
          <TheHeader />
          <TheContent />
        </div>
        <TheFooter />
      </div>
    </div>
  );
};

export default TheLayout;
