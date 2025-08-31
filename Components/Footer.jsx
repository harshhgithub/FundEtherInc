import React from "react";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const productList = ["Market", "ERC20 Token", "Donation"];
  const contactList = [
    "support@fundether.com",
    "info@fundether.com",
    "Contact us",
  ];
  const usefulLink = ["Home", "About us", "Company Bio"];

  return (
    <footer className="bg-black text-white pt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-10">
          {/* Brand Description */}
          <div>
            <h6 className="text-xl font-bold mb-4">FundEther</h6>
            <p className="text-sm text-gray-400 leading-6">
              Fundraise at the speed of thought! Elevate your cause in just a minute with our lightning fast fundraising platform.
            </p>
          </div>

          {/* Products */}
          <div>
            <h6 className="uppercase text-lg font-bold mb-4">Products</h6>
            <ul className="space-y-2 text-sm text-gray-300">
              {productList.map((el, i) => (
                <li key={i}>
                  <a href="#!" className="hover:text-teal-400 transition-colors">{el}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h6 className="uppercase text-lg font-bold mb-4">Useful Links</h6>
            <ul className="space-y-2 text-sm text-gray-300">
              {usefulLink.map((el, i) => (
                <li key={i}>
                  <a href="#!" className="hover:text-teal-400 transition-colors">{el}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h6 className="uppercase text-lg font-bold mb-4">Contact</h6>
            <ul className="space-y-2 text-sm text-gray-300">
              {contactList.map((el, i) => (
                <li key={i}>
                  <a href="#!" className="hover:text-teal-400 transition-colors">{el}</a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-teal-400 text-xl"><FaTwitter /></a>
              <a href="#" className="text-gray-400 hover:text-teal-400 text-xl"><FaGithub /></a>
              <a href="#" className="text-gray-400 hover:text-teal-400 text-xl"><FaLinkedin /></a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 pt-4 pb-6 text-center text-sm text-gray-500">
          © 2025 <span className="font-semibold text-white ml-1">FundEther Inc.</span> All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
