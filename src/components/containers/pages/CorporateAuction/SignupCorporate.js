import React, { useState } from "react";
import SignUpCorporateForm from "./SignUpCorporateForm";
import { Field,reduxForm } from "redux-form";
import { corporate } from 'store/actions/auth/Corporate';
import { useDispatch,useSelector } from 'react-redux';


const SignupCorporate = ({ history,handleSubmit, pristine, submitting }) => {
  const [checked, setChecked] = useState({
    ngoChecked: true,
    corporateChecked: false,
    religiousChecked: false,
    auctioneerChecked: false
  });

  const {
    ngoChecked,
    corporateChecked,
    auctioneerChecked,
    religiousChecked
  } = checked;
  const dispatch = useDispatch()
  const submitted = useSelector(state=>state.corperateReducer.companySuccess)
  const Submit = formValues => {
    dispatch(corporate(formValues));  
  }
if(submitted){
  setTimeout(()=>{
  history.push("/corperate-success")
  },3000)
}

  // toggle switch
  const ToggleCorporate = () => (
    setChecked({...checked,
      ngoChecked: false,
      corporateChecked: true,
      religiousChecked: false,
      auctioneerChecked: false  })
  );
  const ToggleNgo = () => (
    setChecked({...checked,
      ngoChecked: true,
      corporateChecked: false,
      religiousChecked: false,
      auctioneerChecked: false  })
    
  );
  const ToggleReligious = () => (
    setChecked({...checked,
      ngoChecked: false,
      corporateChecked: false,
      religiousChecked: true,
      auctioneerChecked: false  })
  );
  const ToggleAuctioneer = () => (
    setChecked({...checked,
      ngoChecked: false,
      corporateChecked: false,
      religiousChecked: false,
      auctioneerChecked: true  })
  );

  return (
    <div>   
      {/* form category */}
      <form onSubmit={handleSubmit(Submit)}>
        <div className="corporate-category">
          <span className="d-flex ml-3">
            <Field
              id="form"
              onClick={ToggleNgo}
              value="NGO"
              name="company_type"
              component="input"
              type="radio"
            />
            <span className="shipping-msg ml-2">NGO</span>
          </span>

          <span className="d-flex ml-3">
            <Field
              id="form-ui"
              onClick={ToggleCorporate}
              value="Corporate"
              name="company_type"
              component="input"
              type="radio"
            />
            <span className="shipping-msg ml-2">Corporate</span>
          </span>

          <span className="d-flex ml-3">
            <Field
              id="form-rel"
              onClick={ToggleReligious}
              value="Religious Organisation"
              name="company_type"
              component="input"
              type="radio"
            />
            <span className="shipping-msg ml-2">Religious Organisation</span>
          </span>

          <span className="d-flex ml-3">
            <Field
              id="form-auct"
              component="input"
              onClick={ToggleAuctioneer}
              value="Auctioneer"
              name="company_type"
              type="radio"
            />
            <span className="shipping-msg ml-2">Auctioneer</span>
          </span>
        </div>
        <div className="card-header bg-white border-0">
          <div className="row justify-content-center align-items-center corporate-form-header w-100">
            <h3 className="all-heading mb-0 mx-auto text-capitalize">
              Create Your {}
              {ngoChecked
                ? "NGO"
                : corporateChecked
                  ? "Corperate"
                  : religiousChecked
                    ? "Religious"
                    : auctioneerChecked
                      ? "Auctioneer"
                      : "NGO"} {}
              Account
              </h3>
          </div>
        </div>
        {ngoChecked && (
          <SignUpCorporateForm pristine={pristine} submitting={submitting} />
        )}
        {corporateChecked && (
          <SignUpCorporateForm pristine={pristine} submitting={submitting} />
        )}
        {religiousChecked && (
          <SignUpCorporateForm pristine={pristine} submitting={submitting} />
        )}
        {auctioneerChecked && <SignUpCorporateForm pristine={pristine} submitting={submitting}/>}
      </form>
      </div>
   
  );
};

export default reduxForm({ form: "corporateSignup" })(SignupCorporate);
