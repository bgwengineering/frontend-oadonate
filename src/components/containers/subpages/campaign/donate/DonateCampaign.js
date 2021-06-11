import React, { useEffect, useState } from "react";
import DonateCards from "./SingleDonateCards";
import DonateTabs from "./donateTabs";
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import DonateCashForm from "components/ui/Forms/DonateCashForm";
import DonateItemForm from "components/ui/Forms/DonateItemForm";
import DonatePrompt from "./DonatePrompt";
import { fetchSingleCampaign } from "store/actions/fund_donate/FundDonate";
import  AuthLayout  from 'components/containers/auth/Auth';


const DonateCampaign = ({ match }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSingleCampaign(match.params.id));
  }, []);

  const isAuthenticated = useSelector(state=> state.authReducer.isAuthenticated);

  const singleCampaign = useSelector(state => state.fundDonateReducer.singleCampaign);

  const { fund_img, fund_purpose, id, fund_cash, fund_item } = singleCampaign;

  const [currentOpenForm, setCurrentOpenForm] = useState(null);
  const [isDonateCardButtonsOpen, setIsDonateCardButtonsOpen] = useState(false);

  const handleSwitchCurrentForm = (formToShow) => {
    setCurrentOpenForm(formToShow);
  };
  const shareUrl = window.location.href;

  return (
    <>
      <div className="container-fluid">
        <div className="row">
   
          <div className="col-md-6 col-lg-6 mt-5">
            <img
              src={fund_img}
              alt="personal_campaign"
              style={{ width: "100%", maxHeight: "300px" }}
            ></img>

            {/* Donat tabs */}
            <div className="mt-4">
              <DonateTabs singleCampaign={singleCampaign} />
            </div>
          </div>

          {/* Donate Cards */}
          <div
            className="col-md-6 col-lg-6 mt-5"
            id="DonCard"
            style={{ display: isDonateCardButtonsOpen ? "none" : "block" }}
           >
            <DonateCards
              shareUrl={shareUrl}
              setIsDonateCardButtonsOpen={setIsDonateCardButtonsOpen}
            />
          </div>
     
            <div
              className="col-md-6 col-lg-6 mt-5"
              id="DonPrompt"
              style={{
                display:
                  isDonateCardButtonsOpen && !currentOpenForm ? "block" : "none"
              }}
              >
              <DonatePrompt handleSwitchCurrentForm={handleSwitchCurrentForm} />
            </div>
         

          <div
            className="col-md-6 col-lg-6 mt-5"
            id="donate__cash__form"
            style={{
              display:
                currentOpenForm === "donate__cash__form" ? "block" : "none"
            }}
          >
            <DonateCashForm
              fund_cash={id}
              setCurrentOpenForm={setCurrentOpenForm}
              setIsDonateCardButtonsOpen={setIsDonateCardButtonsOpen}
            />
          </div>

          <div
            className="col-md-6 col-lg-6 mt-5"
            id="donate__item__form"
            style={{
              display:
                currentOpenForm === "donate__item__form" ? "block" : "none"
            }}
          >
            <DonateItemForm
              fund_item={id}
              currentOpenForm={currentOpenForm}
              handleSwitchCurrentForm={handleSwitchCurrentForm}
              setCurrentOpenForm={setCurrentOpenForm}
              setIsDonateCardButtonsOpen={setIsDonateCardButtonsOpen}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DonateCampaign;
