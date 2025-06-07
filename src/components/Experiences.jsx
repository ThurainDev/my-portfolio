import React from "react";

const Experiences = () => {
  return (
    <section className="bg-theme-color text-white px-4 pt-8">
      <div className="max-w-6xl mx-auto">
        {/* Title & line layout */}
        <div className="flex items-center mb-6">
          <h2 className="w-1/2 md:w-1/4 text-3xl md:text-4xl font-bold text-orange-500 font-mono">
            Experience
          </h2>
          <div className="w-1/2 md:w-3/4 h-px bg-white" />
        </div>

        {/* Experience content */}
        <div className="space-y-8">
          <div className="bg-blue-theme p-6 rounded-xl">
            <h3 className="text-xl font-bold font-mono mb-2">Freelance Web Developer</h3>
            <p className="text-text-theme-color font-mono mb-4">Self-Employed | Jan 2024 – Present</p>
            <ul className="list-disc ml-5 space-y-3 text-text-theme-color font-mono">
              <li>
                Created a professional Church Landing Page with smooth navigation,
                responsive design, and sermon highlights using HTML, CSS, and JavaScript.
              </li>
              <li>
                Built and deployed a Personal Portfolio Website for a client,
                implementing modern UI/UX practices, project showcases, and contact form functionality.
              </li>
              <li>
                Developed a full-stack Christian Music Streaming App using the MERN stack
                with custom music library, artist profiles, and playlist features.
              </li>
              <li>
                Built a robust School Database Management System with user roles,
                student data management, teacher dashboards, and secure authentication.
              </li>
              <li>
                Deployed all applications to DigitalOcean, set up custom domains,
                SSL certificates, and backend APIs for live production.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiences;