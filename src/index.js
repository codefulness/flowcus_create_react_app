import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import initialState from './initialState';
import configureStore from './configureStore'
require('dotenv').config()

const store = configureStore(initialState);

const ConnectedApp = () => (
  <Provider store={store}>
    <App />
  </Provider >
);

ReactDOM.render(<ConnectedApp />, document.getElementById('root'));
registerServiceWorker();
