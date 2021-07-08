import React, { useState } from "react";
import { Link, NavLink,withRouter } from "react-router-dom";
import Logo from "assets/images/ogdonate-logo.jpeg";
import Button from "@material-ui/core/Button";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { TheHeaderDropdown } from "components/containers/dashboard/containers";
import MenuToggle from "./MenuToggle";
import { FiShoppingCart } from "react-icons/fi";
import { FUNDRAISECATEGORIES } from "store/actions/Category";
import { CBadge } from "@coreui/react";
import CartDropdown from "components/cart/CartDropdown";
import { fetchAllCampaign } from "store/actions/fund_donate/FundDonate";
import { updateMarketCollections } from "store/actions/MarketPlace";


 const Navbar = ({ menuOpen, history}) => {
  const authState = useSelector(state => state.authReducer);
  const { isAuthenticated } = authState;

  const hiddenState = useSelector(state => state.cartReducer);
  const { hidden } = hiddenState;
  
  const cartState = useSelector(state => state.cartReducer);
  const { cartItems } = cartState;

  const itemCount = cartItems.reduce(
    (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0);
   
  const dispatch = useDispatch();

  const refreshState = () => {
    dispatch(fetchAllCampaign());
    dispatch(updateMarketCollections());
  };

  const [showUpArrow, setShowUpArrow] = useState({
    raiseFundsArrow: false,
    donateArrow: false,
    howWorksArrow: false
  });

  const { raiseFundsArrow, donateArrow, howWorksArrow } = showUpArrow;

  return (
    <>
      {/* nav */}
      <nav className="navbar__donate pt-2">
        {/* nav-center */}
        <div className="navbar-left-container">
          <MenuToggle isMenuClicked={menuOpen} />
          <ul className="navbar-left pt-3 pl-3">
            <li className="nav-item">
              <NavLink
                to="/"
                exact
                activeClassName="navigation-link--active"
                className="navigation-link text-white"
                onClick={refreshState}
               >
                Home
              </NavLink>
            </li>
            <li className="nav-item fund-nav-item navigation-link text-white">
              <NavLink
                to=""
                className="text-white"
                onMouseEnter={() =>
                  setShowUpArrow(prevState => ({
                    ...showUpArrow,
                    raiseFundsArrow: !prevState.raiseFundsArrow
                  }))
                }
                onMouseLeave={() =>
                  setShowUpArrow(() => ({
                    ...showUpArrow,
                    raiseFundsArrow: false
                  }))
                }
              >
                Raise Funds
                {raiseFundsArrow ? (
                  <IoIosArrowUp />
                ) : (
                  <IoIosArrowDown color="white" />
                )}
              </NavLink>
              <ul
                className="nav__submenu"
                onMouseEnter={() =>
                  setShowUpArrow(prevState => ({
                    ...showUpArrow,
                    raiseFundsArrow: true
                  }))
                }
                onMouseLeave={() =>
                  setShowUpArrow(() => ({
                    ...showUpArrow,
                    raiseFundsArrow: false
                  }))
                }
              >
                <li className="nav__submenu-item">
                  <Link
                    exact
                    activeClassName="navigation-link--active"
                    className=" sub-navigation-link"
                    id="personal"
                    onClick={() => {
                      dispatch(FUNDRAISECATEGORIES());
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
                <li className="nav__submenu-item">
                  <Link
                    exact
                    activeClassName="navigation-link--active"
                    className="sub-navigation-link"
                    id="ngo"
                    onClick={() => {
                      dispatch(FUNDRAISECATEGORIES());
                      window.scrollTo(
                        {
                          top: 0,
                          behavior: "smooth"
                        },
                        history.push("/categories/ngo-fundraising")
                      );
                    }}
                  >
                    NGO
                  </Link>
                </li>
                <li className="nav__submenu-item">
                  <Link
                    exact
                    activeClassName="navigation-link--active"
                    className="sub-navigation-link"
                    id="community"
                    onClick={() => {
                      dispatch(FUNDRAISECATEGORIES());
                      window.scrollTo(
                        {
                          top: 0,
                          behavior: "smooth"
                        },
                        history.push("/categories/community-fundraising")
                      );
                    }}
                  >
                    Community
                  </Link>
                </li>
                <li className="nav__submenu-item">
                  <Link
                    exact
                    activeClassName="navigation-link--active"
                    className="sub-navigation-link"
                    id="startup"
                    onClick={() => {
                      dispatch(FUNDRAISECATEGORIES());
                      window.scrollTo(
                        {
                          top: 0,
                          behavior: "smooth"
                        },
                        history.push("/categories/startup-fundraising")
                      );
                    }}
                  >
                    Start up
                  </Link>
                </li>
                <hr />
                <li className="nav__submenu-item">
                  <Link
                    exact
                    activeClassName="navigation-link--active"
                    className="sub-navigation-link"
                    id="see-all"
                    onClick={() => {
                      dispatch(FUNDRAISECATEGORIES());
                      window.scrollTo(
                        {
                          top: 0,
                          behavior: "smooth"
                        },
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
            <li className="nav-item donate-nav-item navigation-link text-white">
              <NavLink
                to=""
                className="text-white"
                onMouseEnter={() =>
                  setShowUpArrow(prevState => ({
                    ...showUpArrow,
                    donateArrow: !prevState.donateArrow
                  }))
                }
                onMouseLeave={() =>
                  setShowUpArrow(() => ({
                    ...showUpArrow,
                    donateArrow: false
                  }))
                }
              >
                Donate
                {donateArrow ? (
                  <IoIosArrowUp />
                ) : (
                  <IoIosArrowDown color="white" />
                )}
              </NavLink>
              <ul
                className="nav__submenu"
                onMouseEnter={() =>
                  setShowUpArrow(() => ({
                    ...showUpArrow,
                    donateArrow: true
                  }))
                }
                onMouseLeave={() =>
                  setShowUpArrow(() => ({
                    ...showUpArrow,
                    donateArrow: false
                  }))
                }
              >
                <li className="nav__submenu-item" id="about">
                  <Link
                    exact
                    activeClassName="navigation-link--active"
                    className="sub-navigation-link"
                    id="donate-cash"
                    onClick={() =>
                      window.scrollTo(
                        {
                          top: 0,
                          behavior: "smooth"
                        },
                        history.push("/donate/cash")
                      )
                    }
                  >
                    Donate Cash
                  </Link>
                </li>
                <li className="nav__submenu-item" id="contact">
                  <Link
                    exact
                    activeClassName="navigation-link--active"
                    className="sub-navigation-link"
                    id="donate-item"
                    onClick={() =>
                      window.scrollTo(
                        {
                          top: 0,
                          behavior: "smooth"
                        },
                        history.push("/donate/item")
                      )
                    }
                  >
                    Donate Item
                  </Link>
                </li>
                <li className="nav__submenu-item" id="contact">
                  <Link
                    exact
                    activeClassName="navigation-link--active"
                    className="sub-navigation-link"
                    id="donate-ogadonate"
                    onClick={() =>
                      window.scrollTo(
                        {
                          top: 0,
                          behavior: "smooth"
                        },
                        history.push("/donate/ogadonate")
                      )
                    }
                  >
                    Donate to ogadonate
                  </Link>
                </li>
              </ul>
            </li>

            {/* how it works */}
            <li className="nav-item donate-nav-item navigation-link text-white">
              <NavLink
                to=""
                className="text-white"
                onMouseEnter={() =>
                  setShowUpArrow(prevState => ({
                    ...showUpArrow,
                    howWorksArrow: !prevState.howWorksArrow
                  }))
                }
                onMouseLeave={() =>
                  setShowUpArrow(() => ({
                    ...showUpArrow,
                    howWorksArrow: false
                  }))
                }
              >
                How it works
                {howWorksArrow ? (
                  <IoIosArrowUp />
                ) : (
                  <IoIosArrowDown color="white" />
                )}
              </NavLink>
              <ul
                className="nav__submenu"
                onMouseEnter={() =>
                  setShowUpArrow(() => ({
                    ...showUpArrow,
                    howWorksArrow: true
                  }))
                }
                onMouseLeave={() =>
                  setShowUpArrow(() => ({
                    ...showUpArrow,
                    howWorksArrow: false
                  }))
                }
              >
                <li className="nav__submenu-item" id="about">
                  <Link
                    exact
                    activeClassName="navigation-link--active"
                    className="sub-navigation-link"
                    id="about"
                    onClick={() =>
                      window.scrollTo(
                        {
                          top: 0,
                          behavior: "smooth"
                        },
                        history.push("/about")
                      )
                    }
                  >
                    About us
                  </Link>
                </li>
                <li className="nav__submenu-item" id="contact">
                  <Link
                    exact
                    activeClassName="navigation-link--active"
                    className="sub-navigation-link"
                    id="contact"
                    onClick={() =>
                      window.scrollTo(
                        {
                          top: 0,
                          behavior: "smooth"
                        },
                        history.push("/contact")
                      )
                    }
                  >
                    Contact us
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        {/* logo */}
        <div className="nav-center">
          <NavLink
            to="/"
            exact
            activeClassName="navigation-link--active"
            className="navigation-link text-white"
            onClick={refreshState}
          >
            <img
              src={Logo}
              alt="log"
              className="logo"
              style={{ width: "150px" }}
            />
          </NavLink>
        </div>

        {/* right container */}
        <div className="__end-right-container pt-3">
          <ul className="bar-right">
            {isAuthenticated ? (
              <li className="nav-item nav-signup-login navbar-right-loggedin-hidden">
                <TheHeaderDropdown />
              </li>
            ) : (
              <li className="nav-item nav-signup-login navbar-right-hidden">
                <Link
    
                  exact
                  activeClassName="navigation-link--active"
                  className="navigation-link text-white"
                    onClick={() => {
                      window.scrollTo({
                        top: 0,
                        behavior:'smooth'
                      }, history.push("/auth"))
                  }}
                >
                  Login/Signup
                </Link>
              </li>
            )}

            <li className="nav-item navigation-btn-item navbar-right-hidden">
              <Button variant="contained" className="nav-btn text-white">
                <NavLink
                  to="/marketplace/products"
                  className="navigation-link text-white"
                >
                  Buy To Support
                </NavLink>
              </Button>
            </li>

            {/* cart icons and count */}
            <li className="nav-item navigation-btn-item cart-container">
              <div className="cart-badge">
                <span>
                  <FiShoppingCart color="#fff" className="shopping-cart" />
                </span>
                <span className="badge-container">
                  <CBadge className="bill-badge" shape="pill">
                    {itemCount}
                  </CBadge>
                </span>
                <div className="cartdropdown-hidden">
                  <CartDropdown />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default withRouter(Navbar);

