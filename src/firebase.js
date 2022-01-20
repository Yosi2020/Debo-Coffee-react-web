import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDru8pwHET8ZCBe81t8oOaGg5-xX0v9x9A",
  authDomain: "boaz-coffee.firebaseapp.com",
  projectId: "boaz-coffee",
  storageBucket: "boaz-coffee.appspot.com",
  messagingSenderId: "62246560473",
  appId: "1:62246560473:web:14959befa4ce1ffb5394c8",
  measurementId: "G-ERLSBK2DF8"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };