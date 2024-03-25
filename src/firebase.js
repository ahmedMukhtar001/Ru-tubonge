// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC9ZxI96ORnBMCLRLmJONryzfrqPOHa0e4",
  authDomain: "ru-tubonge.firebaseapp.com",
  projectId: "ru-tubonge",
  storageBucket: "ru-tubonge.appspot.com",
  messagingSenderId: "575909818274",
  appId: "1:575909818274:web:b3bcb385cde09b2b7bccfb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
