import * as actionTypes from "../actions/ActionTypes";

const initialState = {
  profile_user: [],
  singleProfile: [],
  company_user: [],
  shippingAddress: [],
  user_donations_received: [],
  loading: false,
  singleAddress: [],
  orders: [],
  auction:[]
};

const dashboard = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.CREATE_PERSONAL_PROFILE_SUCCESS:
    case actionTypes.UPDATE_PERSONAL_PROFILE_SUCCESS:
    case actionTypes.FETCH_PERSONAL_PROFILE_SUCCESS:
      return {
        ...state,
        profile_user: payload
      };
    case actionTypes.GET_SINGLE_PERSONAL_PROFILE_SUCCESS:
      return {
        ...state,
        singleProfile: payload.res.data,
      };
    // case actionTypes.UPDATE_COMPANY_PROFILE_SUCCESS:
    // case actionTypes.CREATE_COMPANY_PROFILE_SUCCESS:
    // case actionTypes.FETCH_COMPANY_PROFILE_SUCCESS:
    //   return {
    //     ...state,
    //     company_user: payload,
    //   };

    case actionTypes.CREATE_SHIPPING_ADDRESS_SUCCESS:
    case actionTypes.FETCH_SHIPPING_ADDRESS_SUCCESS:
      return {
        ...state,
        shippingAddress: payload,
      };
    case actionTypes.GET_SINGLE_SHIPPING_ADDRESS_SUCCESS:
      return {
        ...state,
        singleAddress: payload.res.data,
      };

    case actionTypes.GET_USER_DONATIONS_RECEIVED:
      return {
        ...state,
        user_donations_received: payload,
      };
    case actionTypes.FETCH_ORDERS_SUCCESS:
      return {
        ...state,
        orders: payload,
      };
    
    case actionTypes.FETCH_AUCTION_SUCCESS:
      return {
        ...state,
        auction: payload,
      };    
    case actionTypes.UPDATE_PERSONAL_PROFILE_FAIL:
    case actionTypes.CREATE_PERSONAL_PROFILE_FAIL:
    case actionTypes.UPDATE_SHIPPING_ADDRESS_FAIL:
    case actionTypes.CREATE_SHIPPING_ADDRESS_FAIL:
    case actionTypes.FETCH_ORDERS_FAIL:
    case actionTypes.FETCH_AUCTION_FAIL:
      return {
        ...state,
    };
    default:
      return state;
  }
};

export default dashboard;
