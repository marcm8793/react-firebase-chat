import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-b4c04.firebaseapp.com",
  projectId: "reactchat-b4c04",
  storageBucket: "reactchat-b4c04.appspot.com",
  messagingSenderId: "198473766405",
  appId: "1:198473766405:web:0d1e701dd4958f06ecae6c",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
