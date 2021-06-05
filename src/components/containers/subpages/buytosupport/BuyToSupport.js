import React from "react";
import {Button} from '@material-ui/core'
import {FaArrowRight} from 'react-icons/fa';
import {Link} from 'react-router-dom'
import MarketCollection from "./MarketCollection";

const BuyToSupport = () => {
  return (
    <>
      <div className="support-headline text-center">
        <h1 className="text-capitalize">buy to support</h1>
        <p> Buy items  to support the needy</p>
      </div>
         <MarketCollection/>
        <div className='more-market-support'>
       <Link className='link-router' to='/marketplace/products'>
       <Button className='text-capitalize market-place-btn mt--10'>More <FaArrowRight style={{color:'#fff', marginLeft:'10px'}}/></Button>
       </Link>
       </div>
    </>
  );
};

export default  BuyToSupport;

