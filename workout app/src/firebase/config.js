import { initializeApp } from "firebase/app";
import { initializeFirestore, serverTimestamp } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDUaNNudeHg2BJowFnI0eF4im1kv8YSz4o",
    authDomain: "workoutpro-27519.firebaseapp.com",
    projectId: "workoutpro-27519",
    storageBucket: "workoutpro-27519.appspot.com",
    messagingSenderId: "401704830703",
    appId: "1:401704830703:web:8cafe593c7a6d1fc97bd1a"
  };


const firebaseApp = initializeApp(firebaseConfig);


const db = initializeFirestore(firebaseApp, {
  ignoreUndefinedProperties: true,
});
const auth = getAuth(firebaseApp);
const storage = getStorage(firebaseApp);


const timestamp = serverTimestamp();

export { db, auth, storage, timestamp };
