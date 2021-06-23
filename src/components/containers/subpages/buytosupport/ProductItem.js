import React, { useState } from "react";
import { AiOutlineFolderOpen } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { addItem } from "store/actions/cart/cart.actions";
import { useDispatch, useSelector } from "react-redux";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

var numeral = require("numeral");
// 2705-0058-3193
const ProductItem = ({ product, indx}) => {
  const {
    donate_item_img,
    donate_mkt_price,
    donate_item_name,
    donate_currency,
    id,
    donate_item_condition
  } = product;

  const marketPrice = numeral(donate_mkt_price).format("0,0");
  const dispatch = useDispatch();
  const cartState = useSelector(state => state.cartReducer);
  const { cartItems } = cartState;

  const itemInCart = cartItems.find(item => item.id === id);

  return (
    <>
      <div className="col-md-6 col-lg-3 my-3" key={indx}>
        <div className="card market-card">
          <div className="img-container">
            <Link to={`marketplace/products/${id}/details`}>
              <img
                src={donate_item_img}
                alt="product"
                className="card-img-top mb-3"
              />
            </Link>
          </div>
          <p className="align-self-center text-uppercase  mt-1 mb-0 item-name">
            {donate_item_name}
          </p>
          <div>
            <AiOutlineFolderOpen />
            <span className="card-text text-muted ml-1">
              {donate_item_condition}
            </span>
            <h5 className="d-flex  justify-content-center text-blue font-italic mt-2 mb-0">
              <span className="ml-1">{donate_currency}</span>
              {marketPrice}
            </h5>
          </div>

          {/*card footer */}
          <div className="card-footer mt-5">
            <Button
              className="card-text add_cart_btn"
              onClick={() => (!itemInCart ? dispatch(addItem(product)) : null)}
          >
              {!itemInCart ? "Add to Cart" : "In Cart"}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductItem;
