import React, { Component } from 'react';
import * as firebaseui from'firebaseui';
import { base } from './rebase.js';
import Header from "./Header";
const firebase = require('firebase');


//function for pushing into to firebase.  Does work. Replaced everything in user database
function addUser(){
  base.post('users/', {
    data: {name: 'User1', age:30},
  });
}

const App = () => (
/*  <div>
    <Header />
    <Main />
  </div>
*/


<Header />



)


export default App;
