import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { Button } from "@material-ui/core";
import { addItem } from "store/actions/cart/cart.actions";
import { useDispatch, useSelector } from "react-redux";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

var numeral = require("numeral");

const ProductItem = ({
  product,
  indx,
  history
}) => {

  const {
    donate_item_img,
    donate_mkt_price,
    donate_item_name,
    donate_currency,
    id
  } = product;

console.log(product);

const [open, setOpen] = useState(false);
  const [count, setCount] = useState(0);
  
const controlSingleOrMultipleItemClick = num => {
    if (num === 1) {
      return "item added";
    } else {
      return "items added";
    }
  };

  const marketPrice = numeral(donate_mkt_price).format("0,0");
  const dispatch = useDispatch();
  const cartState = useSelector(state => state.cartReducer);
  const { cartItems } = cartState;

  const itemInCart = cartItems.find(item => item.id === id);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleItemInCart = () => {
    setOpen(true);
    dispatch(addItem(product));
    setCount(count + 1)
  }

  return (
    <>
      {donate_mkt_price &&
        <div className="col-md-6 col-lg-3 my-3" key={indx}>
          <div className="card market-card">
            <div
              onClick={() =>
                window.scrollTo(
                  {
                    top: 0,
                    behavior: "smooth"
                  },
                  history.push(`marketplace/products/${id}/details`)
                )
              }
            >
              <div className="img-container">
                <Link>
                  <img
                    src={donate_item_img}
                    alt="product"
                    className="card-img-top mb-3"
                  />
                </Link>
              </div>
              <p className="mx-auto truncate text-uppercase mt-1 mb-0 item-name">
                {donate_item_name}
              </p>
              <div>
                <h5 className="d-flex justify-content-center font-italic mt-2 mb-0">
                  <span className="ml-1">{donate_currency}</span>
                  {marketPrice}
                </h5>
              </div>
            </div>

            {/*card footer */}
            <div className="card-footer mt-4">
              <Button
                className="card-text add_cart_btn"
                onClick={() => {
                  return !itemInCart ? handleItemInCart() : null;
                }}
              >
                {!itemInCart ? "Add to Cart" : "In Cart"}
              </Button>
            </div>
          </div>
          <Snackbar
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center"
            }}
            open={open}
            autoHideDuration={2000}
            onClose={handleClose}
            message={count + " " + controlSingleOrMultipleItemClick(count)}
            action={
              <React.Fragment>
                <IconButton
                  size="small"
                  aria-label="close"
                  color="inherit"
                  onClick={handleClose}
                >
                  <CloseIcon fontSize="small" />
                </IconButton>
              </React.Fragment>
            }
          />
        </div>
      }
    </>
  );
};

export default withRouter(ProductItem)
