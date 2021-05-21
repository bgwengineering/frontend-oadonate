import * as actionTypes from "../actions/ActionTypes";


const initialState = {
  access: localStorage.getItem("access"),
  refresh: localStorage.getItem("refresh"),
  isAuthenticated: false,
  accountCreated: null,
  user: null,
  loading: false,
};

const auth = (state = initialState, action) => {
  const { type, payload} = action;
  
  switch (type) {
    case actionTypes.LOADING:
    return{
      ...state, loading: true
    }
    case actionTypes.OFF_LOADING:
    return{
      ...state, loading: false
    }
    case actionTypes.AUTHENTICATED_SUCCESS:
    return {
      ...state,
      isAuthenticated: true,
      loading: false,
    };
    case actionTypes.LOGIN_SUCCESS:
    case actionTypes.GOOGLE_AUTH_SUCCESS:
    case actionTypes.FACEBOOK_AUTH_SUCCESS:
    localStorage.setItem("access", payload.access);
    localStorage.setItem("refresh", payload.refresh);
    return {
      ...state,
      isAuthenticated: true,
      error: false,
      access: payload.access,
      refresh: payload.refresh,
      loading: false,
    };
    case actionTypes.SIGNUP_SUCCESS:
    return {
      ...state,
      error: false,
      loading: false,
    };
    case actionTypes.USER_LOADED_SUCCESS:
    return {
      ...state,
      user: payload,
      loading: false,
    };
    case actionTypes.PASSWORD_RESET_SUCCESS:
    return {
      ...state,
      loading: false,
    };
    case actionTypes.AUTHENTICATED_FAIL:
    return {
        ...state,
        isAuthenticated: false,
        loading: false
      };
    case actionTypes.USER_LOADED_FAIL:
      return {
        ...state,
        user: null,
      };
 
    case actionTypes.LOGOUT:
      localStorage.removeItem("access");
      localStorage.removeItem("refresh");
      return {
        ...state,
        access: null,
        refresh: null,
        isAuthenticated: false,
        user: null,
      };
      case actionTypes.GOOGLE_AUTH_FAIL:
      case actionTypes.FACEBOOK_AUTH_FAIL:
      case actionTypes.LOGIN_FAIL:
      case actionTypes.SIGNUP_FAIL:
    case actionTypes.PASSWORD_RESET_FAIL:
    // case actionTypes.PASSWORD_RESET_CONFIRM_SUCCESS:
    // case actionTypes.PASSWORD_RESET_CONFIRM_FAIL:
    // case actionTypes.ACTIVATION_SUCCESS:
    // case actionTypes.ACTIVATION_FAIL:
    return {
      ...state,
      loading: true
    };
    default:
      return state;
  }
};

export default auth;
