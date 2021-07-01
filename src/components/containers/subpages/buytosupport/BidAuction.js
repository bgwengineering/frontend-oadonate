import React from "react";
import { Button } from "@material-ui/core";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import AuctionCollection from "./AuctionCollection";

const BidAuction = () => {
  return (
    <>
      <div className="support-headline text-center">
        <h1 className="text-capitalize">Auction Products</h1>
      </div>
      <AuctionCollection />
      <div className="more-market-support">
        <Link className="link-router" to="/marketplace/auction">
          <Button
            className="text-capitalize market-place-btn mt--10"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            More <FaArrowRight style={{ color: "#fff", marginLeft: "10px" }} />
          </Button>
        </Link>
      </div>
    </>
  );
};

export default BidAuction;
