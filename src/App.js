import React, { Component } from 'react';
import * as firebaseui from'firebaseui';
import { base } from './rebase.js';
import { Header } from "./Header";
import Bootstrap from 'react-bootstrap'
const firebase = require('firebase');


//function for pushing into to firebase.  Does work. Replaced everything in user database
function addUser(){
  base.post('users/', {
    data: {name: 'User1', age:30},
  });
}

const App = () => (


<Header />



)


export default App;
