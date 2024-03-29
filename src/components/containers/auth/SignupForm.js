import React, { useState } from "react";
import { Field, reduxForm } from "redux-form";
import { useDispatch } from "react-redux";
import { signup } from "store/actions/auth/Auth";
import { renderField, validate } from "util/RenderValidate";
import { BiShow } from "react-icons/bi";
import { BiHide } from "react-icons/bi";

const SignupForm = ({ handleSubmit, submitting, pristine }) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const handleShowPassword = () => {
    setIsPasswordShown(!isPasswordShown);
  };

  const dispatch = useDispatch();
  const submit = values => {
    dispatch(signup(values));
  };
  

  return (
    <form onSubmit={handleSubmit(submit)}>
      <>
        <fieldset>
          <Field
            component={renderField}
            className="input"
            label="First Name"
            name="first_name"
            type="text"
          />
        </fieldset>

        <fieldset>
          <Field
            component={renderField}
            className="input"
            label="Last Name"
            name="last_name"
            type="text"
          />
        </fieldset>

        <fieldset>
          <Field
            component={renderField}
            className="input"
            label="Email"
            name="email"
            type="email"
          />
        </fieldset>

        <fieldset>
          <Field
            component={renderField}
            className="input"
            label="Referral Code(Optional)"
            name="affiliate_user_code"
            type="text"
          />
        </fieldset>

        <fieldset className="form-eye-field">
          <Field
            type={isPasswordShown ? "text" : "password"}
            className="input"
            name="password"
            component={renderField}
            label="password"
          />

          <span>
            <span
            className="password-icon"
            onClick={handleShowPassword}
            style={{ display: isPasswordShown ? "none" : "block" }}
            >
            <BiHide />
          </span>
          <span onClick={handleShowPassword} className="password-icon">
            <BiShow />
          </span>
            
            
          </span>
        </fieldset>
        
        <button
          disabled={pristine || submitting}
          className="auth-button mt-2"
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth"
            });
          }}
          >
          Sign Up
        </button>
      </>
    </form>
  );
};

export default reduxForm({
  form: "SignupForm",
  validate
})(SignupForm);
