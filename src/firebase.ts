// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYqwldxANTJ9T8zjTWDKP6tKnZVhSvIkg",
  authDomain: "collegefest-2fdd5.firebaseapp.com",
  projectId: "collegefest-2fdd5",
  storageBucket: "collegefest-2fdd5.firebasestorage.app",
  messagingSenderId: "563392407499",
  appId: "1:563392407499:web:8762dd3f3f3572ec04384e",
  measurementId: "G-1NRG1P13BR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export default db ;