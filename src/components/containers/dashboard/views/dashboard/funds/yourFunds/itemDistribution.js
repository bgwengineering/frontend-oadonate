import React,{useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {
  CCard,
  CCardBody,
  CCol,
  CRow
} from '@coreui/react';
import { getfundITEMCampaigns } from 'store/actions/fund_donate/FundDonate';



// import { fetchPersonalProfile, fetchCompanyProfile } from 'store/actions/auth/UserType';

const YourFunds = () => {
  const dispatch = useDispatch()
  const fundDoanteState =  useSelector(state => state.fundDonateReducer)
  const {singleCampaignItem} = fundDoanteState;
 useEffect(() => {
  dispatch(getfundITEMCampaigns())
 },[])
    return (
        <>
         <CRow>
        <CCol>
          <CCard>
            <CCardBody>

              {/* table */}
              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                {/* table header */}
                <thead className="thead-light">
                  <tr>
                  <th className="text-center">Item Title</th>
                  <th className="text-center">Item Category</th>
                    <th>Item Value</th>
                    <th>Created Date</th>
                    <th className="text-center">End date</th>
                  </tr>
                </thead>

                {/* table body */}
                <tbody>
                  {singleCampaignItem.length && singleCampaignItem.map(data =>{
                    const {fund_title, fund_category,fund_item_value, fund_createdAt,} = data
                    return(
                    <tr>
                    
                    <td className="text-center">
                     <div>{fund_title}</div>
                    </td>
                    <td className="text-center">
                     <div>{fund_category}</div>
                    </td>
                    <td className="text-center">
                     <div>{fund_item_value}</div>
                    </td>
                    <td className="text-center">
                     <div>{fund_createdAt}</div>
                    </td>
                    {/* <td className="text-center">
                     <div>{fund_updatedAt}</div>
                    </td> */}
                    <td className="text-center">
                     <div>-</div>
                    </td>
                  </tr>)})}
                </tbody>
              </table>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
       </>
      )
      
}

export default YourFunds
