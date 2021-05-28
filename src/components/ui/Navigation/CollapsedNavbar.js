import React, { useState } from "react";
import { withRouter, NavLink } from "react-router-dom";
import Logo from "assets/images/logo.jpeg";
import { FcHome } from 'react-icons/fc';


const CollapsedNavbar = () => {
    const [showUpArrow, setShowUpArrow] = useState(false);

    const arrowUp = () => {
        setShowUpArrow(!showUpArrow);
    }


  return (
    <>
      <nav className="navbar__donate">
        {/* nav-center */}
        <div className="p-t-20">
          <ul>
            <li className="collapsednav-item">
              <NavLink
                to="/"
                exact
                activeClassName="navigation-link--active"
                className="colnavigation-link text-black"
              >
                Home
              </NavLink>
            </li>
          </ul>
        </div>

        {/* logo */}
        <div className="">
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

        <div className="home-icon-container d-flex justify-content-center">
          <NavLink
            to="/"
            exact
            activeClassName="navigation-link--active"
            className="navigation-link"
          >
            <FcHome size={50} />
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default CollapsedNavbar;