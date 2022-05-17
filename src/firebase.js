import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNbGJPHd2N4mX0x_JPEOUPC7SGxaiG5AM",
  authDomain: "unacademy-23dc7.firebaseapp.com",
  projectId: "unacademy-23dc7",
  storageBucket: "unacademy-23dc7.appspot.com",
  messagingSenderId: "505243400015",
  appId: "1:505243400015:web:0a0c2e3ca081e9b666773a",
  measurementId: "G-ND13SEH7YB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
//cp
export const db = getFirestore(app);
//cp
export const auth = getAuth(app);
export default app ; 
