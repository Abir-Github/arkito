
import React from 'react';
import FadeInSection from '../components/FadeInSection';

const VeritaDerm: React.FC = () => {
  return (
    <div className="pt-20">
       <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center mb-24">
            <FadeInSection>
              <h1 className="text-6xl md:text-8xl font-bold tracking-premium mb-8">VeritaDerm.</h1>
              <p className="text-xl text-gray-400 max-w-3xl font-light leading-relaxed">
                Advanced open-source dermatological classifier. Built on YOLOv11 custom backbones for surgical-grade precision at the edge.
              </p>
            </FadeInSection>
          </div>

          <FadeInSection className="relative w-full aspect-[21/9] rounded-[40px] overflow-hidden bg-gray-100 shadow-2xl mb-32 group">
            <img 
              src="https://picsum.photos/seed/veritaderm-full/1800/800" 
              alt="VeritaDerm Dashboard" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <div className="bg-white/95 backdrop-blur-md p-10 rounded-[32px] max-w-md shadow-2xl border border-white/20">
                 <div className="flex justify-between items-center mb-6">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-blue-500">Benchmark Validated</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">v2.0.4</span>
                 </div>
                 <h3 className="font-bold text-4xl mb-4 tabular-nums">85.4% mAP</h3>
                 <p className="text-sm text-gray-500 leading-relaxed font-light">
                   Our latest model weights consistently outperform commercial benchmarks on the ISIC 2024 test suite while maintaining 1/10th the parameter count.
                 </p>
              </div>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <FadeInSection delay={100}>
              <h3 className="text-xl font-bold mb-4 tracking-tight">Multi-Class Vision</h3>
              <p className="text-gray-400 font-light text-sm leading-relaxed">
                Identify 8+ disease classes including Melanoma, Basal Cell Carcinoma, and rare conditions with a single pass inference using our custom DL backbones.
              </p>
            </FadeInSection>
            <FadeInSection delay={200}>
              <h3 className="text-xl font-bold mb-4 tracking-tight">Explainable DL</h3>
              <p className="text-gray-400 font-light text-sm leading-relaxed">
                Integrated Grad-CAM visualizations provide deterministic reasoning for every prediction, vital for medical accountability.
              </p>
            </FadeInSection>
            <FadeInSection delay={300}>
              <h3 className="text-xl font-bold mb-4 tracking-tight">Ethical CV</h3>
              <p className="text-gray-400 font-light text-sm leading-relaxed">
                Trained on the Arkito Diversity Dataset to ensure equal accuracy across all skin tones and lighting conditions.
              </p>
            </FadeInSection>
          </div>
        </div>
      </section>
      
      <section className="bg-softGrey py-32 px-6 text-center">
        <FadeInSection className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Ready to integrate?</h2>
          <p className="text-gray-400 font-light mb-12">Download the weights and documentation via our public repository.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-black text-white px-10 py-4 rounded-full font-bold text-xs tracking-widest uppercase">
              Get Model Weights
            </button>
            <button className="bg-white border border-gray-200 text-black px-10 py-4 rounded-full font-bold text-xs tracking-widest uppercase hover:bg-gray-50">
              Technical Docs
            </button>
          </div>
        </FadeInSection>
      </section>
    </div>
  );
};

export default VeritaDerm;
