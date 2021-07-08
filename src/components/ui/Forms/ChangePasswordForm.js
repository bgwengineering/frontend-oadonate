import React from "react";
import { Field, reduxForm } from "redux-form";
import {useDispatch} from 'react-redux';
import {Link} from 'react-router-dom'



// main function
const ChangePasswordForm = ({ pristine, reset, submitting, handleSubmit, history }) => {
  const [value, setValue] = React.useState(0);
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };  

  const dispatch = useDispatch()
  const changePasswordSubmit = values => {
  }

  return (
    <div>
      {/* password */}
      <form onSubmit={handleSubmit(changePasswordSubmit)}>
        <div className="edit-password-fields">
          <label className="mt-3">Current Password</label>
          <div className="password-reg-fields">
            <Field
              name="password"
              component="input"
              type="password"
              className="password-inputs"
            />
          </div>
        </div>
        <div className="edit-password-fields mt-2">
          <label>New Password</label>
          <div className="password-reg-fields">
            <Field
              name="new_password"
              component="input"
              type="password"
              className="password-inputs "
            />
          </div>
        </div>
        <div className="edit-password-fields mt-2">
          <label>Confirm Password</label>
          <div className="password-reg-fields">
            <Field
              name="new_password"
              component="input"
              type="password"
              className="password-inputs"
            />
          </div>
        </div>

        <div className="edit-password-fields mt-4">
          <button
            disabled={pristine || submitting}
            onClick={reset}
            className="cancel-btn mr-4"
          >
            <Link className="link-router-darkcolor" to="/dashboard/profile">
              Cancel
            </Link>
          </button>
          <button
            disabled={pristine || submitting}
            className="profile-form-but"
          >
            Change Password
          </button>
        </div>
      </form>
    </div>
  );
};

export default reduxForm({ form: "changePasswordForm" })(ChangePasswordForm);