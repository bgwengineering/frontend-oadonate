import * as actionTypes from "store/actions/ActionTypes";

const initialState = {
  fund: [],
  allCampaign: [],
  singleCampaign:[],
  singleCampaignItem:[],
  singleDonateItem: [],
  singleDonateCash: [],
  Ogadonate_cash: [],
  Ogadonate_item: [],
  userFund:[],
  paystackUrl: "",
  submitted : false
  

};

const fundDonate = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.GET_ALL_CAMPAIGN_SUCCESS:
      return{...state, allCampaign:payload}
    case actionTypes.CREATE_FUND_CASH_SUCCESS:
      return {
        ...state,
        fund: payload,
      };
    case actionTypes.CREATE_FUND_ITEM_SUCCESS:
      return {
        ...state,
        fund: payload,
      };
    case actionTypes.CREATE_CASH_DONATION_OGAFUND_SUCCESS:
      return {
        ...state,
        Ogadonate_cash: payload,
        loading: false,
      };
    case actionTypes.CREATE_ITEM_DONATION_OGAFUND_SUCCESS:
      return {
        ...state,
        Ogadonate_item: payload,
        loading: false,
      };
    case  actionTypes.FETCH_DONATION_ITEM_SUCCESS:
      return {
        singleDonateItem: payload,
        ...state,
        loading: false,
      };
    case actionTypes.FETCH_DONATION_CASH_SUCCESS:
      return {
        ...state,
        singleDonateCash: payload,
        loading: false,
      };
    case actionTypes.FETCH_FUND_CASH_SUCCESS:
      return {
        ...state,
        fund: payload,
        loading: false,
        singleCampaign: payload
      };
    case actionTypes.FETCH_FUND_ITEM_SUCCESS:
      return {
        ...state,
        fund: payload,
        loading: false,
        singleCampaignItem: payload
      };
      case actionTypes.GET_SINGLE_CAMPAIGN_SUCCESS:
        return{
          ...state,
           singleCampaign:payload,
           loading:false
        }
        case actionTypes.CREATE_DONATION_ITEM_SUCCESS:
          return {
            ...state,
            singleDonateItem:payload,
            loading:false
          }
          case actionTypes.CREATE_DONATION_CASH_SUCCESS:
            return {
              ...state,
              paystackUrl:payload,
              loading:false
            }

    case actionTypes.FETCH_FUND_CASH_FAIL:
    case actionTypes.FETCH_DONATION_ITEM_FAIL:
    case actionTypes.FETCH_DONATION_CASH_FAIL:
    case actionTypes.GET_SINGLE_CAMPAIGN_FAIL:
        return{
            ...state,
        }
    case actionTypes.CREATE_CASH_DONATION_OGAFUND_FAIL:
    case actionTypes.CREATE_ITEM_DONATION_OGAFUND_FAIL:
    case actionTypes.CREATE_FUND_ITEM_FAIL:
    case actionTypes.CREATE_FUND_CASH_FAIL:
        return{
            ...state,
            loading:true
        }
      default:
      return state;
  }
};

export default fundDonate;
