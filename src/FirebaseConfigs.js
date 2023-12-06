// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvEDBICfbJgpuJxqoqMet-ju4ENiIlymk",
  authDomain: "news-app-a1ea3.firebaseapp.com",
  projectId: "news-app-a1ea3",
  storageBucket: "news-app-a1ea3.appspot.com",
  messagingSenderId: "439380904123",
  appId: "1:439380904123:web:aec7dedf009fe829e3c19e",
  measurementId: "G-YQZBG8RGGT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getAuth(app);