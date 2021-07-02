import React from "react";
import { CRow, CCol } from "@coreui/react";
import { GiReceiveMoney } from "react-icons/gi";
import { IoQrCodeOutline } from "react-icons/io5";
import { RiFundsLine } from "react-icons/ri";
import { TiShoppingCart } from "react-icons/ti";
import { VscReferences} from "react-icons/vsc"
import { useSelector } from "react-redux";
import {Link} from 'react-router-dom'

var numeral = require("numeral");

  const WidgetsDropDown = () => {
  // donations
  const fundDonateState = useSelector(state => state.userTypeReducer);
  const { user_donations_received } = fundDonateState;

  // item funds raised
  const fundRaiseItemState = useSelector(state => state.fundDonateReducer);
  const { singleCampaignItem } = fundRaiseItemState;

  // cash funds raised
  const fundRaiseCashState = useSelector(state => state.fundDonateReducer);
  const { singleCampaign } = fundRaiseCashState;

    // CASH DONATION 
  const cashDonateState = useSelector(state => state.fundDonateReducer);
  const { singleDonateCash } = cashDonateState

    
  // order
  const orderState = useSelector(state => state.orderReducer);
  const { orders } = orderState;

  // auction
  const auctionState = useSelector(state => state.orderReducer);
  const { auction } = auctionState;

    
    // cash donation 
    const cashDonated = singleDonateCash.length && singleDonateCash.map(data => { 
      return (
        data
      )
    })
  // item funds
  const itemFundsRaised =
    singleCampaignItem.length &&
    singleCampaignItem.map(data => data.fund_title);
  const totalItemFundsRaised = itemFundsRaised.length;

  const cashFundsRaised =
    singleCampaign.length && singleCampaign.map(data => data.fund_title);

  // total cash funds
  const totalCashFundsRaised = cashFundsRaised.length;

  // total donations
  const donations =
    user_donations_received.length &&
    user_donations_received.map(donation =>
      parseInt(donation.fund_cash_amount)
    );

  const totalDonations =
    donations.length &&
    donations.reduce((acc, val) => {
      return acc + val;
    }, 0);

  // total orders
  const ordersMade = orders.length && orders.map(order => order.total_price);
  const totalOrders = ordersMade.length;

  // total auction bids
  const auctionMade =
    auction.length && auction.map(auct => parseInt(auct.bid_amount));
  const totalBidAmount =
    auctionMade.length &&
    auctionMade.reduce((acc, val) => {
      return acc + val;
    }, 0);

    const userState = useSelector(state => state.authReducer.user);
    const {is_affiliate, affiliate_referal_code } = userState;

   return (
     <>
       {is_affiliate ? (
         <>
           <CRow>
             <CCol sm="6" lg="4" style={{ marginTop: "20px" }}>
               <div
                 className="pt-4 pl-3"
                 style={{
                   height: "170px",
                   backgroundColor: "#0C5421",
                   color: "#fff"
                 }}
               >
                 <div className=" d-flex justify-content-between pr-3">
                   <h4>Affiliate or referral Code</h4>
                   <span className="text-white  icon-position">
                     <IoQrCodeOutline className="fs-3" />
                   </span>
                 </div>

                 {/* total donations */}
                 <h4 className="font-weight-bold">
                   Code: {affiliate_referal_code}
                 </h4>
               </div>
             </CCol>

             <CCol sm="6" lg="4" style={{ marginTop: "20px" }}>
               <h4 className="text-uppercase text-center fs-2 mt-5">
                 Create your affiliate profile
               </h4>
             </CCol>
             <CCol sm="6" lg="4" style={{ marginTop: "20px" }}>
               <div
                 className="pt-4 pl-3"
                 style={{
                   height: "170px",
                   backgroundColor: "#0C5421",
                   color: "#fff"
                 }}
                >
                 <div className=" d-flex justify-content-between pr-3">
                   <h4>Number of referred users</h4>
                   <span className="text-white  icon-position">
                     <VscReferences className="fs-3" />
                   </span>
                 </div>

                 {/* total donations */}
                 <h4 className="font-weight-bold">
                   Number:<span className="referred-user-number">0</span>
                 </h4>
               </div>
             </CCol>
           </CRow>
           <div className="affiliate-link-bounce">
             <div className="ikon">
               <Link
                 title="Click and fill in your details"
                 style={{ backgroundColor: "#C75A00", padding: "18px" }}
                 role="button"
                 to="dashboard/profile"
                >
                 <span className='create-affiliate-profile'>Create Affiliate Profile</span>
               </Link>
             </div>
           </div>
         </>
       ) : (
         <CRow>
           <CCol sm="6" lg="4" style={{ marginTop: "20px" }}>
             <div
               className="pt-4 pl-3"
               style={{
                 height: "170px",
                 backgroundColor: "#C75A00",
                 color: "#fff"
               }}
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

           <CCol sm="6" lg="4" style={{ marginTop: "20px" }}>
             <div
               className="pt-4 pl-3"
               style={{
                 height: "170px",
                 backgroundColor: "#0C5421",
                 color: "#fff"
               }}
             >
               <div className=" d-flex justify-content-between pr-3">
                 <h4>Funds Raised</h4>
                 <span className="text-white icon-position">
                   <RiFundsLine className="fs-3" />
                 </span>
               </div>
               <div className="d-flex justify-content-between pr-3">
                 <p className="mt-2">Total item funds raised </p>
                 <p className="font-weight-bold total-donations-received">
                   {totalItemFundsRaised}
                 </p>
               </div>
               <div className="d-flex justify-content-between pr-3">
                 <p className="mt-2">Total cash funds raised</p>
                 <p className="font-weight-bold total-donations-received">
                   {totalCashFundsRaised}
                 </p>
               </div>
             </div>
           </CCol>

           <CCol sm="6" lg="4" style={{ marginTop: "20px" }}>
             <div
               className="pt-4 pl-3 pr-3"
               style={{
                 height: "170px",
                 backgroundColor: "#C75A00",
                 color: "#fff"
               }}
             >
               <div className="d-flex justify-content-between pr-3">
                 <h4>Total Orders</h4>
                 <span className="text-white icon-position">
                   <TiShoppingCart className="fs-3" />
                 </span>
               </div>
               <div className="d-flex justify-content-between pr-3">
                 <p className="mt-2">Total Products Ordered</p>
                 <p className="font-weight-bold total-donations-received">
                   {numeral(totalOrders).format("0,0")}
                 </p>
               </div>
               <div className="d-flex justify-content-between pr-3">
                 <p className="mt-2">Total Bid amount</p>
                 <p className="font-weight-bold total-donations-received">
                   {numeral(totalBidAmount).format("0,0")}
                 </p>
               </div>
             </div>
           </CCol>
         </CRow>
       )}
     </>
   );
}


export default WidgetsDropDown;
