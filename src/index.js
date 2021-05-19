import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {store, persistor} from 'store/store';
import 'core-js';
import { icons } from 'assets/icons'
import App from './App';
React.icons = icons

ReactDOM.render(
<Provider store={store}>
    <PersistGate persistor={persistor}>   
    <App />
    </PersistGate>
</Provider>,
  document.getElementById('root')
);
