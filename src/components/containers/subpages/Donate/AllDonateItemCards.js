import React, {useState} from "react";
import { Link } from "react-router-dom";
import LinearProgress from "@material-ui/core/LinearProgress";
// import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { AiOutlineFolderOpen } from "react-icons/ai";
import { useSelector } from "react-redux";
import {ReactComponent as LoadingSpinner} from 'assets/images/spinner.svg'
var numeral = require('numeral');


const AllDonateItemCards = () => {
  const fundState = useSelector((state) => state.fundDonateReducer);
  const { allCampaign } = fundState;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
    <div className="container">
      <div className="row">
      {allCampaign.length > 0
        ? allCampaign.map(funds => {    
            const {
              fund_img,
              fund_category,
              fund_cash_amount,
              fund_title,
              fund_currency_type,
              fund_endAt,
              id,
              fund_type,
              user,
              fund_purpose,
              fund_percentage_completed,
              fund_amount_raised
            } = funds;
            
            const {first_name, last_name} = user
            let fundCash = numeral(fund_cash_amount).format('0, 0');
            let fundAmount = numeral(fund_amount_raised).format('0, 0');
            const percentageCompleted = Number(fund_percentage_completed).toFixed(1)
            if(fund_type == "Item"){
              return (
                <div className="col-sm-6 col-md-6 col-lg-4 p-t-10">
                  <div className="card card-feature" key={id}>
                    <Link
                      to={`/campaign/${fund_category}/${id}/details`}
                      className="link-router"
                      onClick={()=>scrollToTop()}
                    >
                      <img
                        className="card-img-top"
                        src={fund_img}
                        alt="imageCard"
                      />
                    </Link>
                    <div className="card-body">
                      <div>
                        <div className='d-flex'>
                          <div className='ai-outline'>
                           <AiOutlineFolderOpen />
                        </div>
                        <span className="card-text text-muted ml-2 fund-category">
                          {fund_category}
                        </span>
                        <span>Type:<span className='font-weight-bold ml-2'>{fund_type}</span></span>
                        </div>
                        <Link
                          to={`/campaign/${fund_category}/${id}/details`}
                          className="link-router"
                          onClick={()=>scrollToTop()}
                        >
                          <h4 className="card-title pt-2">{fund_title}</h4>
                        </Link>
                        <LinearProgress value={fund_percentage_completed} variant="determinate"/>
                        
                        <div className='mt-3 mb-2 truncate'>
                           {fund_purpose}
                        </div>
                        <div className="row justify-content-between mt-2 contributed-progress-view">
                          <p className="contributed-amount m-l-15 font-weight-bold">
                            {fund_currency_type + fundAmount}  
                          </p>
                          <span className="m-r-12 font-weight-bold">{percentageCompleted + '%'}</span>
                        </div>
                      <p className='pt-0'>raised of <span>{fund_currency_type + fundCash}</span></p>   
                        <div className="card-donate-btn-container">
                          <Button variant="contained" className="card-donate-btn">
                            <Link
                              to={`/campaign/${fund_category}/${id}/details`}
                              className="link-router-btn"
                              onClick={()=>scrollToTop()}
                              >
                              Donate
                            </Link>
                          </Button>
                        </div>
                        <hr />
                        <div className="row donated-ws">
                          <p className="m-l-15">by {first_name + " " + last_name}</p>
                          <span className="m-r-12">End date : {fund_endAt}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
            
          })
        : <div className='spinner-container mx-auto'>
            <LoadingSpinner className='spinner'/>
        </div>}
        </div>
        </div>
    </>
  );
};

export default AllDonateItemCards;
