import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hero: React.FC = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/getting-started');
  };

  const openDocs = () => {
    window.open('https://github.com/JENkt4k/launchpad-react-template', '_blank');
  };

  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <div className="container mx-auto px-6 py-24">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">
            Welcome to Launchpad React Template
          </h1>
          <p className="text-xl mb-8">
            A modern full-stack template for building React applications
          </p>
          <div className="space-x-4">
            <button 
              onClick={handleGetStarted}
              className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Get Started
            </button>
            <button 
              onClick={openDocs}
              className="border-2 border-white px-6 py-2 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Documentation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;