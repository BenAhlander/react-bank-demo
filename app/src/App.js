import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Private from './components/Private/private';

class App extends Component {
  render() {

    return (
      <div className="App">
        <Route exact path='/' component={Login} />
        <Route exact path='/private' component={Private} />
      </div>
    )
  }
}

export default App;
