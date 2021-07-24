import React from "react";
import {Route, Switch } from "react-router-dom";
import ResetPassword from "./containers/auth/ResetPassword";
import ResetPasswordConfirm from "./containers/auth/ResetPasswordConfirm";
import Google from "./containers/auth/Google";
import Home from "./containers/pages/Home";
import Layout from "util/Layout";
import About from "components/containers/pages/About";
import DonateCampaign from "./containers/subpages/campaign/donate/DonateCampaign";
import Categoryindex from "./containers/subpages/categories/CategoryIndex";
import Contact from "./containers/pages/Contact";
import GetUserInfo from "./containers/dashboard/views/dashboard/main/GetUserType";
import Activate from "./containers/auth/Activate";
import AuthMain from "./containers/auth/AuthMain";
import MainDonateIndex from "./containers/subpages/Donate/MainDonateIndex";
import PrivateRoute from "util/PrivateRoute";
import TheLayout from './containers/dashboard/containers/TheLayout'
import CartPage from "./containers/pages/CartPage";
import MarketIndex from './containers/subpages/buytosupport/MarketIndex';
import CheckoutPage from "./containers/pages/CheckoutPage";
import Affiliate from './containers/pages/Affiliate/Affiliate';
import SignupAffiliate from './containers/pages/Affiliate/SignupAffiliate';
import CorporateAuction from './containers/pages/CorporateAuction/CorporateAuction';
import SignupCorporate from "./containers/pages/CorporateAuction/SignupCorporate";
import HowOgadonateWorks from './containers/pages/HowOgadonateWorks';


const MainApp = () => {
  return (
    <>
        <Switch>
          <Route path="/activate/:uid/:token" component={Activate} />
          <PrivateRoute
            path="/dashboard"
            name="Home"
            render={props => <TheLayout {...props} />}
          />
        <Route path="/auth" component={AuthMain} />
        <Layout>      
          <Route path="/categories" component={Categoryindex}  />
        <Route path= '/marketplace/'  component={MarketIndex} />
        <Route path="/campaign/:id/:id/details/"  component={DonateCampaign} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/google" component={Google} />
        <Route path='/donate' render={props => <MainDonateIndex {...props}/>} />
        <Route exact path="/" component={Home} />
        <Route path="/user-type" component={GetUserInfo} />
        <Route path='/cart' component={CartPage} />
        <Route path='/checkout' component={CheckoutPage} />
        <Route path='/affiliate' component={Affiliate} />
        <Route path='/affiliate-signup' component={SignupAffiliate} />
        <Route path='/corporate-auction' component={CorporateAuction} />
        <Route path='/corporate-signup' component={SignupCorporate} />    
        <Route path='/how-it-works' component={HowOgadonateWorks} />    
      </Layout>
      </Switch>
    </>
  );
};


export default MainApp;