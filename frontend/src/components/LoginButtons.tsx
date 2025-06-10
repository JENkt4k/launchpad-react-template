import React from 'react';
import { useAuth } from '../context/AuthContext';

const LoginButtons: React.FC = () => {
  const { login } = useAuth();

  return (
    <div className="space-y-4">
      <button
        onClick={() => login('linkedin')}
        className="flex items-center px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
          {/* LinkedIn icon */}
        </svg>
        Sign in with LinkedIn
      </button>
      <button
        onClick={() => login('twitter')}
        className="flex items-center px-6 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600"
      >
        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
          {/* Twitter icon */}
        </svg>
        Sign in with Twitter
      </button>
    </div>
  );
};

export default LoginButtons;