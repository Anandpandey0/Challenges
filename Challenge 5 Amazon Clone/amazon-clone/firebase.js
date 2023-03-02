// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbt5S8hKBcFU5LZrUP845ylW0GGEGRds8",
  authDomain: "clone-3292a.firebaseapp.com",
  projectId: "clone-3292a",
  storageBucket: "clone-3292a.appspot.com",
  messagingSenderId: "1041752106501",
  appId: "1:1041752106501:web:7d83357b46d1de6bdf1e6c",
  measurementId: "G-NVQRL8VWM6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
