// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOMqzatqzLHfHeE5kkchvmeDCf7yRYUMU",
  authDomain: "auth-moha-milon-911e6.firebaseapp.com",
  projectId: "auth-moha-milon-911e6",
  storageBucket: "auth-moha-milon-911e6.firebasestorage.app",
  messagingSenderId: "297524719558",
  appId: "1:297524719558:web:9eb68e6b972a9627ccccc7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);