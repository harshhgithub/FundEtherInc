import React, { useState, useContext } from "react";
import { CrowdFundingContext } from "../Context/CrowdFunding";
import { Logo, Menu } from "../Components/index";

const NavBar = () => {
  const { currentAccount, connectWallet } = useContext(CrowdFundingContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuList = ["Home", "Donation", "How It Works", "About Us"];

  return (
    <div className="bg-black">
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between">
          {/* Logo + Menu Items */}
          <div className="flex items-center">
            <a
              href="/"
              className="inline-flex items-center mr-8"
            >
              <Logo color="text-white" />
              <span className="ml-2 text-xl font-bold tracking-wide text-white">
                FundEther
              </span>
            </a>

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
          </div>

          {/* Connect Wallet Button (Desktop) */}
          {!currentAccount && (
            <ul className="hidden lg:flex items-center space-x-8">
              <li>
                <button
                  onClick={connectWallet}
                  className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-lg shadow font-semibold transition duration-200"
                >
                  Connect Wallet
                </button>
              </li>
            </ul>
          )}

          {/* Mobile Menu Icon */}
          <div className="lg:hidden z-40">
            <button
              onClick={() => setIsMenuOpen(true)}
              className="p-2 transition duration-200 rounded focus:outline-none"
            >
              <Menu />
            </button>

            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full">
                <div className="p-5 bg-black border border-gray-700 rounded shadow-sm text-white">
                  {/* Mobile Header */}
                  <div className="flex items-center justify-between mb-4">
                    <a href="/" className="inline-flex items-center">
                      <Logo color="text-white" />
                      <span className="ml-2 text-xl font-bold tracking-wide text-white uppercase">
                        FundEther
                      </span>
                    </a>
                    <button
                      onClick={() => setIsMenuOpen(false)}
                      className="p-2 transition duration-200 rounded hover:bg-gray-800 focus:outline-none"
                    >
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>

                  {/* Mobile Menu Items */}
                  <nav>
                    <ul className="space-y-4">
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
                      {!currentAccount && (
                        <li>
                          <button
                            onClick={connectWallet}
                            className="bg-teal-500 hover:bg-teal-600 text-white w-full h-12 px-6 rounded-lg shadow font-semibold transition duration-200"
                          >
                            Connect Wallet
                          </button>
                        </li>
                      )}
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
