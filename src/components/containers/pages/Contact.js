import React from "react";
import { FcCallback } from "react-icons/fc";
import { GoMail } from "react-icons/go";
import { GoLocation } from "react-icons/go";

const Contact = () => {
  return (
    <div className="container mt-5">
      <div className="col-md-7 col-lg-9 mx-auto contact-main">
        <div className="address-sect">
          <div className="d-flex justify-content-center align-items-center address-subdiv">
            <h5>Contact</h5>
          </div>

          <address className="p-l-20 mt-3">
            <p>
              <span className="address-color mr-2 ">
                <GoLocation />
              </span>
              17685 69th Place, North, Maple Grove Minnesota, 55311, USA
              <p className="mt-3">
                <span className="address-color mr-2">
                  <GoLocation />
                </span>
                24 Valley Estate Dopemu Lagos, Nigeria
              </p>
            </p>

            <p>
              <span className="email-color">
                <GoMail />
              </span>{" "}
              customer@ogadonate.com
            </p>
            <p>
              <span className="tel-color">
                <FcCallback />
              </span>{" "}
              +16514045620{" "}
            </p>
            <p>
              <span className="tel-color">
                <FcCallback />
              </span>
              +2349065705998{" "}
            </p>
          </address>
        </div>
      </div>
    </div>
  );
};

export default Contact;
