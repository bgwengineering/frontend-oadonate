import React from 'react';
import fundraise from "assets/images/homepage/fundraise.jpeg";
import cart from "assets/images/homepage/cart.jpeg";
import donate from "assets/images/homepage/donate.jpeg";
import { Slide } from 'react-slideshow-image';
import  Button  from '@material-ui/core/Button';
import { Link, withRouter} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { cartHidden } from 'store/actions/cart/cart.actions';


const ImageSlider = ({history}) => {
  const dispatch = useDispatch()

    return (
        <div onClick={()=>dispatch(cartHidden())}>
        <Slide>
        <div className='each-slide'>
        <div className='image-slide'>
        <div
        className="image-slider"
        style={{backgroundImage: `url(${donate})`}}
         >
        <h4 className="fw-bold text-white slider-text">
         Donate  your IDLE items to fund a personal, <br/> social or community need
        </h4>
        <Button variant="contained" className="slider-btn text-capitalize mt-5">
                  <Link onClick={() => {
                    window.scrollTo({
                      top: 0,
                      behavior:'smooth'
                    }, history.push('/donate/ogadonate'))
                  }} className='slider-link'>
            Start Now
           </Link>
        </Button>
      </div>
      </div>
      </div>

      <div className='each-slide'>
        <div className='image-slide'>
        <div
        className="image-slider"
        style={{backgroundImage: `url(${cart})`}}
         >
        <h4 className="text-white fw-bold slider-text">
        Buy an item at the most affordable price<br/> to support a need 
        </h4>
        <Button variant="contained" className="slider-btn text-capitalize mt-5">
                  <Link onClick={() => {
                    window.scrollTo(
                      {
                        top: 0,
                        behavior: "smooth"
                      },
                      history.push("/marketplace/products")
                    );
                  }} className='slider-link'>
         Start Now
         </Link>
        </Button>
      </div>
      </div>
      </div>
    
      <div className='each-slide'>
        <div className='image-slide'>
        <div
        className="image-slider"
        style={{backgroundImage: `url(${fundraise})`}}
        >
        <h4 className="text-white fw-bold slider-text" id='slider-raise-fund-text'>
        Raise Fund for your personal need,<br/> an idea or a community project<br/>that means something to you with ease
        </h4>
        <Button variant="contained" className="slider-btn text-capitalize mt-5">
                  <Link onClick={() => {
                    window.scrollTo(
                      {
                        top: 0,
                        behavior: "smooth"
                      },
                      history.push("/categories")
                    );
                  }} className='slider-link'>
           Start Now
           </Link>
        </Button>
      </div>
      </div>
      </div>
      </Slide>
      </div>
    )
}

export default withRouter(ImageSlider)
