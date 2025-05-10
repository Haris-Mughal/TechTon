
import React from 'react';

const Stars: React.FC = () => {
  return (
    <div className="fixed inset-0 overflow-hidden z-0">
      <div className="stars-small"></div>
      <div className="stars-medium"></div>
      <div className="stars-large"></div>
      
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-space-darker to-space-dark opacity-80"></div>
      
      <div className="absolute inset-0">
        <div className="absolute top-20 -left-20 w-64 h-64 bg-space-purple/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 -right-20 w-80 h-80 bg-space-cyan/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-space-pink/10 rounded-full blur-3xl"></div>
      </div>

      <style>{`
        .stars-small, .stars-medium, .stars-large {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          width: 100%;
          height: 4000px;
          background-position: 0 0;
          background-repeat: repeat;
        }
        
        .stars-small {
          background-image: radial-gradient(1px 1px at 25% 25%, white, rgba(255, 255, 255, 0)),
                           radial-gradient(1px 1px at 50% 50%, white, rgba(255, 255, 255, 0)),
                           radial-gradient(1px 1px at 75% 75%, white, rgba(255, 255, 255, 0));
          background-size: 200px 200px;
          animation: stars-small 50s linear infinite;
          opacity: 0.3;
        }
        
        .stars-medium {
          background-image: radial-gradient(1.5px 1.5px at 15% 15%, white, rgba(255, 255, 255, 0)),
                           radial-gradient(1.5px 1.5px at 40% 60%, white, rgba(255, 255, 255, 0)),
                           radial-gradient(1.5px 1.5px at 65% 35%, white, rgba(255, 255, 255, 0));
          background-size: 300px 300px;
          animation: stars-medium 100s linear infinite;
          opacity: 0.4;
        }
        
        .stars-large {
          background-image: radial-gradient(2px 2px at 10% 10%, white, rgba(255, 255, 255, 0)),
                           radial-gradient(2px 2px at 35% 65%, white, rgba(255, 255, 255, 0)),
                           radial-gradient(2px 2px at 60% 30%, white, rgba(255, 255, 255, 0));
          background-size: 400px 400px;
          animation: stars-large 150s linear infinite;
          opacity: 0.5;
        }
      `}</style>
    </div>
  );
};

export default Stars;
