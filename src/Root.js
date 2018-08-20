import React from 'react';
import { hot } from 'react-hot-loader';
import { Provider } from 'mobx-react';
import { onPatch } from 'mobx-state-tree';
import makeInspectable from 'mobx-devtools-mst';
import store from './store';
import App from './components/App';

import 'normalize.css';
import './styles/main.css';

makeInspectable(store);

onPatch(store, patch => {
  console.log(patch);
});

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default hot(module)(Root);
