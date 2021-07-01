import React from "react";
import NewShipping from "../../checkout/NewShipping";
import EditShipping from "../../checkout/EditShipping";


export const ShippingPrompt = ({ nextPage, previousPage, id, shippingState }) => {
  const { shippingAddress } = shippingState;
<<<<<<< HEAD
=======
  
>>>>>>> 5ee521180f26cd5a1b7e9c8b021b479ad5ff1dad
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
