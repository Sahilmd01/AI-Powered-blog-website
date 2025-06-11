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
      className="mx-8 sm:mx-16 xl:mx-24 relative"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <div className="text-center mt-20 mb-8">
        <motion.div
          variants={item}
          className="inline-flex items-center justify-center gap-4 px-6 py-1.5 mb-4 border border-primary/40 bg-primary/10 rounded-full text-sm"
        >
          <p>New: AI Gemini Features Live</p>
          <img src={assets.star_icon} alt="star icon" className="w-2.5" />
        </motion.div>

        <motion.h1
          variants={item}
          className="text-3xl sm:text-6xl font-semibold sm:leading-16 text-gray-700"
        >
          Where <span className="text-blue-500">Pages</span> Unfold With{" "}
          <span className="text-blue-500">Purpose</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="my-6 sm:my-8 max-w-2xl m-auto max-sm:text-xs"
        >
          Whether you're sharing a personal journey, a fresh perspective, or a step-by-step guide, Blogni is where your words find meaning.
          Start writing in minutes — and let your pages unfold with purpose.
        </motion.p>

        {/* Search Form */}
        <motion.form
          variants={item}
          onSubmit={onsubmitHandler}
          className="flex justify-between max-w-lg max-sm:scale-75 mx-auto border border-gray-300 rounded-full shadow-lg overflow-hidden input-form"
        >
          <input
            ref={inputRef}
            type="text"
            placeholder="Search for blogs"
            className="w-full pl-4 py-2 outline-none text-sm bg-white"
            required
          />
          <button
            type="submit"
            className="search-btn text-white px-8 py-2 m-1 rounded-full transition-all duration-300 ease-in-out cursor-pointer shadow-md hover:shadow-[0_0_12px_2px_#00f0ff] hover:bg-[#00f0ff] hover:text-black"
          >
            Search
          </button>
        </motion.form>

        {/* Clear Button */}
        <div className="text-center">
          {input && (
            <button
              onClick={onClear}
              className="border font-light text-xs py-1 mt-3 px-3 rounded-sm shadow-custom-sm cursor-pointer"
            >
              Clear Search
            </button>
          )}
        </div>
      </div>

      {/* Background Image */}
      <img
        src={assets.gradientBackground}
        alt="background"
        className="absolute -top-50 -z-1 opacity-50"
      />
    </motion.div>
  );
};

export default Header;
