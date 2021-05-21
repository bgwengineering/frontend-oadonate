import React, {useState} from "react";
import { Redirect } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import {login} from "../../store/actions/auth/Auth"
import { renderField, validate, hiddenField } from 'util/RenderValidate';
import { BiShow } from 'react-icons/bi';
import { BiHide } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';


const LoginForm = ({handleSubmit, submitting, pristine}) => {
     const dispatch = useDispatch();
     const [isPasswordShown, setIsPasswordShown] = useState(false)
   
     const authState = useSelector(state=>state.authReducer);
     const {isAuthenticated} = authState;

    const onSubmit = formValues => {
        dispatch(login(formValues))
    };
    if (isAuthenticated){
      return <Redirect to ='/checkout' />
    };
    const handleShowPassword = () => {
        setIsPasswordShown(!isPasswordShown)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <>
           <fieldset>
            <Field component={renderField} label="Email" name='email' type='email' className="form-control form-control-alternative"/> 
            </fieldset>     
            <fieldset className='d-flex form-eye-field'>    
            <Field type={isPasswordShown ? 'text' :'password'} name="password"  component={renderField} label='password' className="form-control form-control-alternative"/>     
             <span className='password-icon' onClick={handleShowPassword}><BiShow /></span>
             <span className='password-icon' onClick={handleShowPassword} style={{display:isPasswordShown ? 'none' : 'block' }}><BiHide /></span>
            </fieldset>
            <button disabled= {pristine || submitting} className="auth-button mt-3">Sign In</button>    
            </>
        </form>   
    );
}

export default reduxForm({
    form:'LoginForm',
    validate,
})(LoginForm)
