import React from 'react';
import { assets } from '../assets/assets';
import { useAppContext } from '../context/AppContext';
import { motion } from 'framer-motion';

const Navbar = () => {
  const { navigate, token } = useAppContext();

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
      <div className="flex justify-between items-center py-4 px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img
            src={assets.logo}
            alt="logo"
            className="w-32 sm:w-40 transition-all duration-300 hover:opacity-90"
          />
        </motion.div>

        <div className="flex items-center gap-2 sm:gap-4">
          {/* Portfolio Button -visible on mobile */}
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href="https://yourportfolio.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 sm:gap-2 rounded-full text-xs sm:text-sm font-medium cursor-pointer px-3 sm:px-6 py-2 transition-all duration-300 ease-in-out bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md"
          >
            <span className="hidden xs:inline">Portfolio</span>
            <span className="xs:hidden">Portfolio</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </motion.a>

          {/* Auth Button */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => navigate("/admin")}
            className={`flex items-center gap-1 sm:gap-2 rounded-full text-xs sm:text-sm font-medium cursor-pointer px-3 sm:px-6 py-2 transition-all duration-300 ease-in-out ${token
                ? 'bg-blue-600 text-black shadow-md hover:bg-blue-700 hover:shadow-lg' // Dashboard (solid blue)
                : 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-md hover:from-blue-600 hover:to-blue-700' // Admin Login (gradient blue)
              }`}
          >
            {token ? 'Dashboard' : 'Admin Login'}
            <motion.img
              src={assets.arrow}
              className="w-2 sm:w-3 transition-transform duration-300"
              alt="arrow"
              animate={{
                x: token ? [0, 2, 0] : 0
              }}
              transition={{
                repeat: token ? Infinity : 0,
                duration: 1.5,
                ease: "easeInOut"
              }}
            />
          </motion.button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;