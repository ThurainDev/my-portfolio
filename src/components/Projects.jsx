import React, { useState } from "react";

const projectPages = [
  [
    {
      title: "Task Manager App",
      stack: "React + Node.js + MongoDB",
      details: [
        "CRUD operations for tasks",
        "User Authentication with JWT",
        "Deployed on DigitalOcean",
      ],
      demo: "#",
      github: "#",
    },
    {
      title: "School Database System",
      stack: "Express + MongoDB + Admin Dashboard",
      details: [
        "Manage student records with roles",
        "Admin access with edit/delete rights",
        "MongoDB Aggregation for reporting",
      ],
      demo: "#",
      github: "#",
    },
    {
      title: "E-Commerce Platform",
      stack: "MERN Stack with JWT & Stripe",
      details: [
        "User Cart & Checkout",
        "JWT session handling",
        "Stripe integration for secure payment",
      ],
      demo: "#",
      github: "#",
    },
  ],
  [
    {
      title: "Job Board System",
      stack: "React + Express + MongoDB",
      details: [
        "Post and apply for jobs",
        "Admin dashboard for job control",
        "Filter jobs by tags and location",
      ],
      demo: "#",
      github: "#",
    },
    {
      title: "Social Media App",
      stack: "React + Firebase",
      details: [
        "Post updates, images, and likes",
        "Live chat with WebSocket",
        "Auth with Firebase Auth",
      ],
      demo: "#",
      github: "#",
    },
    {
      title: "Social Media App",
      stack: "React + Firebase",
      details: [
        "Post updates, images, and likes",
        "Live chat with WebSocket",
        "Auth with Firebase Auth",
      ],
      demo: "#",
      github: "#",
    },
  ],
];

const Projects = () => {
  const [pageIndex, setPageIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const projects = projectPages[pageIndex];
  const selected = projects[selectedIndex];

  return (
    <section className="px-4 pb-20 text-white bg-theme-color">
      <div className="max-w-6xl mx-auto">
        {/* Title with Responsive Line */}
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-3xl font-bold text-orange-500 font-mono flex-shrink-0 w-[40%] sm:w-[25%] lg:w-[20%]">
            Projects
          </h2>
          <div className="border-t border-white w-[60%] sm:w-[75%] lg:w-[80%]"></div>
        </div>

        {/* Project List + Details */}
        <div className="flex flex-col lg:flex-row gap-8 mb-6">
          {/* Project List */}
          <div className="w-full lg:w-1/2 flex flex-col gap-4">
            {projects.map((proj, i) => (
              <div
                key={i}
                className={`cursor-pointer p-5 rounded-xl transition font-mono ${
                  i === selectedIndex
                    ? "bg-orange-100 text-black font-bold"
                    : "bg-white text-black hover:bg-orange-300"
                }`}
                onClick={() => setSelectedIndex(i)}
              >
                <h3 className="text-lg">{proj.title}</h3>
                <p className="text-sm">{proj.stack}</p>
              </div>
            ))}
          </div>

          {/* Project Details */}
          <div className="w-full lg:w-1/2 bg-blue-theme p-6 rounded-xl text-white font-mono flex flex-col justify-between">
            <h3 className="text-xl font-bold mb-4">Project Details</h3>
            <p className="mb-3">
              You're viewing <strong>{selected.title}</strong>
            </p>
            <ul className="list-disc list-inside space-y-1 mb-4 text-sm">
              {selected.details.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
            <div className="flex gap-4 text-sm underline">
              <a href={selected.demo} target="_blank" rel="noopener noreferrer">
                🔗 Live demo
              </a>
              <a
                href={selected.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                🔗 GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Pagination - no background, left aligned */}
        <div className="flex gap-2">
          <button
            className="px-3 py-1 bg-white text-black rounded hover:bg-orange-200"
            onClick={() => setPageIndex((prev) => Math.max(0, prev - 1))}
          >
            {"<"}
          </button>
          {projectPages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setPageIndex(idx);
                setSelectedIndex(0);
              }}
              className={`px-3 py-1 rounded ${
                idx === pageIndex
                  ? "bg-orange-300 text-black font-bold"
                  : "bg-white text-black hover:bg-orange-200"
              }`}
            >
              {idx + 1}
            </button>
          ))}
          <button
            className="px-3 py-1 bg-white text-black rounded hover:bg-orange-200"
            onClick={() =>
              setPageIndex((prev) =>
                Math.min(projectPages.length - 1, prev + 1)
              )
            }
          >
            {">"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
