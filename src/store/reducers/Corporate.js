import * as actionTypes from "../actions/ActionTypes";

const initialState = {
    corporateUser:[],
    companySuccess:false
}

const corporate = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CREATE_CORPORATE_SUCCESS:
            return {
                ...state,
                corporateUser: action.payload,
                companySuccess:true
            }
    default: return state;
   }
}
export default corporate