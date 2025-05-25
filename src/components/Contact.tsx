
import React from 'react';
import SectionHeader from './common/SectionHeader';
import ContactInfo from './contact/ContactInfo';
import ContactForm from './contact/ContactForm';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          title="Join Us" 
          highlightedWord="Us"
          description="Ready to become a part of our growing tech community? Reach out to us!"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
