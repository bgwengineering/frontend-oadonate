import React  from "react";
import { Switch, Route } from "react-router-dom";
import Personal from "./SubCategories/Personal/Personal";
import { Button } from "@material-ui/core";
import RaiseFundQuestionnaire from "components/ui/Forms/RaiseFundQuestionnaire";
import Community from "./SubCategories/Community/Community";
import Ngo from "./SubCategories/NGO/NGO";
import StartUp from "./SubCategories/Startup/Startup";
import { useSelector, useDispatch } from "react-redux";
import AllCategories from "./SubCategories/AllCategories/AllCategories";
import { FUNDRAISEBUTTONCLICKED } from "store/actions/Category";
import AuthLayout from "components/containers/auth/Auth";

const Categoryindex = ({ match }) => {
  const isAuthenticated = useSelector(
    (state) => state.authReducer.isAuthenticated
  );
  const dispatch = useDispatch()
  const startFundRaiseButtonState = useSelector(state=>state.fundSubCategoriesReducer)
  const {startFundRaise} = startFundRaiseButtonState
 
  return (
   <>
        <div className="fund-raise-category" id='fund__raise__category' style={{display:startFundRaise?'none':'block'}}>
          <Switch>
            <Route
              exact
              path={`${match.url}`}
              component={AllCategories}
            />
            <Route
              path={`${match.path}/personal-fundraising`}
              component={Personal}
            />
            <Route
              path={`${match.path}/community-fundraising`}
              component={Community} 
            />
            <Route path={`${match.path}/ngo-fundraising`} component={Ngo} />
            <Route
              path={`${match.path}/startup-fundraising`}
              component={StartUp}
            />
          </Switch>

        
        </div>   
        
          <div id="RaiseFundQuestionnaire" style={{display: startFundRaise ? 'block' : 'none' }}>
          { isAuthenticated ?
           <RaiseFundQuestionnaire/>
           : <AuthLayout />}
        </div>
    </>
  );
};

export default Categoryindex;
