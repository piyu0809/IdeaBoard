import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import IdeaContainer from './IdeaContainer.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Ideas Board
        </header>
        <IdeaContainer />
      </div>
    );
  }
}

export default App;
