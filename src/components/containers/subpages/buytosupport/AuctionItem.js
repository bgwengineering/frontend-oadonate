import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { useSelector } from "react-redux";
import {withRouter} from 'react-router-dom'
import { isTSImportType } from "@babel/types";



const AuctionItem = ({history}) => {
  const marketState = useSelector(state => state.marketPlaceReducer);
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


  return (
    <>
      {collections.length ? (
        collections.slice(indexOfLastCard, indexOfFirstCard).map(itemValues => {
          const {
            donate_item_img,
            donate_bid_min_val,
            donate_determine_by,
            donate_item_name,
            donate_mkt_bid,
            donate_currency,
            donate_bid_endAt,
            id,
            donate_item_condition,
          } = itemValues;

          if (donate_determine_by === "Market") {
            return (
              <div className="col-md-6 col-lg-3 my-3" key={id}>
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

                    <div className="bid-btn-container">
                      <div className="bid-btn-subdiv">
                        <Button className="card-text bid_btn"
                          onClick={() => window.scrollTo({
                            top: 0,
                            behavior:'smooth'
                          }, history.push(`marketplace/auction/${id}/details`))}
                         >           
                          Bid Now
                        </Button>
                      </div>
                    </div>
                  </div>

                  <p className="align-self-center text-uppercase mt-3 mb-0 bid-item-name">
                    {donate_item_name}
                  </p>
                  
                  {/*card footer */}
                  <div className="auction-starter d-flex flex-column align-items-center justify-content-center mt-4">
                    <h6 className="font-italic mb-0">
                      Starting-bid:
                      <span className="font-weight-bold">
                        {donate_currency}
                        {donate_bid_min_val}
                      </span>
                    </h6>
                    <h6 className="font-italic mt-2 mb-0">
                      Expires on:
                      <span className="font-weight-bold">
                        {donate_bid_endAt}
                      </span>
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
export default withRouter(AuctionItem)
