// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTtIS99yiq_Ss7vfxnoOPzWlXs-JllTtg",
  authDomain: "worldofmills.firebaseapp.com",
  projectId: "worldofmills",
  storageBucket: "worldofmills.appspot.com",
  messagingSenderId: "388828493307",
  appId: "1:388828493307:web:c9bc2b7d09fc10cf61075e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth};