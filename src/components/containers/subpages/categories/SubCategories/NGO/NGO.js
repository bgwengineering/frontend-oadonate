import React from "react";

import community from "assets/images/homepage/community.jpg";
import NGOTrending from './NGOTrending'

const Ngo = () => {
  return (
      <>
        <div className="container sub-category-container">
        <div className="row align-items-center">
          <div className="col-lg-6 mt-3">
            <h4 className="sub-category-text-heading">
              Get help with NGO <br /> fund raising
            </h4>
            <p className="sub-category-text-p">
           
            With Ogadonate, you can get immediate fund to support your NGO projects
            </p>
          </div>
          <div className="col-lg-6 font-weight-bold categories_img_screen_media">
            <img src={community} alt="community-imgs" className="business-img" style={{width:'100%', height:'300px'}}/>
          </div>
        </div>
      </div>
    <div className="feature-headline trending-container  text-center">
      <h1 className="text-capitalize trending-text">Trending in NGO</h1>
      <p>Campaign selected by our team</p>
    </div>
   <div className='mt-3'>
    <NGOTrending/>
   </div>
  </>
  );
};

export default Ngo;
