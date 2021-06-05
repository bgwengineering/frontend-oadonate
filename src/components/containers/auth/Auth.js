import React, { useEffect } from "react";
import { get } from "axios";
import { FaGoogle, FaTwitter, FaFacebook, FaLinkedinIn } from "react-icons/fa";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
import { NavLink } from "react-router-dom";

const AuthLayout = () => {
  useEffect(() => {
    const signUpButton = document.querySelector("#signUp");
    const container = document.querySelector("#auth-form-container");
    const signInButton = document.querySelector("#signIn");
    const signinSmscr = document.querySelector("#signinHidden");

    signUpButton.addEventListener("click", () => {
      container.classList.add("right-panel-active");
    });
    signinSmscr.addEventListener("click", () => {
      container.classList.remove("right-panel-active");
    });

    signInButton.addEventListener("click", () => {
      container.classList.remove("right-panel-active");
    });
  });

  const continueWithGoogle = async () => {
    try {
      const res = await get(
        "https://ogadonate-api.herokuapp.com/api/auth/o/google-oauth2/?redirect_uri=http://localhost:3000/google"
      );

      window.location.replace(res.data.authorization_url);
    } catch (err) {}
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  return (
    <>
      <div className="auth-container" id="auth-form-container">
        {/* sign up */}
        <div id="lay-hidden">
          <h1>Welcome Back!</h1>
          <p className="auth-p-text">
            To keep connected with us please login with your personal info
          </p>
          <button className="auth-button" id="signinHidden">
            Sign In
          </button>
        </div>

        <div className="form-authentication-container sign-up-container">
          <div className="create-account">
            <div id="choose-signup">
              <h1>Create Account</h1>
              <span>Using any social link</span>
              <div className="social-container">
                <button className="social" onClick={continueWithGoogle}>
                  <FaGoogle />
                </button>
                <button className="social" onClick={continueWithGoogle}>
                  <FaTwitter />
                </button>
                <button className="social" onClick={continueWithGoogle}>
                  <FaFacebook />
                </button>
                <button className="social" onClick={continueWithGoogle}>
                  <FaLinkedinIn />
                </button>
              </div>
              <span className="soc-span">
                or use your email for registration
              </span>
              <SignupForm />
            </div>
          </div>
        </div>

        {/* sign in */}
        <div className="form-authentication-container sign-in-container">
          <div className="login-details">
            <h1>Sign in</h1>
            <span className="soc-span">Using any social link</span>
            <div className="social-container">
              <button className="social" onClick={continueWithGoogle}>
                <FaGoogle />
              </button>
              <button className="social" onClick={continueWithGoogle}>
                <FaTwitter />
              </button>
              <button className="social" onClick={continueWithGoogle}>
                <FaFacebook />
              </button>
              <button className="social" onClick={continueWithGoogle}>
                <FaLinkedinIn />
              </button>
            </div>
            <span>or use your account</span>
            <LoginForm />
            <NavLink
              to="/reset-password"
              onClick={scrollToTop}
              className="mt-3 forgot-password"
            >
              Forgot your password?
            </NavLink>
          </div>
        </div>

        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p className="auth-p-text">
                To keep connected with us please login with your personal info
              </p>
              <button className="auth-login-button" id="signIn">
                Sign In
              </button>
            </div>

            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p className="auth-p-text">
                Enter your personal details and start journey with us
              </p>
              <div className="auth_button_container">
                <button className="auth-signup-button" id="signUp">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthLayout;
