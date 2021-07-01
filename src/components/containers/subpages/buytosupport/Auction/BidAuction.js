import React from "react";
import { Button } from "@material-ui/core";
import { FaArrowRight } from "react-icons/fa";
import { Link, withRouter } from "react-router-dom";
import AuctionCollection from "./AuctionCollection";

const BidAuction = ({ history }) => {
  return (
    <>
      <div className="support-headline text-center">
        <h1 className="text-capitalize">Auction Products</h1>
      </div>
        <AuctionCollection />
      <div className="more-market-support">
        <Link className="link-router">
          <Button
            className="text-capitalize market-place-btn mt--10"
             onClick={() => window.scrollTo({
              top: 0,
              behavior: "smooth"
            }, history.push("/marketplace/auction"))}
          >
            More <FaArrowRight style={{ color: "#fff", marginLeft: "10px" }} />
          </Button>
        </Link>
      </div>
    </>
  );
};

export default withRouter(BidAuction);
