// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-306b3.firebaseapp.com",
  projectId: "mern-estate-306b3",
  storageBucket: "mern-estate-306b3.appspot.com",
  messagingSenderId: "617653718856",
  appId: "1:617653718856:web:ebecc6504d7bbe388e2d7d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);