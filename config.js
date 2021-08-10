import * as firebase from "firebase";
require('@firebase/firestore');
var firebaseConfig = {
    apiKey: "AIzaSyB2O03T1_I2Fl3Tc5cGEl0PoEngM4EAWyM",
    authDomain: "crypto-pass-110ec.firebaseapp.com",
    projectId: "crypto-pass-110ec",
    storageBucket: "crypto-pass-110ec.appspot.com",
    messagingSenderId: "766659401218",
    appId: "1:766659401218:web:c5f807cbd5302a1c2af91b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();