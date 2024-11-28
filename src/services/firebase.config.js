// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const config = {
  apiKey: "AIzaSyAzU6o2pumaxCFcsqWXJU0nFVOCUXW9_tA",
  authDomain: "pweb-lobby.firebaseapp.com",
  projectId: "pweb-lobby",
  storageBucket: "pweb-lobby.firebasestorage.app",
  messagingSenderId: "134699304546",
  appId: "1:134699304546:web:ff4bafc6e8c76c0d48b33b"
};

// Initialize Firebase
const app = initializeApp(config);

export const db = getFirestore(app);