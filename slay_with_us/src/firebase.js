import firebase from "firebase";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPPDkQ91hpNLq4d_FtTr5Cyj-MkB5dij0",
  authDomain: "slay-with-us.firebaseapp.com",
  databaseURL: "https://slay-with-us.firebaseio.com",
  projectId: "slay-with-us",
  storageBucket: "slay-with-us.appspot.com",
  messagingSenderId: "621828288153",
  appId: "1:621828288153:web:a9161ab7df9292da159208",
  measurementId: "G-07L2L2ZG7H"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };