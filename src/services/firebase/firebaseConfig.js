import {initializeApp} from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDf2hszKp1lrqNQOSJSMOmkdWlGNh9Oz_k",
    authDomain: "comision43235-d390b.firebaseapp.com",
    projectId: "comision43235-d390b",
    storageBucket: "comision43235-d390b.appspot.com",
    messagingSenderId: "98013439106",
    appId: "1:98013439106:web:d297822a50e60a9070c09b"
  };

const app =initializeApp(firebaseConfig)
export const db = getFirestore(app)