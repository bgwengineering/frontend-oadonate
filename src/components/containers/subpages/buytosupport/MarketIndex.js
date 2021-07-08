import React from 'react'
import { Switch, Route } from "react-router-dom";
import Details from './Market/ProductDetails';
import MarketCollection from './Market/MarketCollection'
import AuctionDetails from './Auction/AuctionDetails';
import AllAuctionCollection from "./Auction/AllAuctionCollection";


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
              component={AllAuctionCollection}
              />
            </Switch>
        </div>
    )
}

export default MarketIndex
