// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHOkbObtazm9Rhz1fNhIeDmfo_srVcvbs",
  authDomain: "rasel-blog-web.firebaseapp.com",
  projectId: "rasel-blog-web",
  storageBucket: "rasel-blog-web.appspot.com",
  messagingSenderId: "509609427423",
  appId: "1:509609427423:web:75b3e70abf70f60ca6446a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;