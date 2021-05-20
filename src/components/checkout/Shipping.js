import React, { useState, useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { Button } from "@material-ui/core";
import { reduxForm, Field } from "redux-form";
import { updateShippingAddress, singleShippingAddress } from "store/actions/auth/Dashboard";
import { validateShipping,checkoutRenderField } from "util/RenderValidate";

const Shipping = ({ nextPage, previousPage,handleSubmit, id}) => {

  const dispatch = useDispatch();
  useEffect(() => {
    // document.title = 'Ogadonate | Checkout'
    dispatch(singleShippingAddress(`${id}`));
  }, []);
  const [checked, setChecked] = useState(false);

  const updateShipping = (formValues) => {
    dispatch(updateShippingAddress(id, formValues));
    nextPage();
  };
  const ToggleSwitch = ({ checked, onChange, id }) => (
    <div>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        id={id}
      />
    </div>
  );
  return (
    <>
      <ToggleSwitch checked={checked} id="form" onChange={setChecked} />
      <form onSubmit={handleSubmit(updateShipping)}>
        <div className="pl-lg-4">
          {checked ? (
            <>
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group">
                    <label className="profile-control-label" for="input-first_name">
                      First Name<span>*</span>
                    </label>
                    <Field
                      component={checkoutRenderField}
                      type="text"
                      id="input-first_name"
                      name="first_name"
                      className="form-control form-control-alternative"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label className="profile-control-label" for="input-first_name">
                      Last Name<span>*</span>
                    </label>
                    <Field
                      component={checkoutRenderField}
                      type="text"
                      id="input-first_name"
                      name="last_name"
                      className="form-control form-control-alternative"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group focused">
                    <label className="profile-control-label" for="input-address">
                      Address<span>*</span>
                    </label>
                    <Field
                      name="address"
                      component={checkoutRenderField}
                      type="text"
                      className="form-control form-control-alternative"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4">
                  <div className="form-group focused">
                    <label className="profile-control-label" for="input-city">
                      City<span>*</span>
                    </label>
                    <Field
                      component={checkoutRenderField}
                      type="text"
                      id="input-city"
                      name="city_name"
                      className="form-control form-control-alternative"
                    />
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="form-group focused">
                    <label className="profile-control-label" for="input-state">
                      State<span>*</span>
                    </label>
                    <Field
                      component={checkoutRenderField}
                      type="text"
                      id="input-state"
                      name="state_name"
                      className="form-control form-control-alternative"
                    />
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="form-group focused">
                    <label className="profile-control-label" for="input-country">
                      Country<span>*</span>
                    </label>
                    <Field
                      component={checkoutRenderField}
                      type="text"
                      id="input-country"
                      name="country"
                      className="form-control form-control-alternative"
                    />
                  </div>
                </div>
              </div>
            </>
          ) : null}
          <div className="form-group focused">
            <label>
              Shipping Note<span>*</span>
            </label>
            <Field
              component="textarea"
              rows="4"
              name="note"
              className="form-control form-control-alternative about_textarea"
              placeholder="Order Notes:Notes about your order e.g. special notes for delivery..."
            />
          </div>
        </div>
        <hr className="profile_hr my-4" />
        <div className="d-flex justify-content-between">
          <Button className="shipping-btn" type="button" onClick={() => previousPage()}>
            Cancel
          </Button>
          <Button className="shipping-btn" type="submit">
            Next
          </Button>
        </div>
      </form>
    </>
  );
};
Shipping.propTypes = {
  nextPage: PropTypes.func.isRequired,
  previousPage: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  const { singleAddress } = state.userTypeReducer;
  return {
    initialValues: singleAddress,
  };
}

export default connect(mapStateToProps, { updateShippingAddress, singleShippingAddress })(
  reduxForm({ form: "shipping", enableReinitialize: true, validateShipping })(Shipping)
);


// import React, { useState,useEffect } from "react";
// import { connect, useDispatch,useSelector } from "react-redux";
// import PropTypes from "prop-types";
// import { reduxForm,Field } from "redux-form";
// import { updateShippingAddress, singleShippingAddress,fetchShippingAddress } from "store/actions/auth/Dashboard";
// import { validateShipping, renderField } from "util/RenderValidate";


// const Shipping = ({ nextPage, previousPage, history, handleSubmit, pristine, submitting, }) => {
//   const reduxState = useSelector((state) => state.userTypeReducer);
//   const id = reduxState.shippingAddress.map(_id=> _id.id);
//   const dispatch = useDispatch();
//   useEffect(() => {
//    dispatch(singleShippingAddress(`${id}`))
//   }, [])
//  const [checked, setChecked] = useState(false);

//  const updateShipping = (formValues) => {
//   dispatch(updateShippingAddress(id,formValues));
//   nextPage()
// };
//   const ToggleSwitch = ({ checked, onChange, id }) => (
//     <div>
//       <input
//         type="checkbox"
//         checked={checked}
//         onChange={(e) => onChange(e.target.checked)}
//         id={id}
//       />
//     </div>
//   );
//   return (
//     <>
//         <form className="checkout-shipping-form" onSubmit={handleSubmit(updateShipping)}>
//           <div className="form-body">
//             <div className="checkout-shipping-header">
//               <p className="shipping-header">Shipping Details</p>
//             </div>
//             <div className="shipping-show">
//               <ToggleSwitch checked={checked} id="form" onChange={setChecked} />
//               <span className="shipping-msg">Ship to a different address?</span>
//             </div>
//             {checked ? (
//               <>
//                 <div className="user-names">
//                 <Field type="text" name="first_name" component={renderField} className="input-first" />
//                 <Field type="text" name="last_name" component={renderField} className="input-last" />
//                 </div>
//                 <div className="address">
//             <label className="label"> State address * </label>
//             <Field
//               type="text"
//               placeholder="House number and Street name"
//               component={renderField}
//               className="input-address"
//               name="address"
//             />
//           </div>
//           <div className="city-zip">
//           <label className="label"> Town / City * </label>
//           <div className="inputs">
//             <Field
//               className="city"
//               type="text"
//               placeholder="town/city"
//               name="city_name"
//               component={renderField}
//             />
//             <Field
//               className="zip"
//               type="text"
//               placeholder="Postcode/Zip"
//               component={renderField}
//               name="zip"
//             />
//           </div>
//         </div>
//                 <div className="state-label"> State * </div>
//                 <Field
//               className="zip"
//               type="text"
//               placeholder="Postcode/Zip"
//               component={renderField}
//               name="state_name"
//             />
//                 <Field
//               className="zip"
//               type="text"
//               placeholder="Postcode/Zip"
//               component={renderField}
//               name="country"
//             />
//               </>
//             ) : null}
//             <input
//               className="ordernote"
//               type="textarea"
//               placeholder="Order Notes:Notes about your order e.g. special notes for delivery"
//               component="textarea"
//               name="note"
//             />
//           </div>
//         <div className="next-prev-cart">
//           <button className="back-to-cart-btn" onClick={() => history.push("/my-cart")}>
//             Back to cart
//           </button>
//           <div className="next-prev">
//             <button className="prev-submit-btn" onClick={() => nextPage()}>
//               Previous
//             </button>
//             <button className="prev-submit-btn" type="submit">
//               Save
//             </button>
//           </div>
//         </div>
//       </form>
//     </>
//   );
// };
// Shipping.propTypes = {
//   nextPage: PropTypes.func.isRequired,
//   previousPage: PropTypes.func.isRequired,
// };

// function mapStateToProps(state) {
//   const { singleAddress} = state.userTypeReducer;
//   return {
//       initialValues: singleAddress,
//   }
// }

// export default connect(
//     mapStateToProps,
//     {updateShippingAddress, singleShippingAddress }
// )(reduxForm({ form: "shipping", enableReinitialize: true ,validateShipping})(Shipping));