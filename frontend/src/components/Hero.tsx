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
          <h2 className="text-3xl font-bold mb-6">
            "Hello World" Branch
          </h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-xl mb-4">
              Basic app setup with frontend routing and essential components.
            </p>
            <div className="text-left bg-blue-700/30 p-6 rounded-lg mb-8 font-mono">
              <p className="mb-2 font-semibold">Template Evolution:</p>
              <p className="mb-2 font-semibold">
                ├── hello-world      # Just frontend + routing
              </p>
              <p className="mb-2 font-semibold">
                ├── layout-added     # Layout components introduced
              </p>
              <p className="mb-2 font-semibold">
                ├── auth-oauth       # OAuth login added
              </p>
              <p className="mb-2 font-semibold">
                └── full-dashboard   # CRM, calendar, etc.
              </p>
            </div>
          </div>
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