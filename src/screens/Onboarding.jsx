import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png'; // Make sure logo.png exists in assets

const Onboarding = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-5 bg-white">
      <img 
        src={logo} 
        alt="GlowCart Logo" 
        className="w-36 h-36 mb-8 object-contain" 
      />
      <h1 className="text-2xl font-bold text-gray-800 mb-10">
        Your Beauty, Delivered
      </h1>
      <button
        onClick={() => navigate('/login')}
        className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-full w-4/5 max-w-xs transition-colors"
      >
        Get Started
      </button>
    </div>
  );
};

export default Onboarding;