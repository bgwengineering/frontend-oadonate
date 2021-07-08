import React from 'react'
import { Link } from "react-router-dom";

  const DonatePrompt = ({ handleSwitchCurrentForm}) => {
    return (
        <>
        <div className="ogaDonasi" style={{backgroundColor:"#05591B"}}>
        <div className="ikon">
          <Link
            title="Click and fill in your details"
            id="donate_item_btn"
            style={{backgroundColor:"#C75A00"}}
            role="button"
            onClick={() => handleSwitchCurrentForm("donate__item__form")}
           >
            <span>Donate Item</span>
          </Link>
        </div>
        <div className="deskripsi text-white">
          <span className="judul">DONATE ITEM</span>
          Donate that idle item
        </div>
      </div>

      <div className="ogaDonasi" style={{backgroundColor:"#05591B"}}>
        <div className="ikon">
          <Link
            title="Click and fill in your details"
            id='donate_cash_btn'
            style={{backgroundColor:"#C75A00"}}
            role="button"
            onClick={() => handleSwitchCurrentForm("donate__cash__form")}
          >
            <span>Donate Cash</span>
          </Link>
        </div>
        <div className="deskripsi text-white">
          <span className="judul">DONATE CASH</span>
          Donate Cash
        </div>
      </div>

      </>
    )
}

export default DonatePrompt
