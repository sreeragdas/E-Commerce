// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getAuth , GoogleAuthProvider , signInWithPopup} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGm8lr1BsuC_ZnBdt62FrZK2rf29oo12Q",
  authDomain: "auth-940f6.firebaseapp.com",
  projectId: "auth-940f6",
  storageBucket: "auth-940f6.appspot.com",
  messagingSenderId: "745555124052",
  appId: "1:745555124052:web:a150328a4a701fe75132c1",
  measurementId: "G-HPQMGFPD4R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export const signInWithGoogle = () =>{
    signInWithPopup(auth , provider).then((result)=>{console.log(result)}).catch((error)=>{console.log(error)})
}