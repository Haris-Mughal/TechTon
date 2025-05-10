
import React from 'react';

const testimonials = [
  {
    quote: "TechTon's hackathons helped me grow my skills and network with amazing developers. The community is supportive and inspiring!",
    author: "Sarah Chen",
    role: "Software Engineer"
  },
  {
    quote: "Being part of TechTon opened doors to opportunities I never thought possible. Their job connections helped me land my dream role.",
    author: "Marcus Johnson",
    role: "Frontend Developer"
  },
  {
    quote: "The mentorship I received through TechTon's coding support program transformed me from a beginner to a confident developer.",
    author: "Priya Sharma",
    role: "CS Student"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="bg-techton-dark/50 relative">
      <div>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            <span className="gradient-text">Testimonials</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-techton-purple to-techton-cyan mx-auto mb-16 rounded-full"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="bg-white/5 p-8 rounded-lg border border-white/10 backdrop-blur-sm relative"
              >
                <div className="absolute -top-5 left-8 text-6xl text-techton-purple opacity-30">"</div>
                <p className="text-gray-300 relative mb-8">{item.quote}</p>
                <div className="mt-auto">
                  <p className="font-semibold text-white">{item.author}</p>
                  <p className="text-gray-400 text-sm">{item.role}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-xl md:text-2xl font-light text-gray-300 max-w-3xl mx-auto italic">
              "Together, we're building a community where technology meets potential, and innovation knows no bounds."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
