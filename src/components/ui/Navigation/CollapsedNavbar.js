import React, { useState } from "react";
import { withRouter, NavLink } from "react-router-dom";
import Logo from "assets/images/logo.jpeg";

const CollapsedNavbar = () => {
  const [showUpArrow, setShowUpArrow] = useState(false);

  const arrowUp = () => {
    setShowUpArrow(!showUpArrow);
  };

  return (
    <>
      <nav className="navbar__donate">
        <div className="">
          <NavLink
            to="/"
            exact
            activeClassName="navigation-link--active"
            className="navigation-link"
          >
            Home
          </NavLink>
        </div>
        {/* logo */}
        <div className="home-icon-container d-flex justify-content-center">
          <NavLink
            to="/"
            exact
            activeClassName="navigation-link--active"
            className="navigation-link"
          >
            <img src={Logo} alt="log" className="logo" style={{ width: "150px" }} />
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default CollapsedNavbar;
