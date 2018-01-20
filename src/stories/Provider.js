import React from 'react';
import { connect, Provider as ReduxProvider } from 'react-redux';
import configureStore from '../configureStore';
import initialState from '../initialState';
const store = configureStore(initialState);

export default function Provider({ story }) {
  return (
    <ReduxProvider store={store}>
      {connect()(story())}
    </ReduxProvider>
  );
};
