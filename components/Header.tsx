
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Logo } from '../constants';

const Header: React.FC = () => {
  const location = useLocation();
  
  const navItems = [
    { label: 'Foundry', path: '/' },
    { label: 'VeritaDerm', path: '/veritaderm' },
    { label: 'Mission', path: '/about' },
    { label: 'Protocol', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-4 group">
          <Logo className="w-10 h-10 transition-transform duration-700 group-hover:rotate-[360deg]" />
          <span className="font-extrabold text-2xl tracking-tighter text-[#1B2B44] font-syne">ARKITO LAB</span>
        </Link>
        
        <div className="hidden lg:flex items-center gap-12">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-[10px] uppercase tracking-[0.3em] font-bold transition-all hover:text-[#007AFF] hover:translate-y-[-1px] ${
                location.pathname === item.path ? 'text-[#007AFF]' : 'text-gray-400'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <a 
          href="https://huggingface.co/collections/arkito/verita-visions" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-[#1B2B44] text-white text-[9px] font-bold px-8 py-3.5 rounded-full hover:scale-105 active:scale-95 transition-all uppercase tracking-[0.2em] shadow-lg"
        >
          Repository_
        </a>
      </div>
    </nav>
  );
};

export default Header;
