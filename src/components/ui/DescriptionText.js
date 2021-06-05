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
        The global marketplace for fund raising and item exchange for
        individuals, NGOS, communities, startups or corporates.    
        <ul>
          <li>Ask for help</li>
          <li>Donate cash to help</li>Give exchange or trade an item to help
          <li>Buy to support a cause/need</li>
        </ul>
        <Button variant="contained" className="slider-btn text-capitalize mt-2"
          onClick={readDescriptionText}>
          Read more
        </Button>

        <p style={{ display: readMore ? 'block' : 'none' }}>
        According to a 2020 report by the U.N. Development Program. About 1.3
        Billion people in 107 developing countries are multidimensional poor:
        yet, some of us have the resource or items we consider idle which can
        still be of grea.t value to others. At OgaDonate, we provide rare
        linkage for the re-allocation of cash or item, from those who care about
        others in need to those who need a hand; extracting values from (idle)
        surplus to those in need.
        </p>
      </h5>
    </div>
  );
};

export default DescriptionText;
