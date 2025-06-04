import React from 'react';

const About = () => {
  return (
    <section className="bg-theme-color text-white px-4 pt-8 pb-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center mb-6">
          <div className="h-px w-12 bg-orange-500 mr-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-orange-500 font-mono">About Me</h2>
        </div>
        <p className="text-gray-300 text-base md:text-lg font-mono leading-relaxed">
          I’m a self-driven and detail-oriented MERN Stack Developer with a passion for building
          modern web applications that solve real-world problems. I specialize in working with
          MongoDB, Express.js, React, and Node.js to create full-stack solutions that are scalable,
          responsive, and efficient.
        </p>
      </div>
    </section>
  );
};

export default About;