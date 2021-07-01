import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "assets/images/logo.jpeg";

const CollapsedNavbar = () => {


  return (
    <>
      <nav className="navbar__collapse">
        <div className='collapse-home-text'>
          <NavLink
            to="/"
            exact
            activeClassName="navigation-link--active"
            className="navigation-link link-router-darkcolor"
           >
            Home
          </NavLink>
        </div>
        {/* logo */}
        <div className="home-icon-container">
          <NavLink
            to="/"
            exact
            activeClassName="navigation-link--active"
            className="navigation-link"
          >
            <img
              src={Logo}
              alt="log"
              className="logo"
              style={{ width: "150px" }}
            />
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default CollapsedNavbar;
