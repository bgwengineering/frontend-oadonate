import { createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './reducers/root-reducer';
import { composeWithDevTools } from "redux-devtools-extension";
import {persistStore} from 'redux-persist';

// const initialState = {};
// const composeEnhancers = compose
// const middlewares = [thunk, logger]

// export const store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(...middlewares)));

// const composeEnhancers = composeWithDevTools(applyMiddleware(...middlewares));

export const store = createStore(rootReducer,
         compose(applyMiddleware(thunk, logger))
       );
export const persistor = persistStore(store);


// export default store;
