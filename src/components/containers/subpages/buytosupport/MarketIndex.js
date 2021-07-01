import React from 'react'
import { Switch, Route } from "react-router-dom";
<<<<<<< HEAD
import Details from './ProductDetails';
import MarketCollection from './MarketCollection'
import AuctionDetails from './AuctionDetails';
import AuctionCollection from './AuctionCollection';
=======
import Details from './Market/ProductDetails';
import MarketCollection from './Market/MarketCollection'
import AuctionDetails from './Auction/AuctionDetails';
// import AuctionCollection from './Auction/AuctionCollection';
import AllAuctionCollection from "./Auction/AllAuctionCollection";
>>>>>>> 5ee521180f26cd5a1b7e9c8b021b479ad5ff1dad


const MarketIndex = ({match}) => {
    return (
      <div>    
            <Switch>
            <Route
              exact
              path={`${match.url}/products`}
              component={MarketCollection}
            />
              <Route
              path={`${match.url}/products/:id/details/`}
              component={Details}
            />
              <Route
              path={`${match.url}/auction/:id/details/`}
              component={AuctionDetails}
                />
              <Route
              path={`${match.url}/auction`}
<<<<<<< HEAD
              component={AuctionCollection}
=======
              component={AllAuctionCollection}
>>>>>>> 5ee521180f26cd5a1b7e9c8b021b479ad5ff1dad
              />
            </Switch>
        </div>
    )
}

export default MarketIndex
