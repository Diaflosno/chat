import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-e7a59.firebaseapp.com",
  projectId: "reactchat-e7a59",
  storageBucket: "reactchat-e7a59.appspot.com",
  messagingSenderId: "872696441819",
  appId: "1:872696441819:web:96a210520bc005174215fe"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()