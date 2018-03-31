import Rebase from 're-base'
import firebase from 'firebase'

  //Initialize Firebase
  const config = {
   apiKey: "AIzaSyAjFruoklcMh8H6tJMMzJ_JU-3LH9x-ODs",
   authDomain: "stash-it-e75bd.firebaseapp.com",
   databaseURL: "https://stash-it-e75bd.firebaseio.com",
   projectId: "stash-it-e75bd",
   storageBucket: "stash-it-e75bd.appspot.com",
   messagingSenderId: "499464668272"
  };

  const app = firebase.initializeApp(config);
  const base = Rebase.createClass(app.database());

  export { base };