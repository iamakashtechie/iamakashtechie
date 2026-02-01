import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Works from './pages/Works';
import Blog from './pages/Blog';
import Navbar from './components/Navbar';
import Loader from './components/Loader';
import CustomCursor from './components/CustomCursor';
import SmoothScroll from './components/SmoothScroll';

import UnderConstruction from './components/UnderConstruction';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<UnderConstruction title="About Me" />} />
      <Route path="/works" element={<UnderConstruction title="My Works" />} />
      <Route path="/blog" element={<UnderConstruction title="Insights & Blog" />} />
    </Routes>
  );
};

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <SmoothScroll>
        <div className="relative min-h-screen bg-brand-dark text-brand-light font-sans selection:bg-brand-accent selection:text-white cursor-none">
          <div className="noise-overlay fixed inset-0 z-50 pointer-events-none opacity-[0.03]"></div>

          {loading ? (
            <Loader />
          ) : (
            <>
              <CustomCursor />
              <AppRoutes />
            </>
          )}
        </div>
      </SmoothScroll>
    </Router>
  );
}

export default App;
