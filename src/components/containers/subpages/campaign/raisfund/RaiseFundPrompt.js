import React from "react";
import { Link } from "react-router-dom";


const RaisePrompt = ({ setIsRaiseCardButtonsOpen, handleCurrentOpenForm }) => {
  const handleRaiseItemFormOpen = () => {
    handleCurrentOpenForm("RaiseItemForm");
    setIsRaiseCardButtonsOpen(true);
  };

  const handleRaiseCashFormOpen = () => {
    handleCurrentOpenForm("RaiseCashForm");
    setIsRaiseCardButtonsOpen(true);
  };

  return (
    <>
      <div className="ogaDonasi" style={{ backgroundColor: "#05591B" }}>
        <div className="ikon">
          <Link
            title="Click and fill in your details"
            style={{ backgroundColor: "#C75A00" }}
            id="raise__item__btn"
            onClick={handleRaiseItemFormOpen}
          >
            <span className="text-capitalize">Fund raise for an Item</span>
          </Link>
        </div>
        <div className="deskripsi text-white">
          <span className="judul text-uppercase ">Raise Item fund</span>
          Get that item
        </div>
      </div>
      <div className="ogaDonasi" style={{ backgroundColor: "#05591B" }}>
        <div className="ikon">
          <Link
            title="Click and fill in your details"
            style={{ backgroundColor: "#C75A00" }}
            id="raise__cash__btn"
            onClick={handleRaiseCashFormOpen}
          >
            <span className="text-capitalize">Raise Cash Fund</span>
          </Link>
        </div>{" "}
        <div className="deskripsi text-white">
          <span className="judul">RAISE CASH</span>
          Raise cash to solve a problem{" "}
        </div>{" "}
      </div>{" "}
    </>
  );
};

export default RaisePrompt;
