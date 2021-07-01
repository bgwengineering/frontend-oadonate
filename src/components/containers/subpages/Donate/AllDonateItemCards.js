import React, {useState} from "react";
<<<<<<< HEAD
import { Link } from "react-router-dom";
import LinearProgress from "@material-ui/core/LinearProgress";
import Button from "@material-ui/core/Button";
import { AiOutlineFolderOpen } from "react-icons/ai";
=======
import { Link, withRouter } from "react-router-dom";
import LinearProgress from "@material-ui/core/LinearProgress";
import Button from "@material-ui/core/Button";
import { ImShare2 } from "react-icons/im";
>>>>>>> 5ee521180f26cd5a1b7e9c8b021b479ad5ff1dad
import { useSelector } from "react-redux";
import { ReactComponent as LoadingSpinner } from 'assets/images/spinner.svg';
import Pagination from "components/ui/Pagination/Pagination";

<<<<<<< HEAD
var numeral = require('numeral');

const AllDonateItemCards = () => {
=======

var numeral = require('numeral');

const AllDonateItemCards = ({history}) => {
>>>>>>> 5ee521180f26cd5a1b7e9c8b021b479ad5ff1dad

  const fundState = useSelector(state => state.fundDonateReducer);
  const { allCampaign } = fundState;

  const [page, setPage] = useState(1)
  const [cardPerPage, setCardPerPage] = useState(3)
  const indexOfLastCard = page * cardPerPage
  const indexOfFirstCard = indexOfLastCard - cardPerPage; 
  

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const paginate = pageNumber => setPage(pageNumber)

  return (
    <>
    <div className="container">
      <div className="row">
      {allCampaign.length > 0
        ? allCampaign.slice(indexOfFirstCard, indexOfLastCard).map(funds => {    
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
              
          
              return (
                <div className="col-sm-6 col-md-6 col-lg-4 p-t-10">
<<<<<<< HEAD
                  <div className="card" key={id}>
=======
                  <div className={fund_type == "Item" ? "card card-item" : "card card-cash"} key={id}>
>>>>>>> 5ee521180f26cd5a1b7e9c8b021b479ad5ff1dad
                    <Link
                      to={`/campaign/${fund_category}/${id}/details`}
                      className="link-router"
                      onClick={() => scrollToTop()}
                    >
                    <img
                        className="card-img-top"
                        src={fund_img}
                        alt="imageCard"
                    />
                    </Link>
                    <div className="card-body">
                      <div>
<<<<<<< HEAD
                        <div className="d-flex">
                          <div className="ai-outline">
                            <AiOutlineFolderOpen />
                          </div>
                          <span className="card-text text-muted ml-2 fund-category">
                            {fund_category}
                          </span>
                          <span>
                            Type:
                            <span className="font-weight-bold ml-2">
                              {fund_type}
                            </span>
                          </span>
=======
                        <div className="d-flex justify-content-between">
                          <div className='d-flex'>
                            <div
                              className="ai-outline"
                              title="share"
                              onClick={() => window.scrollTo(
                                {
                                  top: 0,
                                  behavior: "smooth"
                                },
                                history.push(`/campaign/${fund_category}/${id}/details`)
                              )}
                            >
                              <ImShare2 color="#C75A00" />
                            </div>
                            <div className="card-text font-weight-bold ml-2 fund-category">
                              {fund_category}
                            </div>
                          </div>
                          <div>
                            Type:
                      <span className="font-weight-bold ml-2">{fund_type}</span>
                          </div>
>>>>>>> 5ee521180f26cd5a1b7e9c8b021b479ad5ff1dad
                        </div>
                        <Link
                          to={`/campaign/${fund_category}/${id}/details`}
                          className="link-router"
                          onClick={() => scrollToTop()}
                        >
<<<<<<< HEAD
                          <h4 className="card-title pt-2">{fund_title}</h4>
=======
                          <h4 className="card-title truncate">{fund_title}</h4>
>>>>>>> 5ee521180f26cd5a1b7e9c8b021b479ad5ff1dad
                        </Link>
                        {fund_type == "Item" ? null : (
                          <LinearProgress
                            value={fund_percentage_completed}
                            variant="determinate"
                          />
                        )}
<<<<<<< HEAD
                        <div className="mt-3 mb-2 truncate">{fund_purpose}</div>
=======
                        <div className="mt-1 mb-2 truncate">{fund_purpose}</div>
>>>>>>> 5ee521180f26cd5a1b7e9c8b021b479ad5ff1dad
                        
                        {fund_type == "Item" ? null : (
                          <div>
                            <div className="row justify-content-between mt-2 contributed-progress-view">
                              <p className="contributed-amount m-l-15 font-weight-bold">
                                {fund_currency_type + fundAmount}
                              </p>
                              <span className="m-r-12 font-weight-bold">
                                {percentageCompleted + "%"}
                              </span>
                            </div>

                            <p className="pt-0">
                              raised of
<<<<<<< HEAD
                              <span>{fund_currency_type + fundCash}</span>
                            </p>
                          </div>
                        )}
                        <div className="card-donate-btn-container">
=======
                              <span className='ml-2'>{fund_currency_type + fundCash}</span>
                            </p>
                          </div>
                        )}
                        <div className={
                          fund_type == "Item"
                            ? "mt-5 card-donate-btn-container"
                            : "mt-0 card-donate-btn-container"
                        }>
>>>>>>> 5ee521180f26cd5a1b7e9c8b021b479ad5ff1dad
                          <Button
                            variant="contained"
                            className="card-donate-btn"
                          >
                            <Link
                              to={`/campaign/${fund_category}/${id}/details`}
                              className="link-router-btn"
                              onClick={() => scrollToTop()}
                            >
                              Donate
                            </Link>
                          </Button>
                        </div>
                        <hr />
                        <div className="row donated-ws">
                          <p className="m-l-15">
                            by {first_name + " " + last_name.substring(0, 1)}
                          </p>
                          <span className="m-r-12">
                            End date : {fund_endAt}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
<<<<<<< HEAD
            }
            
=======
            }        
>>>>>>> 5ee521180f26cd5a1b7e9c8b021b479ad5ff1dad
          )
        : <div className='spinner-container mx-auto'>
            <LoadingSpinner className='spinner'/>
        </div>}
        </div>
      </div>
      <Pagination allCampaign={allCampaign.length} cardPerPage={cardPerPage} paginate={paginate}/>
    </>
  );
};

<<<<<<< HEAD
export default AllDonateItemCards;
=======
export default withRouter(AllDonateItemCards);
>>>>>>> 5ee521180f26cd5a1b7e9c8b021b479ad5ff1dad
