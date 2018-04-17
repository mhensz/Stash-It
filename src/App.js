import React, { Component } from 'react';
import * as firebaseui from'firebaseui';
import { base } from './rebase.js';
import { Header } from "./Components/Header";
const firebase = require('firebase');


//function for pushing into to firebase.  Does work. Replaced everything in user database
function addUser(){
  base.post('users/', {
    data: {name: 'User1', age:30},
  });
}

//add authenication so that it can be pasted to state
export class App extends Component {
  constructor(props){
    super(props);

    this.state ={
      authed: true,
    };
  }

    render() {
      return (
        <Header auth= {this.state.authed} />
      )
    }
}

export default App;



