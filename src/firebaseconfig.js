import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyC_7iRHRfCbahBY92s7JroU1ehgeQipVvk",
  authDomain: "coderkoalastore.firebaseapp.com",
  projectId: "coderkoalastore",
  storageBucket: "coderkoalastore.firebasestorage.app",
  messagingSenderId: "764560036788",
  appId: "1:764560036788:web:b9ce483cd34c4718d298e1",
  measurementId: "G-0BEYF6RCFB"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);