import React from "react";
import { useSelector } from "react-redux";
import NewShipping from "./NewShipping";
import EditShipping from "./EditShipping";

const ShippingForm = () => {
  const reduxState = useSelector((state) => state.userTypeReducer);
  const id = reduxState.shippingAddress.map((_id) => _id.id);
  return <>{id ? <EditShipping id={id} /> : <NewShipping/>}</>;
};

export default ShippingForm;
