import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "react-app-using-nasa-apis.firebaseapp.com",
    projectId: "react-app-using-nasa-apis",
    storageBucket: "react-app-using-nasa-apis.appspot.com",
    messagingSenderId: import.meta.env.VITE_MessagingSenderId,
    appId: import.meta.env.VITE_FIREBASE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth }