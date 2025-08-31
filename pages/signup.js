import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";
import { useRouter } from "next/router";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      router.push("/campaigns");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <form onSubmit={handleSignup} className="p-6 max-w-sm mx-auto mt-20 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">Sign Up</h2>
      <input className="border p-2 w-full mb-3" type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input className="border p-2 w-full mb-3" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button className="bg-indigo-600 text-white p-2 w-full rounded" type="submit">Sign Up</button>
    </form>
  );
};

export default Signup;
