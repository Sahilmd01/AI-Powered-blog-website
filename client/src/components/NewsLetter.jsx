import React from 'react'
import { motion } from 'framer-motion'

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
}

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
}

const NewsLetter = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className='flex flex-col items-center justify-center text-center space-y-2 my-32 px-4'
    >
      <motion.h1
        variants={childVariants}
        className='md:text-4xl text-2xl font-semibold'
      >
        Be Part of the Story.
      </motion.h1>

      <motion.p
        variants={childVariants}
        className='md:text-lg text-gray-500 pb-8 max-w-xl'
      >
        Join thousands of readers discovering new voices, ideas, and insights every week.
      </motion.p>

      <motion.form
        variants={childVariants}
        className='flex items-center justify-between max-w-2xl w-full md:h-13 h-12'
      >
        <input
          type="text"
          placeholder='Enter email'
          className='border border-gray-300 rounded-md h-full border-r-0 outline-none w-full rounded-r-none px-3 text-gray-500'
          required
        />
        <button
          type='submit'
          className='md:px-12 px-8 h-full text-white transition-all cursor-pointer rounded-md rounded-l-none subscribe-btn'
        >
          Subscribe
        </button>
      </motion.form>
    </motion.div>
  )
}

export default NewsLetter
