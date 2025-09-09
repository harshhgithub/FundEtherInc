// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDAA9G83nqzSCQhg1jah_Y93Rn8VULaZBo",
  authDomain: "fundetherinc.firebaseapp.com",
  projectId: "fundetherinc",
  storageBucket: "fundetherinc.firebasestorage.app",
  messagingSenderId: "852628678472",
  appId: "1:852628678472:web:c95a427c26d91e72a2757d",
  measurementId: "G-WDV3K6TL85"
};


// Initialize only once (important in Next.js because of hot reloads)
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
