import  { FUND_RAISE_BUTTON_CLICKED, FUND_RAISE_CATEGORIES  } from "store/actions/ActionTypes";

const initialState = {
    startFundRaise:false
}

const fundSubCategories = (state = initialState, action) => {
  switch(action.type){
     case FUND_RAISE_BUTTON_CLICKED:
         return {
             ...state,
             startFundRaise:true
         }
         case FUND_RAISE_CATEGORIES:
             return{
                 startFundRaise:false
             }
         default:
             return state
  }
}




export default fundSubCategories;