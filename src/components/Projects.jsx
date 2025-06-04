import React, { useState } from 'react';

const projectPages = [
  [
    {
      title: 'Task Manager App',
      stack: 'React + Node.js + MongoDB',
      details: [
        'CRUD operations for tasks',
        'User Authentication with JWT',
        'Deployed on DigitalOcean',
      ],
      demo: '#',
      github: '#',
    },
    {
      title: 'School Database System',
      stack: 'Express + MongoDB + Admin Dashboard',
      details: [
        'Student records management',
        'Role-based access control',
        'Admin panel for insights',
      ],
      demo: '#',
      github: '#',
    },
    {
      title: 'E-Commerce Platform',
      stack: 'MERN Stack with JWT & Stripe',
      details: [
        'Product listing & cart system',
        'Secure checkout with Stripe',
        'JWT-based login',
      ],
      demo: '#',
      github: '#',
    },
  ],
  [
    {
      title: 'Job Board System',
      stack: 'React + Express + MongoDB',
      details: [
        'Job posting & application',
        'Admin moderation',
        'Pagination & filtering',
      ],
      demo: '#',
      github: '#',
    },
    {
      title: 'Social Media App',
      stack: 'React + Firebase',
      details: [
        'Real-time chat system',
        'Follow & like features',
        'Media uploads',
      ],
      demo: '#',
      github: '#',
    },
  ],
];

const Projects = () => {
  const [pageIndex, setPageIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const projects = projectPages[pageIndex];
  const selected = projects[selectedIndex];

  return (
    <section className="bg-theme-color text-white px-4 pt-8 pb-4">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="flex items-center mb-8">
          <h2 className="w-1/2 md:w-1/4 text-3xl md:text-4xl font-bold text-orange-500 font-mono">
            Projects
          </h2>
          <div className="w-1/2 md:w-3/4 h-px bg-white" />
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Project List */}
          <div className="flex-1 space-y-4">
            {projects.map((proj, i) => (
              <div
                key={i}
                className={`cursor-pointer p-5 rounded-xl bg-white text-black transition-all hover:bg-orange-200 ${
                  i === selectedIndex ? 'bg-orange-100 font-bold' : ''
                }`}
                onClick={() => setSelectedIndex(i)}
              >
                <h3 className="text-xl font-mono">{proj.title}</h3>
                <p className="text-sm font-mono">{proj.stack}</p>
              </div>
            ))}
            {/* Pagination */}
            <div className="flex gap-2 pt-4">
              <button
                className="px-3 py-1 rounded bg-gray-300 text-black"
                onClick={() => setPageIndex((prev) => Math.max(0, prev - 1))}
              >
                {'<'}
              </button>
              {[...Array(projectPages.length)].map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setPageIndex(idx);
                    setSelectedIndex(0);
                  }}
                  className={`px-3 py-1 rounded ${
                    idx === pageIndex ? 'bg-black text-white' : 'bg-gray-300 text-black'
                  }`}
                >
                  {idx + 1}
                </button>
              ))}
              <button
                className="px-3 py-1 rounded bg-gray-300 text-black"
                onClick={() =>
                  setPageIndex((prev) => Math.min(projectPages.length - 1, prev + 1))
                }
              >
                {'>'}
              </button>
            </div>
          </div>

          {/* Project Details */}
          <div className="flex-1 bg-slate-600 p-6 rounded-xl">
            <h3 className="text-2xl font-bold font-mono mb-4">Project Details</h3>
            <p className="mb-3 font-mono text-sm">You're viewing {selected.title}</p>
            <ul className="list-disc list-inside space-y-1 text-sm font-mono mb-4">
              {selected.details.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
            <div className="flex gap-4 text-sm font-mono">
              <a href={selected.demo} className="underline flex gap-1 items-center" target="_blank">
                <span>🔗</span> Live demo
              </a>
              <a href={selected.github} className="underline flex gap-1 items-center" target="_blank">
                <span>🔗</span> GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;