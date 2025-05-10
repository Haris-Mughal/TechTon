
import React from 'react';
import { Trophy, Info, Briefcase, Code } from 'lucide-react';

const features = [
  {
    icon: <Trophy className="w-10 h-10 text-space-lavender" />,
    title: "Hackathons & Competitions",
    description: "Participate in exciting hackathons and tech competitions to challenge yourself and build impressive portfolio projects."
  },
  {
    icon: <Info className="w-10 h-10 text-space-cyan" />,
    title: "Good Info",
    description: "Stay updated with cutting-edge tech trends, tutorials, and resources curated by our expert team."
  },
  {
    icon: <Briefcase className="w-10 h-10 text-space-pink" />,
    title: "Jobs & Internships",
    description: "Get exclusive access to job opportunities and internships from our network of industry partners."
  },
  {
    icon: <Code className="w-10 h-10 text-space-blue" />,
    title: "Coding Support",
    description: "Receive help with algorithm challenges, technical interviews, and coding practices like LeetCode."
  }
];

const WhatWeOffer: React.FC = () => {
  return (
    <section id="offerings" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-orbitron mb-4 text-white">What We <span className="text-space-purple">Offer</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-space-purple to-space-blue mx-auto mb-8 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white/5 p-6 rounded-lg border border-white/10 backdrop-blur-sm transform transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg hover:shadow-space-purple/20 hover:border-space-purple/30 group"
            >
              <div className="mb-4 p-3 rounded-full bg-white/5 inline-block group-hover:bg-white/10 transition-all">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white font-orbitron">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
