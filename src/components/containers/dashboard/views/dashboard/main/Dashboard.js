import React, { lazy, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import GetUserType from "components/containers/dashboard/views/dashboard/main/GetUserType";
import {
  fetchCompanyProfile,
  fetchPersonalProfile,
  fetchUserDonationsReceived,
} from "store/actions/auth/Dashboard";
import { load_user } from "store/actions/auth/Auth.js";

const WidgetsDropdown = lazy(() => import("../../widgets/WidgetsDropdown.js"));

const Dashboard = () => {
  const userState = useSelector((state) => state.userTypeReducer);
  const { profile_user, company_user } = userState;

  const dispatch = useDispatch();
  useEffect(() => {
    document.title = "Ogadonate | Dashboard";
    dispatch(load_user());
    dispatch(fetchPersonalProfile());
    // dispatch(fetchCompanyProfile());
    dispatch(fetchUserDonationsReceived());
  }, []);

  return (
    <>
      <div id="dashboard-view">
        <WidgetsDropdown />
        {profile_user && profile_user.length >= 1 || company_user && company_user.length >= 1 ? (
          <h4>Graph display</h4>
        ) : (
          <GetUserType />
        )}
        <h4>Current Activity Display</h4>
      </div>
    </>
  );
};

export default Dashboard;
