import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import GettingStarted from './pages/GettingStarted';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/getting-started" element={<GettingStarted />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;