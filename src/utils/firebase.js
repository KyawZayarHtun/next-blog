// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "lama-blog-ef64d.firebaseapp.com",
  projectId: "lama-blog-ef64d",
  storageBucket: "lama-blog-ef64d.appspot.com",
  messagingSenderId: "768232758598",
  appId: "1:768232758598:web:bb35825de895899ee39947"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);