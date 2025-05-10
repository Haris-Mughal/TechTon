
import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center relative">
      <div className="text-center z-10 px-4">
        <div className="mb-8 relative">
          <img 
            src="/lovable-uploads/1fdbd7da-c220-43af-bb85-ec258124b35e.png" 
            alt="TechTon Logo" 
            className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto animate-glow"
          />
        </div>
        <h1 className="font-orbitron text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-wider">
          <span className="text-white">Tech</span>
          <span className="text-space-purple">Ton</span>
        </h1>
        <p className="text-xl md:text-2xl max-w-xl mx-auto mb-12 text-gray-300 font-light tracking-wide">
          Learn, Build &amp; Achieve
        </p>
        <button 
          onClick={scrollToAbout}
          className="bg-white/5 backdrop-blur-sm px-6 py-3 rounded-full border border-white/10 hover:bg-white/10 transition-all duration-300 flex items-center gap-2 mx-auto group"
        >
          Discover More
          <ArrowDown className="animate-float" size={18} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
