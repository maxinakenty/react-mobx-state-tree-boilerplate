import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { withRouter } from 'react-router-dom';

@observer
@withRouter
@inject([])
class App extends Component {
  render() {
    const {
      stores: {
        router: { location, push, goBack },
      },
    } = this.props;

    return (
      <div>
        <span>Current pathname: {location.pathname}</span>
        <button type="button" onClick={() => push('/test')}>
          Change url
        </button>
        <button type="button" onClick={() => goBack()}>
          Go Back
        </button>
      </div>
    );
  }
}

export default App;
