// Context/AuthContext.js
import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase"; // ✅ make sure this path is correct

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Firebase auth listener
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe(); // Clean up
  }, []);

  // Register user
  const register = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Login user
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Logout
  const logout = () => {
    return signOut(auth);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook
export const useAuth = () => useContext(AuthContext);
