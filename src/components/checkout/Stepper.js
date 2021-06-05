import React from "react";

export default function Stepper({ page, currentUser }) {
  return (
    <div className="checkout-scroll">
      {currentUser ? (
        // scroll signed
        <div className="scroll-bar-signedin  d-flex">
          <div className="scroll-resp d-flex">
            <div
              className={
                page === 1 ? "inflow-scroll-active-2" : "inflow-scroll-2"
              }
            ></div>
            <div className=" d-flex flex-column justify-content-center">
              <div
                className={
                  page === 1
                    ? "scroll-2-active d-flex justify-content-center align-items-center"
                    : "scroll-2 d-flex justify-content-center align-items-center"
                }
              >
                <span
                  className={
                    page === 1 ? "scroll-2-number-active" : "scroll-2-heading"
                  }
                >
                  1
                </span>
              </div>
              <p className={page === 1 ? "shipping-active" : "shipping"}>
                Shipping
              </p>
            </div>
          </div>

          {/* order */}
          <div className="scroll-resp scroll-to-order d-flex">
            <div
              className={
                page === 2 ? "inflow-scroll-active-3" : "inflow-scroll-3"
              }
            ></div>
            <div className="d-flex flex-column justify-content-center">
              <div
                className={
                  page === 2
                    ? "scroll-3-active d-flex justify-content-center align-items-center"
                    : "scroll-3 d-flex justify-content-center align-items-center"
                }
              >
                <span
                  className={
                    page === 2 ? "scroll-3-number-active" : "scroll-3-heading"
                  }
                >
                  2
                </span>
              </div>
              <p className={page === 2 ? "order-active" : "order"}>Order</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="scroll-bar-unsigned d-flex">
          {/* login */}
          <div className="scroll-resp d-flex">
            <div
              className={page === 1 ? "inflow-scroll-active-1" : "null"}
            ></div>
            <div className=" d-flex flex-column justify-content-center">
              <div
                className={
                  page === 1
                    ? "scroll-1-active d-flex justify-content-center align-items-center"
                    : "scroll-1 d-flex justify-content-center align-items-center"
                }
              >
                <span
                  className={
                    page === 1 ? "scroll-1-number-active" : "scroll-1-heading"
                  }
                >
                  1
                </span>
              </div>
              <p className={page === 1 ? "login-active" : "login"}>Login</p>
            </div>
          </div>

          {/* Shipping */}
            <div className="scroll-resp scroll-to-login d-flex">
            <div
              className={
                page === 2 ? "inflow-scroll-active-2" : "inflow-scroll-2"
              }
            ></div>
            <div className=" d-flex flex-column justify-content-center">
              <div
                className={
                  page === 2
                    ? "scroll-2-active d-flex justify-content-center align-items-center"
                    : "scroll-2 d-flex justify-content-center align-items-center"
                }
              >
                <span
                  className={
                    page === 2 ? "scroll-2-number-active" : "scroll-2-heading"
                  }
                >
                  2
                </span>
              </div>
              <p className={page === 2 ? "shipping-active" : "shipping"}>
                Shipping
              </p>
            </div>
          </div>

          {/* order */}
          <div className="scroll-resp scroll-to-shipping d-flex">
            <div
              className={
                page === 3 ? "inflow-scroll-active-3" : "inflow-scroll-3"
              }
            ></div>
            <div className="d-flex flex-column justify-content-center">
              <div
                className={
                  page === 3
                    ? "scroll-3-active d-flex justify-content-center align-items-center"
                    : "scroll-3 d-flex justify-content-center align-items-center"
                }
              >
                <span
                  className={
                    page === 3 ? "scroll-3-number-active" : "scroll-3-heading"
                  }
                >
                  3
                </span>
              </div>
              <p className={page === 3 ? "order-active" : "order"}>Order</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
