import React from 'react'
import Corporate from "assets/images/homepage/corporate.jpg";
import { Link } from 'react-router-dom';
import { SiWebauthn } from "react-icons/si";
import { FaRegShareSquare } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";
import Coorporate from './../../dashboard/views/dashboard/user/Coorporate';

const CorporateAuction = () => {
  const iconStyle = {
    position: "relative",
    width: "auto",
    left: "25%",
    height: "55px",
    color: '#0F6929'
  }
  const iStyle = {
    height: "55px",
    width: "auto",
    color: "#0F6929",
  };
  return (
      <>
      <div
        className="container affiliate-container"
        style={{ backgroundImage: `url(${Corporate})` }}
      >
        <h4 className="font-weight-bold text-uppercase d-flex align-items-center boss-text">
         Corporate Auction
        </h4>
        <div className="mt-5">
          <button className="btn btn-lg affiliate-signup-btn">
            <Link className="link-router-inverted" to="affiliate-signup">
              Sign up
            </Link>
          </button>
        </div>
      </div>

      <header className="header-design">
        <div className="listar-map-button">
          <div
            className="listar-map-button-text"
            style={{ display: "inline-block", opacity: "1" }}
          >
            <span className="icon-map2">How Corporate Auction Works? </span>
          </div>
        </div>

        {/* footer wave */}
        <div className="footer-wave"></div>
      </header>

      <div className="pset">
        <div className="container">
          <div className="row listar-feature-items">
            <div
              className="col-12 col-sm-6 col-md-4 listar-feature-item-wrapper listar-feature-with-image listar-height-changed"
              data-aos="fade-zoom-in"
              data-aos-group="features"
              data-line-height="25.2px"
            >
              <div className="listar-feature-item listar-feature-has-link">
                <a href='#'></a>
                <div className="listar-feature-item-inner">
                  <div className="listar-feature-right-border"></div>

                  <div className="listar-feature-block-content-wrapper">
                    <div className="listar-feature-icon-wrapper">
                      <div className="listar-feature-icon-inner">
                        <SiWebauthn style={iStyle} />
                      </div>
                    </div>

                    <div
                      className="listar-feature-content-wrapper"
                      style={{ paddingTop: "0px" }}
                    >
                      <div className="listar-feature-item-title listar-feature-counter-added">
                        <span>
                          <span>01</span>
                          Sign Up
                        </span>
                      </div>

                      <div className="listar-feature-item-excerpt">
                        Sign up to start on boarding
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="listar-feature-fix-bottom-padding listar-fix-feature-arrow-button-height"></div>
            </div>

            <div
              className="col-xs-12 col-sm-6 col-md-4 listar-feature-item-wrapper listar-feature-with-image listar-height-changed"
              data-aos="fade-zoom-in"
              data-aos-group="features"
              data-line-height="25.2px"
            >
              <div className="listar-feature-item listar-feature-has-link">
                <a href='#'></a>
                <div className="listar-feature-item-inner">
                  <div className="listar-feature-right-border"></div>

                  <div className="listar-feature-block-content-wrapper">
                    <div className="listar-feature-icon-wrapper">
                      <div className="listar-feature-icon-inner">
                        <div>
                          <FaRegShareSquare style={iconStyle} />
                        </div>
                      </div>
                    </div>

                    <div
                      className="listar-feature-content-wrapper"
                      style={{ paddingTop: "0px" }}
                    >
                      <div className="listar-feature-item-title listar-feature-counter-added">
                        <span>
                          <span>02</span>
                         Create Profile
                        </span>
                      </div>

                      <div className="listar-feature-item-excerpt">
                        Create Corporate profile
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="listar-feature-fix-bottom-padding listar-fix-feature-arrow-button-height"></div>
            </div>

            <div
              className="col-xs-12 col-sm-6 col-md-4 listar-feature-item-wrapper listar-feature-with-image listar-height-changed"
              data-aos="fade-zoom-in"
              data-aos-group="features"
              data-line-height="25.2px"
            >
              <div className="listar-feature-item listar-feature-has-link">
                <a href='#'></a>
                <div className="listar-feature-item-inner">
                  <div className="listar-feature-right-border"></div>

                  <div className="listar-feature-block-content-wrapper">
                    <div className="listar-feature-icon-wrapper">
                      <div className="listar-feature-icon-inner">
                        <div>
                          <GiReceiveMoney style={iconStyle} />
                        </div>
                      </div>
                    </div>

                    <div
                      className="listar-feature-content-wrapper"
                      style={{ paddingTop: "0px" }}
                    >
                      <div className="listar-feature-item-title listar-feature-counter-added">
                        <span>
                          <span>03</span>
                          Corporate Auction
                        </span>
                      </div>

                      <div className="listar-feature-item-excerpt">
                        Auction items for your organisations
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="listar-feature-fix-bottom-padding listar-fix-feature-arrow-button-height"></div>
            </div>
          </div>
        </div>
      </div>
      </>
    );
}

export default CorporateAuction;



