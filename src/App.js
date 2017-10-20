import React, { Component } from 'react';
import './App.css';


import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Entry from './components/entry/Entry';
import StoreCheck from './components/storecheck/StoreCheck';
import StoreDetail from './components/stocedetail/StoreDetail';
import ServerOwner from './components/serverowner/ServerOwner';
import OwnerDetail from './components/ownerdetail/OwnerDetail';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Entry}/>
          <Route exact path="/storecheck" component={StoreCheck}/>

          <Route exact path="/storedetail/:goods" component={StoreDetail}/>

          <Route exact path="/serverowner" component={ServerOwner}/>

          <Route exact path="/ownerdetail/:id" component={OwnerDetail} />

        </div>
      </Router>
    );
  }
}

export default App;
