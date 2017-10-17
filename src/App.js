import React, { Component } from 'react';



import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Entry from './components/entry/Entry';
import StoreCheck from './components/storecheck/StoreCheck';
import ServerOwner from './components/serverowner/ServerOwner';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Entry}/>
          <Route exact path="/storecheck" component={StoreCheck}/>
          <Route exact path="/serverowner" component={ServerOwner}/>
        </div>
      </Router>
    );
  }
}

export default App;
