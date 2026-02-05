
import React from 'react';
import FadeInSection from '../components/FadeInSection';

const About: React.FC = () => {
  return (
    <div className="pt-40 px-6 pb-32">
      <div className="max-w-4xl mx-auto">
        <FadeInSection>
          <h1 className="text-6xl font-bold tracking-premium mb-12">Transparency in Intelligence.</h1>
          <p className="text-2xl text-gray-500 font-light leading-relaxed mb-16">
            Arkito Lab is a non-profit collective dedicated to the research and development of robust Deep Learning systems for real-world impact.
          </p>
        </FadeInSection>

        <FadeInSection delay={200} className="space-y-12">
          <div>
            <h2 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-6">Our DNA</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <p className="text-lg leading-relaxed text-gray-600">
                We operate as an open-source research entity. We believe that powerful Machine Learning models shouldn't be black boxes or locked behind corporate paywalls. By releasing our code and weights, we enable global auditability.
              </p>
              <p className="text-lg leading-relaxed text-gray-600">
                While our primary applications often touch healthcare, our core research is in specialized vision backbones (DL/CV) that offer high precision with minimal computational overhead for edge-device deployment.
              </p>
            </div>
          </div>

          <div className="pt-24">
            <h2 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-12">The Collective</h2>
            <div className="flex justify-center">
              <div className="group cursor-pointer max-w-xs text-center">
                <div className="aspect-square bg-softGrey rounded-[3rem] overflow-hidden mb-8 shadow-2xl border border-gray-100 transition-all duration-700 hover:scale-105">
                  <img 
                    src="https://i.pinimg.com/736x/d4/8a/5c/d48a5cd0f75480f4e61e52d8f243cfa8.jpg" 
                    alt="M Mashhudur Rahim" 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
                  />
                </div>
                <h4 className="font-bold text-3xl font-syne mb-2">M Mashhudur Rahim</h4>
                <p className="text-[10px] text-blue-500 uppercase tracking-[0.4em] font-black">Research Lead</p>
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>
    </div>
  );
};

export default About;
