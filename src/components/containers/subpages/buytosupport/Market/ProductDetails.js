import React, { useEffect } from "react";
import { Button } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { getSingleMarketProductItem } from "store/actions/MarketPlace";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { addItem } from "store/actions/cart/cart.actions";
import {Link} from 'react-router-dom'

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

const Details = ({ match }) => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSingleMarketProductItem(match.params.id));
  }, []);
  const productState = useSelector(state => state.marketPlaceReducer);
  const { singleCollections } = productState;
  const {
    donate_item_img,
    donate_mkt_price,
    donate_item_name,
    donate_product_category,
    donate_comment,
    donate_currency,
    donate_item_desc,
    id,
    donate_item_condition
  } = singleCollections;
  console.log(singleCollections);

  return (
    <>
      <div className="container py-3">
        {/* title */}

        <div className="row">
          <div className="col-12 col-md-6 my-3 text-capitalize">
            <img
              src={donate_item_img}
              className="img-fluid"
              alt="img_product"
            />
          </div>

          {/*product text*/}
          <div className="col-12 col-md-6 my-3 text-capitalize">
            <div className="pl-5">
              <h2>{donate_item_name}</h2>
              <h4>Category: {donate_product_category}</h4>
              <h4 className="text-blue">
                <strong>
                  price: <span>{donate_currency}</span>
                  {donate_mkt_price}
                </strong>
              </h4>
              <p className="text-capitalize font-weight-bold mt-3 mb-0">
                Item Condition: {donate_item_condition}
              </p>
              <p className="text-muted lead">{donate_comment}</p>

              <div>
                <Link to="/">
                  <Button className="back_product">back to products</Button>
                </Link>
                <Button
                  className="add_cart_details_btn ml-4"
                  onClick={() => dispatch(addItem(singleCollections))}
                  >
                  add to cart
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* tab section */}
      <div>
        <AppBar position="static">
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="simple tabs example"
          >
            <Tab label="DESCRIPTION" {...a11yProps(0)} />
            <Tab label="MORE INFORMATION" {...a11yProps(1)} />
          </Tabs>
        </AppBar>

        <TabPanel value={value} index={0}>
          <div>
            <div className="col-lg-8"></div>
            {donate_item_desc}
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <div>
            <div className="col-lg-8">{donate_comment}</div>
          </div>
        </TabPanel>
      </div>
    </>
  );
};

export default Details;
