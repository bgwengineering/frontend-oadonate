import React,{useState} from "react";
import { Button } from '@material-ui/core';
import EyeIndicator from './EyeIndicator';


const DescriptionText = () => {
  const [readMore, setReadMore] = useState(false) 
  const readDescriptionText = () => {
    setReadMore(!readMore)
  }

  return (
    <div className="container description-container mt-4">
    

      <h5 className="description-text">
        The global marketplace for fundraising, item exchange, and Social
        responsibility tracking for individuals, NGOs, communities, startups, or
        corporates.
        <div className='d-flex mt-3'>
          <div id="alsquare">
            <div class="center square1"></div>
            <div class="center square3"></div>
            <div class="center square4"></div>
          </div>
        <ul className='ml-3'>
          <li className='description-header'>Ask and receive help</li>
            <li className='description-header'>Donate cash to help</li>
            <li className='description-header'>Give, exchange or trade an item to help</li>
            <li className='description-header'>Buy to support a cause/need</li>
        </ul>
        </div>
      
        <Button
          variant="contained"
          className="slider-btn text-capitalize mt-2"
          onClick={readDescriptionText}
        >
         {readMore ? "Read less" : "Read more"}
        </Button>

        <p className='description-read-more' style={{ display: readMore ? "block" : "none" }}>
          According to a 2020 report by the U.N. Development Program. About 1.3
          Billion people in 107 developing countries are multidimensional poor:
          yet, some of us have the resource or items we consider idle which can
          still be of great value to others. At OgaDonate, we provide rare
          linkage for the re-allocation of cash or item, from those who care
          about others in need to those who need a hand; extracting values from
          (idle) surplus to those in need.
        </p>
      </h5>
    </div>
  );
};

export default DescriptionText;
