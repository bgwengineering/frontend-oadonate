import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiTwitter } from "react-icons/fi";
import { ImFacebook } from "react-icons/im";
import { IoLogoInstagram } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { Button } from "@material-ui/core";
import {FcCallback} from 'react-icons/fc'
import {GoMail} from 'react-icons/go'


const TopNav = () => {
  const [showUpArrow, setShowUpArrow] = useState({
    deskArrow: false,
  });
  const { deskArrow } = showUpArrow;
  return (
    <>
      <nav className="topbar__nav justify-content-between align-items-center px-4 d-flex">
        <ul className="top__nav_menu  d-flex align-items-center mt-2">
          {/* coorporate auction */}
          <li className="top-nav-item">
            <Button variant="contained" className="top-nav-btn mr-3">
              <NavLink to="/corporate-auction" className="button-top-navigation-link text-white">
                Corporate Auction
              </NavLink>
            </Button>
          </li>

          {/* affiliate */}
          <li className="top-nav-item">
            <NavLink
              to="/affiliate"
              exact
              activeClassName="navigation-link--active"
              className="top-navigation-link text-black"
            >
              Become an affiliate
            </NavLink>
          </li>
        </ul>
        <ul className="top__nav_menu pb-0 pt-1 d-flex">
          <li className="top-nav-item top-subnav-item navigation-link text-black">
            <NavLink
              to=""
              className="top-navigation-link text-black"
              onMouseEnter={() =>
                setShowUpArrow((prevState) => ({
                  ...showUpArrow,
                  deskArrow: !prevState.deskArrow,
                }))
              }
              onMouseLeave={() =>
                setShowUpArrow(() => ({
                  ...showUpArrow,
                  deskArrow: false,
                }))
              }
            >
              Help Desk
              {deskArrow ? (
                <IoIosArrowUp color="#000" />
              ) : (
                <IoIosArrowDown color="#000" />
              )}
            </NavLink>
            <ul
              className="top-nav__submenu"
              onMouseEnter={() =>
                setShowUpArrow(() => ({
                  ...showUpArrow,
                  deskArrow: true,
                }))
              }
              onMouseLeave={() =>
                setShowUpArrow(() => ({
                  ...showUpArrow,
                  deskArrow: false,
                }))
              }
            >
              <li className="top-nav__submenu-item pl-1" id="gmail">
                <a
                  href="mailto:  customer@ogadonate.com"
                  className="top-navigation-link text-black"
                >
                 <GoMail color="#0F6929"/> customer@ogadonate.com
                </a>
              </li>

           
              <li className="top-nav__submenu-item pl-1">
              <div>
               <FcCallback/> +16514045620
               </div>
               <FcCallback/> +2349065705998
              </li>
            </ul>
          </li>

          <li className="nav-item">
            <span className="ml-3 pr-3">
              <span className="nav-twitter-icon">
                <a
                  href="https://twitter.com/ogadonate"
                  className="nav-fitwitter pr-2"
                >
                  <FiTwitter />
                </a>
              </span>
              <span className="nav-facebook-icon">
                <a
                  href="https://web.facebook.com/ogadonate"
                  className="nav-imfacebook pr-2"
                >
                  <ImFacebook />
                </a>
              </span>
              <span className="nav-instagram-icon">
                <a
                  href="https://www.instagram.com/ogadonate/"
                  className="nav-ioinstagram"
                >
                  <IoLogoInstagram />
                </a>
              </span>
            </span>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default TopNav;
