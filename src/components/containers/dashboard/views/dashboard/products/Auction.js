import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CCard, CCardBody, CCol, CRow } from "@coreui/react";

const Auction = () => {

  return (
    <>
      <h4 className="text-uppercase text-center mb-4 mt-4">
         Auction
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
                    <th className="text-center">Current Bid</th>
                    <th className="text-center">Bid Type</th>
                    <th className="text-center">Bid Item</th>
                    <th className="text-center">Item Category</th>
                    <th className="text-center">Item Condition</th>
                  </tr>
                </thead>

                              
                {/* table body */}
                <tbody>
                      
                        <tr>
                          <td className="text-center">
                            <div>0</div>
                          </td>
                          <td className="text-center">
                            <div>Open</div>
                          </td>
                          <td className="text-center">
                            <div>Television</div>
                          </td>
                          <td className="text-center">
                            <div>New</div>
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

export default Auction;
