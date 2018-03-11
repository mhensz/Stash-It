import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

  // Initialize Firebase
  // let config = {
  //   apiKey: "AIzaSyAjFruoklcMh8H6tJMMzJ_JU-3LH9x-ODs",
  //   authDomain: "stash-it-e75bd.firebaseapp.com",
  //   databaseURL: "https://stash-it-e75bd.firebaseio.com",
  //   projectId: "stash-it-e75bd",
  //   storageBucket: "stash-it-e75bd.appspot.com",
  //   messagingSenderId: "499464668272"
  // };
  // firebase.initializeApp(config);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload. Testing.
        </p>
      </div>
    );
  }
}

export default App;
