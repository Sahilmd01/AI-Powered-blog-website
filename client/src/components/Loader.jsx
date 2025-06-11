import React from 'react';

const Loader = ({ 
  size = 'md', 
  color = 'blue', 
  fullScreen = true,
  message = 'Loading...' 
}) => {
  // Size variants
  const sizeClasses = {
    sm: 'h-8 w-8 border-2',
    md: 'h-16 w-16 border-4',
    lg: 'h-24 w-24 border-6'
  };

  // Color variants
  const colorClasses = {
    blue: 'border-t-blue-500 border-blue-200',
    white: 'border-t-white border-white/20',
    gray: 'border-t-gray-600 border-gray-200',
    purple: 'border-t-purple-500 border-purple-200',
    pink: 'border-t-pink-500 border-pink-200'
  };

  return (
    <div className={`flex flex-col items-center justify-center ${fullScreen ? 'h-screen' : 'h-auto py-16'}`}>
      <div 
        className={`animate-spin rounded-full ${sizeClasses[size]} ${colorClasses[color]} ease-linear`}
        style={{ animationDuration: '0.8s' }}
      ></div>
      
      {message && (
        <p className={`mt-4 font-medium ${
          color === 'white' ? 'text-white' : 'text-gray-700'
        }`}>
          {message}
        </p>
      )}
    </div>
  );
};

export default Loader;