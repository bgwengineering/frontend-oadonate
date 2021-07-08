import React,{useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {
  CCard,
  CCardBody,
  CCol,
  CRow
} from '@coreui/react';
import { getfundITEMCampaigns } from 'store/actions/fund_donate/FundDonate';
import { Button } from '@material-ui/core';


const YourFunds = () => {
  const dispatch = useDispatch()
  const fundDoanteState =  useSelector(state => state.fundDonateReducer)
  const { singleCampaignItem } = fundDoanteState;
  
 useEffect(() => {
  dispatch(getfundITEMCampaigns())
  }, [])
  
    return (
        <>
         <CRow>
        <CCol>
          <CCard>
            <CCardBody>
              {/* table */}
              <table className="table table-hover table-responsive table-outline mb-0 d-sm-table">
                {/* table header */}
                <thead className="thead-light">
                  <tr>
                  <th className="text-center">Item Title</th>
                  <th className="text-center">Item Category</th>
                    <th>Item Value</th>
                    <th>Created Date</th>
                    <th className="text-center">End date</th>
                    <th className="text-center">Actions</th>
                  </tr>
                </thead>

                {/* table body */}
                <tbody>
                  {singleCampaignItem.length ? singleCampaignItem.map(data =>{
                    const {fund_title, fund_category,fund_item_value, fund_createdAt, fund_endAt} = data
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
                     <div>{fund_createdAt.substring(0,14)}</div>
                    </td>
                    <td className="text-center">
                     <div>{fund_endAt.substring(0,12)}</div>
                    </td>
                    <td className="text-center">
                    <div><Button>Edit</Button></div>
                    </td>
                  </tr>)}):
                   <div className="justify-content-center">
                   <p className="text-center">You have not raised any cause yet, create one now</p>
                 </div>}
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
