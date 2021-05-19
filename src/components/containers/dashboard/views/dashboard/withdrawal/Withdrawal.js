import React from "react";
import { Field, reduxForm } from "redux-form";
import { useDispatch } from "react-redux";
import {Button} from '@material-ui/core'


const WithdrawalForm = ({ handleSubmit, pristine, reset, submitting }) => {
  const dispatch = useDispatch();
  const Submit = (formValues) => {
   
  };

  return (
    <form onSubmit={handleSubmit(Submit)} className='personal-form-container mb-5'>
      <h6>Select the payment method you want to receive your funds</h6>
      <div className='all-fields'>
      <div>
        <label className='mt-3'>Paypal account</label>
        <div className='personal-reg-fields'>
          <Field name="phone" component="input" type="text" className='field-inputs'/>
        </div>
      </div>
      <div>
        <label>Confirm email</label>
        <div className='personal-reg-fields'>
          <Field name="address" component="input" type="text" className='field-inputs'/>
        </div>
      </div>
     
      <div className='mt-4'>
        <button disabled={pristine || submitting} className='personal-form-but'>
          Submit
        </button>
      </div>
      <div>
        <label>Bank Details</label>
        <div className='personal-reg-fields'>
          <Field name="address" component="textarea" className='field-inputs'/>
        </div>
        <div className='mt-4'>
        <button disabled={pristine || submitting} className='personal-form-but'>
          Submit
        </button>
      </div>
      </div>
     
      </div>
    </form>
  );
};

// Decorate with redux-form
export default reduxForm({
  form: "withdrawalForm",
})(WithdrawalForm);
