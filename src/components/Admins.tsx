
import React from 'react';

const Admins: React.FC = () => {
  return (
    <section id="admins" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-orbitron mb-4 text-white">Our <span className="text-space-purple">Admins</span></h2>
        <div className="w-24 h-1 bg-gradient-to-r from-space-purple to-space-blue mx-auto mb-16 rounded-full"></div>
        
        <div className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm max-w-lg mx-auto hover:border-space-purple/30 transition-all duration-300">
          <div className="h-32 w-32 mb-6 rounded-full border-4 border-space-purple/30 p-1 mx-auto overflow-hidden">
            <img 
              src="/lovable-uploads/add997e5-f304-485a-a33f-5ca35384d00d.png" 
              alt="Haris Mughal" 
              className="rounded-full w-full h-full object-cover"
            />
          </div>
          
          <h3 className="text-2xl font-bold text-white mb-2 font-orbitron">Haris Mughal</h3>
          <p className="text-space-lavender mb-6">Founder &amp; Lead Admin</p>
          
          <div className="max-w-md mx-auto text-gray-300 mb-8">
            <p>Passionate about building tech communities and connecting talented individuals with opportunities to grow and excel.</p>
          </div>
          
          <div className="flex justify-center space-x-4">
            <a 
              href="https://www.linkedin.com/in/iamharisahsan/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-space-lavender/30 transition-all"
              aria-label="LinkedIn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-space-lavender">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a 
              href="https://github.com/Haris-Mughal" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-space-lavender/30 transition-all"
              aria-label="GitHub"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-space-lavender">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
            <a 
              href="https://muhammad-haris-ahsan.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-space-lavender/30 transition-all"
              aria-label="Portfolio"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-space-lavender">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admins;
