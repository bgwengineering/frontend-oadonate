import React, { lazy, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import GetUserType from "components/containers/dashboard/views/dashboard/main/GetUserType";

import {
  fetchCompanyProfile,
  fetchPersonalProfile,
  fetchUserDonationsReceived,
  fetchOrders
} from "store/actions/auth/Dashboard";
import { load_user } from "store/actions/auth/Auth.js";
import {
  getfundCashCampaigns,
  getfundITEMCampaigns
} from "store/actions/fund_donate/FundDonate";


const WidgetsDropdown = lazy(() => import("../../widgets/WidgetsDropdown.js"));



const Dashboard = () => {
  const userState = useSelector((state) => state.userTypeReducer);
  const { profile_user, company_user } = userState;
 

  const dispatch = useDispatch();
  useEffect(() => {
    document.title = "Ogadonate | Dashboard";
    dispatch(load_user());
    dispatch(fetchPersonalProfile());
    dispatch(getfundCashCampaigns());
    dispatch(getfundITEMCampaigns());
    dispatch(fetchUserDonationsReceived());
   dispatch(fetchOrders())
  }, []);

  return (
    <>
      <div id="dashboard-view">
        <WidgetsDropdown />
        {profile_user.length || company_user.length  ? (

          <h4>Current Activity to be Display</h4>
        ) : (
          <GetUserType />
        )}
      </div>
    </>
  );
};

export default Dashboard;
