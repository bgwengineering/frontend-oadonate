import React from "react";
import { Link, withRouter } from "react-router-dom";
import { FiTwitter } from "react-icons/fi";
import { ImFacebook } from "react-icons/im";
import { IoLogoInstagram } from "react-icons/io";
import Logo from "assets/images/logo.jpeg";
import { FUNDRAISECATEGORIES } from "store/actions/Category";
import { useDispatch } from "react-redux";


const Footer = ({history}) => {
  
  const pushToAbout = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    }, history.push('/about'));
  } 
  const pushToAffiliate = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    }, history.push('/affiliate'));
  } 
 
  const pushToPersonal = () => {
    window.scrollTo(
      {
        top: 0,
        behavior: "smooth"
      },
      history.push("/categories/personal-fundraising")
    );
  } 

  const dispatch = useDispatch();

  return (
    <footer className="footer-container pt-3">
      <div className="footer-content ">
        <div className="footer-row row">
          <div className="about-col col-md-5 col-lg-5">
            <Link to="/">
              <img src={Logo} alt="logo" style={{ width: "220px" }} />
            </Link>
            <p className="footer-about-text mt-3">
              <span className="font-weight-bold">Ogadonate</span> is a digital
              marketplace that connects individuals/groups who have personal,
              social or community needs to people (individual or corporate) who
              are willing to donate IDLE ITEMS which are auctioned through our
              solution to meet their needs and track the record of such
              corporate or individual social responsibility.
            </p>
          </div>

          <div className="col-md-4 col-lg-4 pt-3">
            <div className="mx-auto  categories-col">
              <h4 className="text-uppercase footer-heading footer-fundraise mb-4">
                FundRaise for
              </h4>
              <ul className=" footer-ul">
                <li className="footer-item">
                  <Link
                    activeClassName="navigation-link--active"
                    className="sub-navigation-link link-router"
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
                <li className="footer-item">
                  <Link
                    activeClassName="navigation-link--active"
                    className="sub-navigation-link link-router"
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
                <li className="footer-item">
                  <Link
                    activeClassName="navigation-link--active"
                    className="sub-navigation-link link-router"
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
                <li className="footer-item">
                  <Link
                    activeClassName="navigation-link--active"
                    className="sub-navigation-link link-router"
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
              </ul>
            </div>
          </div>

          {/* resources */}
          <div className="col-md-3 col-lg-3 pt-3">
            <div className="mx-auto resources-col">
              <h4 className="text-uppercase footer-heading mr-5 mb-4">
                Resources
              </h4>
              <ul className="footer-ul">
                <li className="footer-item">
                  <Link className="sub-navigation-link link-router">Terms</Link>
                </li>
                <li className="footer-item">
                  <Link
                    className="sub-navigation-link link-router"
                    onClick={pushToAffiliate}
                  >
                    Become an affiliate
                  </Link>
                </li>
                <li className="footer-item">
                  <Link
                    onClick={pushToAbout}
                    className="sub-navigation-link link-router"
                  >
                    About us
                  </Link>
                </li>
                <li className="footer-item">
                  <Link className="sub-navigation-link link-router">
                    Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* SOCIAL ICONS */}
        <hr />

        <div className="social-icons-col d-flex justify-content-around">
          <span className="mt-3">
            <span className="mr-1">&copy;</span>2021 Ogadonate
          </span>
          <span className="social-icons mt-3">
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
          </span>
        </div>
      </div>
    </footer>
  );
};

export default withRouter(Footer);
