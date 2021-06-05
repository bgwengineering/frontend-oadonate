import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CCard, CCardBody, CCol, CRow } from "@coreui/react";
import { fetchUserDonationsReceived } from "store/actions/auth/Dashboard";
import { FaBeer } from "react-icons/fa";

const DonationReceived = () => {
  const dispatch = useDispatch();
  const fundDonateState = useSelector(state => state.userTypeReducer);
  const { user_donations_received } = fundDonateState;

  useEffect(() => {
    dispatch(fetchUserDonationsReceived());
  }, []);

  return (
    <>
      {/* Cash Donations received */}
      <h4 className="text-uppercase text-center mb-4 mt-4">
        Cash Donations Received
      </h4>
      <CRow>
        <CCol>
          <CCard>
            <CCardBody>
              <div className="container">
                <div className="col-md-12">
                  <div className="panel panel-default">
                    <div className="panel-body">
                      <table className="table table-condensed table-striped">
                        <thead>
                          <tr>
                            <th></th>
                            <th>Title</th>
                            <th>Amount</th>
                            <th>Category</th>
                          </tr>
                        </thead>
                        <tbody>
                          {user_donations_received.length ? (
                            user_donations_received.map(data => {
                              const {
                                fund_type,
                                fund_cash,
                                fund_title,
                                fund_category,
                                fund_cash_amount,
                                fund_currency_type,
                                id
                              } = data;
                              const hashId = "#" + id;
                              if (fund_type === "Cash") {
                                return (
                                  // toggle table row
                                  <>
                                    <tr
                                      data-toggle="collapse"
                                      data-target={hashId}
                                      className="accordion-toggle"
                                       key={id}
                                    >
                                      <td>
                                        <FaBeer />
                                      </td>
                                      <td>{fund_title}</td>
                                      <td>
                                        {fund_currency_type}
                                        {fund_cash_amount}
                                      </td>
                                      <td>{fund_category}</td>
                                    </tr>

                                    {/* hidden */}
                                    <tr>
                                      <td colspan="12" className="hiddenRow">
                                        <div
                                          className="accordian-body collapse"
                                          id={id}
                                      
                                           >
                                          <table className="table table-striped">
                                            <thead>
                                              <tr className="info">
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Cash Donated</th>
                                                <th>Method</th>
                                                <th>Status</th>
                                                <th>Date</th>
                                              </tr>
                                            </thead>

                                            {/* map hidden */}
                                            <tbody>
                                              {fund_cash.length &&
                                                fund_cash.map(donations => {
                                                  const {
                                                    donate_amount,
                                                    donate_payment_method,
                                                    user,
                                                    donate_payment_status,
                                                    donate_createdAt,
                                                    donate_currency,
                                                    id
                                                  } = donations;

                                                  const {
                                                    first_name,
                                                    last_name,
                                                    email
                                                  } = user;
                                                  return (
                                                    <tr key={id}>
                                                      <td>
                                                        {first_name +
                                                          " " +
                                                          last_name}
                                                      </td>
                                                      <td>{email}</td>
                                                      <td>
                                                        {donate_currency}
                                                        {donate_amount}
                                                      </td>
                                                      <td>
                                                        {donate_payment_method}
                                                      </td>
                                                      <td>
                                                        {donate_payment_status}
                                                      </td>
                                                      <td>
                                                        <div>
                                                          {donate_createdAt.substring(
                                                            0,
                                                            10
                                                          )}
                                                        </div>
                                                      </td>
                                                    </tr>
                                                  );
                                                })}
                                            </tbody>
                                          </table>
                                        </div>
                                      </td>
                                    </tr>
                                  </>
                                );
                              }
                            })
                          ) : (
                            <div>
                              You have not recieved any donation on your Cash
                              cause
                            </div>
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>

      

      {/* donation item */}
      <h4 className="text-uppercase text-center mb-4 mt-4">
        Item Donations Received
      </h4>
      <CRow>
        <CCol>
          <CCard>
            <CCardBody>
              <div className="container">
                <div className="col-md-12">
                  <div className="panel panel-default">
                    <div className="panel-body">
                      <table className="table table-condensed table-striped">
                        <thead>
                          <tr>
                            <th></th>
                            <th>Title</th>      
                            <th>Category</th>
                          </tr>
                        </thead>

                        <tbody>
                          {user_donations_received.length ? (
                            user_donations_received.map(data => {
                              const {
                                fund_type,
                                fund_item,
                                fund_title,
                                fund_category,
                                id
                              } = data;
                  
                              const wrap = ""
                              const itemHashedId = "#" + String(id)
                              const stringHashed = String(itemHashedId)
                              console.log(itemHashedId)
                              
                              const stringifyId = String(id);
                              if (fund_type === "Item") {
                                return (
                                  // toggle table row
                                  <>
                                    <tr
                                      data-toggle="collapse"
                                      data-target={stringHashed}
                                      className="accordion-toggle"
                                      key={id}
                                    >
                                      <td>
                                        <FaBeer />
                                      </td>
                                      <td>{fund_title}</td>
                                      <td>{fund_category}</td>
                                    </tr>

                                    {/* hidden */}
                                    <tr>
                                      <td colspan="12" className="hiddenRow">
                                        <div
                                          className="accordian-body collapse"
                                          id={stringifyId}
                                        >
                                          <table className="table table-striped">
                                            <thead>
                                              <tr className="info">
                                                <th>Name</th>
                                                <th> Email</th>
                                                <th>Item Donated</th>
                                                <th>Condition</th>
                                                <th>Date</th>
                                              </tr>
                                            </thead>

                                            {/* map hidden */}
                                            <tbody>
                                              {fund_item.length &&
                                                fund_item.map(donations => {
                                                  const {
                                                    donate_item_name,
                                                    user,
                                                    donate_item_condition,
                                                    donate_createdAt
                                                  } = donations;
                                                  const {
                                                    first_name,
                                                    last_name,
                                                    email
                                                  } = user;
                                                  const userName = user
                                                    ? first_name +
                                                      " " +
                                                      last_name
                                                    : null;

                                                  return (
                                                    <tr key={id}>
                                                      <td>
                                                        {first_name +
                                                          " " +
                                                          last_name}
                                                      </td>
                                                      <td>{email}</td>
                                                      <td>
                                                        <div>
                                                          {donate_item_name}
                                                        </div>
                                                      </td>
                                                      <td>
                                                        <div>
                                                          {
                                                            donate_item_condition
                                                          }
                                                        </div>
                                                      </td>

                                                      <td>
                                                        <div>
                                                          {donate_createdAt.substring(
                                                            0,
                                                            10
                                                          )}
                                                        </div>
                                                      </td>
                                                    </tr>
                                                  );
                                                })}
                                            </tbody>
                                          </table>
                                        </div>
                                      </td>
                                    </tr>
                                  </>
                                );
                              }
                            })
                          ) : (
                              <div>
                                You have not recieved any donation on your item cause
                             </div>
                            )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default DonationReceived;
