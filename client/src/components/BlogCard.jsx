import React from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

export const BlogCard = ({ blog }) => {
  const { title, description, category, image, _id } = blog
  const navigate = useNavigate()

  return (
    <motion.div
      onClick={() => navigate(`/blog/${_id}`)}
      initial={{ opacity: 0, scale: 0.85, y: 60 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.8,
        type: 'spring',
        stiffness: 100,
        damping: 15,
      }}
      className='w-full rounded-lg overflow-hidden shadow hover:scale-102 hover:shadow-lg blog-card duration-300 cursor-pointer'
    >
      <img src={image} alt="image" className='aspect-video' />
      
      <span className='ml-5 mt-4 px-3 py-1 inline-block rounded-full category-span'>
        {category}
      </span>

      <div className='p-5'>
        <h5 className='mb-2 font-medium text-gray-900'>{title}</h5>
        <p
          className='mb-3 text-xs text-gray-600'
          dangerouslySetInnerHTML={{ __html: description.slice(0, 80) }}
        />
      </div>
    </motion.div>
  )
}

