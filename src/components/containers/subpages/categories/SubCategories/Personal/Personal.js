import React from 'react'
import personal from "assets/images/homepage/personal.jpg";
import PersonalTrending from './PersonalTrending'
import { Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { FUNDRAISEBUTTONCLICKED } from 'store/actions/Category';


const Personal = () => {
  const dispatch = useDispatch();
  return (
    <>
          <div className="container sub-category-container">
            <div className="row align-items-center">
              <div className="col-lg-6 mt-3">
                <h4 className="sub-category-text-heading">
                  Get help with personal  fund raising
                </h4>
                <p className="sub-category-text-p">
                  With OgaDonate, you can get immediate help with Personal needs
                </p>
               <div id='fund__raise_btn'>
              <div>
                <Button className="start-fund-raise-btn" onClick={() => dispatch(FUNDRAISEBUTTONCLICKED())}>
                  Start FundRaise
             </Button>
              </div>
            </div>
              </div>
              <div className="col-lg-6 font-weight-bold categories_img_screen_media">
                <img src={personal} alt="personal-imgs" className="personal-img" style={{width:'100%'}}/>
              </div>
            </div>
          </div>
    
          <div className="feature-headline  text-center">
<<<<<<< HEAD
            <h1 className="text-capitalize trending-text">Trending in Personal</h1>
=======
            <h1 className="text-capitalize personal-trending-text">Trending in Personal</h1>
>>>>>>> 5ee521180f26cd5a1b7e9c8b021b479ad5ff1dad
            <p>Campaign selected by our team</p>
          </div>
          <div className='mt-3 trending-container'>
             <PersonalTrending />   
          </div>
        </>
  )
}

export default Personal
