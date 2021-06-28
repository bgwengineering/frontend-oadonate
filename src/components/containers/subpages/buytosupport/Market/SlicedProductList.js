import React, { useState } from "react";
import { useSelector } from "react-redux";
import ProductItem from "./ProductItem";


const ProductList = () => {
  const marketState = useSelector(state => state.marketPlaceReducer);
  const { collections } = marketState;

  const [BuyToSupportPage, setBuyToSupportPage] = useState(0);
  const [supportCardPerPage] = useState(4);

  const indexOfLastCard = BuyToSupportPage * supportCardPerPage;
  const indexOfFirstCard = indexOfLastCard + supportCardPerPage;
  const [open, setOpen] = useState(false);
 

  let productItem = collections.length ? (
    collections.length &&
    collections
      .slice(indexOfLastCard, indexOfFirstCard)
      .map((product, indx) => {
        if (
          product.donate_determine_price != "" ||
          product.donate_mkt_price != ""
        ) {
          return (
            <ProductItem
              product={product}
              indx={indx}
            />
          );
        }
      })
  ) : (
    <div className="d-flex justify-content-center align-items-center w-100">
      No product available
    </div>
  );

  return (
    <>
      {productItem}
    </>
  );
};

export default ProductList;
