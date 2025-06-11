import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export const BlogCard = ({ blog }) => {
  const { title, description, category, image, _id } = blog;
  const navigate = useNavigate();

  return (
    <motion.div
      onClick={() => navigate(`/blog/${_id}`)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      whileHover={{ 
        y: -8, 
        boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.2)",
        borderColor: "rgba(59, 130, 246, 0.5)"
      }}
      className="w-full bg-white rounded-lg overflow-hidden shadow-md border border-gray-200 hover:border-blue-200 transition-all duration-300 cursor-pointer group relative"
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-lg pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
           style={{
             boxShadow: "inset 0 0 0 1px rgba(59, 130, 246, 0.3)",
           }}
      ></div>

      {/* Image with gradient overlay */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent" />
        <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-blue-600 text-white text-xs font-semibold shadow-sm border border-blue-700">
          {category}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="mb-3 text-xl font-bold text-gray-900 leading-tight line-clamp-2">
          {title}
        </h3>
        
        <div
          className="mb-4 text-gray-600 text-sm leading-relaxed line-clamp-3"
          dangerouslySetInnerHTML={{ __html: description }}
        />

        <div className="flex items-center justify-between border-t border-gray-100 pt-4">
          <button
            className="flex items-center text-blue-600 font-medium text-sm hover:text-blue-800 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/blog/${_id}`);
            }}
          >
            Read more
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <span className="text-xs text-gray-400">3 min read</span>
        </div>
      </div>
    </motion.div>
  );
};