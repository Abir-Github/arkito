
import React from 'react';
import FadeInSection from '../components/FadeInSection';

const papers = [
  {
    title: "YOLO11m-Med: Optimizing Real-time Vision for Sparse Medical Datasets",
    date: "Dec 2024",
    category: "Architecture",
    tags: ["YOLO11", "Computer Vision"]
  },
  {
    title: "VeritaDerm: A Global Dataset for Ethically Balanced Skin Disease Detection",
    date: "Oct 2024",
    category: "Data Ethics",
    tags: ["Dataset", "Skin Health"]
  },
  {
    title: "Edge-Inference Optimization for Healthcare in Low-Bandwidth Environments",
    date: "Aug 2024",
    category: "Deployment",
    tags: ["Mobile", "Low-Latency"]
  }
];

const Research: React.FC = () => {
  return (
    <div className="pt-40 px-6 pb-32 max-w-7xl mx-auto">
      <FadeInSection>
        <h1 className="text-6xl font-bold tracking-premium mb-12">Intelligence <br /> Transformed.</h1>
        <p className="text-xl text-gray-400 max-w-2xl font-light mb-24">
          Our research focuses on bridge the gap between heavy academic models and accessible healthcare tools.
        </p>
      </FadeInSection>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {papers.map((paper, idx) => (
          <FadeInSection key={idx} delay={idx * 100} className="border border-gray-100 p-8 rounded-3xl hover:border-black transition-colors group cursor-pointer">
            <div className="flex justify-between items-start mb-12">
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">{paper.category}</span>
              <span className="text-[10px] text-gray-300">{paper.date}</span>
            </div>
            <h3 className="text-2xl font-bold mb-8 group-hover:translate-x-2 transition-transform">{paper.title}</h3>
            <div className="flex gap-3 mt-auto">
              {paper.tags.map(tag => (
                <span key={tag} className="px-3 py-1 bg-softGrey rounded-full text-[10px] font-bold text-gray-500 uppercase tracking-widest">{tag}</span>
              ))}
            </div>
          </FadeInSection>
        ))}
      </div>

      <FadeInSection delay={400} className="mt-32 p-12 bg-black rounded-[40px] text-white flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="max-w-lg">
          <h2 className="text-3xl font-bold mb-4">Contribute to the Lab</h2>
          <p className="text-gray-400 font-light">Join 1,200+ researchers contributing to the VeritaDerm open-source ecosystem.</p>
        </div>
        <button className="bg-white text-black px-8 py-4 rounded-full font-bold text-sm tracking-widest whitespace-nowrap">
          VIEW ON HUGGINGFACE
        </button>
      </FadeInSection>
    </div>
  );
};

export default Research;
