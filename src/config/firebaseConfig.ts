import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDkGAKFPhveLtPKfT0Dcxwdj4VDz_w-ewU",
  authDomain: "journal-63f59.firebaseapp.com",
  projectId: "journal-63f59",
  storageBucket: "journal-63f59.firebasestorage.app",
  messagingSenderId: "456050436532",
  appId: "1:456050436532:web:252d3b7f4f46d38b55eae1",
  measurementId: "G-B3LV02X5V6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export {auth, googleProvider}