import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
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
import PaymentSuccess from "util/PaymentSuccess";
import PaymentCancel from "util/PaymentCancel";
import MarketIndex from './containers/subpages/buytosupport/MarketIndex';
import CheckoutPage from "./containers/pages/CheckoutPage";

   const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)
const MainApp = () => {

   return (

   <BrowserRouter>
      <React.Suspense fallback={loading}>
      <Switch>         
        <Route path="/auth" component={AuthMain} />
        <Route path="/activate/:uid/:token" component={Activate} />
        <PrivateRoute path='/dashboard' name='Home' render={props => <TheLayout {...props}/>} />    
       <Layout id='content'> 
        <Route path="/categories" render={(props) => <Categoryindex  {...props}/>}  />
        <Route path= '/marketplace/'  component={MarketIndex} />
        <Route path="/campaign/:id/:id/details/"  component={DonateCampaign} />
        <Route path="/about" component={About} />
        <Route exact path="/" component={Home} />
        <Route path="/contact" component={Contact} />
        <Route exact path="/google" component={Google} />
        <Route exact path="/reset-password" component={ResetPassword} />
        <Route path='/donate' render={props => <MainDonateIndex {...props}/>} />
        <Route path="/user-type" component={GetUserInfo} />
        <Route path='/cart' component={CartPage} />
        <Route path='/checkout' component={CheckoutPage} />
        <Route path='/payment-success/' component={PaymentSuccess} />
        <Route path='/payment-cancel/' component={PaymentCancel} />
        <Route
          exact
          path="/password/reset/confirm/:uid/:token"
          component={ResetPasswordConfirm}
        />
      </Layout>
      </Switch>
      </React.Suspense>
  </BrowserRouter>
   )}

export default MainApp;
