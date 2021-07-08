import React from "react";
import Boss from "assets/images/homepage/boss.jpg";
import { Link } from "react-router-dom";
import { SiWebauthn } from 'react-icons/si';
import { FaRegShareSquare, } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";

const Affiliate = () => {

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
        style={{ backgroundImage: `url(${Boss})` }}
      >
        <h3
          className="font-weight-bolder text-uppercase d-flex 
            align-items-center boss-text"
        >
          Become your own boss by joining our affiliate program
        </h3>
        <div className="mt-5">
          <button className="btn btn-lg affiliate-signup-btn">
            <Link className="link-router-inverted" to="affiliate-signup">
              Get Started
            </Link>
          </button>
        </div>
      </div>

      {/* How it works setion */}
      <header className="header-design">
        <div className="affiliate-listar-map-button">
          <div
            className="listar-map-button-text"
            style={{ display: "inline-block", opacity: "1" }}
          >
            <span className="icon-map2">How Affiliate Works? </span>
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
                <a href="#"></a>
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
                        Join tens of thousands of people who are earning with
                        Ogadonate Affiliate
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
                <a href="#"></a>
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
                          Recommend
                        </span>
                      </div>

                      <div className="listar-feature-item-excerpt">
                        Share links with your audience, friends and family and
                        get amazing rewards.
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
                <a href="#"></a>
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
                          Earn
                        </span>
                      </div>

                      <div className="listar-feature-item-excerpt">
                        Earn up to 5% in commissions for every donor referred
                        and increase your coupon wallet for every buyer
                        referred.
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
};

export default Affiliate;
