import React from "react";
import { CWidgetDropdown, CRow, CCol } from "@coreui/react";
import { GiReceiveMoney } from "react-icons/gi";
import { RiFundsLine } from "react-icons/ri";
import { TiShoppingCart } from "react-icons/ti";
import { useSelector } from "react-redux";
var numeral = require("numeral");

const WidgetsDropDown = () => {
  const fundDonateState = useSelector(state => state.userTypeReducer);
  const { user_donations_received } = fundDonateState;

  const fundRaiseItemState = useSelector(state => state.fundDonateReducer);
  const { singleCampaignItem } = fundRaiseItemState;

  const itemFundsRaised =
    singleCampaignItem.length &&
    singleCampaignItem.map(data => data.fund_title);
console.log(itemFundsRaised);

  const totalItemFundsRaised = itemFundsRaised.length;
 
  
  // fundraise cash
  const fundRaiseCashState = useSelector(state => state.fundDonateReducer);
  const { singleCampaign } = fundRaiseCashState;
  const cashFundsRaised =
    singleCampaign.length &&
    singleCampaign.map(data => data.fund_title);
    console.log(cashFundsRaised);

   const totalCashFundsRaised = cashFundsRaised.length;
   console.log(totalCashFundsRaised);

  let donations =
    user_donations_received.length &&
    user_donations_received.map(donation =>
      parseInt(donation.fund_cash_amount)
    );

  const totalDonations =
    donations.length &&
    donations.reduce((acc, val) => {
      return acc + val;
    }, 0);

  return (
    <CRow>
      <CCol sm="6" lg="4">
        <div
          className="pt-4 pl-3"
          style={{ height: "170px", backgroundColor: "#C75A00", color: "#fff" }}
        >
          <div className=" d-flex justify-content-between pr-3">
            <h4>Donations</h4>
            <span className="text-white  icon-position">
              <GiReceiveMoney className="fs-3" />
            </span>
          </div>
          {/* total donations */}
          <div className="d-flex justify-content-between pr-3">
            <p className="mt-2">Total Donations Received</p>
            <p className="font-weight-bold total-donations-received">
              {numeral(totalDonations).format("0,0")}
            </p>
          </div>
          <p>Total Amount Donated</p>
        </div>
      </CCol>

      <CCol sm="6" lg="4">
        <div
          className="pt-4 pl-3"
          style={{ height: "170px", backgroundColor: "#0C5421", color: "#fff" }}
        >
          <div className=" d-flex justify-content-between pr-3">
            <h4>Funds Raised</h4>
            <span className="text-white icon-position">
              <RiFundsLine className="fs-3" />
            </span>
          </div>
          <p>Total item funds raised: {totalItemFundsRaised}</p>
          <p>Total cash funds raised: </p>
        </div>
      </CCol>

      <CCol sm="6" lg="4">
        <div
          className="pt-4 pl-3 d-flex justify-content-between pr-3"
          style={{ height: "170px", backgroundColor: "#C75A00", color: "#fff" }}
        >
          <h4>Total Order</h4>
          <span className="text-white icon-position">
            <TiShoppingCart className="fs-3" />
          </span>
        </div>
      </CCol>
    </CRow>
  );
};

export default WidgetsDropDown;
