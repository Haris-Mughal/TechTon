import React, { useState } from 'react';
import { useToast } from '../hooks/use-toast';
import { Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Prepare the data for submission
      const formData = {
        name,
        email,
        message,
        date: new Date().toISOString()
      };

      // For free serverless function endpoints
      const FORM_ENDPOINT = "https://formspree.io/f/harismirza3456@gmail.com";
      
      // Send form data to formspree (free tier)
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          subject: "A Techtonian wants to join TechTon",
          name: name,
          email: email,
          message: message
        })
      });
      
      if (!response.ok) {
        throw new Error('Form submission failed');
      }

      // Show success message
      toast({
        title: "Message sent!",
        description: "Thank you for your interest in TechTon. We'll get back to you soon.",
      });
      
      // Reset form
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Submission failed",
        description: "There was a problem sending your message. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-orbitron mb-4 text-white">Join <span className="text-space-purple">Us</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-space-purple to-space-blue mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-300 max-w-xl mx-auto">
            Ready to become a part of our growing tech community? Reach out to us!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
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
          
          <div>
            <form onSubmit={handleSubmit} className="bg-white/5 p-6 rounded-lg border border-white/10 backdrop-blur-sm">
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-space-purple/50 text-white"
                  placeholder="Your name"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-space-purple/50 text-white"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={4}
                  className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-space-purple/50 text-white resize-none"
                  placeholder="Tell us how we can help you..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-4 bg-gradient-to-r from-space-purple to-space-blue rounded-md font-semibold text-white hover:opacity-90 transition-opacity disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Become a TechTonian"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
