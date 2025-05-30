import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-black px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-white mb-4 animate-pulse">404</h1>
        <div className="relative">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-purple-500 to-transparent absolute top-0"></div>
          <h2 className="text-3xl md:text-4xl font-medium text-gray-300 mb-8">Page Not Found</h2>
          <div className="h-px w-full bg-gradient-to-r from-transparent via-purple-500 to-transparent absolute bottom-0"></div>
        </div>
        <p className="text-gray-400 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold rounded-xl 
          hover:from-purple-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 
          focus:outline-none focus:ring-2 focus:ring-purple-400 inline-block"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;