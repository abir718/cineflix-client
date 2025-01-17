// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPLKcBqnl9Xz-MoKjRWhT9V5g7KIVsPiU",
  authDomain: "cineflix-a699a.firebaseapp.com",
  projectId: "cineflix-a699a",
  storageBucket: "cineflix-a699a.firebasestorage.app",
  messagingSenderId: "634299148716",
  appId: "1:634299148716:web:1ac61ec76b76ef209f3209",
  measurementId: "G-L5DXEJLLDM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;