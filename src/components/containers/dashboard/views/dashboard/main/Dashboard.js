import React, { lazy, useEffect } from "react";
import { useSelector } from "react-redux";
import GetUserType from "components/containers/dashboard/views/dashboard/main/GetUserType";

const WidgetsDropdown = lazy(() => import("../../widgets/WidgetsDropdown.js"));

const Dashboard = () => {
  const userState = useSelector(state => state.userTypeReducer);
  const { profile_user, company_user } = userState;
 
  
  useEffect(() => {
    document.title = "Ogadonate | Dashboard";
  }, []);


  return (
    <>
      <div id="dashboard-view">
        <WidgetsDropdown />
        {profile_user.length || company_user.length  ? (
          <h4 className='text-uppercase font-weight-bold d-flex justify-content-center align-items-center welcome-to-oga'>Welcome To Ogadonate!!!</h4>
         ) : (
          <GetUserType />
        )}
      </div>
    </>
  );
};

export default Dashboard;
