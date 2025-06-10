import React from 'react';

const GettingStarted: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8">Getting Started</h1>
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Quick Start</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <pre className="whitespace-pre-wrap font-mono text-sm">
              {`# Clone the repository
git clone https://github.com/JENkt4k/launchpad-react-template.git

# Install dependencies
cd launchpad-react-template
npm install

# Start the development server
docker-compose up`}
            </pre>
          </div>
        </section>
      </div>
    </div>
  );
};

export default GettingStarted;