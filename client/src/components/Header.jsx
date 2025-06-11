import React, { useRef } from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";
import { useAppContext } from "../context/AppContext";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 60,
      damping: 12,
    },
  },
};

const Header = () => {
  const { setInput, input } = useAppContext();
  const inputRef = useRef();

  const onsubmitHandler = async (e) => {
    e.preventDefault();
    setInput(inputRef.current.value);
  };

  const onClear = () => {
    setInput("");
    inputRef.current.value = "";
  };

  return (
    <motion.div
      className="mx-4 sm:mx-8 lg:mx-16 xl:mx-24 relative overflow-hidden"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <div className="text-center mt-12 sm:mt-20 mb-8 relative z-10">
        {/* Announcement Badge */}
        <motion.div
          variants={item}
          className="inline-flex items-center justify-center gap-2 px-4 py-1 mb-4 border border-blue-400/30 bg-blue-500/10 rounded-full text-sm text-blue-600 backdrop-blur-sm"
        >
          <img src={assets.star_icon} alt="star icon" className="w-3 h-3" />
          <p>New: AI Gemini Features Live</p>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          variants={item}
          className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-gray-800"
        >
          Where <span className="text-blue-600">Pages</span> Unfold<br />
          With <span className="text-blue-600">Purpose</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={item}
          className="my-6 sm:my-8 max-w-2xl mx-auto text-gray-600 text-sm sm:text-base leading-relaxed"
        >
          Whether you're sharing a personal journey, a fresh perspective, or a step-by-step guide, 
          Blogni is where your words find meaning. Start writing in minutes — and let your pages 
          unfold with purpose.
        </motion.p>

        {/* Search Form */}
        <motion.form
          variants={item}
          onSubmit={onsubmitHandler}
          className="flex justify-between max-w-lg mx-auto bg-white rounded-full shadow-lg overflow-hidden border border-gray-200 hover:border-blue-300 transition-all duration-200"
        >
          <input
            ref={inputRef}
            type="text"
            placeholder="Search for blogs..."
            className="w-full pl-6 pr-4 py-3 outline-none text-sm bg-transparent placeholder-gray-400"
            required
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 sm:px-8 py-3 m-1 rounded-full transition-all duration-300 ease-in-out cursor-pointer shadow-md hover:shadow-lg hover:from-blue-600 hover:to-blue-700 active:scale-95 flex items-center"
          >
            <span className="hidden sm:inline">Search</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:ml-2 sm:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </motion.form>

        {/* Clear Button */}
        {input && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4"
          >
            <button
              onClick={onClear}
              className="inline-flex items-center text-xs text-gray-500 hover:text-gray-700 transition-colors"
            >
              Clear search
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </motion.div>
        )}
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>
    </motion.div>
  );
};

export default Header;