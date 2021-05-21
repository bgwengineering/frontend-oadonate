import React from "react";
import { Field, reduxForm } from "redux-form";
import {useDispatch} from 'react-redux';
import { updatePersonalProfile } from "store/actions/auth/Dashboard";
import {Link} from 'react-router-dom'



// main function
const EditTabs = ({ pristine, reset, submitting, handleSubmit, history }) => {
  const [value, setValue] = React.useState(0);
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  const dispatch = useDispatch()

  const editProfileSubmit = values => {
    dispatch( updatePersonalProfile(values))
  }

  return (
    <div>
      {/* password */}
        <form onSubmit={handleSubmit(editProfileSubmit)}>
        <div>
          <label className="mt-3">Current Password</label>
          <div className="profile-reg-fields ">
            <Field
              name="password"
              component="input"
              type="password"
              className="password-inputs"
            />
          </div>
        </div>
        <div>
          <label>New Password</label>
          <div className="profile-reg-fields">
            <Field
              name="new_password"
              component="input"
              type="password"
              className="password-inputs "
            />
          </div>
        </div>
        <div className="mt-4">
          <button
            disabled={pristine || submitting}
            onClick={reset}
            className="cancel-btn mr-2"
            >
              <Link className='link-router-inverted' to='/dashboard/profile'>
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

export default reduxForm({ form: "editForm" })(EditTabs);
