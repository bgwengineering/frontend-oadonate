import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import cart from "assets/images/homepage/cart.jpeg";
import { Button } from '@material-ui/core';
import {useSelector, useDispatch} from 'react-redux'
import { getSingleMarketProductItem } from 'store/actions/MarketPlace';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {RiAuctionFill} from 'react-icons/ri'

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


const AuctionDetails = ({ match }) => {  
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [bidAmount, setBidAmount] = useState(400 + 1)
  const handleSetBidAmountIncrease = () => {
    setBidAmount(bidAmount + 1)
  }

  const handleSetBidAmountDecrease = () => {
    if(bidAmount === 401){
      setBidAmount(bidAmount) 
    }else{
        setBidAmount(bidAmount - 1)
      }  
  }

  const dispatch = useDispatch()  
    useEffect(() => {
    dispatch(getSingleMarketProductItem(match.params.id))
  }, [])  

    const productState = useSelector(state=>state.marketPlaceReducer)
    const {singleCollections} = productState
    const {donate_item_img, donate_mkt_price, donate_mkt_bid, donate_item_name, donate_currency, id, donate_item_condition} = singleCollections
  return ( 
  <>
   <div className = "auction-container">
      {/* title */}
    <div className="row">    
     <div className = "auction-image-container col-md-4 col-lg-4 mr-5 my-3 text-capitalize">
       <img src={cart} className="img-fluid auction-image" alt="img_product"/>
     </div>
          
   {/*product text*/}
   <div className="auction-detail-container col-md-7 text-capitalize">
    <div className='pl-5'>
    <h2>{donate_item_name}</h2>
    <h4 className="text-title text-uppercase text-muted mb-2">
     <span className="text-capitalize">Starting Bid:{donate_mkt_bid}</span>  
    </h4>

    <p className="text-capitalize font-weight-bold mt-3 mb-0">
          Item Condition:{donate_item_condition}
    </p>          
              <p className="text-muted lead">Auction ends: </p>
              <p className="text-muted lead">Timezone: </p>
              <p className="text-muted lead">Category:</p> 
     {/*Buttons*/}
    <div>
                <div className='auction-add-minus-container d-flex justify-content-between align-items-center'>
                  <div className='d-flex justify-content-between align-items-center'>
    <span className='auction-add-minus-subcontainer d-flex justify-content-between align-items-center'>
    <p className='auction-minus mt-3' onClick={handleSetBidAmountDecrease}>-</p>
     <input type='number' className='bid-amt-input text-center' min={bidAmount} name='bid_amount' value={bidAmount} />
    <p className='auction-add mt-3' onClick={handleSetBidAmountIncrease}>+</p>
    </span>
    <div className='riauction-container d-flex justify-content-center align-items-center py-1 ml-4'>
       <RiAuctionFill className='riauction-icon' title='bid now'/>
   </div>
      </div>
    <button className='btn-bidding text-uppercase'>Buy now for</button>
    </div>
   </div>
   </div>
   </div> 
          
      </div>
      </div>

    {/* tab section */}
    <div className="auction-tab">
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="DESCRIPTION" {...a11yProps(0)} />
          <Tab label="MORE INFORMATION" {...a11yProps(1)} />
          <Tab label="REVIEWS" {...a11yProps(2)} />
        </Tabs>
        </AppBar>
         
      <TabPanel value={value} index={0}>
        <div>
        <div className="col-lg-8">
      </div>
     </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <div>
        <div className="col-lg-8">
       </div>
    </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <div>
        <div className="col-lg-8">
      
        </div>
        </div>
      </TabPanel>
    </div>
    </>
    )
   }

export default AuctionDetails;
   