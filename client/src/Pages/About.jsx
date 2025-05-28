import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#0f2027] via-[#2c5364] to-[#24243e] overflow-hidden">
      {/* Animated Gradient Blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 opacity-30 rounded-full filter blur-3xl animate-blob1"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 opacity-30 rounded-full filter blur-3xl animate-blob2"></div>
      
      {/* Glassmorphism Card */}
      <div className="relative z-10 w-full max-w-4xl px-8 py-12 bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 space-y-10">
        <h1 className="text-6xl font-extrabold text-center text-white tracking-tight drop-shadow-lg animate-fade-in">
          <span className="bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-blue-400 bg-clip-text text-transparent">
            About Us
          </span>
        </h1>
        
        <div className="flex justify-center">
          {/* Futuristic Icon */}
          <svg className="w-20 h-20 text-cyan-400 animate-pulse" fill="none" viewBox="0 0 48 48">
            <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="4" />
            <path d="M24 8v16l12 8" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
          </svg>
        </div>

        <p className="text-2xl text-white/90 max-w-3xl text-center mx-auto leading-relaxed font-light">
          Welcome to the future of web experiences! Our team is passionate about innovation, creativity, and delivering next-gen solutions. Join us as we shape tomorrow, today.
        </p>

        <div className="flex flex-wrap justify-center gap-6 mt-10">
          <Link to="/signin">
            <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl shadow-lg hover:from-cyan-400 hover:to-blue-600 transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-cyan-400">
              Sign In
            </button>
          </Link>
          <Link to="/signup">
            <button className="px-8 py-3 bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white font-semibold rounded-xl shadow-lg hover:from-pink-400 hover:to-fuchsia-600 transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-pink-400">
              Sign Up
            </button>
          </Link>
          <Link to="/developers">
            <button className="px-8 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold rounded-xl shadow-lg hover:from-purple-400 hover:to-indigo-600 transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-purple-400">
              Developers
            </button>
          </Link>
          <Link to="/dashboard">
            <button className="px-8 py-3 bg-gradient-to-r from-gray-700 to-gray-900 text-white font-semibold rounded-xl shadow-lg hover:from-gray-600 hover:to-black transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-gray-400">
              Dashboard
            </button>
          </Link>
        </div>

        <p className="text-lg text-white/70 max-w-2xl text-center mx-auto mt-8 font-medium tracking-wide">
          Thank you for exploring the future with us!
        </p>
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes blob1 {
            0%, 100% { transform: translate(0, 0) scale(1); }
            50% { transform: translate(-40px, 40px) scale(1.1); }
          }
          @keyframes blob2 {
            0%, 100% { transform: translate(0, 0) scale(1); }
            50% { transform: translate(40px, -40px) scale(1.1); }
          }
          .animate-blob1 { animation: blob1 8s infinite ease-in-out; }
          .animate-blob2 { animation: blob2 8s infinite ease-in-out; }
        `}
      </style>
    </div>
  );
}

export default About;
