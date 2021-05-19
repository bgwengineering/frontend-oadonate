import React,{useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {
  CCard,
  CCardBody,
  CCol,
  CRow
} from '@coreui/react';
import { getfundCashCampaigns } from 'store/actions/fund_donate/FundDonate';



// import { fetchPersonalProfile, fetchCompanyProfile } from 'store/actions/auth/UserType';

const YourFunds = ({match}) => {
  const dispatch = useDispatch()
  const fundDonateState =  useSelector(state => state.fundDonateReducer)
  const {singleCampaign} = fundDonateState;

 useEffect(() => {
  dispatch(getfundCashCampaigns())
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
                  <th className="text-center">Fund Title</th>
                  <th className="text-center">Fund Category</th>
                    <th>Funds raised</th>
                    <th>Created Date</th>
                    <th className="text-center">End date</th>
                  </tr>
                </thead>

                {/* table body */}
                <tbody>
                {singleCampaign.length && singleCampaign.map(data =>{
                    const {fund_title, fund_category, fund_type, fund_cash_amount, fund_endAt} = data
                    return(
                    <tr>  
                    <td className="text-center">
                     <div>{fund_title}</div>
                    </td>
                    <td className="text-center">
                     <div>{fund_category}</div>
                    </td>
                    <td className="text-center">
                     <div>{fund_cash_amount}</div>
                    </td>
                    <td className="text-center">
                     <div>-</div>
                    </td>
                    <td className="text-center">
                     <div>{fund_endAt}</div>
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
