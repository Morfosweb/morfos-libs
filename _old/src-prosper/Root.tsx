/* /
/* */
// ----------- import Packs
import React from 'react';
import { Provider } from 'react-redux';

// ----------- import Internals
import { store } from './config/redux';
import Router from './config/allApp';

export default () => (
  <Provider store={store}>
    <Router />
  </Provider>
);
