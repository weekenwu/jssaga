import React, { Component } from 'react';
import Header from './components/header';
import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <div>
            <Header></Header>
          </div>
        </Provider>
    );
  }
}

export default App;
