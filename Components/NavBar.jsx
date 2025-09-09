import React, { useState, useContext } from "react";
import { CrowdFundingContext } from "../Context/CrowdFunding";
import { useAuth } from "../Context/AuthContext"; // ✅ Firebase Auth
import { Logo, Menu } from "../Components/index";

const NavBar = () => {
  const { currentAccount, connectWallet } = useContext(CrowdFundingContext);
  const { user, signInWithGoogle, logout } = useAuth(); // ✅ Firebase

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuList = ["Home", "Donation", "How It Works", "About Us"];

  return (
    <div className="bg-black">
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="inline-flex items-center mr-8">
            <Logo color="text-white" />
            <span className="ml-2 text-xl font-bold tracking-wide text-white">
              FundEther
            </span>
          </a>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center space-x-8">
            {menuList.map((el, i) => (
              <li key={i}>
                <a
                  href="/"
                  className="font-medium tracking-wide text-white hover:text-teal-400 transition duration-200"
                >
                  {el}
                </a>
              </li>
            ))}
          </ul>

          {/* Buttons */}
          <ul className="hidden lg:flex items-center space-x-4">
            {/* Google Auth */}
            {user ? (
              <>
                <li className="text-white">Hi, {user.displayName}</li>
                <li>
                  <button
                    onClick={logout}
                    className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg shadow font-semibold transition duration-200"
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <li>
                <button
                  onClick={signInWithGoogle}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg shadow font-semibold transition duration-200"
                >
                  Sign in with Google
                </button>
              </li>
            )}

            {/* Wallet */}
            {!currentAccount && (
              <li>
                <button
                  onClick={connectWallet}
                  className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-lg shadow font-semibold transition duration-200"
                >
                  Connect Wallet
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
