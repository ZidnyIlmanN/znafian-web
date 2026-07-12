import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtj3iQ-EZb8Hworl_rKts3_FFZm58e9mI",
  authDomain: "znafian-web.firebaseapp.com",
  projectId: "znafian-web",
  storageBucket: "znafian-web.firebasestorage.app",
  messagingSenderId: "405432039781",
  appId: "1:405432039781:web:ca157b226bf23c0635898c",
  measurementId: "G-Y0T62G1S3M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// const analytics = getAnalytics(app);

export { auth };
