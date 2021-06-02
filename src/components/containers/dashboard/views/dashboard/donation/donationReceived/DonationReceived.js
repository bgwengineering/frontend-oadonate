import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CCard, CCardBody, CCol, CRow } from "@coreui/react";
import { fetchUserDonationsReceived } from "store/actions/auth/Dashboard";

const DonationReceived = () => {
  const dispatch = useDispatch();
  const fundDonateState = useSelector((state) => state.userTypeReducer);
  const { user_donations_received } = fundDonateState;

  useEffect(() => {
    dispatch(fetchUserDonationsReceived());
  }, []);

  return (
    <>
      {/* Cash Donations received */}
      <h4 className="text-uppercase text-center mb-4 mt-4">Cash Donations Received</h4>
      <CRow>
        <CCol>
          <CCard>
            <CCardBody>
              {/* table */}
              <table className="table table-hover table-outline mb-0 d-sm-table">
                {/* table header */}
                <thead className="thead-light">
                  <tr>
                    <th className="text-center">Title</th>
                    <th className="text-center">Amount</th>
                    <th className="text-center">Category</th>
                    <th className="text-center"> Name</th>
                    <th className="text-center"> Email</th>
                    <th className="text-center">Donated</th>
                    <th className="text-center">Method</th>
                    <th className="text-center">Status</th>
                    <th className="text-center">Date</th>
                  </tr>
                </thead>
                {/* table body */}
                <tbody>
                  {user_donations_received.length ? (
                    user_donations_received.map((data) => {
                      console.log(data);
                      const { fund_type, fund_cash, fund_title, fund_category, fund_cash_amount, fund_currency_type } =
                        data;
                      if (fund_type === "Cash") {
                        return (
                          <tr>
                            <td className="text-center">
                              <div>{fund_title}</div>
                            </td>
                            <td className="text-center">
                              <div>{fund_currency_type}{fund_cash_amount}</div>
                            </td>
                            <td className="text-center">
                              <div>{fund_category}</div>
                            </td>
                            {fund_cash.length &&
                              fund_cash.map((donations) => {
                                const {
                                  donate_amount,
                                  donate_payment_method,
                                  user,
                                  donate_payment_status,
                                  donate_createdAt,
                                  donate_currency
                                } = donations;
                                const { first_name, last_name, email } = user;
                                return (
                                  <>
                                    <td className="text-center">
                                      <div>{first_name + " " + last_name}</div>
                                    </td>
                                    <td className="text-center">
                                      <div>{email}</div>
                                    </td>
                                    <td className="text-center">
                                      <div>{donate_currency}{donate_amount}</div>
                                    </td>
                                    <td className="text-center">
                                      <div>{donate_payment_method}</div>
                                    </td>
                                    <td className="text-center">
                                      <div>{donate_payment_status}</div>
                                    </td>
                                    <td className="text-center">
                                      <div>{donate_createdAt.substring(0,10)}</div>
                                    </td>
                                  </>
                                );
                              })}
                          </tr>
                        );
                      }
                    })
                  ) : (
                    <div>You have not recieved any donation on your Cash cause</div>
                  )}
                </tbody>
              </table>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>

      {/* donation item */}
      <h4 className="text-uppercase text-center mb-4 mt-4">Item Donations Received</h4>
      <CRow>
        <CCol>
          <CCard>
            <CCardBody>
              {/* table */}
              <table className="table table-hover table-outline mb-0 d-sm-table">
                {/* table header */}
                <thead className="thead-light">
                  <tr>
                    <th className="text-center">Title</th>
                    <th className="text-center">Category</th>
                    <th className="text-center"> Name</th>
                    <th className="text-center"> Email</th>
                    <th className="text-center">Item Donated</th>
                    <th className="text-center">Condition</th>
                    <th className="text-center">Date</th>
                  </tr>
                </thead>

                {/* table body */}
                <tbody>
                  {user_donations_received.length ? (
                    user_donations_received.map((data) => {
                      console.log(data);
                      const { fund_type, fund_item, fund_title, fund_category } = data;
                      if (fund_type === "Item") {
                        return (
                          <tr>
                            <td className="text-center">
                              <div>{fund_title}</div>
                            </td>
                            <td className="text-center">
                              <div>{fund_category}</div>
                            </td>
                            {fund_item.length &&
                              fund_item.map((donations) => {
                                const {
                                  donate_item_name,
                                  user,
                                  donate_item_condition,
                                  donate_createdAt,
                                } = donations;
                                const { first_name, last_name, email } = user;
                                const userName = user ? first_name + " " + last_name : null;
                                return (
                                  <>
                                    <td className="text-center">
                                      <div>{userName}</div>
                                    </td>
                                    <td className="text-center">
                                      <div>{email}</div>
                                    </td>
                                    <td className="text-center">
                                      <div>{donate_item_name}</div>
                                    </td>
                                    <td className="text-center">
                                      <div>{donate_item_condition}</div>
                                    </td>
                                    <td className="text-center">
                                      <div>{donate_createdAt.substring(0, 10)}</div>
                                    </td>
                                  </>
                                );
                              })}
                          </tr>
                        );
                      }
                    })
                  ) : (
                    <div>You have not recieved any donation on your item cause</div>
                  )}
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
