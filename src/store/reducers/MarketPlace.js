// import { ProductsData} from "components/containers/subpages/buytosupport/Data"
import * as actionTypes from "store/actions/ActionTypes"


const INITIAL_STATE = {
    collections: [],
    singleCollections:[],
    loading:true
}
const marketPlace = (state=INITIAL_STATE, action) => {
  switch(action.type){
    case actionTypes.UPDATE_MARKET_COLLECTIONS:
      return {
        ...state,
        collections:action.payload
      }
      case actionTypes.GET_SINGLE_MARKET_COLLECTIONS_SUCCESS:
      return{
        ...state,
        singleCollections:action.payload,
      }
      case actionTypes.GET_SINGLE_MARKET_COLLECTIONS_FAIL:
       return{
         ...state
       }
      default:
          return state
  }
}

export default marketPlace;