import React from "react";
import NewShipping from "../../checkout/NewShipping";
import EditShipping from "../../checkout/EditShipping";
import {useSelector } from "react-redux";


export const ShippingPrompt = ({ nextPage, previousPage, id}) => {
  const shippingState = useSelector((state) => state.userTypeReducer);
  const { shippingAddress } = shippingState;
  
  return (
    <>
      {shippingAddress.length ? (
        <EditShipping nextPage={nextPage} previousPage={previousPage} id={id} />
      ) : (
        <NewShipping nextPage={nextPage} previousPage={previousPage} id={id} />
      )}
    </>
  );
};
export default ShippingPrompt;
