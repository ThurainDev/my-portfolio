import React from 'react';
import ProfilePic from '../assets/111.png'; // Update path if needed

const Hero = () => {
  return (
    <section className="bg-theme-color text-white py-20 px-4">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10">

        {/* Left: Text Content (shown below image on mobile) */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-mono font-semibold leading-tight">
            HI, I am <span className="text-orange-500">Thurain.Dev</span> <span className="inline-block">→</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-mono mt-3">MERN Stack Developer</h2>

          <p className="text-gray-300 mt-6 text-base md:text-lg font-mono">
            I specialize in building full-stack web applications using MongoDB, Express.js, React, and Node.js.
          </p>

          <button className="mt-6 px-6 py-3 bg-gray-200 text-black font-mono font-semibold rounded-xl hover:bg-white transition">
            Download Resume
          </button>
        </div>

        {/* Right: Profile Image (shown first in mobile) */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-center mb-8 md:mb-0">
          <div className="">
            <img
              src={ProfilePic}
              alt="Profile"
              className="w-[250px] md:w-[350px] rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;