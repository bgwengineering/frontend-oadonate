import React, {useState, useEffect} from 'react'
import  {AiOutlineFolderOpen} from "react-icons/ai"
import {Link} from 'react-router-dom'
import { Button } from '@material-ui/core';
import { addItem } from 'store/actions/cart/cart.actions';
import {useDispatch, useSelector} from 'react-redux'
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';


const AuctionItem = () => {
  const dispatch = useDispatch()
  const marketState = useSelector(state => state.marketPlaceReducer)
  const { collections } = marketState
 
  const [open, setOpen] = useState(false);
  const [count, setCount] = useState(0)

  const [AuctionPage, setBuyToSupportPage] = useState(0)
  const [auctionCardPerPage] = useState(8)

  const indexOfLastCard = AuctionPage * auctionCardPerPage;
  const indexOfFirstCard = indexOfLastCard + auctionCardPerPage;

  
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };
  return (
    <>
      {collections.length ? collections.slice(indexOfLastCard, indexOfFirstCard).map(itemValues => {
        const { donate_item_img, donate_mkt_price,donate_determine_by, donate_item_name, donate_mkt_bid, donate_currency, id, donate_item_condition } = itemValues
       
        if (donate_determine_by == 'Market') {
          return (
            <div className="col-md-6 col-lg-3 my-3" key={id}>
              <div className="card market-card">
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

                <div>
                  <div className="text-center">
                    <AiOutlineFolderOpen />
                    <span className="card-text align-self-center text-muted ml-1">
                      {donate_item_condition}
                    </span>
                  </div>
                </div>

                {/*card footer */}
                <div className="card-footer d-flex flex-column align-items-center justify-content-center mt-5">
                  <h6 className="font-italic mb-0">
                    Starting-bid:<span className='font-weight-bold'>{donate_mkt_price}</span>
                  </h6>
                  <h6 className=" font-italic mt-2 mb-0">
                    Expires on:
                  </h6>
                </div>
              </div>
            </div>
          );
        }
 
        }) : <h4 className='text-center'>no available item for sale</h4>}
    
    </>
  )
};
export default AuctionItem


