// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDUaNNudeHg2BJowFnI0eF4im1kv8YSz4o",
  authDomain: "workoutpro-27519.firebaseapp.com",
  projectId: "workoutpro-27519",
  storageBucket: "workoutpro-27519.appspot.com",
  messagingSenderId: "401704830703",
  appId: "1:401704830703:web:8cafe593c7a6d1fc97bd1a",
}; // Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const auth = getAuth(app);

export { app, auth, db };
export default app; // Exporta
