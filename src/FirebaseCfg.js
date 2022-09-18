// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmkHXS11eX71e3-hz7zDixUn8rive1p9c",
  authDomain: "product-management-syste-fec14.firebaseapp.com",
  databaseURL: "https://product-management-syste-fec14-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "product-management-syste-fec14",
  storageBucket: "product-management-syste-fec14.appspot.com",
  messagingSenderId: "156262236858",
  appId: "1:156262236858:web:cee1480bb68a54f70c7883"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);