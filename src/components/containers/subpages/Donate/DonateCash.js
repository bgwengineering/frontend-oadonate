import React, { useState, useEffect } from "react";
import DonateCardImport from "../campaign/CampaignCardImport";
import { Link } from "react-router-dom";
import SearchSvg from "components/ui/Svg/SearchSvg";
import ArrowSvg from "components/ui/Svg/ArrowSvg";
import AllDonateCashCards from './AllDonateCashCards';
import axios from 'axios';

const DonateCash = ({history}) => {
  const [data, setData] = useState({
    loading:false,
    error:null,
    result:[]
  })
  const [searchValue, setSearchValue] = useState("")
  const [filteredData, setFilteredData] = useState([])
  const [selectValue, setSelectValue] = useState("");

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

  // handleSelectValue
  const handleSelectValue = (e) => {
    setSelectValue(e.currentTarget.innerHTML);
  };


  // handleSearchValue
  const handleSearchValue = e => {
    setSearchValue(e.target.value);
    let inputValue = e.target.value;
    let filteredInput =
      inputValue.length > 0 &&
      data.result.filter(campaigns => {
        return (
          campaigns.fund_type === 'Cash' && campaigns.fund_title
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
      <div className="viewport">
        <div className="viewport__body">
          <div className="btn-container">
            <div className="btn-container__search ">
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
            <div className="btn-container__filter">
              <div className="filter-label">
                <span className="filter-text">Filter by...</span>
              </div>
              <span>Filter</span>
              <div className="filter-button">
                <ArrowSvg />
              </div>
              <ul className="filter-dropdown">
                <li className="filter-item">
                  <Link className="filter-links" onClick={handleSelectValue}>
                    Personal
                  </Link>
                </li>
                <li className="filter-item">
                  <Link className="filter-links" onClick={handleSelectValue}>
                    Community
                  </Link>
                </li>
                <li className="filter-item">
                  <Link className="filter-links" onClick={handleSelectValue}>
                    Start up
                  </Link>
                </li>
                <li className="filter-item">
                  <Link className="filter-links" onClick={handleSelectValue}>
                    NGO
                  </Link>
                </li>
              </ul>
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
              <ul className="mt-0 mb-0">
                <li
                  className="searched-data-list d-flex flex-column justify-content-center align-items-center"
                  onClick={() =>
                    history.push(
                      `/campaign/${filters.fund_category}/${filters.id}/details`
                    )
                  }
                  >
                  {filters.fund_type === "Cash" ? filters.fund_title : null}
                </li>
              </ul>
            );
          })}
        </div>
      </div>
      <div className="all_donate_item_cards">
        <h4 className="text-uppercase text-center mt-5">
          Find a cause to donate to
        </h4>
        <AllDonateCashCards />
      </div>
    </>
  );
};

export default DonateCash;
