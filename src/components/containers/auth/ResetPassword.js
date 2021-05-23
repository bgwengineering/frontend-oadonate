import React, { useState } from 'react'
import { Field, reduxForm } from 'redux-form'
import { useDispatch, useSelector } from 'react-redux'
import { reset_password } from "store/actions/auth/Auth"
import { Redirect } from 'react-router-dom'
import { renderField, validate } from 'util/RenderValidate';
import { ReactComponent as LoaderSpinn } from 'assets/images/244.svg'



const ResetPassword = ({ handleSubmit, submitting, pristine }) => {
    const dispatch = useDispatch();

    const isLoading = useSelector(state => state.authReducer.loading);
    const [sent, setSent] = useState(false);

    const onSubmit = formValues => {
        dispatch(reset_password(formValues));
        setTimeout(() => {
            setSent(true);
        }, 3000);
    };
    if (sent) {
        return <Redirect to='/' />
    };

    return (
        <div className="justify-content-center d-flex flex-column">

        <form onSubmit={handleSubmit(onSubmit)}>
            <>
            {isLoading ? <div className='d-flex justify-content-center'><LoaderSpinn  />
        <LoaderSpinn />
        <LoaderSpinn /></div>
        : null}
           <fieldset >
            <Field component={renderField} label="Email" name='email' type='email'/> 
            </fieldset>     
            <button disabled= {pristine || submitting} className="auth-button mt-3">Reset</button>    
            </>
        </form>   
        </div>
    );
}

export default reduxForm({
    form: 'resetForm',
    validate,
})(ResetPassword)