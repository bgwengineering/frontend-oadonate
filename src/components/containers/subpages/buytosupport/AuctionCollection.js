import React from 'react'
import AuctionItem from './AuctionItem';

const AuctionCollection = () => {
    return (
        <div className="container">
        <h5 className='text-center mb-3 mt-3 text-uppercase font-weight-bold'>Auction Products</h5>  
     <div className="row">  
       <AuctionItem />
     </div>
     </div>     
    )
}

export default AuctionCollection
