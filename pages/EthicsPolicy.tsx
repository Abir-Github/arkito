
import React from 'react';
import FadeInSection from '../components/FadeInSection';

const EthicsPolicy: React.FC = () => {
  return (
    <div className="pt-48 pb-40 px-6">
      <div className="max-w-4xl mx-auto">
        <FadeInSection>
          <span className="text-[10px] font-bold uppercase tracking-[0.6em] text-blue-500 mb-8 block">Governance Protocol</span>
          <h1 className="text-6xl font-bold tracking-premium mb-16 font-syne">Ethics & AI Integrity.</h1>
        </FadeInSection>

        <div className="space-y-24">
          <FadeInSection delay={100}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="col-span-1">
                <h2 className="text-sm font-bold uppercase tracking-widest text-gray-400">01 / Foundation</h2>
              </div>
              <div className="col-span-2">
                <p className="text-xl text-gray-600 font-light leading-relaxed">
                  Arkito Lab operates as a non-profit entity. Our primary objective is the advancement of medical visual intelligence without the constraints of profit-driven development. This independence allows us to prioritize accuracy and ethical safety above all market metrics.
                </p>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection delay={200}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="col-span-1">
                <h2 className="text-sm font-bold uppercase tracking-widest text-gray-400">02 / Bias Mitigation</h2>
              </div>
              <div className="col-span-2">
                <p className="text-xl text-gray-600 font-light leading-relaxed">
                  We acknowledge that computer vision systems have historically suffered from demographic bias. Arkito Lab implements mandatory adversarial testing across diverse skin phototypes and lighting conditions for all VeritaDerm releases to ensure equitable healthcare outcomes.
                </p>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection delay={300}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="col-span-1">
                <h2 className="text-sm font-bold uppercase tracking-widest text-gray-400">03 / Transparency</h2>
              </div>
              <div className="col-span-2">
                <p className="text-xl text-gray-600 font-light leading-relaxed">
                  "Open source" is not just a license; it is our research methodology. Every model weight, training hyperparameter, and validation suite is made public. We believe that critical medical infrastructure must be auditable by the global scientific community.
                </p>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection delay={400}>
            <div className="bg-[#0F172A] p-12 rounded-[3rem] text-white">
              <h3 className="text-2xl font-bold mb-6 font-syne">Declaration of Principles</h3>
              <p className="text-gray-400 font-light leading-relaxed mb-8">
                All models developed by Arkito Lab are strictly for auxiliary research purposes. We maintain that AI should empower clinicians, not replace human judgment.
              </p>
              <div className="flex gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse delay-75"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse delay-150"></div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </div>
  );
};

export default EthicsPolicy;