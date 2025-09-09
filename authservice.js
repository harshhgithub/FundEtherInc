// authService.js
import { auth, googleProvider } from "./firebase";
import { signInWithPopup, signOut } from "firebase/auth";

// ✅ Google Sign Up / Sign In
export const signUpWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return result.user;
  } catch (error) {
    console.error("Google signup error:", error.message);
    throw error;
  }
};

// ✅ Logout
export const logOut = async () => {
  try {
    await signOut(auth);
    console.log("User signed out");
  } catch (error) {
    console.error("Logout error:", error.message);
  }
};
