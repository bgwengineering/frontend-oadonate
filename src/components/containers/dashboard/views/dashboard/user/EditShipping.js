// import React, { useEffect, useState } from "react";
// import { connect, useDispatch,useSelector } from "react-redux";
// import { reduxForm,Field } from "redux-form";
// import { getSingleBillngAddress, updateBillingAddress } from "../../store/actions/auth/Dashboard";
// import { validateBilling, renderField } from '../../util/RenderValidate';
// import PropTypes from "prop-types";

// const Billing = ({ nextPage, handleSubmit, pristine, submitting,singleAddress, history}) => {
//   const reduxState = useSelector((state) => state.authReducer);
//   const user = reduxState.isAuthenticatedl;
//   const id = reduxState.isAuthenticated
//   // const id = reduxState.billingAddress.map(_id=> _id.id);
//   const dispatch = useDispatch();

// //   useEffect(() => {
// //     dispatch(getSingleBillngAddress(`${id}`));
// //   }, []);

// //   const updateBilling = (formValues) => {
// //     const _id = id
// //     dispatch(updateBillingAddress(id,formValues));
// //     nextPage()
// // };

//     return (
//       <>
//         <form className="checkout-billing-form" onSubmit={handleSubmit(updateBilling)}>
//           <div className="form-body">
//             <div className="checkout-billing-header">
//               <p className="billing-header">Billing Details</p>
//             </div>
//             <div className="username-container">
//             <Field
//               type="text"
//               name="first_name"
//               component={renderField}
//               placeholder="First Name"
//               className="input-firstname"
//               />

//             <Field
//               type="text"
//               name="last_name"
//               component={renderField}
//               placeholder="Last Name"
//               className="input-lastname"
//             />
//             </div>

//         <div className="address">
//           <label className="label"> Address * </label>
//           <Field
//             type="text"
//             placeholder="House number and Street name"
//             component={renderField}
//             className="input-address"
//             name="street_address"
//           />
//         </div>
//         <div className="city-zip">
//           <label className="label"> Town / City * </label>
//           <div className="inputs">
//             <Field
//               className="input-city"
//               type="text"
//               placeholder="town/city"
//               name="city_name"
//               component={renderField}
//             />
//             <Field
//               className="input-zip"
//               type="text"
//               placeholder="Postcode/Zip"
//               component={renderField}
//               name="zip"
//             />
//           </div>
//         </div>
//             <div className="state-label">
//               <label> State * </label>
//             </div>

//             <Field className="select-state" name="state_name" component="select">
//           <option> Select State</option>
//           <option value="lagos"> Lagos </option>
//           <option value="ogun"> Ogun </option>
//           <option value="oyo"> Oyo </option>
//           <option value="kebbi"> Kebbi </option>
//         </Field>
//         <div className="phone-email">
//           <Field
//             className="phone-input"
//             type="text"
//             placeholder="Phone Number"
//             component={renderField}
//             name="phone"
//           />
//           <Field
//             className="email-input"
//             type="text"
//             placeholder={user}
//             component={renderField}
//             disabled
//             name="none"
//           />
//         </div>

//         <div className="store-title">
//           <label> Soupe Store Close You * </label>
//         </div>
//         <div className="store-close">
//           <Field className="options" name="store_name" component="select">
//             <option>Select Store</option>
//             <option value="Ikeja"> Soupe Store, Ikeja </option>
//             <option value="Lekki"> Soupe Store, Lekki </option>
//             <option value="Ogba"> Soupe Store, Ogba </option>
//           </Field>
//         </div>
//           </div>
//         <div className="next-prev">
//           <button className="next-submit-btn" type="submit">
//             SAVE
//           </button>
//         </div>
//         </form>
//       </>
//     );
// }
// Billing.propTypes = {
//   nextPage: PropTypes.func.isRequired,
//   updateBilling: PropTypes.func.isRequired
// };

// function mapStateToProps(state) {
//   const { singleAddress} = state.authReducer;
//   return {
//       initialValues: singleAddress,
//   }
// }

// export default connect(
//     mapStateToProps,
//     {getSingleBillngAddress, updateBillingAddress }
// )(reduxForm({ form: "billing", enableReinitialize: true ,validateBilling})(Billing));

import React, { useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { reduxForm, Field } from "redux-form";
import { saveBillingAddress } from "store/actions/auth/Dashboard";
import {
  validateBilling,
  renderField,
  checkoutRenderField
} from "util/RenderValidate";
import PropTypes from "prop-types";

const DashboardBilling = ({ handleSubmit, pristine, submitting }) => {
  const dispatch = useDispatch();
  const onSubmit = formValues => {
    dispatch(saveBillingAddress(formValues));
  };
  return (
    <>
      <form className="checkout-billing-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-body">
          <div className="checkout-billing-header">
            <p className="billing-header">Billing Details</p>
          </div>

          {/* username */}
          <div className="username-container">
            <div>
              <Field
                type="text"
                name="first_name"
                component={checkoutRenderField}
                placeholder="First Name"
                className="billing-input-fields"
              />
            </div>
            <div>
              <Field
                type="text"
                name="last_name"
                component={checkoutRenderField}
                placeholder="Last Name"
                className="billing-input-fields"
              />
            </div>
          </div>

          {/* address */}

          <div>
            <label className="label"> Address * </label>
          </div>
          <Field
            type="text"
            placeholder="House number and Street name"
            component={renderField}
            name="input"
          />

          {/* town */}
          <div>
            <label className="label"> Town / City * </label>
            <div>
              <Field
                type="text"
                placeholder="town/city"
                name="city_name"
                component={checkoutRenderField}
              />
              <Field
                type="text"
                placeholder="Postcode/Zip"
                component={checkoutRenderField}
                name="zip"
              />
            </div>
          </div>

          {/* state */}
          <div className="state-label">
            <label> State * </label>
          </div>

          <Field
            type="text"
            placeholder="hello"
            component={checkoutRenderField}
            disabled
            name="state_name"
          />
          <div className="phone-email">
            <Field
              type="text"
              placeholder="Phone Number"
              component={checkoutRenderField}
              name="phone"
            />
          </div>

          <div className="store-title">
            <label> Soupe Store Close You * </label>
          </div>
          <div className="store-close">
            <Field
              type="text"
              placeholder="hello"
              component={checkoutRenderField}
              disabled
              name="store_name"
            />
          </div>
        </div>

        <div className="next-prev">
          <button className="next-submit-btn" type="submit">
            Save
          </button>
        </div>
      </form>
    </>
  );
};

export default reduxForm({ form: "billing", onBlur: true, validateBilling })(
  DashboardBilling
);
