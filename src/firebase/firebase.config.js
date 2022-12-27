// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCteQSF3ZGKa61xyZ5sQEOKzD6obnFwA54",
  authDomain: "news-molecule.firebaseapp.com",
  projectId: "news-molecule",
  storageBucket: "news-molecule.appspot.com",
  messagingSenderId: "1045580329708",
  appId: "1:1045580329708:web:315e778684dd16fe292bc9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
