import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 60,
      damping: 14,
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      duration: 0.8,
    },
  },
};

const NewsLetter = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/2 w-96 h-96 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-50 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          variants={childVariants}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-tight"
        >
          Be Part of the <span className="text-blue-600">Story</span>.
        </motion.h2>

        <motion.p
          variants={childVariants}
          className="mt-4 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto"
        >
          Join thousands of readers discovering new voices, ideas, and insights every week.
        </motion.p>

        <motion.div
          variants={childVariants}
          className="mt-8 sm:mt-10"
        >
          <form className="flex flex-col sm:flex-row gap-3 max-w-md sm:max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-5 py-3 border border-gray-300 rounded-full shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
              required
            />
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-medium rounded-full shadow-md hover:shadow-lg transition-all"
            >
              Subscribe
            </motion.button>
          </form>
          <p className="mt-3 text-sm text-gray-500">
            We care about your data. Read our{' '}
            <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default NewsLetter;