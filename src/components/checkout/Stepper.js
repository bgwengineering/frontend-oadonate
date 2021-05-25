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
              <p
                className={
                  page === 1 ? "shipping-active" : "shipping"
                }
              >
                Shipping
            </p>
            </div>
          </div>  
          

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
              <p
                className={
                  page === 2 ? "order-active" : "order"
                }
              >
              Order
            </p>
            </div>
          </div>  
          



          </div>
      
      ) : (
        // <div className={page === 2 ? "scroll-3-active" : "scroll-3"}>
        //   <span className={page === 2 ? "scroll-3-heading-active" : "scroll-3-heading"}>2</span>
        //   <p className={page === 2 ? "order-payment-active" : "order-payment"}>Order & Payment</p>
        // </div>

        // <div className={page === 2 ? "outflow-scroll-active" : "outflow-scroll"}> </div>

        <div className="currentUser scroll-bar-not-loggedin">
          <div className="inflow-scroll-active"></div>

          {/* login scroll */}
          <div className={page === 1 ? "scroll-login-active" : null}>
            <span className="scroll-login-heading-active">1</span>
            <p className="login">Login</p>
          </div>

          {/* Shipping Scroll */}
          <div className={page === 1 ? "scroll-2-active" : "scroll-2"}>
            <span
              className={
                page === 1 ? "scroll-2-heading-active" : "scroll-2-heading"
              }
            >
              1
            </span>
            <p className={page === 1 ? "shipping-active" : "shipping"}>
              Shipping
            </p>
          </div>

          {/* order scroll */}
          <div className={page === 2 ? "scroll-3-active" : "scroll-3"}>
            <span
              className={
                page === 2 ? "scroll-3-heading-active" : "scroll-3-heading"
              }
            >
              2
            </span>
            <p
              className={page === 2 ? "order-payment-active" : "order-payment"}
            >
              Order & Payment
            </p>
          </div>

          <div
            className={page === 2 ? "outflow-scroll-active" : "outflow-scroll"}
          >
            {" "}
          </div>
        </div>
      )}
    </div>
  );
}
