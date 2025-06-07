import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const ScrollArrow = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [showUpArrow, setShowUpArrow] = useState(false);
  const [showDownArrow, setShowDownArrow] = useState(true);
  const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'contact'];

  const getCurrentSectionIndex = () => {
    const scrollPosition = window.scrollY + window.innerHeight / 2;
    
    for (let i = sections.length - 1; i >= 0; i--) {
      const element = document.getElementById(sections[i]);
      if (element && element.offsetTop <= scrollPosition) {
        return i;
      }
    }
    return 0;
  };

  const scrollToNextSection = () => {
    const nextSection = (currentSection + 1) % sections.length;
    const element = document.getElementById(sections[nextSection]);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setCurrentSection(nextSection);
    }
  };

  const scrollToPreviousSection = () => {
    const prevSection = (currentSection - 1 + sections.length) % sections.length;
    const element = document.getElementById(sections[prevSection]);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setCurrentSection(prevSection);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Update current section based on scroll position
      setCurrentSection(getCurrentSectionIndex());
      
      // Show up arrow when not at the top
      setShowUpArrow(window.scrollY > 100);
      
      // Show down arrow when not at the bottom
      setShowDownArrow(scrollPosition < documentHeight - 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed right-8 bottom-8 flex flex-col gap-4 z-50">
      {showUpArrow && (
        <button
          onClick={scrollToPreviousSection}
          className="bg-blue-theme/30 backdrop-blur-md p-3 rounded-full border border-gray-500/20 text-text-theme-color hover:text-orange-400 transition-all duration-300 hover:scale-110"
          aria-label="Scroll to previous section"
        >
          <ChevronUp size={24} />
        </button>
      )}
      {showDownArrow && (
        <button
          onClick={scrollToNextSection}
          className="bg-blue-theme/30 backdrop-blur-md p-3 rounded-full border border-gray-500/20 text-text-theme-color hover:text-orange-400 transition-all duration-300 hover:scale-110"
          aria-label="Scroll to next section"
        >
          <ChevronDown size={24} />
        </button>
      )}
    </div>
  );
};

export default ScrollArrow; 