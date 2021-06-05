import React, { useState, useEffect } from "react";
import { AiOutlineFolderOpen } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
<<<<<<< HEAD
import { addItem } from "store/actions/cart/cart.actions";
import { useDispatch, useSelector } from "react-redux";

const AuctionItem = () => {
  const marketState = useSelector((state) => state.marketPlaceReducer);
=======

import { useSelector } from "react-redux";


const AuctionItem = () => {
  const marketState = useSelector(state => state.marketPlaceReducer);
>>>>>>> fa873ad9394819f043d4a4b44cc90c1bdb6ff999
  const { collections } = marketState;

  const [open, setOpen] = useState(false);

  const [AuctionPage, setBuyToSupportPage] = useState(0);
  const [auctionCardPerPage] = useState(8);

  const indexOfLastCard = AuctionPage * auctionCardPerPage;
  const indexOfFirstCard = indexOfLastCard + auctionCardPerPage;

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
<<<<<<< HEAD
  return (
    <>
      {collections.length ? (
        collections.slice(indexOfLastCard, indexOfFirstCard).map((itemValues) => {
=======

  return (
    <>
      {collections.length ? (
        collections.slice(indexOfLastCard, indexOfFirstCard).map(itemValues => {
>>>>>>> fa873ad9394819f043d4a4b44cc90c1bdb6ff999
          const {
            donate_item_img,
            donate_bid_min_val,
            donate_determine_by,
            donate_item_name,
            donate_mkt_bid,
            donate_currency,
            donate_bid_endAt,
            id,
<<<<<<< HEAD
            donate_item_condition,
=======
            donate_item_condition
>>>>>>> fa873ad9394819f043d4a4b44cc90c1bdb6ff999
          } = itemValues;

          if (donate_determine_by === "Market") {
            return (
              <div className="col-md-6 col-lg-3 my-3" key={id}>
<<<<<<< HEAD
                <div className="card market-card">
                  <div className="img-container">
                    <Link to={`marketplace/auction/${id}/details`} className="link-router-inverted">
                      <img src={donate_item_img} alt="product" className="card-img-top mb-3" />
                    </Link>
=======
                <div className="card auction-card">
                  <div className="img-container">
                    <Link
                      to={`marketplace/auction/${id}/details`}
                      className="link-router-inverted"
                     >
                      <img
                        src={donate_item_img}
                        alt="product"
                        className="card-img-top mb-3"
                      />
                    </Link>

>>>>>>> fa873ad9394819f043d4a4b44cc90c1bdb6ff999
                    <div className="bid-btn-container">
                      <div className="bid-btn-subdiv">
                        <Button className="card-text bid_btn">
                          <Link
                            className="link-router-inverted"
                            to={`marketplace/auction/${id}/details`}
                          >
                            Bid Now
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>

                  <p className="align-self-center text-uppercase mb-0 bid-item-name">
                    {donate_item_name}
                  </p>
<<<<<<< HEAD

                  <div className="d-flex justify-content-around">
                    <div className="text-center">
                      <AiOutlineFolderOpen />
                      <span className="card-text align-self-center text-muted ml-1">
                        {donate_item_condition}
                      </span>
                    </div>
                    <div className="text-center">
                    <h6 className="font-italic  mt-130">
                      Type:
                      <span className="font-weight-bold">
                        {donate_mkt_bid}
                      </span>
                    </h6>
                    </div>
                  </div>
                 

                  {/*card footer */}
                  <div className="card-footer d-flex flex-column align-items-center justify-content-center mt-5">
                    <h6 className="font-italic  mb-0">
=======
                  
                  {/*card footer */}
                  <div className="auction-starter d-flex flex-column align-items-center justify-content-center mt-4">
                    <h6 className="font-italic mb-0">
>>>>>>> fa873ad9394819f043d4a4b44cc90c1bdb6ff999
                      Starting-bid:
                      <span className="font-weight-bold">
                        {donate_currency}
                        {donate_bid_min_val}
                      </span>
                    </h6>
<<<<<<< HEAD
                    <h6 className=" font-italic mt-2 mb-0">
                      Expires on: <span className="font-weight-bold">{donate_bid_endAt}</span>
=======
                    <h6 className="font-italic mt-2 mb-0">
                      Expires on:
                      <span className="font-weight-bold">
                        {donate_bid_endAt}
                      </span>
>>>>>>> fa873ad9394819f043d4a4b44cc90c1bdb6ff999
                    </h6>
                  </div>
                </div>
              </div>
            );
          }
        })
      ) : (
        <div className="d-flex justify-content-center align-items-center w-100">
          <h4>no available item for sale</h4>
        </div>
      )}
    </>
  );
};
export default AuctionItem;
