import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAsRa62fNNv5K2L6rU0JJjOR7mQb_RdqwE",
  authDomain: "netflix-clone-7573a.firebaseapp.com",
  databaseURL: "https://netflix-clone-7573a-default-rtdb.firebaseio.com",
  projectId: "netflix-clone-7573a",
  storageBucket: "netflix-clone-7573a.appspot.com",
  messagingSenderId: "443947472197",
  appId: "1:443947472197:web:8727f3da84ed4c3581da2c",
  measurementId: "G-PL1JZ7R043",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { auth };
export default db;
