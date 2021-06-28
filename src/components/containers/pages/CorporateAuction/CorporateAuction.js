import React from "react";
import Corporate from "assets/images/homepage/corporate.jpg";
import { Link } from "react-router-dom";
import { SiWebauthn } from "react-icons/si";
import Coorporate from "./../../dashboard/views/dashboard/user/Coorporate";
import { RiShareFill } from "react-icons/ri";
import { ImBoxAdd } from "react-icons/im";

const CorporateAuction = () => {
  const iconStyle = {
    position: "relative",
    width: "auto",
    left: "25%",
    height: "55px",
    color: "#0F6929"
  };
  const iStyle = {
    height: "55px",
    width: "auto",
    color: "#0F6929"
  };
  return (
    <>
      <div
        className="container affiliate-container"
        style={{ backgroundImage: `url(${Corporate})` }}
      >
        <h3 className="font-weight-bolder text-uppercase d-flex align-items-center corporate-auction-text text-white">
          Corporate Auction has never been this easier.
        </h3>
        <h4 className="text-white mt-5 corporate-auction-sub-text">
          With our highly digitalized, democratized and demonetized auction
          process, Ogadonate Auction eliminates the headaches associated with
          setting up in-person auctioneers in your organization. You may Also
          get your employees, shareholders, congregations and the public to
          fundraise for a project you care about. Register today as a COMPANY,
          RELIGIOUS ORGANIZATION, NGO or AUCTIONEER
        </h4>
        <div className="mt-3">
          <button className="btn btn-lg affiliate-signup-btn">
            <Link className="link-router-inverted" to="/corporate-signup">
              Apply
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
            <span className="icon-map2 text-uppercase">
              Create an auction or a Project in few minutes.
            </span>
          </div>
        </div>
        {/* footer wave */}
        <div className="footer-wave"></div>
        <h5 className="step-3 text-muted mt-3">
          <i>Three steps is all it takes to get started</i>
        </h5>
      </header>

      <div className="pset ">
        <div className="container">
          <div className="row listar-feature-items">
            <div
              className=" col-12 col-sm-6 col-md-4 listar-feature-item-wrapper listar-feature-with-image listar-height-changed"
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
                          Register
                        </span>
                      </div>

                      <div className="listar-feature-item-excerpt">
                        Answer a few questions about your Organization and your
                        account and domain will be created in less than 5
                        minutes.
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
                          <ImBoxAdd style={iconStyle} />
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
                          Add
                        </span>
                      </div>

                      <div className="listar-feature-item-excerpt">
                        Create a Project or Upload items for auction in bulk or
                        add them one at a time. Our item wizard will walk you
                        through the process.
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
                          <RiShareFill style={iconStyle} />
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
                          Share
                        </span>
                      </div>

                      <div className="listar-feature-item-excerpt">
                        When you are ready to go live, share your auction’s
                        custom URL through email, social media, and your
                        website.
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

export default CorporateAuction;
