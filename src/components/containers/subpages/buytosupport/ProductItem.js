import React, {useState, useEffect} from 'react'
import  {AiOutlineFolderOpen} from "react-icons/ai"
import {Link} from 'react-router-dom'
import { Button } from '@material-ui/core';
import { addItem } from 'store/actions/cart/cart.actions';
import {useDispatch, useSelector} from 'react-redux'
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

var numeral = require('numeral')

const ProductItem = () => {  
  const dispatch = useDispatch()
  const marketState = useSelector(state=>state.marketPlaceReducer)
  const {collections} = marketState
 
  const [open, setOpen] = useState(false);
  const [count, setCount] = useState(0)
  
  const [BuyToSupportPage, setBuyToSupportPage] = useState(0)
  const [supportCardPerPage] = useState(8)

  const indexOfLastCard = BuyToSupportPage * supportCardPerPage
  const indexOfFirstCard = indexOfLastCard + supportCardPerPage

  const [inCart, setInCart] = useState(false);
  

  

   const controlSingleOrMultipleItemClick = (num) => {
     if (num === 1){
       return "item added"
     }else{
       return "items added"
     }
   } 
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
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
          donate_determine_price,
          donate_mkt_price,
          donate_item_name,
          donate_currency,
          id,
        } = itemValues;
        const marketPrice = numeral(donate_mkt_price).format("0, 0");

        if (donate_determine_price || donate_mkt_price) {
          return (
            <div className="col-md-6 col-lg-3 my-3" key={id}>
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
                  {/* <AiOutlineFolderOpen />
                <span className="card-text text-muted ml-1">
                 {donate_item_condition}
                 </span> */}
                  <h5 className="d-flex  justify-content-center text-blue font-italic mt-2 mb-0">
                    <span className="ml-1">{donate_currency}</span>
                    {marketPrice}
                  </h5>
                </div>

                {/*card footer */}
                <div className="card-footer mt-5">
                  <Button
                    className="card-text add_cart_btn"
                    onClick={() => {
                      dispatch(addItem(itemValues));
                      setOpen(true);
                      setCount(count + 1);
                      setInCart(true)
                    }}
                     disabled={inCart}
                  >
                    {inCart ? "in Cart" : "Add to Cart"}             
                  </Button>
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
  </>
);
};
export default ProductItem

