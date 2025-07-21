// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-56c0e.firebaseapp.com",
  projectId: "mern-blog-56c0e",
  storageBucket: "mern-blog-56c0e.firebasestorage.app",
  messagingSenderId: "701920911155",
  appId: "1:701920911155:web:0cccff55b04c9dcff9e846"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);