import React, { Component } from 'react';
import * as firebaseui from'firebaseui';
import { base } from './rebase.js';
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


<div>

  <a href="/signup">Sign Up</a> | <a href="/signin">Sign In</a>
  <h1>Stash It</h1>
  <nav>
    <ul>
      <a href="/about"><li>About Us</li></a>
      <a href="/howitworks"><li>How It Works</li></a>
      <a href="/contact"><li>Contact Us</li></a>
    </ul>
  </nav>
</div>



)


export default App;
