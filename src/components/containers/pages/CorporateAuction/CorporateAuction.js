import React from 'react'
import Corporate from "assets/images/homepage/corporate.jpg";
import { Link } from 'react-router-dom';


const CorporateAuction = () => {
    return (
      <div
        className="container affiliate-container"
        style={{ backgroundImage: `url(${Corporate})` }}
      >
        <h4 className="font-weight-bold text-uppercase d-flex align-items-center boss-text text-white">
         Corporate Auction
        </h4>
        <div className="mt-5">
          <button className="btn btn-lg affiliate-signup-btn">
            <Link className="link-router-inverted" to="affiliate-signup">
              Sign up
            </Link>
          </button>
        </div>
      </div>
    );
}

export default CorporateAuction;



