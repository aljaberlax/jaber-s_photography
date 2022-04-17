// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAbe0kCePR9rPXTEiVjohvxvAPArLV-6kk",
    authDomain: "jaber-s-photography.firebaseapp.com",
    projectId: "jaber-s-photography",
    storageBucket: "jaber-s-photography.appspot.com",
    messagingSenderId: "13723394106",
    appId: "1:13723394106:web:ee492aae21eddf82295503"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;