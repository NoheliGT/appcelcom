// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5Q3_C74a8FILcw8WcoN4FpaPojlx6riQ",
  authDomain: "nohe-ecommerce.firebaseapp.com",
  projectId: "nohe-ecommerce",
  storageBucket: "nohe-ecommerce.appspot.com",
  messagingSenderId: "1062376712917",
  appId: "1:1062376712917:web:98f144b324cfeb1976d05c"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const db= firebase.firestore();
const auth = firebase.auth();

export { auth };
export default db