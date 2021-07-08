import React, { useState } from "react";
import { Field, reduxForm } from "redux-form";
import { useDispatch} from "react-redux";
import { reset_password } from "store/actions/auth/Auth";
import { Redirect } from "react-router-dom";
import { renderField, validate } from "util/RenderValidate";


const ResetPassword = ({ handleSubmit, submitting, pristine }) => {
  const dispatch = useDispatch();
  const [sent, setSent] = useState(false);
    
  const onSubmit = formValues => {
    dispatch(reset_password(formValues));
    setTimeout(() => {
      setSent(true);
    }, 3000);
  };

  if (sent) {
    return <Redirect to="/" />;
  }

  return (
    <div className="justify-content-center align-items-center d-flex flex-column mt-5">
      <form onSubmit={handleSubmit(onSubmit)}>
        <>
           <fieldset>
                <Field
                    component={renderField}
                     label="Email"
                     name="email"
                     type="email"
                     className='reset-password-input'
                    />
            </fieldset>
          <button
            disabled={pristine || submitting}
            className="auth-button mt-3"
          >
            Reset
          </button>
        </>
      </form>
    </div>
  );
};

export default reduxForm({
  form: "resetForm",
  validate
})(ResetPassword);
