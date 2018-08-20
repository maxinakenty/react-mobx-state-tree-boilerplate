import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

// Router
import { Router } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import { RouterModel, syncHistoryWithStore } from 'mst-react-router';

// Mobx
import { Provider } from 'mobx-react';
import { onPatch } from 'mobx-state-tree';
import makeInspectable from 'mobx-devtools-mst';
import { routerModel } from './stores/routerStore';
import { routerStore, menuStore } from './stores';

import App from './components/App';

const stores = {
  routerStore,
  menuStore,
};

makeInspectable(stores);

onPatch(stores, patch => {
  console.log(patch);
});

const history = syncHistoryWithStore(createBrowserHistory(), routerModel);
@hot(module)
export default class Root extends Component {
  render() {
    return (
      <Provider {...stores}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>
    );
  }
}
