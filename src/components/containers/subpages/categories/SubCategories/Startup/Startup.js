import React from 'react'
import charity from "assets/images/homepage/charity.jpg";
import StartupTrending from './StartupTrending'
import { Button } from '@material-ui/core';
import { FUNDRAISEBUTTONCLICKED } from "store/actions/Category";
import { useDispatch } from "react-redux";


const StartUp = () => {
  const dispatch = useDispatch()
  return (
    <>
      <div className="container sub-category-container">
        <div className="row align-items-center">
          <div className="col-lg-6 mt-3">
            <h4 className="sub-category-text-heading">
              Get help with startup fund raising
            </h4>
            <p className="sub-category-text-p">
              With OgaDonate, you can get immediate fund for your startup
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
              src={charity}
              alt="personal-imgs"
              className="personal-img"
              style={{ width: "100%", height: "360px" }}
            />
          </div>
        </div>
      </div>

      <div className="feature-headline text-center">
        <h1 className="text-capitalize trending-text">Trending in start up</h1>
        <p>Campaign selected by our team</p>
      </div>
      <div className="trending-container mt-3">
        <StartupTrending />
      </div>
    </>
  );
}

export default StartUp
