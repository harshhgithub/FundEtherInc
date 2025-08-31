import React, { useState } from "react";
import { useRouter } from "next/router";
import { auth } from "../firebase"; // adjust the path based on your project
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(false); // false = sign up
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const router = useRouter();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleAuth = async (e) => {
    e.preventDefault();
    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, formData.email, formData.password);
        alert("✅ Logged in!");
      } else {
        await createUserWithEmailAndPassword(auth, formData.email, formData.password);
        alert("🎉 Account created!");
      }
      router.push("/"); // Redirect to homepage or dashboard
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center mb-6 text-purple-600">
          {isLogin ? "Login" : "Sign Up"}
        </h2>

        {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}

        <form onSubmit={handleAuth} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full px-4 h-12 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
            required
            className="w-full px-4 h-12 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
          />

          <button
            type="submit"
            className="w-full h-12 bg-purple-600 text-white font-semibold rounded-md hover:bg-purple-700 transition"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        <p className="text-center mt-4 text-sm text-gray-600">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-purple-600 font-semibold hover:underline"
          >
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
