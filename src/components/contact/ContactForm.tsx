import React, { useState } from 'react';
import { useToast } from '../../hooks/use-toast';

const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [linkedinProfile, setLinkedinProfile] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // For free serverless function endpoints
      const FORM_ENDPOINT = "https://formspree.io/f/mkgrvwbv";
      
      // Send form data to formspree (free tier)
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Origin': window.location.origin // Explicitly add origin header
        },
        body: JSON.stringify({
          subject: "A Techtonian wants to join TechTon",
          name: name,
          email: email,
          phone: phone,
          linkedin: linkedinProfile,
          message: message,
          _domain: window.location.hostname // Add domain information for Formspree
        })
      });
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        console.error("Formspree error:", errorData);
        throw new Error(errorData?.error || 'Form submission failed');
      }

      // Show success message
      toast({
        title: "Message sent!",
        description: "Thank you for your interest in TechTon. We'll get back to you soon.",
      });
      
      // Reset form
      setName('');
      setEmail('');
      setPhone('');
      setLinkedinProfile('');
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
        <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
          Phone Number <span className="text-xs ml-2 text-gray-400">(for WhatsApp community)</span>
        </label>
        <input
          id="phone"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-space-purple/50 text-white"
          placeholder="+92 123 4567890"
        />
      </div>
      
      <div className="mb-6">
        <label htmlFor="linkedin" className="block text-sm font-medium text-gray-300 mb-2">
          LinkedIn Profile <span className="text-xs ml-2 text-gray-400">(for LinkedIn page)</span>
        </label>
        <input
          id="linkedin"
          type="url"
          value={linkedinProfile}
          onChange={(e) => setLinkedinProfile(e.target.value)}
          className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-space-purple/50 text-white"
          placeholder="https://linkedin.com/in/yourusername"
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
  );
};

export default ContactForm;
