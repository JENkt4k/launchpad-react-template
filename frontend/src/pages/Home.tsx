import React from 'react';
import Hero from '../components/Hero';

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <div className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-6">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard 
            title="React + TypeScript"
            description="Modern frontend development with type safety"
          />
          <FeatureCard 
            title="Express Backend"
            description="Scalable Node.js backend with Express"
          />
          <FeatureCard 
            title="Docker Ready"
            description="Containerized development and deployment"
          />
        </div>
      </div>
    </div>
  );
};

const FeatureCard: React.FC<{ title: string; description: string }> = ({ title, description }) => (
  <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default Home;