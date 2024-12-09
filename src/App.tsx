// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/navbar';
import { HomePage } from './pages/home';
import { AboutPage } from './pages/about';
import { SolutionsPage } from './pages/solutions';
import { PricingPage } from './pages/pricing';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/pricing" element={<PricingPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;