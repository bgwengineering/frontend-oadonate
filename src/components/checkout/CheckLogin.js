import React, {useState} from "react";
import { Redirect } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import {login} from "../../store/actions/auth/Auth"
import { renderField, validate, hiddenField } from 'util/RenderValidate';
import { BiShow } from 'react-icons/bi';
import { BiHide } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import Button  from '@material-ui/core/Button';


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
      <div className="container-fluid mt--7">
        <div className="row">
          <div className="col-xl-7 order-xl-1">
            <div className="card shadow">
              <div className="card-header bg-white border-0"></div>
              <div className="card-body">
                <h6 className="heading-small text-muted all-heading mb-4">
                  Sign In
                </h6>
                <hr className="my-4" />
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="pl-lg-2">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="form-group">
                          <label
                            className="profile-control-label"
                            for="input-first_name"
                          >
                           Email<span>*</span>
                          </label>
                          <Field
                            component="input"
                            type="text"
                            id="input-first_name"
                            name="first_name"
                            className="form-control form-control-alternative"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="form-group">
                          <label
                            className="profile-control-label"
                            for="input-first_name"
                          >
                           Password<span>*</span>
                          </label>
                          <Field
                            component="input"
                            type="text"
                            id="input-first_name"
                            name="first_name"
                            className="form-control form-control-alternative"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr className="profile_hr my-4" />
                  <div className="d-flex flex-end">
                    <Button
                      className="shipping-btn"
                      type="submit"
                      disabled={pristine || submitting}
                    >
                     Login
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default reduxForm({
    form:'LoginForm',
    validate,
})(LoginForm)
