
import React from 'react';

interface SectionHeaderProps {
  title: string;
  highlightedWord?: string;
  description?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, highlightedWord, description }) => {
  // If there's a highlightedWord, replace it in the title with a styled version
  const renderTitle = () => {
    if (!highlightedWord) return title;
    
    const parts = title.split(highlightedWord);
    return (
      <>
        {parts[0]}<span className="text-space-purple">{highlightedWord}</span>{parts[1]}
      </>
    );
  };

  return (
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold font-orbitron mb-4 text-white">
        {renderTitle()}
      </h2>
      <div className="w-24 h-1 bg-gradient-to-r from-space-purple to-space-blue mx-auto mb-6 rounded-full"></div>
      {description && (
        <p className="text-gray-300 max-w-xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
