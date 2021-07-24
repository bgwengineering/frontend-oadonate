import React from "react";
import NewShipping from "../../checkout/NewShipping";


export const ShippingPrompt = ({ nextPage, previousPage, id}) => {
  
  return (
    <>
        <NewShipping nextPage={nextPage} previousPage={previousPage} id={id} />
    </>
  );
};
export default ShippingPrompt;
