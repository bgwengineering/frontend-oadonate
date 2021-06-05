import { combineReducers } from 'redux';
import auth from './Auth';
import Settings from './Settings'
import { reducer as formReducer } from 'redux-form'
import dashboard from './Dashboard';
import common from './Common';
import toggleDashboard from './ToggleDashboard'
import fundDonate from './FundDonate'
import fundSubCategories from './Category';
import cart from './Cart';
import marketPlace from './MarketPlace';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { LOGOUT } from 'store/actions/ActionTypes';


const appReducer = combineReducers({
    form: formReducer,
    authReducer: auth,
    userTypeReducer: dashboard,
    commonReducer: common,
    settings: Settings,
    dashboardReducer: toggleDashboard,
    fundDonateReducer: fundDonate,
    fundSubCategoriesReducer: fundSubCategories,
    cartReducer: cart,
    marketPlaceReducer: marketPlace,
    orderReducer: dashboard,
});

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cartReducer']
}
const rootReducer = (state, action) => {
    if(action.type === LOGOUT) {
        state = undefined;
    }
    return appReducer(state, action);
};

export default persistReducer(persistConfig, rootReducer)