import React, { useState } from "react";
import { NavLink } from "react-router-dom";
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
import { toggleCartHidden } from "store/actions/cart/cart.actions";
import { fetchAllCampaign } from "store/actions/fund_donate/FundDonate";
import { updateMarketCollections } from "store/actions/MarketPlace";



const Navbar = ({ menuOpen }) => {
    const authState = useSelector(state => state.authReducer);
  const { isAuthenticated } = authState;
    
    const hiddenState = useSelector(state => state.cartReducer);
    const { hidden } = hiddenState;

    const cartState = useSelector(state => state.cartReducer);
    const { cartItems } = cartState;

    const itemCount = cartItems.reduce(
        (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity,
        0
    );

    const dispatch = useDispatch();

    const refreshState = () => {
        dispatch(fetchAllCampaign());
        dispatch(updateMarketCollections());
    }

    const [showUpArrow, setShowUpArrow] = useState({
        raiseFundsArrow: false,
        donateArrow: false,
        howWorksArrow: false
    });

    const { raiseFundsArrow, donateArrow, howWorksArrow } = showUpArrow;

    return ( 
        <>
        { /* nav */ }
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
                  <NavLink
                    to="/categories/personal-fundraising"
                    exact
                    activeClassName="navigation-link--active"
                    className=" sub-navigation-link"
                    id="personal"
                    onClick={() => dispatch(FUNDRAISECATEGORIES())}
                  >
                    Personal
                  </NavLink>
                </li>
                <li className="nav__submenu-item">
                  <NavLink
                    to="/categories/ngo-fundraising"
                    exact
                    activeClassName="navigation-link--active"
                    className="sub-navigation-link"
                    id="ngo"
                    onClick={() => dispatch(FUNDRAISECATEGORIES())}
                  >
                    NGO
                  </NavLink>
                </li>
                <li className="nav__submenu-item">
                  <NavLink
                    to="/categories/community-fundraising"
                    exact
                    activeClassName="navigation-link--active"
                    className="sub-navigation-link"
                    id="community"
                    onClick={() => dispatch(FUNDRAISECATEGORIES())}
                  >
                    Community
                  </NavLink>
                </li>
                <li className="nav__submenu-item">
                  <NavLink
                    to="/categories/startup-fundraising"
                    exact
                    activeClassName="navigation-link--active"
                    className="sub-navigation-link"
                    id="startup"
                    onClick={() => dispatch(FUNDRAISECATEGORIES())}
                  >
                    Start up
                  </NavLink>
                </li>
                <hr />
                <li className="nav__submenu-item">
                  <NavLink
                    to="/categories"
                    exact
                    activeClassName="navigation-link--active"
                    className="sub-navigation-link"
                    id="see-all"
                    onClick={() => dispatch(FUNDRAISECATEGORIES())}
                  >
                    See all
                  </NavLink>
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
                  setShowUpArrow(() => ({ ...showUpArrow, donateArrow: false }))
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
                  setShowUpArrow(() => ({ ...showUpArrow, donateArrow: false }))
                }
              >
                <li className="nav__submenu-item" id="about">
                  <NavLink
                    to="/donate/cash"
                    exact
                    activeClassName="navigation-link--active"
                    className="sub-navigation-link"
                    id="donate-cash"
                  >
                    Donate Cash
                  </NavLink>
                </li>
                <li className="nav__submenu-item" id="contact">
                  <NavLink
                    to="/donate/item"
                    exact
                    activeClassName="navigation-link--active"
                    className="sub-navigation-link"
                    id="donate-item"
                  >
                    Donate Item
                  </NavLink>
                </li>
                <li className="nav__submenu-item" id="contact">
                  <NavLink
                    to="/donate/ogadonate"
                    exact
                    activeClassName="navigation-link--active"
                    className="sub-navigation-link"
                    id="donate-ogadonate"
                  >
                    Donate to ogadonate
                  </NavLink>
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
                  <NavLink
                    to="/about"
                    exact
                    activeClassName="navigation-link--active"
                    className="sub-navigation-link"
                    id="about"
                  >
                    About us
                  </NavLink>
                </li>
                <li className="nav__submenu-item" id="contact">
                  <NavLink
                    to="/contact"
                    exact
                    activeClassName="navigation-link--active"
                    className="sub-navigation-link"
                    id="contact"
                  >
                    Contact us
                  </NavLink>
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
              <TheHeaderDropdown />
            ) : (
              <li className="nav-item nav-signup-login navbar-right-hidden">
                <NavLink
                  to="/auth"
                  exact
                  activeClassName="navigation-link--active"
                  className="navigation-link text-white "
                >
                  Login/Signup
                </NavLink>
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
            <li className="nav-item navigation-btn-item">
              <div className="cart-badge">
                <span onMouseEnter={() => dispatch(toggleCartHidden())}>
                  <FiShoppingCart color="#fff" className="shopping-cart" />
                </span>
                <span className="badge-container">
                  <CBadge className="bill-badge" shape="pill">
                    {itemCount}
                  </CBadge>
                </span>
              </div>
            </li>
            {hidden ? null : <CartDropdown />}
          </ul>
        </div>
      </nav> 
        </>
    );
};

export default Navbar;