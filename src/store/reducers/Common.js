import * as actionType  from "../actions/ActionTypes";
  
  const initialState = {
    error: true,
    Message: "",
    showMessage: false,
    loading: false
  };

  const common = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
      case actionType.SHOW_SUCCESS_MESSAGE:
        return {
          ...state,
          showMessage: true,
          Message: payload,
          error: false
        };
      case actionType.SHOW_ERROR_MESSAGE:
        return {
          ...state,
          showMessage: true,
          Message: payload,
          error: true
        };
      case actionType.HIDE_MESSAGE:
        return {
          ...state,
          showMessage: false,
          Message: " "
        };
        case actionType.LOADING:
        return {
          ...state,
          loading: true
        };
        case actionType.OFF_LOADING:
        return {
          ...state,
          loading: false
        };

      default:
        return state;
    }
  }

export default common;