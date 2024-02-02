import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-500 to-purple-500 to-#11161B fixed w-full z-20 top-0 border-b border-gray-600">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        <div className="flex items-center">
          <span className="text-white text-2xl font-semibold">Logo</span>
        </div>

        <div className="flex items-center space-x-4">
          <a
            href="#"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            Home
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            Games
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            About
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            Contact
          </a>
        </div>

        <div className="flex space-x-3">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
          >
            Get started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
