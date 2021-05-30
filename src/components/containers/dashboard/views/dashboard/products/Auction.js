import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CCard, CCardBody, CCol, CRow } from "@coreui/react";
import { fetchAuctionBid } from "store/actions/auth/Dashboard";

const Auction = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAuctionBid());
  }, []);

  const auctionState = useSelector((state) => state.orderReducer);
  const { auction } = auctionState;

  return (
    <>
      <h4 className="text-uppercase text-center mb-4 mt-4">Auction</h4>
      <CRow>
        <CCol>
          <CCard>
            <CCardBody>
              {/* table */}
              <table className="table table-hover table-outline mb-0 d-sm-table">
                {/* table header */}
                <thead className="thead-light">
                  <tr>
                    <th className="text-center">Bid Amount</th>
                    <th className="text-center">Bid Type</th>
                    <th className="text-center">Bid Item</th>
                    <th className="text-center">Date</th>
                  </tr>
                </thead>

                {/* table body */}
                {auction.length ? (
                  auction.map((bid) => {
                    const { id,bidding_for, bid_amount,create_date} = bid
                    return (
                      <tbody>
                        <tr key={id}>
                          <td className="text-center">
                            <div>{bid_amount}</div>
                          </td>
                          <td className="text-center">
                            <div>Open</div>
                          </td>
                          <td className="text-center">
                            <div>{bidding_for}</div>
                          </td>
                          <td className="text-center">
                            <div>{create_date.substring(0, 10)}</div>
                          </td>
                        </tr>
                      </tbody>
                    );
                  })
                ) : (
                  <div className="text-center">
                    <h6>You have no bid yet.</h6>
                  </div>
                )}
              </table>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default Auction;
