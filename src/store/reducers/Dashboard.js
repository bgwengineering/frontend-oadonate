import { CardSubtitle } from "reactstrap";
import * as actionTypes from "../actions/ActionTypes";

const initialState = {
    profile_user: [],
    company_user: [],
    shiping: [],
    user_donations_received: [],
    loading: false
};

const dashboard = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {

        // case actionTypes.LOADING:
        // return{
        //   ...state, loading:true
        // }
        case actionTypes.CREATE_PERSONAL_PROFILE_SUCCESS:
            return {
                ...state,
                profile_user: payload,
            };
        case actionTypes.CREATE_COMPANY_PROFILE_SUCCESS:
            return {
                ...state,
                company_user: payload,
            };
        case actionTypes.CREATE_COMPANY_PROFILE_SUCCESS:
            return {
                ...state,
                shiping: payload,
                loading: false
            };
        case actionTypes.CREATE_PERSONAL_PROFILE_FAIL:
        case actionTypes.CREATE_COMPANY_PROFILE_FAIL:
            return {
                ...state,
            };
        case actionTypes.CREATE_SHIPPING_ADDRESS_SUCCESS:
            return {
                ...state,
                shiping: payload,
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
            return {
                ...state,
                profile_user: payload,
            };
        case actionTypes.UPDATE_PERSONAL_PROFILE_FAIL:
        case actionTypes.UPDATE_COMPANY_PROFILE_FAIL:
            return {
                ...state
            };
        case actionTypes.GET_USER_DONATIONS_RECEIVED:
            return {
                ...state,
                user_donations_received: payload
            }
        case actionTypes.CREATE_SHIPPING_ADDRESS_FAILS:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
};

export default dashboard;