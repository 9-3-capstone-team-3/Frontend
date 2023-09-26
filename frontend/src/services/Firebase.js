// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, signInWithPopup, getAuth, signOut } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
};
console.log(firebaseConfig)
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
auth.useDeviceLanguage();

const googleProvider = new GoogleAuthProvider();


export const signInWithGoogle =  () => {
    try {
      console.log(googleProvider)
  //the signInWithPopUp() method accepts ANY provider we create. This is all our authentication logic
    signInWithPopup(googleProvider, auth).then((res) => {
    const user = res.user;
    console.log(user)
  })
     } catch (err) {
      console.log(err);
    }
  };

  export const logOut = async () =>{
    try {
      await auth.signOut()
      alert("you've signed out - congrats.")
    } catch(err) {
      console.log(err)
    }
  }