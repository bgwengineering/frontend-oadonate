import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSingleMarketProductItem } from "store/actions/MarketPlace";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { RiAuctionFill } from "react-icons/ri";
import { BsEyeSlash } from "react-icons/bs";
import { BsEye } from "react-icons/bs";
import { RiUserHeartFill } from "react-icons/ri";
import { RiUserHeartLine } from "react-icons/ri";
import { AiOutlineShop } from "react-icons/ai";
import Countdown from "react-countdown";
import { auctionBid } from "store/actions/auth/Dashboard";


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

const a11yProps = index => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
};


const AuctionDetails = ({ match }) => {
  const bid_id = match.params.id;
  const [value, setValue] = useState(0);
  const [anonymously, setAnonymously] = useState(false);
  const [typeBidAmount, setTypeBidAmount] = useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const unknownBidder = () => {
    setAnonymously(prevState => !prevState);
  };
  const handleSetBidAmountIncrease = () => {
    setTypeBidAmount(Number(typeBidAmount) + 1);
  };

  const handleBidChange = e => {
    setTypeBidAmount(e.target.value);
  };

  const handleSubmit = () => {
    const bidValues = {
      auction_item: bid_id,
      bid_amount: typeBidAmount,
      bid_anonymously: anonymously,
    };
    dispatch(auctionBid(bidValues));
  };

  const handleSetBidAmountDecrease = () => {
    if (typeBidAmount === 1) {
      setTypeBidAmount(typeBidAmount);
    } else {
      setTypeBidAmount(Number(typeBidAmount) - 1);
    }
  };

  const Completionist = () => <span>Auction Ended</span>;
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <Completionist />;
    } else {
      return (
        <span className="d-flex justify-content-around">
          <div className="d-block">
            <div className="font-weight-bold">{days}</div>
            <span className="font-weight-bold time-text">Days</span>
          </div>
          :
          <div className="d-block">
            <div className="font-weight-bold">{hours}</div>
            <span className="font-weight-bold time-text">Hours</span>
          </div>
          :
          <div className="d-block">
            <div className="font-weight-bold">{minutes}</div>
            <span className="font-weight-bold time-text">Minutes</span>
          </div>
          :
          <div className="d-block">
            <div className="font-weight-bold">{seconds}</div>
            <span className="font-weight-bold time-text">Seconds</span>
          </div>
        </span>
      );
    }
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSingleMarketProductItem(match.params.id));
  }, []);

  const productState = useSelector(state => state.marketPlaceReducer);
  const { singleCollections } = productState;

  const {
    donate_item_img,
    donate_item_desc,
    donate_mkt_bid,
    donate_item_name,
    donate_product_category,
    donate_bid_min_val,
    donate_item_condition,
    donate_currency,
    donate_bid_endAt,
    auction_item,
    user
  } = singleCollections;

  const [AuctionType, setauction] = useState(donate_mkt_bid);


  const auction =
    auction_item &&
    auction_item.map(user_bid => {
      const { user, bid_amount, bid_anonymously, id, create_date } = user_bid;

      return (
        <div key={id}>
          {bid_anonymously ? (
            <div className="bidding-history d-flex justify-content-between">
              <div className="d-flex">
                <div className="anonymous-bidding-history-icon">
                  <RiUserHeartLine size={25} color="#c75a00" />
                </div>
                <div className="ml-3">
                  <ul>
                    <li className="font-weight-bold">Anonymous{}</li>
                    <li className="font-weight-bold">{bid_amount}</li>
                  </ul>
                </div>
              </div>
              <div>{create_date.substring(0, 10)}</div>
            </div>
          ) : (
            <div className="bidding-history d-flex justify-content-between">
              <div className="d-flex">
                <div className="bidding-history-icon">
                  <RiUserHeartFill size={25} color="#c75a00" />
                </div>
                <div className="ml-3">
                  <ul>
                    <li>
                      {user.first_name} {user.last_name}
                    </li>
                    <li className="font-weight-bold">₦{bid_amount}</li>
                  </ul>
                </div>
              </div>
              <div>{create_date.substring(0, 10)}</div>
            </div>
          )}
        </div>
      );
    });
  
  const currentBid =
    auction_item &&
    auction_item.map((user_bid, i, arr) => {
      if (arr.length - 1 === i) {
        return user_bid.bid_amount;
      }
    });
  
  const Auction =
    donate_mkt_bid === "Open" ? (
      <div>{auction}</div>
      ) : (
      <h4>Auction is a close Bid</h4>
      );
  
  return (
    <>
      <div className="auction-container">
        {/* title */}
        <div className="row">
          <div className="auction-image-container col-md-4 col-lg-4 mr-5 my-3 text-capitalize">
            <img
              src={donate_item_img}
              className="img-fluid auction-image"
              alt="img_product"
            />
          </div>

          {/*product text*/}
          <div className="auction-detail-container col-md-7 text-capitalize">
            <div className="pl-5">
              <h2 className='lead text-uppercase font-weight-bold text-center'>{donate_item_name}</h2>
              <h4 className="text-title text-uppercase text-muted mb-2 font-weight-bold">
                <span className="text-capitalize">
                  Current Bid:{donate_currency}
                  {currentBid}
                </span>
              </h4>
              <hr />
              <p className="text-capitalize bid-text mt-3 mb-0">
                Item Condition:<b className="ml-2">{donate_item_condition}</b>
              </p>

              <p className="text-capitalize bid-text mt-3 mb-0">
                Auction Type:<b className="ml-2">{donate_mkt_bid}</b>
              </p>
              <p className="mt-3 bid-text">
                Auction ends:<b className="ml-2">{donate_bid_endAt} </b>
              </p>
              <p className="lead d-flex">
                <div className="time-left bid-text">Time Left: </div>
                <span className="countdown-container">
                  <Countdown
                    date={String(donate_bid_endAt)}
                    renderer={renderer}
                  />
                </span>
              </p>
              <p className="bid-text">
                Category: <b className="ml-2">{donate_product_category}</b>
              </p>

              {/*Buttons*/}
              <div>
                <div className="auction-add-minus-container flex-wrap d-flex">
                  <div className="sub-auction d-flex flex-wrap justify-content-between align-items-center">
                    <p className="bid-text">
                      Bid Amount:
                      <span className="auction-add-minus-subcontainer d-flex justify-content-between align-items-center">
                        <p
                          className="auction-minus mt-3"
                          onClick={handleSetBidAmountDecrease}
                        >
                          -
                        </p>
                        <input
                          className="bid-amt-input text-center"
                          name="bid_amount"
                          min={typeBidAmount}
                          value={typeBidAmount}
                          type="number"
                          onChange={handleBidChange}
                        />
                        <p
                          className="auction-add mt-3"
                          onClick={handleSetBidAmountIncrease}
                        >
                          +
                        </p>
                      </span>
                    </p>

                    <div className="bidnow-button-container d-flex mt-3">
                      <button
                        className="btn-bidding text-uppercase"
                        onClick={handleSubmit}
                      >
                        Bid now
                        <span>
                          <RiAuctionFill className="riauction-icon" />
                        </span>
                      </button>

                      <div
                        className="riauction-container d-flex justify-content-center align-items-center ml-4"
                        title="Bid Anonymously"
                        onClick={unknownBidder}
                      >
                        {anonymously ? (
                          <BsEyeSlash className="riauction-icon" />
                        ) : (
                          <BsEye className="riauction-icon" />
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="buy-btn-bidding-container mt-3 d-flex justify-content-end py-1 ml-4">
                  <button className="buy-btn-bidding text-uppercase">
                    Buy now for
                    <span className="ml-3">
                      {donate_currency + donate_bid_min_val}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* tab section */}
      <div className="auction-tab">
        <AppBar position="static">
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="simple tabs example"
          >
            <Tab label="BIDDING HISTORY" {...a11yProps(0)} />
            <Tab label="DESCRIPTION" {...a11yProps(1)} />
            <Tab label="VENDOR" {...a11yProps(2)} />
          </Tabs>
        </AppBar>

         
        <TabPanel value={value} index={0}>
          <div>
            <div className="col-lg-8">{Auction}</div>
          </div>
        </TabPanel> 

        <TabPanel value={value} index={1}>
          <div>
            <div className="col-lg-8">{donate_item_desc}</div>
          </div>
        </TabPanel>

        <TabPanel value={value} index={2}>
          <div>
            <div className="col-lg-8 d-flex">
              <AiOutlineShop /> Vendor:{" "}
              {user && (
                <p>
                  {user.first_name} {user.last_name}
                </p>
              )}
            </div>
          </div>
        </TabPanel>
      </div>
    </>
  );
};

export default AuctionDetails;
