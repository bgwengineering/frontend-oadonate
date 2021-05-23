import React, { useState } from "react";
import { withRouter, NavLink } from "react-router-dom";
import Logo from "assets/images/logo.jpeg";

const CollapsedNavbar = () => {
    const [showUpArrow, setShowUpArrow] = useState(false);

    const arrowUp = () => {
        setShowUpArrow(!showUpArrow);
    }


    return ( <
        >
        <nav className="navbar__donate toolbar">
        {/* nav-center */}
        <div className="navbar-center-container p-t-20">
          <ul className="navbar-center">
            <li className="nav-item">
              <NavLink
                to="/"
                exact
                activeClassName="navigation-link--active"
                className="navigation-link text-white"
              >
                Home
              </NavLink>
            </li>
          </ul>
        </div>
         
        {/* logo */}
        <div className="nav-left">
        <NavLink
                to="/"
                exact
                activeClassName="navigation-link--active"
                className="navigation-link text-white"
              >
          <img src={Logo} alt="log" className="logo" style={{width:'150px'}} />
        </NavLink>
        </div>
      </nav> <
        />
    );
};

export default CollapsedNavbar;