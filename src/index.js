import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import initialState from './initialState';
import configureStore from './configureStore'

const store = configureStore(initialState);
store.dispatch({ type: 'HELLO_REDUX'})

const ConnectedApp = () => (
  <Provider store={store}>
    <App />
  </Provider >
);

ReactDOM.render(<ConnectedApp />, document.getElementById('root'));
registerServiceWorker();
