
import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const communityLogos = [
  {
    name: "IEEE",
    image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "ETL Online",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "TechHub",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "CodeCamp",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "DevConnect",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "CodeZen",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=300&q=80",
  },
];

const Community: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(0);
  
  useEffect(() => {
    const calculateMaxIndex = () => {
      const itemsPerView = window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3;
      setMaxIndex(Math.max(0, communityLogos.length - itemsPerView));
    };

    calculateMaxIndex();
    window.addEventListener('resize', calculateMaxIndex);
    return () => window.removeEventListener('resize', calculateMaxIndex);
  }, []);

  const handlePrev = () => {
    setCurrentIndex(Math.max(0, currentIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex(Math.min(maxIndex, currentIndex + 1));
  };

  return (
    <section id="community" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div className="mb-8 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold font-orbitron mb-4 text-white">Community <span className="text-space-purple">&amp; Impact</span></h2>
            <div className="w-24 h-1 bg-gradient-to-r from-space-purple to-space-blue mb-4 rounded-full"></div>
            <p className="text-gray-300 max-w-xl">
              Organizations and communities we collaborate with to create greater impact in the tech ecosystem.
            </p>
          </div>
          
          <div className="flex items-center space-x-2">
            <button 
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="p-2 rounded-full bg-white/5 border border-white/10 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/10 transition-colors"
              aria-label="Previous"
            >
              <ArrowLeft size={18} />
            </button>
            <button 
              onClick={handleNext}
              disabled={currentIndex === maxIndex}
              className="p-2 rounded-full bg-white/5 border border-white/10 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/10 transition-colors"
              aria-label="Next"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
        
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-300 ease-out"
            style={{ transform: `translateX(-${currentIndex * (100 / Math.min(communityLogos.length, window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3))}%)` }}
          >
            {communityLogos.map((logo, index) => (
              <div 
                key={index} 
                className="min-w-full md:min-w-[50%] lg:min-w-[33.333%] p-4"
              >
                <div className="bg-white/5 h-full rounded-lg overflow-hidden border border-white/10 group hover:border-space-purple/30 transition-all duration-300 flex flex-col items-center justify-center p-6">
                  <div className="h-32 w-32 mb-4 overflow-hidden rounded-full bg-white/5 p-1">
                    <img 
                      src={logo.image}
                      alt={logo.name}
                      className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="font-semibold text-xl font-orbitron text-white">{logo.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
