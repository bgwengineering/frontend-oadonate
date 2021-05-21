import React from "react";
import Boss from "assets/images/homepage/boss.jpg";
import { Link } from 'react-router-dom';

const Affiliate = () => {
  return (
    <div
      className="container affiliate-container"
      style={{ backgroundImage: `url(${Boss})` }}
    >
      <h4 className="font-weight-bold text-uppercase d-flex align-items-center boss-text">
        Become your own boss
      </h4>
          <div className='mt-5'>
          <button className="btn btn-lg affiliate-login-btn mr-4"><Link to='/affiliate-login'>Login</Link></button>
              <button className="btn btn-lg affiliate-signup-btn"><Link to='affiliate-signup'>Sign up</Link></button>
          </div>
    </div>
  );
};

export default Affiliate;
