// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5jTVZU8zksONNry8aHiVSkZBl0V7KK3E",
  authDomain: "stateofpop-fd293.firebaseapp.com",
  projectId: "stateofpop-fd293",
  storageBucket: "stateofpop-fd293.firebasestorage.app",
  messagingSenderId: "46660070050",
  appId: "1:46660070050:web:7e3258b585fb8a8ce785fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };