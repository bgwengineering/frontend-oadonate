import React from 'react'
import CommImg from "assets/images/homepage/community.jpg";
import TrendingCampaignCard from '../Trending';

const AllCategories = () => {
    return (
        <div>
            <div className="container sub-category-container">
            <div className="row align-items-center">
              <div className="col-lg-6 mt-3">
                <h4 className="sub-category-text-heading">
                  Get help with all your needs by fund raising
                </h4>
                <p className="sub-category-text-p">
                  With OgaDonate, you can get immediate help with <br />
                  all your needs
                </p>
              </div>
              <div className="col-lg-6 font-weight-bold categories_img_screen_media">
                <img 
                  src={CommImg}
                  alt="community-imgs"
                  className="business-img"
                  style={{ width: "100%", height: "300px" }}
                />
              </div>
            </div>
          </div>
          <div className="feature-headline text-center">
            <h1 className="text-capitalize trending-text">
              Trending campaigns
            </h1>
            <p>Campaign selected by our team</p>
          </div>
          <div className="trending-container mt-3">
            <TrendingCampaignCard />
          </div>
        </div>
    )
}

export default AllCategories
