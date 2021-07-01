import React, { useState } from "react";
import LinearProgress from "@material-ui/core/LinearProgress";
<<<<<<< HEAD
import Typography from "@material-ui/core/Typography";
=======
>>>>>>> 5ee521180f26cd5a1b7e9c8b021b479ad5ff1dad
import Button from "@material-ui/core/Button";
import { AiOutlineFolderOpen } from "react-icons/ai";
import Avatar from "@material-ui/core/Avatar";
import { FiMail } from "react-icons/fi";
import SocialMediaButtons from "components/ui/ShareSocialLinks/SocialMediaButtons";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import CopyShared from "components/ui/ShareSocialLinks/CopySharedLink";
import { useSelector } from "react-redux";
import { Link, withRouter } from "react-router-dom";

<<<<<<< HEAD
var numeral = require("numeral")

const SingleDonateCards = ({ shareUrl, className, setIsDonateCardButtonsOpen, history }) => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
=======

var numeral = require("numeral")

const SingleDonateCards = ({ shareUrl, className, setIsDonateCardButtonsOpen, history }) => {
const [modal, setModal] = useState(false);
const toggle = () => setModal(!modal);
>>>>>>> 5ee521180f26cd5a1b7e9c8b021b479ad5ff1dad

  const singleCampaign = useSelector(
    state => state.fundDonateReducer.singleCampaign
  );

  const isAuthenticated = useSelector(state => state.authReducer.isAuthenticated);
<<<<<<< HEAD
=======
  
>>>>>>> 5ee521180f26cd5a1b7e9c8b021b479ad5ff1dad
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


<<<<<<< HEAD
  let fundAmount = numeral(fund_amount_raised).format("0, 0");
  const percentageCompleted = Number(fund_percentage_completed).toFixed(1);
  // const { first_name, last_name } = user;
=======
  const fundAmount = numeral(fund_amount_raised).format("0, 0");
  const fundCashAmount = numeral(fund_cash_amount).format("0, 0");
  const percentageCompleted = Number(fund_percentage_completed).toFixed(1);

>>>>>>> 5ee521180f26cd5a1b7e9c8b021b479ad5ff1dad

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
<<<<<<< HEAD
                <span className="mr-2">
                  {/* by <strong>{first_name + " " + last_name}</strong> */}
                </span>
=======
>>>>>>> 5ee521180f26cd5a1b7e9c8b021b479ad5ff1dad
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
<<<<<<< HEAD
            <p className="text-muted">raised of {fund_currency_type + fund_cash_amount}</p>
=======
            <p className="text-muted">
              raised of {fund_currency_type + fundCashAmount}
            </p>
>>>>>>> 5ee521180f26cd5a1b7e9c8b021b479ad5ff1dad
            <div
              className="card-donate-btn-container mt-3"
              id="donate-id-button"
            >
              <Button
                variant="contained"
                className="card-campaign-btn"
                id="DoncardBtn"
                onClick={() => {
<<<<<<< HEAD
                
                  isAuthenticated ? setIsDonateCardButtonsOpen(true) : history.push('/auth')
=======
                  isAuthenticated
                    ? setIsDonateCardButtonsOpen(true)
                    : history.push("/auth");
>>>>>>> 5ee521180f26cd5a1b7e9c8b021b479ad5ff1dad
                }}
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
<<<<<<< HEAD
=======

>>>>>>> 5ee521180f26cd5a1b7e9c8b021b479ad5ff1dad
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

export default withRouter(SingleDonateCards);
