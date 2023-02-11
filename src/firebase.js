import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAvY47hpEMawr2HLaTMJhPww7q5VrDykCg",
  authDomain: "rpa-news.firebaseapp.com",
  projectId: "rpa-news",
  storageBucket: "rpa-news.appspot.com",
  messagingSenderId: "395486101376",
  appId: "1:395486101376:web:4d8d47fabd344b2aa4cb65",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
