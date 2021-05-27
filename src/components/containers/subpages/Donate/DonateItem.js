import React, { useState, useEffect } from "react";
// import DonateCardImport from "../campaign/CampaignCardImport";
import SearchSvg from "components/ui/Svg/SearchSvg";
import ArrowSvg from "components/ui/Svg/ArrowSvg";
import axios from "axios";
import AllDonateItemCards from "./AllDonateItemCards";
import { withRouter } from 'react-router-dom';


const DonateItem = ({ history }) => {
  const [data, setData] = useState({
    loading: false,
    error: null,
    result: []
  });
  const [searchValue, setSearchValue] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const handleCampaignData = async () => {
      setData({
        ...data,
        loading: true,
        error: null,
        result: []
      });
      setFilteredData([]);
      try {
        const searchUrl =
          "https://ogadonate.herokuapp.com/api/campaign/fundraise";
        const res = await axios.get(searchUrl);
        console.log(res);
        
        setData({
          ...data,
          loading: false,
          error: null,
          result: res.data
        });
        setFilteredData(res.data);
      } catch (err) {
        setData({
          ...data,
          loading: false,
          result: [],
          error: err.message
        });
        setFilteredData([]);
      }
    };
    handleCampaignData();
  }, []);

  const handleSearchValue = e => {
    setSearchValue(e.target.value);
    let inputValue = e.target.value;
    let filteredInput =
      inputValue.length > 0 &&
      data.result.filter(campaigns => {
        return (
         campaigns.fund_type === 'Item' && campaigns.fund_title
          .toLowerCase()
          .includes(inputValue.toLowerCase())
        )
      }
      
      );

    if (inputValue === "") {
      setFilteredData(data.result);
    } else {
      setFilteredData(filteredInput);
    }
  };

  return (
    <>
      <div className="viewport border-secondary">
        <div className="viewport__body">
          {/* search */}
          <div className="btn-container">
            <div className="btn-container__search">
              <span>Search</span>
              <input
                className="search_input"
                type="text"
                name="search-query"
                placeholder="search"
                onChange={handleSearchValue}
                value={searchValue}
              />
              <SearchSvg />
            </div>
            {/* filter */}
            <div className="btn-container__filter">
              <div className="filter-label">
                <span className="filter-text">Filter by...</span>
              </div>
              <span>Filter</span>
              <div className="filter-button">
                <ArrowSvg />
              </div>
            </div>
          </div>
        </div>
      </div>
     
      <div
        style={{ display: searchValue ? "block" : "none" }}
        className="searched-data-container"
      >
        <div className="searched-data-subcontainer">
          {filteredData.map(filters => {
            return (
              <ul>
                <li
                  onClick={() =>
                    history.push(
                      `/campaign/${filters.fund_category}/${filters.id}/details`
                    )
                  }
                >
                  {filters.fund_type === "Item" ? filters.fund_title : null}
                </li>
              </ul>
            );
          })}
        </div>
      </div>
      <div className="all_donate_item_cards">
        <h4 className="text-uppercase text-center mt-5">
          Find an item cause to donate to
        </h4>
        <AllDonateItemCards />

      </div>
    </>
  );
};

export default withRouter(DonateItem);
