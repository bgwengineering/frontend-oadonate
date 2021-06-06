import React from "react";
import NewShipping from "../../checkout/NewShipping";
import EditShipping from "../../checkout/EditShipping";


export const ShippingPrompt = ({ nextPage, previousPage, id, shippingState }) => {
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
