import React, { useState } from "react";
import { Link } from "react-router-dom";
import LinearProgress from "@material-ui/core/LinearProgress";
import Button from "@material-ui/core/Button";
// import { AiOutlineFolderOpen } from "react-icons/ai";
import { useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import { ImShare2 } from "react-icons/im";
import AllCausePagination from "components/ui/Pagination/AllCausePagination";

var numeral = require("numeral");


const AllCauseCards = ({ history }) => {
  const [featuredPage, setFeaturedPage] = useState(1);
  const [featuredCardPerPage] = useState(3);
  const indexOfLastCard = featuredPage * featuredCardPerPage;
  const indexOfFirstCard = indexOfLastCard - featuredCardPerPage;
  const fundState = useSelector(state => state.fundDonateReducer);
  const { allCampaign } = fundState;

  const paginate = pageNumber => setFeaturedPage(pageNumber);

  return (
    <>
      {allCampaign.length > 0 ? (
        allCampaign.slice(indexOfFirstCard, indexOfLastCard).map(funds => {
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

          const { first_name, last_name } = user;
          let fundCash = numeral(fund_cash_amount).format("0, 0");
          let fundAmount = numeral(fund_amount_raised).format("0, 0");
          const percentageCompleted = Number(fund_percentage_completed).toFixed(
            1
          );

          return (
            <div className="col-sm-6 col-md-6 col-lg-4 p-t-10">
              <div className="card card-feature" key={id}>
                <img
                  className="card-img-top"
                  src={fund_img}
                  alt="imageCard"
                  onClick={() => {
                    window.scrollTo(
                      {
                        top: 0,
                        behavior: "smooth"
                      },
                      history.push(`/campaign/${fund_category}/${id}/details`)
                    );
                  }}
                />

                <div className="card-body">
                  <div>
                    <div className="d-flex justify-content-between">
                      <div className="ai-outline" title="share">
                        <ImShare2 color="#C75A00" />
                      </div>
                      <div className="card-text font-weight-bold ml-2 fund-category">
                        {fund_category}
                      </div>
                      <div>
                        Type:
                        <span className="font-weight-bold ml-2">
                          {fund_type}
                        </span>
                      </div>
                    </div>
                    <h4
                      className="card-title pt-2 link-router"
                      onClick={() => {
                        window.scrollTo(
                          {
                            top: 0,
                            behavior: "smooth"
                          },
                          history.push(
                            `/campaign/${fund_category}/${id}/details`
                          )
                        );
                      }}
                    >
                      {fund_title}
                    </h4>
                    {fund_type == "Item" ? null : (
                      <LinearProgress
                        value={fund_percentage_completed}
                        variant="determinate"
                      />
                    )}
                    {fund_type == "Item" && (
                      <div className="mt-1 mb-3 truncate">{fund_purpose}</div>
                    )}

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
                          raised of <span>{fund_currency_type + fundCash}</span>
                        </p>
                      </div>
                    )}

                    <div className="card-donate-btn-container">
                      <Button
                        variant="contained"
                        className="card-donate-btn"
                        className="card-title pt-2 card-donate-btn"
                        onClick={() => {
                          window.scrollTo(
                            {
                              top: 0,
                              behavior: "smooth"
                            },
                            history.push(
                              `/campaign/${fund_category}/${id}/details`
                            )
                          );
                        }}
                      >
                        Donate
                      </Button>
                    </div>
                    <hr />
                    <div className="row donated-ws">
                      <p className="m-l-15">
                        by {first_name + " " + last_name.substring(0, 1)}
                      </p>
                      <span className="m-r-12">End date : {fund_endAt}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div className="d-flex justify-content-center align-items-center w-100">
          <p>No Fund Available. Create a new Fund</p>
        </div>
      )}
        <AllCausePagination 
        featuredCardPerPage={featuredCardPerPage}
        allCampaign={allCampaign.length}
        paginate={paginate}
      />
    </>
  );
};

export default withRouter(AllCauseCards);
