import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CCard, CCardBody, CCol, CRow } from "@coreui/react";
import { fetchOrders } from "store/actions/auth/Dashboard";

const Order = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOrders());
  }, []);

  const orderState = useSelector((state) => state.orderReducer);
  const { orders } = orderState;

  return (
    <>
      <h4 className="text-uppercase text-center mb-4 mt-4">Orders</h4>
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
                    <th className="text-center">Payment</th>
                    <th className="text-center">Delivery Method</th>
                    <th className="text-center">Order Status</th>
                    <th className="text-center">Date</th>
                  </tr>
                </thead>

                {/* table body */}
                {orders.length ? (
                  orders.map((order) => {
                    const {
                      id,
                      order_status,
                      total_price,
                      ordered_date,
                      payment_status,
                      payment_method,
                      delivery_method,
                    } = order;
                    return (
                      <tbody>
                        <tr key={id}>
                          <td className="text-center">
                            <div>{id}</div>
                          </td>
                          <td className="text-center">
                            <div>₦{total_price}</div>
                          </td>
                          <td className="text-center">
                            <div>{payment_method}</div>
                          </td>
                          <td className="text-center">
                            <div>{payment_status}</div>
                          </td>
                          <td className="text-center">
                            <div>{delivery_method}</div>
                          </td>
                          <td className="text-center">
                            <div>{order_status}</div>
                          </td>
                          <td className="text-center">
                            <div>{ordered_date.substring(0, 10)}</div>
                          </td>
                        </tr>
                      </tbody>
                    );
                  })
                ) : (
                  <div className="text-center">
                    <h6>You have not place any order yet.</h6>
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

export default Order;
