import React from 'react'
import personal from "assets/images/homepage/personal.jpg";
import PersonalTrending from './PersonalTrending'



const Personal = () => {
  return (
    <>
          <div className="container sub-category-container">
            <div className="row align-items-center">
              <div className="col-lg-6 mt-3">
                <h4 className="sub-category-text-heading">
                  Get help with personal <br /> fund raising
                </h4>
                <p className="sub-category-text-p">
                  With OgaDonate, you can get immediate help with <br />
                  Personal needs
                </p>
              </div>
              <div className="col-lg-6 font-weight-bold categories_img_screen_media">
                <img src={personal} alt="personal-imgs" className="personal-img" style={{width:'100%'}}/>
              </div>
            </div>
          </div>
    
          <div className="feature-headline text-center">
            <h1 className="text-capitalize trending-text">Trending in Personal</h1>
            <p>Campaign selected by our team</p>
          </div>
          <div className='mt-3 trending-container'>
             <PersonalTrending />   
          </div>
        </>
  )
}

export default Personal
