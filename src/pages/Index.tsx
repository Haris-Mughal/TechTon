
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import WhatWeOffer from '@/components/WhatWeOffer';
import Community from '@/components/Community';
import Admins from '@/components/Admins';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Stars from '@/components/Stars';

const Index: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-space-dark text-white overflow-hidden font-sans">
      <Stars />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <WhatWeOffer />
        <Community />
        <Admins />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
