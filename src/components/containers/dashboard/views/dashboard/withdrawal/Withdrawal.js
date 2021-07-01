import React from "react";
import { Field, reduxForm } from "redux-form";
import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom';


const WithdrawalForm = ({ handleSubmit, pristine, reset, submitting }) => {
  const dispatch = useDispatch();
  const Submit = (formValues) => {
   
  };

  const withdrawal = () => {
    
  }

  return (
    <div>
      <form className='withdrawal-form-container mb-5' onSubmit={handleSubmit(withdrawal)}>
        <div className='password-reg-heading text-white text-center'>
          <h4 className='pt-4 pb-4 text-uppercase'>Withdrawal Request</h4>
        </div>
        <div className="edit-withdrawal-fields">
          <label className="mt-3">Account Number</label>
          <div className="withdrawal-reg-fields">
            <Field
              name="password"
              component="input"
              type="text"
              className="withdrawal-inputs"
            />
          </div>
        </div>
        <div className="edit-withdrawal-fields mt-3">
          <label>Account Name</label>
          <div className="withdrawal-reg-fields">
            <Field
              name="new_password"
              component="input"
              type="text"
              className="withdrawal-inputs"
            />
          </div>
        </div>
        <div className="edit-password-fields mt-3">
          <label>Bank Name</label>
          <div className="withdrawal-reg-fields">
            <Field
              name="new_password"
              component="input"
              type="password"
              className="withdrawal-inputs"
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
           Withdrawal Request
          </button>
        </div>
      </form>
    </div>
  );
};

// Decorate with redux-form
export default reduxForm({
  form: "withdrawalForm",
})(WithdrawalForm);
