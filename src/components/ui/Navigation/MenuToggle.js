import React from "react";

const MenuToggle = ({ isMenuClicked}) => (
  <>
    <div className="menu-toggle ml-2">
      <button className="menu-button" onClick={isMenuClicked}>&#9776;</button>
    </div>
  </>
);

export default MenuToggle;

