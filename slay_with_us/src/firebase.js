import firebase from "firebase";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCfhJhNkpPyxBdtz3WB38XGaaOn1b__u14",
    authDomain: "bigbasket-shop.firebaseapp.com",
    databaseURL: "https://bigbasket-shop.firebaseio.com",
    projectId: "bigbasket-shop",
    storageBucket: "bigbasket-shop.appspot.com",
    messagingSenderId: "959151907676",
    appId: "1:959151907676:web:9c574060a6c78ce94d9799",
    measurementId: "G-8ZG9K5TGR8"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };