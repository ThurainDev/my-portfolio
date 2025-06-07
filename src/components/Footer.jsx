import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-theme-color text-text-theme-color px-4 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          {/* Logo */}
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h2 
              className="text-xl sm:text-2xl font-bold text-orange-500 font-mono cursor-pointer" 
              onClick={() => scrollToSection('hero')}
            >
              THURAIN.DEV
            </h2>
            <p className="text-xs sm:text-sm mt-1 font-mono">MERN Stack Developer</p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 sm:gap-6">
            <a
              href="https://github.com/ThurainDev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-theme-color hover:text-orange-400 transition"
            >
              <Github size={18} className="sm:w-5 sm:h-5" />
            </a>
            <a
              href="https://linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-theme-color hover:text-orange-400 transition"
            >
              <Linkedin size={18} className="sm:w-5 sm:h-5" />
            </a>
            <a
              href="mailto:thurain.dev@gmail.com"
              className="text-text-theme-color hover:text-orange-400 transition"
            >
              <Mail size={18} className="sm:w-5 sm:h-5" />
            </a>
            <a
              href="https://twitter.com/your-handle"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-theme-color hover:text-orange-400 transition"
            >
              <Twitter size={18} className="sm:w-5 sm:h-5" />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-blue-theme/30 mb-6 sm:mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <p className="text-xs sm:text-sm font-mono text-center md:text-left">
            © {new Date().getFullYear()} Thurain.Dev. All rights reserved.
          </p>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-6 text-xs sm:text-sm font-mono">
            <button onClick={() => scrollToSection('about')} className="hover:text-orange-400 transition">About</button>
            <button onClick={() => scrollToSection('skills')} className="hover:text-orange-400 transition">Skills</button>
            <button onClick={() => scrollToSection('projects')} className="hover:text-orange-400 transition">Projects</button>
            <button onClick={() => scrollToSection('experience')} className="hover:text-orange-400 transition">Experience</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-orange-400 transition">Contact</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 