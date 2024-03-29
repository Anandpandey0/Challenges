// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCLWUCg_3V_WPQ4fJvyanHGROiocjDTmGI",
  authDomain: "linkedin-clone-20b0d.firebaseapp.com",
  projectId: "linkedin-clone-20b0d",
  storageBucket: "linkedin-clone-20b0d.appspot.com",
  messagingSenderId: "609777072232",
  appId: "1:609777072232:web:a90bba5af43587118ba3dd",
  measurementId: "G-XRJBH4NKBP",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
