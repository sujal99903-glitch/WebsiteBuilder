// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "gemwebsaii77.firebaseapp.com",
  projectId: "gemwebsaii77",
  storageBucket: "gemwebsaii77.firebasestorage.app",
  messagingSenderId: "476744879562",
  appId: "1:476744879562:web:116a0842a6b94169601333",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();