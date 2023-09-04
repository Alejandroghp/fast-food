// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGY1GKwxXR_TZcVkgA49PFMyOXJqRlzvI",
  authDomain: "comida-4b740.firebaseapp.com",
  databaseURL: "https://comida-4b740-default-rtdb.firebaseio.com",
  projectId: "comida-4b740",
  storageBucket: "comida-4b740.appspot.com",
  messagingSenderId: "152466195016",
  appId: "1:152466195016:web:1d06a2a5cc542837b90e7d",
  measurementId: "G-T27WFTNJFC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);