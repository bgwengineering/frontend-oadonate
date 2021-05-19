import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CCard, CCardBody, CCol, CRow } from "@coreui/react";
import { fetchUserDonationsReceived } from 'store/actions/auth/Dashboard'


const DonationReceived = () => {
  const dispatch = useDispatch();
  const fundDonateState = useSelector((state) => state.userTypeReducer);
  const { user_donations_received } = fundDonateState;

  useEffect(() => {
    dispatch(fetchUserDonationsReceived())
  }, [])

 
  return (
    <>
      <h4 className='text-uppercase text-center mb-4 mt-4'>Cash Donations Received</h4>
      <CRow>
        <CCol>
          <CCard>
            <CCardBody>
              {/* table */}
              <table className="table table-hover table-outline mb-0 d-sm-table">
                {/* table header */}
                <thead className="thead-light">
                  <tr>
                    <th className="text-center">Fund Title</th>
                    <th className="text-center">Fund Amount</th>
                    <th className="text-center">Fund Category</th>
                    <th className="text-center">Donor's Name</th>
                    <th className="text-center">Donor's Email</th>
                    <th className="text-center">Amount donated</th>
                    <th className="text-center">payment method</th>
                    <th className="text-center">payment Status</th>
                    <th className="text-center">Date</th>
                  </tr>
                </thead>

                {/* table body */}
                <tbody>
                  {user_donations_received.length ?
                    user_donations_received.map(data => {
                      const {
                        fund_type,
                        fund_cash,
                        fund_title,
                        fund_category,
                        fund_cash_amount,             
                      } = data;   
                        return (
                        <tr>
                          <td className="text-center">
                            <div>{fund_title}</div>
                          </td>
                          <td className="text-center">
                            <div>{fund_cash_amount}</div>
                          </td>
                          <td className="text-center">
                            <div>{fund_category}</div>
                          </td>
                          {fund_cash.length && fund_cash.map(donations => {
                               const {donate_amount, donate_curency,  donate_payment_method, user, donate_payment_status, donate_createdAt} = donations
                                   const {first_name, last_name, email} = user
                             return(
                            <>
                              <td className="text-center">
                              <div>{first_name + " " +  last_name}</div>
                            </td>
                            <td className="text-center">
                              <div>{email}</div>
                            </td>
                            <td className="text-center">
                              <div>{donate_amount}</div>
                            </td>
                            <td className="text-center">
                              <div>{donate_payment_method}</div>
                            </td>
                            <td className="text-center">
                              <div>{donate_payment_status}</div>
                            </td>
                            <td className="text-center">
                              <div>{donate_createdAt}</div>
                            </td>
                            </>
                             )
                          })}
                        
                        </tr>
                      )
                    }):
                    <div>
                      You have not recieved any donation on your Cash cause
                    </div>
                    }
                </tbody>
              </table>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>

      {/* donation item */}
      <h4 className='text-uppercase text-center mb-4 mt-4'>Item Donations Received</h4>
      <CRow>
        <CCol>
          <CCard>
            <CCardBody>
              {/* table */}
              <table className="table table-hover table-outline mb-0 d-sm-table">
                {/* table header */}
                <thead className="thead-light">
                  <tr>
                  <th className="text-center">Fund Title</th>
                    <th className="text-center">Fund Amount</th>
                    <th className="text-center">Fund Category</th>
                    <th className="text-center">Donor's Name</th>
                    <th className="text-center">Donor's Email</th>
                    <th className="text-center">Amount donated</th>
                    <th className="text-center">Donation payment method</th>
                    <th className="text-center">Donation payment Status</th>
                    <th className="text-center">Donation Date</th>
                    <th className="text-center">Item Name</th>
                    <th className='text-center'>Item Condition</th>
                    <th className="text-center">Value of Item to Cash</th>
                  </tr>
                </thead>

                {/* table body */}
                <tbody>
                  {/* {user_donations_received.length ?
                    user_donations_received.map(data => {
                      const {
                        fund_type,
                        fund_item_sell,
                        fund_title,
                        fund_category,
                        fund_cash_amount,             
                      } = data;   
                        return (
                        <tr>
                          <td className="text-center">
                            <div>{fund_title}</div>
                          </td>
                          <td className="text-center">
                            <div>{fund_cash_amount}</div>
                          </td>
                          <td className="text-center">
                            <div>{fund_category}</div>
                          </td>
                          {fund_item_sell.length && fund_item_sell.map(donations => {
                               const {donate_amount, donate_curency,  donate_payment_method, user, donate_payment_status, donate_createdAt} = donations
                                   const {first_name, last_name, email} = user
                             return(
                            <>
                              <td className="text-center">
                              <div>{first_name + " " +  last_name}</div>
                            </td>
                            <td className="text-center">
                              <div>{email}</div>
                            </td>
                            <td className="text-center">
                              <div>{donate_amount}</div>
                            </td>
                            <td className="text-center">
                              <div>{donate_payment_method}</div>
                            </td>
                            <td className="text-center">
                              <div>{donate_payment_status}</div>
                            </td>
                            <td className="text-center">
                              <div>{donate_createdAt}</div>
                            </td>
                            </>
                             )
                          })}
                        
                        </tr>
                      )
                    }):
                    <div>
                      You have not recieved any donation for your Item cause
                    </div>
                    } */}
                </tbody>
              </table>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default DonationReceived;
