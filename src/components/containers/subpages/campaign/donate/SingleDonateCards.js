import React, { useState } from "react";
import LinearProgress from "@material-ui/core/LinearProgress";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { AiOutlineFolderOpen } from "react-icons/ai";
import Avatar from "@material-ui/core/Avatar";
import { FiMail } from "react-icons/fi";
import SocialMediaButtons from "components/ui/ShareSocialLinks/SocialMediaButtons";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import CopyShared from "components/ui/ShareSocialLinks/CopySharedLink";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
var numeral = require("numeral");


const SingleDonateCards = ({ shareUrl, className, setIsDonateCardButtonsOpen }) => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const singleCampaign = useSelector(
    state => state.fundDonateReducer.singleCampaign
  );

  
  const {
    fund_cash_amount,
    fund_created_date,
    fund_percentage_completed,
    fund_amount_raised,
    fund_endAt,
    fund_currency_type,
    fund_title,
    fund_category,
    user
  } = singleCampaign;


  let fundAmount = numeral(fund_amount_raised).format("0, 0");
  const percentageCompleted = Number(fund_percentage_completed).toFixed(1);
  // const { first_name, last_name } = user;

  return (
    <>
      <div className="card">
        <div className="card-body">
          <div>
            <AiOutlineFolderOpen />
            <span className="card-text text-muted ml-2">{fund_category}</span>
            <Link className="link-router">
              <h4 className="card-title">{fund_title}</h4>
            </Link>
            <div className="donors-info m-b-25">
              <Avatar src="/" />
              <div className="donor-name m-l-9">
                <span className="mr-2">
                  {/* by <strong>{first_name + " " + last_name}</strong> */}
                </span>
                <span>
                  <FiMail />
                </span>

                <div className="text-muted">{fund_created_date}</div>
              </div>
            </div>

            <LinearProgress
              value={fund_percentage_completed}
              variant="determinate"
            />
            <div className="row justify-content-between mt-3 contributed-progress-view">
              <p className="contributed-amount m-l-15 font-weight-bold">
                {fund_currency_type + fundAmount}
              </p>
              <span className="font-weight-bold">
                {percentageCompleted + "%"}
              </span>
            </div>
            <p className="text-muted">raised of {fund_currency_type + fund_cash_amount}</p>
            <div
              className="card-donate-btn-container mt-3"
              id="donate-id-button"
            >
              <Button
                variant="contained"
                className="card-campaign-btn"
                id="DoncardBtn"
                onClick={() => setIsDonateCardButtonsOpen(true)}
              >
                Donate
              </Button>
            </div>
            <div className="card-donate-btn-container mt-3">
              <Button
                variant="contained"
                className="card-share-btn"
                onClick={toggle}
              >
                Share
              </Button>
            </div>
            <hr />
            <div className="row donated-ws">
              {/* {user.length>=1?<p className="m-l-15">by {user}</p>:null} */}
              <span className="m-r-12">End Date: {fund_endAt}</span>
            </div>
          </div>
        </div>

        {/* modal   */}
        <Modal
          isOpen={modal}
          toggle={toggle}
          className={className}
          id="share-modal"
        >
          <ModalHeader toggle={toggle}>Share on</ModalHeader>
          <ModalBody>
            <SocialMediaButtons shareUrl={shareUrl} />
          </ModalBody>
          <ModalFooter>
            <CopyShared shareUrl={shareUrl} />
          </ModalFooter>
        </Modal>
      </div>
    </>
  );
};

export default SingleDonateCards;
