
import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import VeritaDerm from './pages/VeritaDerm';
import Contact from './pages/Contact';
import EthicsPolicy from './pages/EthicsPolicy';

const App: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col selection:bg-black selection:text-white">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/veritaderm" element={<VeritaDerm />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/ethics" element={<EthicsPolicy />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;