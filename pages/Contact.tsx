
import React, { useState } from 'react';
import FadeInSection from '../components/FadeInSection';
import { NodeBackground, Logo } from '../constants';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    
    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch("https://formspree.io/f/mdalndbl", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setStatus('sent');
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 3000);
      }
    } catch (error) {
      console.error("Transmission failure:", error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <div className="relative pt-48 pb-40 min-h-screen">
      <NodeBackground />
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
          
          <div className="flex flex-col justify-center">
            <FadeInSection>
              <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#007AFF] mb-12 block">Secure Uplink Established</span>
              <h1 className="text-7xl md:text-9xl font-bold tracking-premium leading-[0.85] mb-12">Connect <br /> with the Lab.</h1>
              <p className="text-xl text-gray-500 font-light max-w-md mb-16 leading-relaxed">
                Our research team is selectively open for mission-aligned collaborations and open-source contributions.
              </p>
              
              <div className="space-y-16">
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-300 block mb-4">Central Communications Protocol</label>
                  <a href="mailto:arkitolabs@protonmail.com" className="text-4xl font-bold border-b-4 border-[#1B2B44] pb-2 hover:text-blue-500 transition-all font-syne">
                    arkitolabs@protonmail.com
                  </a>
                </div>
                
                <div className="grid grid-cols-2 gap-12 pt-8">
                  <a href="https://twitter.com/arkitolab" target="_blank" rel="noopener noreferrer" className="group cursor-pointer block">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-300 block mb-3">Twitter</label>
                    <span className="font-bold text-lg group-hover:text-blue-500 transition-colors">@arkitolab</span>
                  </a>
                  <a href="https://huggingface.co/collections/arkito/verita-visions" target="_blank" rel="noopener noreferrer" className="group cursor-pointer block">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-300 block mb-3">HuggingFace</label>
                    <span className="font-bold text-lg group-hover:text-blue-500 transition-colors">/arkito-research</span>
                  </a>
                  <a href="https://linkedin.com/company/arkitolab" target="_blank" rel="noopener noreferrer" className="group cursor-pointer block">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-300 block mb-3">LinkedIn</label>
                    <span className="font-bold text-lg group-hover:text-blue-500 transition-colors">/arkitolab</span>
                  </a>
                  <a href="https://github.com/arkitolab" target="_blank" rel="noopener noreferrer" className="group cursor-pointer block">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-300 block mb-3">GitHub</label>
                    <span className="font-bold text-lg group-hover:text-blue-500 transition-colors">/arkito-lab</span>
                  </a>
                </div>
              </div>
            </FadeInSection>
          </div>

          <FadeInSection delay={400}>
            <div className="bg-white/90 backdrop-blur-2xl border border-gray-100 rounded-[4rem] p-12 md:p-20 shadow-3xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-10 opacity-10">
                <Logo className="w-24 h-24" />
              </div>

              {status === 'sent' ? (
                <div className="text-center py-20">
                  <div className="w-24 h-24 bg-[#1B2B44] text-white rounded-full flex items-center justify-center mx-auto mb-10 shadow-2xl animate-bounce">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <h3 className="text-4xl font-bold mb-6">Packet Transmitted</h3>
                  <p className="text-gray-500 font-light mb-12 leading-relaxed">Your inquiry has been stored in our high-priority queue. Check your email for a confirmation if applicable.</p>
                  <button onClick={() => setStatus('idle')} className="text-[10px] font-bold uppercase tracking-widest border-b border-[#1B2B44] pb-1 hover:text-blue-500">Initialize New Transmission</button>
                </div>
              ) : (
                <form className="space-y-12" onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block ml-2">Identity / Affiliation</label>
                    <input 
                      required
                      name="name"
                      type="text" 
                      className="w-full bg-gray-50 border-b border-gray-100 px-8 py-6 outline-none focus:border-[#1B2B44] focus:bg-white transition-all text-sm font-medium rounded-2xl" 
                      placeholder="Name or Lab Identity" 
                    />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block ml-2">Return Vector (Email)</label>
                    <input 
                      required
                      name="email"
                      type="email" 
                      className="w-full bg-gray-50 border-b border-gray-100 px-8 py-6 outline-none focus:border-[#1B2B44] focus:bg-white transition-all text-sm font-medium rounded-2xl" 
                      placeholder="secure@uplink.com" 
                    />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block ml-2">Objective / Proposal</label>
                    <textarea 
                      required
                      name="message"
                      rows={5} 
                      className="w-full bg-gray-50 border-b border-gray-100 px-8 py-6 outline-none focus:border-[#1B2B44] focus:bg-white transition-all text-sm font-medium resize-none rounded-3xl" 
                      placeholder="Detail your research project or inquiry..."
                    ></textarea>
                  </div>
                  
                  {status === 'error' && (
                    <p className="text-red-500 text-[10px] font-bold uppercase tracking-widest text-center">Transmission Error. Please retry.</p>
                  )}

                  <button 
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full bg-[#1B2B44] text-white font-bold py-7 rounded-3xl uppercase tracking-[0.4em] text-[10px] hover:scale-[1.02] active:scale-95 transition-all shadow-2xl disabled:opacity-50"
                  >
                    {status === 'sending' ? 'Transmitting...' : 'Send Packet_'}
                  </button>
                </form>
              )}
            </div>
          </FadeInSection>

        </div>
      </div>
    </div>
  );
};

export default Contact;
