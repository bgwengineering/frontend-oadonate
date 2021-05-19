import React from "react";
import {Field, reduxForm} from 'redux-form'
import {useDispatch} from 'react-redux'
import { companyProfile } from "store/actions/auth/Dashboard";

const CompanyForm = ({handleSubmit, pristine, reset, submitting}) => {
   const dispatch = useDispatch()
   const Submit = (formValues) => {
     dispatch (companyProfile(formValues))
   }
 
  return (
      <form onSubmit={handleSubmit(Submit)} className='coorporate-form-container mb-5'>
      <div className = 'coorporate-reg-heading text-white text-center'>
      <h4 className='pt-4 pb-4 text-uppercase'>Company registration form</h4>

      </div>
      <div className='all-fields'>
      <div>
        <label className='mt-3'>Phone</label>
        <div className='coorporate-reg-fields'>
          <Field name="phone" component="input" type="text" className='field-inputs'/>
        </div>
      </div>
      <div>
        <label>Adress</label>
        <div className='coorporate-reg-fields'>
          <Field name="address" component="input" type="text" className='field-inputs'/>
        </div>
      </div>
      <div className='d-flex mt-3'>
        <label className='mr-3'>Contact Method:</label>
        <div >
          <label >
            <Field
              name="contact_method"
              component="input"
              type="radio"
              value="Phone Call"
              className='field-inputs mr-2 '
            />
            Phone Call
          </label>
          <label  className='ml-2'>
            <Field
              name="contact_method"
              component="input"
              type="radio"
              value="Send Email"
              className='mr-2'
            />
            Email
          </label>
        </div>
      </div>
      <div className='d-flex mt-3'>
        <label className='mr-3'>Gender:</label>
        <div>
          <label className='mr-3'>
            <Field name="gender" component="input" type="radio" value="Male" className='mr-2' />
            Male
          </label>
          <label>
            <Field
              name="gender"
              component="input"
              type="radio"
              value="Female"
              className='mr-2'
            />
            Female
          </label>
        </div>
      </div>
      <div>
        <label className='mt-2'>Country</label>
        <div>
          <Field name="country" component='input' />
       
        </div>
      </div>
      <div className='coorporate-reg-fields'>
        <label className='mt-4'>City</label>
        <div>
          <Field name="city" component="input" type="text" className='field-inputs'/>
        </div>
      </div>
      <div>
        <label>State</label>
        <div className='coorporate-reg-fields'>
          <Field name="state" component="input" type="text" className='field-inputs' />
        </div>
      </div>
      <div className='mt-4'>
        <button disabled={pristine || submitting} onClick={reset} className='coorporate-form-but mr-3'>
          Clear Values
        </button>
        <button disabled={pristine || submitting} className='coorporate-form-but '>
          Submit
        </button>
      </div>
      </div>
    </form>
  );
};

export default reduxForm({
   form: 'companyForm'
})(CompanyForm)
