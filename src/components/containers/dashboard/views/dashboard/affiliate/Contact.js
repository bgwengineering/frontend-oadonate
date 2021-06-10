import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CCard, CCardBody, CCol, CRow } from "@coreui/react";



const Contact = () => {
    const dispatch = useDispatch();
    return (
        <>
            <h4 className="text-uppercase text-center mb-4 mt-4">Affiliate</h4>
            <CRow>
                <CCol>
                    <CCard>
                        <CCardBody>
                            {/* table */}
                            <table className="table table-hover table-outline mb-0 d-sm-table">
                                {/* table header */}
                                <thead className="thead-light">
                                    <tr>
                                        <th className="text-center">Users</th>
                                        <th className="text-center">Commissions</th>
                                        <th className="text-center">Payment Status</th>
                                    </tr>
                                </thead>

                                {/* table body */}
                                return (
                                    <tbody>
                                    <tr>
                                        <td className="text-center">
                                            <div></div>
                                        </td>
                                        <td className="text-center">
                                            <div>Open</div>
                                        </td>
                                        <td className="text-center">
                                            <div></div>
                                        </td>
                                        <td className="text-center">
                                            <div></div>
                                        </td>
                                    </tr>
                                </tbody>
                                );
                            </table>
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>
        </>
    );
};

export default Contact;
