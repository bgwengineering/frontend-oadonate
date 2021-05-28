import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CCard, CCardBody, CCol, CRow } from "@coreui/react";
import { fetchOrders } from "store/actions/auth/Dashboard";



const Order= () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchOrders());
  }, [])

  const orderState = useSelector(state => state.orderReducer)
  const auctionState = useSelector(state => state.orderReducer)

  const {orders} = orderState 
  const {auction} = auctionState 
  console.log(orders);
  console.log(auction);
  


  return (
    <>
      <h4 className="text-uppercase text-center mb-4 mt-4">
         Orders
      </h4>
      <CRow>
        <CCol>
          <CCard>
            <CCardBody>
              {/* table */}
              <table className="table table-hover table-outline mb-0 d-sm-table">
                {/* table header */}
                <thead className="thead-light">
                  <tr>
                <th className="text-center">S/N</th>
                    <th className="text-center">Total payments</th>
                    <th className="text-center">Payment Type</th>
                    <th className="text-center">Order Status</th>
                    <th className="text-center">Date</th>
                  </tr>
                </thead>

                              
                {/* table body */}
                <tbody>               
                        <tr>
                          <td className="text-center">
                            <div>1</div>
                          </td>
                          <td className="text-center">
                            <div>800</div>
                          </td>
                          <td className="text-center">
                            <div>Paystack</div>
                          </td>
                          <td className="text-center">
                            <div>Received</div>
                          </td>
                          <td className="text-center">
                            <div>13-04-21</div>
                          </td>       
                        </tr>           
                </tbody>
              </table>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default Order;
