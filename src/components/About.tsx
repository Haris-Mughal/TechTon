
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-orbitron mb-2 text-white">About <span className="text-space-purple">TechTon</span></h2>
          <p className="text-lg text-space-lavender font-semibold mb-6">
            Our Motto – Learn, Build &amp; Achieve
          </p>
          
          <div className="w-24 h-1 bg-gradient-to-r from-space-purple to-space-blue mx-auto mb-8 rounded-full"></div>
          
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed mb-8">
            TechTon is a non-profit tech awareness community dedicated to empowering the next generation of tech enthusiasts. 
            We provide mentorship, organize hackathons, connect members with internship opportunities, and keep everyone 
            updated with the latest in coding and technology trends.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 max-w-3xl mx-auto">
            <div className="bg-white/5 p-4 sm:p-5 rounded-lg backdrop-blur-sm border border-white/10 flex-1 min-w-[150px]">
              <h3 className="font-bold text-2xl sm:text-3xl text-space-lavender">1+</h3>
              <p className="text-sm text-gray-400">Years Active</p>
            </div>
            <div className="bg-white/5 p-4 sm:p-5 rounded-lg backdrop-blur-sm border border-white/10 flex-1 min-w-[150px]">
              <h3 className="font-bold text-2xl sm:text-3xl text-space-cyan">100+</h3>
              <p className="text-sm text-gray-400">Community Members</p>
            </div>
            <div className="bg-white/5 p-4 sm:p-5 rounded-lg backdrop-blur-sm border border-white/10 flex-1 min-w-[150px]">
              <h3 className="font-bold text-2xl sm:text-3xl text-space-pink">5+</h3>
              <p className="text-sm text-gray-400">Events Hosted</p>
            </div>
          </div>
        </div>
        
        {/* Galaxy divider */}
        <div className="relative h-20 my-10 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-space-purple/50 to-transparent"></div>
            <div className="absolute w-6 h-6 bg-space-dark border-2 border-space-purple/30 rounded-full flex items-center justify-center rotate-45 transform">
              <div className="w-2 h-2 bg-space-purple rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
