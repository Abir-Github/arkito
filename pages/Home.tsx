
import React from 'react';
import FadeInSection from '../components/FadeInSection';
import { NodeBackground, Logo } from '../constants';

const ServerBlade = ({ name, latency, active }: { name: string, latency: string, active?: boolean }) => (
  <div className="relative group perspective-2000">
    {/* Main Card */}
    <div className="bg-[#0F172A] border border-white/5 rounded-2xl p-7 h-64 flex flex-col justify-between transition-all duration-1000 transform-gpu group-hover:rotate-x-12 group-hover:rotate-y-[-15deg] group-hover:scale-105 group-hover:border-blue-500/40 shadow-[0_30px_60px_rgba(0,0,0,0.8)] overflow-hidden">
      
      {/* Hyper-detailed backplate pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[size:10px_10px]"></div>
      
      {/* High-speed vertical data scan */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-full h-1/2 bg-gradient-to-b from-transparent via-blue-500/[0.07] to-transparent -translate-y-full animate-[scanVertical_4s_infinite_linear]"></div>
      </div>

      <div className="relative z-10 flex justify-between items-start">
        <div className="flex flex-col gap-3">
          {/* Active Elements with Brightness/Saturation shift on hover */}
          <div className="flex gap-2 transition-all duration-500 group-hover:brightness-150 group-hover:saturate-200">
            {/* Blinking Status LEDs */}
            <div className={`w-1.5 h-1.5 rounded-full ${active ? 'bg-emerald-400 shadow-[0_0_12px_#34d399] animate-pulse' : 'bg-white/10'}`}></div>
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-[blink_0.8s_infinite] shadow-[0_0_8px_rgba(59,130,246,0.5)]"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-[blink_1.2s_infinite_0.2s] shadow-[0_0_8px_rgba(251,191,36,0.3)]"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-[blink_1.5s_infinite_0.4s]"></div>
          </div>
          <div className="flex flex-col gap-1 transition-all duration-500 group-hover:brightness-125">
            <span className="text-[7px] font-mono text-blue-400/60 tracking-[0.4em] uppercase font-bold">Node_Status: Active</span>
            <span className="text-[6px] font-mono text-white/20 tracking-[0.2em] uppercase tabular-nums">Uptime: 99.9997%</span>
          </div>
        </div>
        
        {/* Tech chip detail */}
        <div className="w-8 h-8 rounded border border-white/5 bg-white/[0.02] flex items-center justify-center transition-all group-hover:border-blue-500/30 group-hover:bg-blue-500/10">
          <div className="w-4 h-4 border border-blue-500/20 rounded-sm animate-pulse"></div>
        </div>
      </div>

      <div className="relative z-10 transition-all duration-500 group-hover:translate-x-1">
        <div className="relative inline-block">
            {/* Subtle Ripple Effect on Hover - Originating from text */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                <div className="absolute inset-0 border border-blue-500/10 rounded-full scale-0 group-hover:animate-[ripple_2.5s_infinite_cubic-bezier(0,0.2,0.8,1)]"></div>
            </div>

            <h4 className="text-white font-['Satoshi'] font-bold tracking-wide text-[10px] mb-2 transition-colors uppercase border-l-2 border-blue-500/30 pl-3">
            {name}
            </h4>
            <div className="flex items-center gap-3 relative">
            {/* Satoshi font for latency - Smaller size as requested */}
            <span className="text-blue-400 font-['Satoshi'] font-bold tracking-wide text-[14px] tabular-nums drop-shadow-[0_0_12px_rgba(59,130,246,0.5)] group-hover:brightness-150 transition-all">
                {latency}
            </span>
            <div className="flex-grow h-[1px] bg-gradient-to-r from-blue-500/30 to-transparent group-hover:from-blue-500/70 transition-all"></div>
            </div>
        </div>
      </div>

      {/* Synchronized Activity Matrix */}
      <div className="relative z-10 grid grid-cols-8 gap-1.5 mt-4 transition-all duration-700 group-hover:brightness-150 group-hover:saturate-200">
        {[...Array(16)].map((_, i) => (
          <div 
            key={i} 
            className={`h-1.5 rounded-full transition-all duration-500 ${Math.random() > 0.3 ? 'bg-blue-500/30 animate-pulse' : 'bg-white/5'}`}
            style={{ animationDelay: `${i * 0.05}s` }}
          ></div>
        ))}
      </div>
      
      {/* Internal "Heat" Glow */}
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-600/10 blur-[60px] rounded-full group-hover:bg-blue-500/30 transition-all duration-1000"></div>
    </div>
  </div>
);

const ElegantServerCluster = () => (
  <div className="relative w-full p-12 bg-[#020617] rounded-[4rem] border border-white/5 overflow-hidden shadow-[0_80px_160px_-30px_rgba(0,0,0,0.9)] group/cluster">
    {/* Cinematic Atmosphere */}
    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 blur-[180px] rounded-full animate-pulse pointer-events-none"></div>
    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-900/10 blur-[180px] rounded-full animate-pulse pointer-events-none" style={{ animationDelay: '3s' }}></div>
    
    {/* Global Grid Overlay */}
    <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

    {/* Flowing Data Stream Lines */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
       <div className="absolute top-[20%] left-[-100%] w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-[dataLine_8s_infinite_linear]"></div>
       <div className="absolute top-[50%] left-[-100%] w-full h-[1px] bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-[dataLine_12s_infinite_linear]" style={{ animationDelay: '2s' }}></div>
       <div className="absolute top-[80%] left-[-100%] w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent animate-[dataLine_10s_infinite_linear]" style={{ animationDelay: '5s' }}></div>
    </div>

    <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
      <ServerBlade 
        name="exp-4-jurong-west" 
        latency="9ms" 
        active 
      />
      <ServerBlade 
        name="exp-8-tel-aviv" 
        latency="3ms" 
        active 
      />
      
      {/* Central "Neural Core" Module */}
      <div className="md:col-span-2 bg-gradient-to-br from-white/[0.03] to-transparent border border-white/10 rounded-[3rem] p-12 flex flex-col md:flex-row items-center justify-between backdrop-blur-3xl relative overflow-hidden shadow-2xl transition-all duration-700 hover:border-blue-500/30">
        <div className="absolute inset-0 bg-blue-500/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
        
        {/* Core Animated Elements */}
        <div className="flex items-center gap-10 relative z-10 mb-10 md:mb-0">
          <div className="relative w-24 h-24">
             {/* Rotating Rings */}
             <div className="absolute inset-0 border-[3px] border-blue-500/10 rounded-full animate-[spin_10s_linear_infinite]"></div>
             <div className="absolute inset-3 border-2 border-dashed border-blue-500/20 rounded-full animate-[spin_6s_linear_infinite_reverse]"></div>
             <div className="absolute inset-6 border border-white/10 rounded-full"></div>
             
             {/* Pulsing Center */}
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute inset-0 bg-blue-400/20 blur-2xl animate-pulse scale-75"></div>
                <Logo className="w-12 h-12 relative z-10 drop-shadow-[0_0_15px_rgba(255,255,255,0.4)] transition-transform duration-1000 group-hover:scale-110" />
             </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse shadow-[0_0_10px_#3b82f6]"></span>
                <p className="text-blue-400 text-[10px] font-black uppercase tracking-[0.6em]">Core_Link: Established</p>
            </div>
            <p className="text-white text-2xl font-mono tracking-tighter font-bold uppercase">Arkito_Neural_Core v4.0</p>
            <div className="flex gap-2 pt-2">
                {[...Array(5)].map((_, i) => (
                    <div key={i} className={`h-1.5 w-8 rounded-full ${i < 3 ? 'bg-blue-600' : 'bg-white/10'} shadow-sm`}></div>
                ))}
            </div>
          </div>
        </div>

        {/* Dynamic Frequency Visualizer */}
        <div className="flex items-end gap-2 relative z-10 h-24 w-full md:w-auto">
           {[...Array(24)].map((_, i) => (
             <div key={i} className="flex-grow md:w-2 bg-white/5 rounded-full overflow-hidden h-full relative group/bar">
                <div 
                  className="absolute bottom-0 w-full bg-gradient-to-t from-blue-700 via-blue-400 to-white/60 rounded-full transition-all duration-300" 
                  style={{ 
                    height: `${15 + Math.random() * 85}%`, 
                    animation: `freqPulse 1.2s infinite ${i * 0.04}s cubic-bezier(0.4, 0, 0.2, 1)` 
                  }}
                ></div>
             </div>
           ))}
        </div>
      </div>
    </div>
  </div>
);

const Home: React.FC = () => {
  return (
    <div className="relative">
      <NodeBackground />
      
      {/* HERO SECTION */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-24 relative">
        <FadeInSection className="text-center max-w-5xl">
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="h-[1px] w-12 bg-gray-200"></div>
            <span className="text-[10px] font-bold uppercase tracking-[0.6em] text-[#1B2B44]">
              Advancing Open-Access Visual Intelligence
            </span>
            <div className="h-[1px] w-12 bg-gray-200"></div>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-premium leading-tight mb-12">
            Defining the <br /> 
            <span className="hero-text-outline">Architecture of Sight.</span>
          </h1>
          
          <p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto font-light leading-relaxed mb-16">
            Arkito Lab is a non-profit research collective engineering high-precision computer vision frameworks. 
            We bridge the gap between complex structural logic and scalable AI to empower the global community.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
             <a 
                href="https://huggingface.co/collections/arkito/verita-visions" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group bg-[#1B2B44] text-white px-12 py-6 rounded-full text-[10px] font-bold tracking-[0.3em] uppercase hover:scale-105 transition-all shadow-xl"
             >
                The Lab Protocol_
             </a>
             <a 
                href="https://twitter.com/arkitolab" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#1B2B44] text-[10px] font-bold tracking-[0.3em] uppercase border-b-2 border-transparent hover:border-[#1B2B44] transition-all pb-1"
             >
                Twitter @arkitolab →
             </a>
          </div>
        </FadeInSection>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-20 pointer-events-none">
            <div className="animate-bounce">
                <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7-7-7"></path>
                </svg>
            </div>
        </div>
      </section>

      {/* INFRASTRUCTURAL LOGIC SECTION */}
      <section className="py-40 px-6 bg-white overflow-hidden relative border-t border-gray-50">
        <style>{`
          @keyframes scanVertical {
            0% { transform: translateY(-100%); }
            100% { transform: translateY(200%); }
          }
          @keyframes blink {
            0%, 100% { opacity: 1; filter: brightness(1.2); }
            50% { opacity: 0.2; filter: brightness(0.5); }
          }
          @keyframes ripple {
            0% { transform: scale(0); opacity: 1; }
            100% { transform: scale(1); opacity: 0; }
          }
          @keyframes freqPulse {
            0%, 100% { transform: scaleY(1); opacity: 0.8; }
            50% { transform: scaleY(0.4); opacity: 0.4; }
          }
          @keyframes dataLine {
            0% { transform: translateX(-100%); opacity: 0; }
            20% { opacity: 0.8; }
            80% { opacity: 0.8; }
            100% { transform: translateX(100%); opacity: 0; }
          }
          .perspective-2000 {
            perspective: 2000px;
          }
        `}</style>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <FadeInSection>
              <h2 className="text-[10px] font-bold uppercase tracking-[0.5em] text-gray-400 mb-10">Infrastructural Logic</h2>
              <h3 className="text-5xl md:text-6xl font-extrabold tracking-premium mb-10">Global Hosting. <br /> Secure Infrastructure.</h3>
              <p className="text-gray-500 font-light text-xl leading-relaxed mb-12">
                Our model ecosystem is hosted on a high-availability server network designed for zero-latency research. 
                Arkito Lab utilizes distributed clusters to ensure our open-source tools remain accessible worldwide.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-8 bg-softGrey rounded-3xl border border-gray-100 group hover:border-blue-500 transition-all duration-500 cursor-pointer shadow-sm hover:shadow-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Flag_of_Singapore.svg/3840px-Flag_of_Singapore.svg.png" className="w-5 h-3 rounded-[2px] shadow-sm" alt="SG" />
                    <span className="block text-[10px] font-['Satoshi'] font-bold text-gray-400 uppercase tracking-wide">Primary Uplink</span>
                  </div>
                  <span className="text-sm font-['Satoshi'] font-bold tracking-wide text-gray-800 uppercase">exp-4-jurong-west</span>
                  <div className="mt-5 flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.5)] animate-pulse"></div>
                    <span className="text-[11px] font-['Satoshi'] font-bold tracking-wide text-emerald-600 uppercase tabular-nums">9MS LATENCY</span>
                  </div>
                </div>
                <div className="p-8 bg-softGrey rounded-3xl border border-gray-100 group hover:border-blue-500 transition-all duration-500 cursor-pointer shadow-sm hover:shadow-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <img src="https://cdn.britannica.com/53/1753-004-03582EDA/Flag-Israel.jpg" className="w-5 h-3 rounded-[2px] shadow-sm" alt="IL" />
                    <span className="block text-[10px] font-['Satoshi'] font-bold text-gray-400 uppercase tracking-wide">Secondary Hub</span>
                  </div>
                  <span className="text-sm font-['Satoshi'] font-bold tracking-wide text-gray-800 uppercase">exp-8-tel-aviv</span>
                  <div className="mt-5 flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.5)] animate-pulse"></div>
                    <span className="text-[11px] font-['Satoshi'] font-bold tracking-wide text-emerald-600 uppercase tabular-nums">3MS LATENCY</span>
                  </div>
                </div>
              </div>
            </FadeInSection>
            <FadeInSection delay={300}>
              <ElegantServerCluster />
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* MISSION SECTION */}
      <section className="py-40 px-6 bg-[#fcfcfc] border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <FadeInSection className="order-2 lg:order-1 relative">
               <div className="aspect-square rounded-[4rem] overflow-hidden shadow-3xl rotate-2">
                 <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80" 
                    alt="Data Science" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" 
                 />
               </div>
               <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-2xl border border-gray-50 max-w-xs">
                  <Logo className="w-10 h-10 mb-4" />
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-300 mb-2">AVAILABLE WORLDWIDE</p>
                  <p className="text-sm font-medium">Remote Research Institution</p>
               </div>
            </FadeInSection>
            
            <FadeInSection delay={300} className="order-1 lg:order-2">
              <h2 className="text-[10px] font-bold uppercase tracking-[0.5em] text-gray-400 mb-12">Non-Profit Commitment</h2>
              <h3 className="text-5xl md:text-7xl font-bold tracking-premium mb-12">Intelligence as <br /> a Human Right.</h3>
              <p className="text-gray-500 font-light text-xl leading-relaxed mb-10">
                At Arkito Lab, we believe that the tools to understand human health should belong to humanity. 
                Our research focuses on resource-agnostic vision backbones that perform in any clinical setting.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Zero-Profit Incentives</h4>
                    <p className="text-sm text-gray-400">All discoveries are released into the public domain.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Global Health Equity</h4>
                    <p className="text-sm text-gray-400">Targeting diseases that disproportionately affect under-served regions.</p>
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* TEAM VISUALS */}
      <section className="py-40 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
             <FadeInSection delay={100} className="md:col-span-2 overflow-hidden rounded-[4rem] h-[500px] shadow-2xl group">
               <img 
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1400&q=80" 
                  alt="Team Collaboration" 
                  className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105" 
               />
             </FadeInSection>
             <FadeInSection delay={300} className="overflow-hidden rounded-[4rem] h-[500px] shadow-2xl group">
               <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80" 
                  alt="Code Review" 
                  className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0" 
               />
             </FadeInSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
