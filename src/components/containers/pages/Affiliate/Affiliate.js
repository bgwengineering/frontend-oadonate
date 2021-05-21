import React from "react";
import Boss from "assets/images/homepage/boss.jpg";
import { Link } from "react-router-dom";

const Affiliate = () => {
  return (
    <>
      <div
        className="container affiliate-container"
        style={{ backgroundImage: `url(${Boss})` }}
      >
        <h4 className="font-weight-bold text-uppercase d-flex align-items-center boss-text">
          Become your own boss by joining our affiliate program
        </h4>
        <div className="mt-5">
          <button className="btn btn-lg affiliate-login-btn mr-4">
            <Link className="link-router-inverted" to="/affiliate-login">
              Login
            </Link>
          </button>
          <button className="btn btn-lg affiliate-signup-btn">
            <Link className="link-router-inverted" to="affiliate-signup">
              Sign up
            </Link>
          </button>
        </div>
      </div>

      {/* How it works setion */}
      <header className="header-design">
        <div className="listar-map-button">
          <div
            className="listar-map-button-text"
            style={{ display: "inline-block", opacity: "1" }}
          >
            <span className="icon-map2">How it Works? </span>
          </div>
        </div>

        {/*  */}
        <div className="footer-wave"></div>
      </header>

      <div className="pset">
        <div className="container">
          <div className="row listar-feature-items">
            <div
              className="col-xs-12 col-sm-6 col-md-4 listar-feature-item-wrapper listar-feature-with-image listar-height-changed"
              data-aos="fade-zoom-in"
              data-aos-group="features"
              data-line-height="25.2px"
            >
              <div className="listar-feature-item listar-feature-has-link">
                <a href="https://enationalelectronics.com" target="_blank"></a>

                <div className="listar-feature-item-inner">
                  <div className="listar-feature-right-border"></div>

                  <div className="listar-feature-block-content-wrapper">
                    <div className="listar-feature-icon-wrapper">
                      <div className="listar-feature-icon-inner">
                        <div>
                          <img
                            alt="Businesses"
                            className="listar-image-icon"
                            src="https://image.flaticon.com/icons/svg/1899/1899582.svg"
                          />
                        </div>
                      </div>
                    </div>

                    <div
                      className="listar-feature-content-wrapper"
                      style={{paddingTop: '0px'}}
                    >
                      <div className="listar-feature-item-title listar-feature-counter-added">
                        <span>
                          <span>01</span>
                          Businesses{" "}
                        </span>
                      </div>

                      <div className="listar-feature-item-excerpt">
                        Start publish listings to show everyone the details and
                        goodies of your establishment.{" "}
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
                <a href="https://enationalelectronics.com/" target="_blank"></a>

                <div className="listar-feature-item-inner">
                  <div className="listar-feature-right-border"></div>

                  <div className="listar-feature-block-content-wrapper">
                    <div className="listar-feature-icon-wrapper">
                      <div className="listar-feature-icon-inner">
                        <div>
                          <img
                            alt="Customers"
                            className="listar-image-icon"
                            src="https://image.flaticon.com/icons/svg/1899/1899506.svg"
                          />
                        </div>
                      </div>
                    </div>

                    <div
                      className="listar-feature-content-wrapper"
                      style={{ paddingTop: '0px' }}
                    >
                      <div className="listar-feature-item-title listar-feature-counter-added">
                        <span>
                          <span>02</span>
                          Customers{" "}
                        </span>
                      </div>

                      <div className="listar-feature-item-excerpt">
                        Easily find interesting places by local experts, save
                        time by checking listing features.{" "}
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
                <a href="https://enationalelectronics.com" target="_blank"></a>

                <div className="listar-feature-item-inner">
                  <div className="listar-feature-right-border"></div>

                  <div className="listar-feature-block-content-wrapper">
                    <div className="listar-feature-icon-wrapper">
                      <div className="listar-feature-icon-inner">
                        <div>
                          <img
                            alt="Feedback"
                            className="listar-image-icon"
                            src="https://image.flaticon.com/icons/svg/1899/1899604.svg"
                          />
                        </div>
                      </div>
                    </div>

                    <div
                      className="listar-feature-content-wrapper"
                      style={{ paddingTop: '0px' }}
                    >
                      <div className="listar-feature-item-title listar-feature-counter-added">
                        <span>
                          <span>03</span>
                          Feedback{" "}
                        </span>
                      </div>

                      <div className="listar-feature-item-excerpt">
                        Visitors discuss listings to share experiences, so
                        businesses get reputation consolidated.{" "}
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
