import React from "react";
import help from "assets/images/homepage/help.jpeg";
import NGOTrending from './NGOTrending'
import { Button } from '@material-ui/core';
import { FUNDRAISEBUTTONCLICKED } from "store/actions/Category";
import { useDispatch } from "react-redux";

const Ngo = () => {
  const dispatch = useDispatch()
  return (
    <>
      <div className="container sub-category-container">
        <div className="row align-items-center">
   
          <div className="col-lg-6 mt-3">
            <h4 className="sub-category-text-heading">
              Get help with NGO fund raising
            </h4>
            <p className="sub-category-text-p">
              With Ogadonate, you can get immediate fund to support your NGO
              projects
            </p>
            <div id="fund__raise_btn">
              <div>
                <Button
                  className="start-fund-raise-btn"
                  onClick={() => dispatch(FUNDRAISEBUTTONCLICKED())}
                >
                  Start FundRaise
                </Button>
              </div>
            </div>
          </div>
          <div className="col-lg-6 font-weight-bold categories_img_screen_media">
            <img
              src={help}
              alt="community-imgs"
              className="community-img"
              style={{ width: "100%", height: "360px" }}
            />
          </div>
        </div>
      </div>
      <div className="feature-headline text-center">
        <h1 className="text-capitalize trending-text">Trending in NGO</h1>
        <p>Campaign selected by our team</p>
      </div>
      <div className="trending-container mt-3">
        <NGOTrending />
      </div>
    </>
  );
};

export default Ngo;
