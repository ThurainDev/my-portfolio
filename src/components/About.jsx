import React from 'react';

const About = () => {
  return (
    <section id="about" className="bg-theme-color text-white px-4 pt-8 pb-4">
      <div className="max-w-6xl mx-auto">
        {/* Title & line layout */}
        <div className="flex items-center mb-6">
          <h2 className="w-1/2 md:w-1/4 text-3xl md:text-4xl font-bold text-orange-500 font-mono">
            About Me
          </h2>
          <div className="w-1/2 md:w-3/4 h-px bg-white" />
        </div>
        <p className="text-gray-300 text-base md:text-lg font-mono leading-relaxed">
          I'm a self-driven and detail-oriented MERN Stack Developer with a passion for building
          modern web applications that solve real-world problems. I specialize in working with
          MongoDB, Express.js, React, and Node.js to create full-stack solutions that are scalable,
          responsive, and efficient.
        </p>
      </div>
    </section>
  );
};

export default About;