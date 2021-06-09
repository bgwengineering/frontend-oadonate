import React, { useState } from "react";
import { Field, reduxForm } from "redux-form";
import { useDispatch, useSelector } from "react-redux";
import { login } from "store/actions/auth/Auth";
import { Redirect } from "react-router-dom";
import { renderField, validate } from "util/RenderValidate";
import { BiShow } from "react-icons/bi";
import { BiHide } from "react-icons/bi";

const LoginForm = ({ handleSubmit, submitting, pristine }) => {
  const dispatch = useDispatch();
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  const authState = useSelector(state => state.authReducer);
  const { isAuthenticated} = authState;
  


  const onSubmit = formValues => {
    dispatch(login(formValues));
  };
  
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  const handleShowPassword = () => {
    setIsPasswordShown(!isPasswordShown);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <>
        <fieldset>
          <Field
            component={renderField}
            label="Email"
            name="email"
            type="email"
            className='input'
          />
        </fieldset>
        <fieldset className="d-flex form-eye-field">
          <Field
            type={isPasswordShown ? "text" : "password"}
            name="password"
            component={renderField}
            label="password"
            className='input'
          />
          <span className="password-icon" onClick={handleShowPassword}>
            <BiShow />
          </span>
          <span
            className="password-icon"
            onClick={handleShowPassword}
            style={{ display: isPasswordShown ? "none" : "block" }}
          >
            <BiHide />
          </span>
        </fieldset>
        <button disabled={pristine || submitting} className="auth-button mt-3">
          Sign In
        </button>
      </>
    </form>
  );
};

export default reduxForm({
  form: "LoginForm",
  validate
})(LoginForm);
