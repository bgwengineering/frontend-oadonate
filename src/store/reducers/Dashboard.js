import { CardSubtitle } from "reactstrap";
import * as actionTypes from "../actions/ActionTypes";

const initialState = {
  profile_user: [],
  company_user: [],
  user_donations_received: []
};

const dashboard = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.CREATE_PERSONAL_PROFILE_SUCCESS:
    case actionTypes.CREATE_COMPANY_PROFILE_SUCCESS:
      return {
        ...state,
        profile_user: payload,
      };
    case actionTypes.CREATE_PERSONAL_PROFILE_FAIL:
    case actionTypes.CREATE_COMPANY_PROFILE_FAIL:
      return {
        ...state,
      };
    case actionTypes.FETCH_PERSONAL_PROFILE_SUCCESS:
        return {
        ...state,
        profile_user: payload,
    };
    case actionTypes.FETCH_COMPANY_PROFILE_SUCCESS:
      return {
        ...state,
        company_user: payload,
      };
    case actionTypes.FETCH_PERSONAL_PROFILE_FAIL:
    case actionTypes.FETCH_COMPANY_PROFILE_FAIL:
      return {
        ...state,
        profile_user: payload,
      };
    case actionTypes.UPDATE_PERSONAL_PROFILE_SUCCESS:
      case actionTypes.UPDATE_COMPANY_PROFILE_SUCCESS:
      return{
        ...state,
        profile_user:payload,
      };
      case actionTypes.UPDATE_PERSONAL_PROFILE_FAIL:
        case actionTypes.UPDATE_COMPANY_PROFILE_FAIL:
        return{
          ...state
        };
      case actionTypes.GET_USER_DONATIONS_RECEIVED:
      return{
        ...state,
        user_donations_received:payload
      }
    default:
      return state;
  }
};

export default dashboard;
