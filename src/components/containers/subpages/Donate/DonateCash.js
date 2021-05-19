import React, { useState } from "react";
import DonateCardImport from "../campaign/CampaignCardImport";
import { Link } from "react-router-dom";
import SearchSvg from "components/ui/Svg/SearchSvg";
import ArrowSvg from "components/ui/Svg/ArrowSvg";
import AllDonateCashCards from './AllDonateCashCards';

const DonateCash = () => {
  // const [data, setData] = useState({
  //   loading:false,
  //   error:null,
  //   result:[]
  // })
  // const [searchValue, setSearchValue] = useState("")
  // const [filteredData, setFilteredData] = useState([])
  const [selectValue, setSelectValue] = useState("");

  // useEffect(() => {
  //   const handleLoadData = async () => {
  //    setData({
  //      loading:true,
  //      error:null,
  //      result:[]
  //    })
  //     setFilteredData([])

  //   }
  // }, [])

  const handleSelectValue = (e) => {
    setSelectValue(e.currentTarget.innerHTML);
  };

  return (
    <>
      <div className="viewport">
        <div className="viewport__body">
          <div className="btn-container">
            <div className="btn-container__search ">
              <span>Search</span>
              <input type="text" name="search-query" className='search_input'/>
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
                <li className='filter-item'>
                  <Link className='filter-links' onClick={handleSelectValue}>Personal</Link>
                </li>
                <li className='filter-item'>
                  <Link className='filter-links' onClick={handleSelectValue}>Community</Link>
                </li>
                <li className='filter-item'>
                  <Link className='filter-links' onClick={handleSelectValue}>Start up</Link>
                </li>
                <li className='filter-item'>
                  <Link className='filter-links' onClick={handleSelectValue}>NGO</Link>
                </li>
              </ul>
            </div>
          </div>
          
        </div>
      <h4 className="text-uppercase text-center find_cause_text">
         Find a cash cause to donate to
       </h4>
      </div>
      <AllDonateCashCards/>
    </>
  );
};

export default DonateCash;
