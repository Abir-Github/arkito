
import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-24">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <Logo className="w-8 h-8" />
              <span className="font-bold text-2xl tracking-tighter">ARKITO LAB</span>
            </div>
            <p className="text-gray-400 max-w-sm leading-relaxed font-light text-lg">
              Architecting the next epoch of Machine Perception through open-source excellence and ethical DL research.
            </p>
          </div>
          
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-black mb-8">Navigation_</h4>
            <ul className="space-y-4 text-sm font-medium text-gray-400">
              <li><a href="https://huggingface.co/collections/arkito/verita-visions" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">Vision Models</a></li>
              <li><Link to="/veritaderm" className="hover:text-black transition-colors">VeritaDerm DL</Link></li>
              <li><Link to="/ethics" className="hover:text-black transition-colors">Ethics Policy</Link></li>
              <li><a href="https://huggingface.co/collections/arkito/verita-visions" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">HuggingFace Repo</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-black mb-8">Contact_</h4>
            <ul className="space-y-4 text-sm font-medium text-gray-400">
              <li><a href="mailto:arkitolabs@protonmail.com" className="text-black font-bold">arkitolabs@protonmail.com</a></li>
              <li><a href="https://twitter.com/arkitolab" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">Twitter (X)</a></li>
              <li><a href="https://linkedin.com/company/arkitolab" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">LinkedIn</a></li>
              <li><a href="https://github.com/arkitolab" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">GitHub</a></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-50 text-[10px] uppercase tracking-[0.2em] text-gray-300 font-bold">
          <p>© 2024 Arkito Lab Collective. Non-Profit Entity.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <Link to="/ethics" className="hover:text-gray-500">Ethics_Protocol_</Link>
            <a href="#" className="hover:text-gray-500">Privacy_</a>
            <a href="#" className="hover:text-gray-500">Security_</a>
            <a href="#" className="hover:text-gray-500">API_Status_</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;