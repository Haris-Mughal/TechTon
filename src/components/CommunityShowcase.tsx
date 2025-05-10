
import React, { useState, useEffect } from 'react';
import { Users, Image, ArrowLeft, ArrowRight } from 'lucide-react';

// Mock data for community members/partners
const showcaseItems = [
  {
    name: "IEEE",
    image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623",
    type: "Partner"
  },
  {
    name: "ETL Online",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    type: "Partner"
  },
  {
    name: "TechHub",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    type: "Community"
  },
  {
    name: "CodeCamp",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    type: "Partner"
  },
  {
    name: "DevConnect",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4",
    type: "Community"
  },
  {
    name: "TechMinds",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
    type: "Partner"
  }
];

const CommunityShowcase: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(0);

  // Calculate max index based on screen size
  useEffect(() => {
    const calculateMaxIndex = () => {
      const itemsPerView = window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3;
      setMaxIndex(Math.max(0, showcaseItems.length - itemsPerView));
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
    <section id="community" className="relative">
      <div>
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="gradient-text">Community Showcase</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-techton-purple to-techton-cyan mb-4 rounded-full"></div>
              <p className="text-gray-400 max-w-xl">
                Meet our amazing community members and partners who make TechTon an incredible tech ecosystem.
              </p>
            </div>
            <div className="hidden md:flex items-center space-x-2">
              <button 
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className="p-2 rounded-full bg-white/5 border border-white/10 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/10 transition-colors"
              >
                <ArrowLeft size={18} />
              </button>
              <button 
                onClick={handleNext}
                disabled={currentIndex === maxIndex}
                className="p-2 rounded-full bg-white/5 border border-white/10 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/10 transition-colors"
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
          
          <div className="overflow-hidden relative">
            <div 
              className="flex transition-transform duration-300 ease-out"
              style={{ transform: `translateX(-${currentIndex * (100 / Math.min(showcaseItems.length, window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3))}%)` }}
            >
              {showcaseItems.map((item, index) => (
                <div 
                  key={index} 
                  className="min-w-full md:min-w-[50%] lg:min-w-[33.333%] p-4"
                >
                  <div className="bg-white/5 rounded-lg overflow-hidden border border-white/10 group hover:border-techton-purple/50 transition-all duration-300">
                    <div className="relative h-48 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
                      <img 
                        src={`${item.image}?auto=format&fit=crop&w=500&q=80`}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 right-3 bg-black/40 backdrop-blur-sm text-xs px-2 py-1 rounded-full">
                        {item.type === "Partner" ? (
                          <div className="flex items-center gap-1">
                            <Image size={12} />
                            <span>Partner</span>
                          </div>
                        ) : (
                          <div className="flex items-center gap-1">
                            <Users size={12} />
                            <span>Community</span>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-lg">{item.name}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex md:hidden items-center justify-center space-x-2 mt-6">
            <button 
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="p-2 rounded-full bg-white/5 border border-white/10 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/10 transition-colors"
            >
              <ArrowLeft size={18} />
            </button>
            <button 
              onClick={handleNext}
              disabled={currentIndex === maxIndex}
              className="p-2 rounded-full bg-white/5 border border-white/10 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/10 transition-colors"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityShowcase;
