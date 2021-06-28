import React from "react";
import { Button } from "@material-ui/core";
import { FaArrowRight } from "react-icons/fa";
import { Link, withRouter } from "react-router-dom";
import ProductList from './SlicedProductList';


const BuyToSupport = ({history}) => {
  return (
    <>
      <div className="support-headline text-center">
        <h1 className="text-capitalize">buy to support</h1>
        <p> Buy items to support the needy</p>
      </div>
      <div className="container">
        <div className="row"> 
          <ProductList />
        </div>
      </div>

      <div className="more-market-support">
        <Link className="link-router">
          <Button
            className="text-capitalize market-place-btn mt--10"
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth"
              }, history.push("/marketplace/products"))
            }
          >
            More <FaArrowRight style={{ color: "#fff", marginLeft: "10px" }} />
          </Button>   
        </Link>
      </div>
    </>
  );
};

export default withRouter(BuyToSupport);
