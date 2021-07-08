import React, { useState } from "react";
import { withRouter, NavLink, Link } from "react-router-dom";
import Logo from "assets/images/logo.jpeg";
import Button from "@material-ui/core/Button";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { TheHeaderDropdown } from "components/containers/dashboard/containers";
import { useSelector } from "react-redux";
import { FiTwitter } from "react-icons/fi";
import { ImFacebook } from "react-icons/im";
import { IoLogoInstagram } from "react-icons/io";
import { fetchAllCampaign } from "store/actions/fund_donate/FundDonate";
import { updateMarketCollections } from "store/actions/MarketPlace";
import { useDispatch } from "react-redux";

const SidenavContent = ({ handleClickAway, history }) => {
  const dispatch = useDispatch();
  const authState = useSelector(state => state.authReducer);
  const { isAuthenticated } = authState;
  const [showUpArrow, setShowUpArrow] = useState(false);

  const arrowUp = () => {
    setShowUpArrow(!showUpArrow);
  };

  const pushToAffiliate = () => {
    window.scrollTo(
      {
        top: 0,
        behavior: "smooth"
      },
      history.push("/affiliate")
    );
    handleClickAway();
  };

  const pushToCorporate = () => {
    window.scrollTo(
      {
        top: 0,
        behavior: "smooth"
      },
      history.push("/corporate-auction")
    );
    handleClickAway();
  };

  return (
    <>
      <nav className="side-navbar-content">
        {/* logo */}
        <div>
          <NavLink
            to="/"
            exact
            activeClassName="side-navigation-link--active"
            className="side-navigation-link"
          >
            <img src={Logo} alt="log-img" style={{ width: "150px" }} />
          </NavLink>
        </div>

        {/* sidenav-content */}
        <ul className="side-nav-bullet">
          <li className="side-nav-item">
            <Link
              exact
              activeClassName="side-navigation-link--active"
              className="side-navigation-link"
              onClick={() => {
                handleClickAway();
                window.scrollTo(
                  {
                    top: 0,
                    behavior: "smooth"
                  },
                  history.push("/")
                );
                dispatch(fetchAllCampaign());
                dispatch(updateMarketCollections());
              }}
            >
              Home
            </Link>
          </li>
          <li
            className="side-nav-item fund-side-nav-item side-navigation-link"
            onMouseEnter={arrowUp}
            onMouseLeave={arrowUp}
          >
            Raise Funds
            {showUpArrow ? <IoIosArrowUp /> : <IoIosArrowDown color="white" />}
            <ul className="side-nav__submenu">
              <li className="side-nav__submenu-item">
                <Link
                  exact
                  activeClassName="side-navigation-link--active"
                  className="side-subnavigation-link"
                  id="personal"
                  onClick={() => {
                    handleClickAway();
                    window.scrollTo(
                      {
                        top: 0,
                        behavior: "smooth"
                      },
                      history.push("/categories/personal-fundraising")
                    );
                  }}
                >
                  Personal
                </Link>
              </li>
              <li className="side-nav__submenu-item">
                <Link
                  exact
                  activeClassName="side-navigation-link--active"
                  className="side-sub-navigation-link"
                  id="ngo"
                  onClick={() => {
                    handleClickAway();
                    window.scrollTo(
                      {
                        top: 0,
                        behavoir: "smooth"
                      },
                      history.push("/categories/ngo-fundraising")
                    );
                  }}
                >
                  NGO
                </Link>
              </li>
              <li className="side-nav__submenu-item">
                <Link
                  exact
                  activeClassName="side-navigation-link--active"
                  className="side-sub-navigation-link"
                  id="community"
                  onClick={() => {
                    handleClickAway();
                    window.scrollTo(
                      { top: 0, behavior: "smooth" },
                      history.push("/categories/community-fundraising")
                    );
                  }}
                >
                  Community
                </Link>
              </li>
              <li className="side-nav__submenu-item">
                <Link
                  exact
                  activeClassName="side-navigation-link--active"
                  className="sub-navigation-link"
                  id="startup"
                  onClick={() => {
                    handleClickAway();
                    window.scrollTo(
                      { top: 0, behavior: "smooth" },
                      history.push("/categories/startup-fundraising")
                    );
                  }}
                >
                  Start up
                </Link>
              </li>
              <hr />
              <li className="side-nav__submenu-item">
                <Link
                  exact
                  activeClassName="side-navigation-link--active"
                  className="side-sub-navigation-link"
                  id="see-all"
                  onClick={() => {
                    handleClickAway();
                    window.scrollTo(
                      { top: 0, behavior: "smooth" },
                      history.push("/categories")
                    );
                  }}
                >
                  See all
                </Link>
              </li>
            </ul>
          </li>

          {/* donate */}
          <li
            className="side-nav-item donate-side-nav-item side-navigation-link text-black"
            onMouseEnter={arrowUp}
            onMouseLeave={arrowUp}
          >
            Donate
            {showUpArrow ? <IoIosArrowUp /> : <IoIosArrowDown color="white" />}
            <ul className="side-nav__submenu">
              <li className="side-nav__submenu-item" id="about">
                <Link
                  exact
                  activeClassName="side-navigation-link--active"
                  className="side-sub-navigation-link"
                  id="donate-cash"
                  onClick={() => {
                    handleClickAway();
                    window.scrollTo(
                      { top: 0, behavior: "smooth" },
                      history.push("/donate/cash")
                    );
                  }}
                >
                  Donate Cash
                </Link>
              </li>
              <li className="side-nav__submenu-item" id="contact">
                <Link
                  exact
                  activeClassName="navigation-link--active"
                  className="sub-navigation-link"
                  id="donate-item"
                  onClick={() => {
                    handleClickAway();
                    window.scrollTo(
                      { top: 0, behavior: "smooth" },
                      history.push("/donate/item")
                    );
                  }}
                >
                  Donate Item
                </Link>
              </li>
              <li className="side-nav__submenu-item" id="contact">
                <Link
                  exact
                  activeClassName="side-navigation-link--active"
                  className="side-sub-navigation-link"
                  id="donate-ogadonate"
                  onClick={() => {
                    handleClickAway();
                    window.scrollTo(
                      { top: 0, behavior: "smooth" },
                      history.push("/donate/ogadonate")
                    );
                  }}
                >
                  Donate to ogadonate
                </Link>
              </li>
            </ul>
          </li>

          {/* how it works */}
          <li
            className="side-nav-item donate-side-nav-item side-navigation-link text-black"
            onMouseEnter={arrowUp}
            onMouseLeave={arrowUp}
          >
            How it works
            {showUpArrow ? <IoIosArrowUp /> : <IoIosArrowDown color="white" />}
            <ul className="side-nav__submenu">
              <li className="side-nav__submenu-item">
                <Link
                  exact
                  activeClassName="side-navigation-link--active"
                  className="side-sub-navigation-link"
                  id="how-works"
                  onClick={() => {
                    handleClickAway();
                    window.scrollTo(
                      {
                        top: 0,
                        behavior: "smooth"
                      },
                      history.push("/how-it-works")
                    )
                  }
                  }
                >
                  How it works
                </Link>
              </li>
              <li className="side-nav__submenu-item" id="about">
                <Link
                  exact
                  activeClassName="side-navigation-link--active"
                  className="side-sub-navigation-link"
                  id="about"
                  onClick={() => {
                    handleClickAway();
                    window.scrollTo(
                      { top: 0, behavior: "smooth" },
                      history.push("/about")
                    );
                  }}
                >
                  About us
                </Link>
              </li>
              <li className="side-nav__submenu-item" id="contact">
                <Link
                  exact
                  activeClassName="side-navigation-link--active"
                  className="side-sub-navigation-link"
                  id="contact"
                  onClick={() => {
                    handleClickAway();
                    window.scrollTo(
                      { top: 0, behavior: "smooth" },
                      history.push("/contact")
                    );
                  }}
                >
                  Contact us
                </Link>
              </li>
            </ul>
          </li>
          <li
            className="side-nav-item donate-side-nav-item side-navigation-link text-black side-nav-affiliate"
            id="auction"
            onClick={pushToAffiliate}
          >
            Become an affiliate
          </li>
        </ul>

        <ul>
          {isAuthenticated ? (
            <TheHeaderDropdown />
          ) : (
            <li className="side-nav-item">
              <Link
                exact
                activeClassName="side-navigation-link--active"
                className="side-navigation-link"
                onClick={() => {
                  handleClickAway();
                  window.scrollTo(
                    { top: 0, behavior: "smooth" },
                    history.push("/auth")
                  );
                }}
              >
                Login/Signup
              </Link>
            </li>
          )}
          <li className="side-nav-item navigation-btn-item">
            <Button variant="contained" className="nav-btn mt-2">
              <Link
                className="side-navigation-link text-white"
                onClick={() => {
                  handleClickAway();
                  window.scrollTo(
                    {
                      top: 0,
                      behavior: "smooth"
                    },
                    history.push("/marketplace/products")
                  );
                }}
              >
                Buy To Support
              </Link>
            </Button>
          </li>
          <li
            className="side-nav-item navigation-btn-item"
            onClick={pushToCorporate}
          >
            <Button variant="contained" className="nav-btn mt-1 text-white">
              Corporate auction
            </Button>
          </li>

          <div className="sidenav-social-icons d-flex flex-column">
            <span className="mt-3 text-center">
              <span className="mr-1">&copy;</span>2021 Ogadonate
            </span>
            <div className="social-icons mt-3 text-center">
              <span className="twitter-icon ">
                <a
                  href="https://twitter.com/ogadonate"
                  className="fitwitter fs-1"
                >
                  <FiTwitter />
                </a>
              </span>
              <span className="facebook-icon">
                <a
                  href="https://web.facebook.com/ogadonate"
                  className="imfacebook fs-1"
                >
                  <ImFacebook />
                </a>
              </span>
              <span className="instagram-icon">
                <a
                  href="https://www.instagram.com/ogadonate/"
                  className="ioinstagram fs-1"
                >
                  <IoLogoInstagram />
                </a>
              </span>
            </div>
          </div>
        </ul>
      </nav>
    </>
  );
};

export default withRouter(SidenavContent);
