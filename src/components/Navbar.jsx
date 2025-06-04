import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-theme-color text-white px-4 py-3">
      <div className="max-w-6xl mx-auto bg-primary-theme rounded-full px-6 py-3 flex justify-between items-center shadow-md">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-theme-color">THURAIN.DEV</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-theme-color font-mono uppercase text-sm">
          <li className="text-secondary-theme font-bold cursor-pointer">Home</li>
          <li className="hover:text-secondary-theme cursor-pointer">About</li>
          <li className="hover:text-secondary-theme cursor-pointer">Projects</li>
          <li className="hover:text-secondary-theme cursor-pointer">Experience</li>
          <li className="hover:text-secondary-theme cursor-pointer">Contact</li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            <svg className="w-6 h-6 text-theme-color" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

     {/* Mobile Animated Dropdown Menu */}
<div
  className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
    isOpen ? 'max-h-96 opacity-100 mt-3' : 'max-h-0 opacity-0 mt-0'
  }`}
>
  <ul className="bg-primary-theme rounded-md py-3 px-4 space-y-3 text-theme-color font-mono uppercase text-sm">
    <li onClick={() => setIsOpen(false)} className="text-secondary-theme font-bold cursor-pointer">Home</li>
    <li onClick={() => setIsOpen(false)} className="hover:text-secondary-theme cursor-pointer">About</li>
    <li onClick={() => setIsOpen(false)} className="hover:text-secondary-theme cursor-pointer">Skills</li>
    <li onClick={() => setIsOpen(false)} className="hover:text-secondary-theme cursor-pointer">Projects</li>
    <li onClick={() => setIsOpen(false)} className="hover:text-secondary-theme cursor-pointer">Experience</li>
    <li onClick={() => setIsOpen(false)} className="hover:text-secondary-theme cursor-pointer">Contact</li>
  </ul>
</div>
    </nav>
  );
};

export default Navbar;