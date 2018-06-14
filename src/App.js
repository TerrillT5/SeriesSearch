import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Series from '../src/components/containers/Series';
import Main from '././components/Main'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">T.V Series</h1>
         </header>
          <Main />
      </div>
    );
  }
}

export default App;
