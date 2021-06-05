import React from 'react'
import { Switch, Route } from "react-router-dom";
import Details from './ProductDetails';
import MarketCollection from './MarketCollection'
import AuctionDetails from './AuctionDetails';
import AuctionCollection from './AuctionCollection';


const MarketIndex = ({match}) => {
    return (
      <div>    
<<<<<<< HEAD
=======
            <h2 className='text-center mt-3'>Products</h2> 
>>>>>>> fa873ad9394819f043d4a4b44cc90c1bdb6ff999
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
              component={AuctionCollection}
              />
            </Switch>
        </div>
    )
}

export default MarketIndex
