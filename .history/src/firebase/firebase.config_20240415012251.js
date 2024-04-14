// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


console.log('firebase config', import.meta.env.VITE_PASS)
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2sZCLjQRGsRTNcgy9DHd30qjOz-58N4g",
  authDomain: "react-dragon-news-auth-d3831.firebaseapp.com",
  projectId: "react-dragon-news-auth-d3831",
  storageBucket: "react-dragon-news-auth-d3831.appspot.com",
  messagingSenderId: "908957067922",
  appId: "1:908957067922:web:ade17b6071af8e9995144b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;