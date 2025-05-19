// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBTUCRarqaaEZ9g45Rey3BBiKP4IKIyaTM",
    authDomain: "recipes-app-72d48.firebaseapp.com",
    projectId: "recipes-app-72d48",
    storageBucket: "recipes-app-72d48.firebasestorage.app",
    messagingSenderId: "133136060031",
    appId: "1:133136060031:web:d9bdf24ce8fb13207ab94a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;