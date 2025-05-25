
import React from 'react';
import { Linkedin } from 'lucide-react';

const ContactInfo: React.FC = () => {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-semibold mb-4 font-orbitron text-white">Get in Touch</h3>
        <p className="text-gray-300 leading-relaxed">
          Join our community of tech enthusiasts, innovators, and creative minds. 
          Whether you're a seasoned professional or just starting your tech journey, 
          TechTon has something valuable to offer you.
        </p>
      </div>
      
      <div className="bg-white/5 p-6 rounded-lg border border-white/10 backdrop-blur-sm">
        <h4 className="font-semibold mb-4 font-orbitron text-white">Why Join TechTon?</h4>
        <ul className="space-y-3 text-gray-300">
          <li className="flex items-start">
            <span className="text-space-lavender mr-2">✦</span>
            <span>Access exclusive tech events and workshops</span>
          </li>
          <li className="flex items-start">
            <span className="text-space-lavender mr-2">✦</span>
            <span>Connect with like-minded tech enthusiasts</span>
          </li>
          <li className="flex items-start">
            <span className="text-space-lavender mr-2">✦</span>
            <span>Get mentorship from industry professionals</span>
          </li>
          <li className="flex items-start">
            <span className="text-space-lavender mr-2">✦</span>
            <span>Discover job and internship opportunities</span>
          </li>
        </ul>
      </div>
      
      <div>
        <a 
          href="https://www.linkedin.com/company/techton-618"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center space-x-2 text-space-lavender hover:text-white transition-colors"
        >
          <Linkedin className="h-5 w-5" />
          <span>Follow us on LinkedIn</span>
        </a>
      </div>
    </div>
  );
};

export default ContactInfo;
