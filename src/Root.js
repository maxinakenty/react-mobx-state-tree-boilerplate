import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

// Router
import { Router } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import { syncHistoryWithStore } from 'mst-react-router';

// Mobx
import { Provider } from 'mobx-react';
import { onPatch } from 'mobx-state-tree';
import makeInspectable from 'mobx-devtools-mst';
import store, { routerModel } from './store';

import App from './components/App';

makeInspectable(store);

onPatch(store, patch => {
  console.log(patch);
});

const history = syncHistoryWithStore(createBrowserHistory(), routerModel);
@hot(module)
export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>
    );
  }
}
