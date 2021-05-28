import { createStore, applyMiddleware} from 'redux';
import { compose } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './reducers/root-reducer';

import {persistStore} from 'redux-persist';

// const initialState = {};
// const composeEnhancers = compose
// const middlewares = [thunk, logger]

// export const store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(...middlewares)));

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk, logger)
));
export const persistor = persistStore(store);


// export default store;
