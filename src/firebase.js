import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAewWBz1b84VZM0xGsEdyvwfcMCHVfqTPs",
  authDomain: "slack-clone-3e491.firebaseapp.com",
  databaseURL: "https://slack-clone-3e491.firebaseio.com",
  projectId: "slack-clone-3e491",
  storageBucket: "slack-clone-3e491.appspot.com",
  messagingSenderId: "632564996195",
  appId: "1:632564996195:web:0c6b7b79e8c4d754cbc056",
  measurementId: "G-1FN7RS7LCJ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };

export default db;
