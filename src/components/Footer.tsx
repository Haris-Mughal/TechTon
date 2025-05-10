
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-space-darker/80 border-t border-space-purple/10 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-10">
          <div className="flex items-center mb-6 md:mb-0">
            <img 
              src="/lovable-uploads/1fdbd7da-c220-43af-bb85-ec258124b35e.png" 
              alt="TechTon Logo" 
              className="w-12 h-12 mr-4"
            />
            <div>
              <h3 className="text-xl font-orbitron font-bold text-white">
                Tech<span className="text-space-purple">Ton</span>
              </h3>
              <p className="text-gray-400 text-sm">Learn, Build &amp; Achieve</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row sm:space-x-12 space-y-6 sm:space-y-0">
            <div className="text-center md:text-left">
              <h4 className="font-semibold mb-3 text-white text-sm">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#about" className="text-gray-400 hover:text-space-lavender transition-colors">About</a></li>
                <li><a href="#offerings" className="text-gray-400 hover:text-space-lavender transition-colors">Offerings</a></li>
                <li><a href="#community" className="text-gray-400 hover:text-space-lavender transition-colors">Community</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-space-lavender transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div className="text-center md:text-right">
              <h4 className="font-semibold mb-3 text-white text-sm">Connect</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-400 hover:text-space-lavender transition-colors">Twitter</a></li>
                <li><a href="#" className="text-gray-400 hover:text-space-lavender transition-colors">LinkedIn</a></li>
                <li><a href="#" className="text-gray-400 hover:text-space-lavender transition-colors">Discord</a></li>
                <li><a href="#" className="text-gray-400 hover:text-space-lavender transition-colors">GitHub</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row justify-between items-center text-gray-500 text-sm">
          <p>© {currentYear} TechTon. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#" className="hover:text-space-lavender transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-space-lavender transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
