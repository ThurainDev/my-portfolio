import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-theme-color text-text-theme-color px-4 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          {/* Logo */}
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold text-orange-500 font-mono">THURAIN.DEV</h2>
            <p className="text-sm mt-1 font-mono">MERN Stack Developer</p>
          </div>

          {/* Social Links */}
          <div className="flex gap-6">
            <a
              href="https://github.com/ThurainDev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-theme-color hover:text-orange-400 transition"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-theme-color hover:text-orange-400 transition"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:thurain.dev@gmail.com"
              className="text-text-theme-color hover:text-orange-400 transition"
            >
              <Mail size={20} />
            </a>
            <a
              href="https://twitter.com/your-handle"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-theme-color hover:text-orange-400 transition"
            >
              <Twitter size={20} />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-blue-theme/30 mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <p className="text-sm font-mono mb-4 md:mb-0">
            © {new Date().getFullYear()} Thurain.Dev. All rights reserved.
          </p>

          {/* Quick Links */}
          <div className="flex gap-6 text-sm font-mono">
            <a href="#about" className="hover:text-orange-400 transition">About</a>
            <a href="#projects" className="hover:text-orange-400 transition">Projects</a>
            <a href="#experience" className="hover:text-orange-400 transition">Experience</a>
            <a href="#contact" className="hover:text-orange-400 transition">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 