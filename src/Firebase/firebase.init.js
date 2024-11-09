// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAd1rwcrjH0faQROjnnwROxj_A_tQciQ2s",
  authDomain: "simple-firebase2-9e3ae.firebaseapp.com",
  projectId: "simple-firebase2-9e3ae",
  storageBucket: "simple-firebase2-9e3ae.firebasestorage.app",
  messagingSenderId: "9569928901",
  appId: "1:9569928901:web:3a1f031a1810bd527b12ac",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
