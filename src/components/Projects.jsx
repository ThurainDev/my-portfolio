import React, { useState } from "react";
import { Github, ExternalLink, Code, Database, Server, Globe } from "lucide-react";
import pj from "../assets/pj.jpg";
import pj1 from "../assets/pj1.jpeg";
import pj2 from "../assets/pj2.jpeg";
import pj3 from "../assets/pj3.jpeg";
import pj4 from "../assets/pj4.jpeg";
import pj5 from "../assets/j5.jpeg";

const ProjectCard = ({ project, isActive, onClick }) => (
  <div
    className={`cursor-pointer p-3 rounded-lg transition-all duration-300 font-mono border ${
      isActive
        ? "bg-orange-500/10 border-orange-500 text-orange-500"
        : "bg-white/5 border-white/10 text-white/70 hover:bg-white/10 hover:text-white"
    }`}
    onClick={onClick}
  >
    <h3 className="text-base font-medium">{project.title}</h3>
    <p className="text-xs mt-1 opacity-70">{project.stack}</p>
  </div>
);

const TechBadge = ({ icon: Icon, label }) => (
  <div className="flex items-center gap-2 bg-blue-theme/30 px-3 py-1 rounded-full text-sm">
    <Icon size={16} />
    <span>{label}</span>
  </div>
);

const Projects = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const projects = [
    {
      title: "Task Manager App",
      stack: "React + Node.js + MongoDB",
      description: "A full-stack task management application with real-time updates and user authentication.",
      details: [
        "CRUD operations for tasks with real-time updates",
        "User Authentication with JWT and bcrypt",
        "MongoDB for data persistence",
        "Responsive design with Tailwind CSS",
        "Deployed on DigitalOcean"
      ],
      techStack: [
        { icon: Code, label: "React.js" },
        { icon: Server, label: "Node.js" },
        { icon: Database, label: "MongoDB" },
        { icon: Globe, label: "Tailwind CSS" }
      ],
      demo: "#",
      github: "#",
      image: pj
    },
    {
      title: "School Database System",
      stack: "Express + MongoDB + Admin Dashboard",
      description: "A comprehensive school management system with role-based access control.",
      details: [
        "Manage student records with different user roles",
        "Admin dashboard with analytics and reporting",
        "MongoDB Aggregation for data analysis",
        "Secure authentication and authorization",
        "Real-time notifications system"
      ],
      techStack: [
        { icon: Code, label: "Express.js" },
        { icon: Database, label: "MongoDB" },
        { icon: Server, label: "Node.js" },
        { icon: Globe, label: "Bootstrap" }
      ],
      demo: "#",
      github: "#",
      image: pj1
    },
    {
      title: "E-Commerce Platform",
      stack: "MERN Stack with JWT & Stripe",
      description: "A full-featured e-commerce platform with secure payment processing.",
      details: [
        "User Cart & Checkout system",
        "JWT session handling",
        "Stripe integration for secure payments",
        "Product search and filtering",
        "Order tracking and management"
      ],
      techStack: [
        { icon: Code, label: "React.js" },
        { icon: Server, label: "Node.js" },
        { icon: Database, label: "MongoDB" },
        { icon: Globe, label: "Stripe API" }
      ],
      demo: "#",
      github: "#",
      image: pj2
    },
    {
      title: "Job Board System",
      stack: "React + Express + MongoDB",
      description: "A modern job board platform for posting and finding opportunities.",
      details: [
        "Post and apply for jobs",
        "Admin dashboard for job management",
        "Advanced search and filtering",
        "Email notifications",
        "Resume upload and management"
      ],
      techStack: [
        { icon: Code, label: "React.js" },
        { icon: Server, label: "Express.js" },
        { icon: Database, label: "MongoDB" },
        { icon: Globe, label: "Material UI" }
      ],
      demo: "#",
      github: "#",
      image: pj3
    },
    {
      title: "Social Media App",
      stack: "React + Firebase",
      description: "A real-time social media platform with instant messaging.",
      details: [
        "Post updates, images, and likes",
        "Live chat with WebSocket",
        "Firebase Authentication",
        "Real-time notifications",
        "User profiles and following system"
      ],
      techStack: [
        { icon: Code, label: "React.js" },
        { icon: Server, label: "Firebase" },
        { icon: Database, label: "Firestore" },
        { icon: Globe, label: "Tailwind CSS" }
      ],
      demo: "#",
      github: "#",
      image: pj4
    },
    {
      title: "Music Streaming App",
      stack: "MERN Stack with WebSocket",
      description: "A music streaming platform with playlist management.",
      details: [
        "Music streaming with WebSocket",
        "Playlist creation and sharing",
        "User authentication and profiles",
        "Search and discovery features",
        "Real-time updates"
      ],
      techStack: [
        { icon: Code, label: "React.js" },
        { icon: Server, label: "Node.js" },
        { icon: Database, label: "MongoDB" },
        { icon: Globe, label: "WebSocket" }
      ],
      demo: "#",
      github: "#",
      image: pj5
    }
  ];

  const selected = projects[selectedIndex];

  return (
    <section id="projects" className="px-4 pt-4 pb-6 text-white bg-theme-color">
      <div className="max-w-6xl mx-auto">
        {/* Title with Responsive Line */}
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-3xl font-bold text-orange-500 font-mono flex-shrink-0 w-[40%] sm:w-[25%] lg:w-[20%]">
            Projects
          </h2>
          <div className="border-t border-white w-[60%] sm:w-[75%] lg:w-[80%]"></div>
        </div>

        {/* Project List + Details */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Project List */}
          <div className="w-full lg:w-4/12 grid grid-cols-1 gap-3">
            {projects.map((proj, i) => (
              <ProjectCard
                key={i}
                project={proj}
                isActive={i === selectedIndex}
                onClick={() => setSelectedIndex(i)}
              />
            ))}
          </div>

          {/* Project Details */}
          <div className="w-full lg:w-8/12">
            <div className="bg-blue-theme/30 backdrop-blur-md p-6 rounded-xl text-white font-mono border border-gray-500/20 h-full">
              {/* Project Image */}
              <div className="mb-6 rounded-lg overflow-hidden">
                <img
                  src={selected.image}
                  alt={selected.title}
                  className="w-full h-[300px] object-cover"
                />
              </div>

              {/* Project Info */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{selected.title}</h3>
                  <p className="text-gray-300">{selected.description}</p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {selected.techStack.map((tech, i) => (
                    <TechBadge key={i} icon={tech.icon} label={tech.label} />
                  ))}
                </div>

                {/* Features */}
                <div>
                  <h4 className="text-lg font-semibold mb-2">Key Features</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-300">
                    {selected.details.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-4">
                  <a
                    href={selected.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition"
                  >
                    <ExternalLink size={18} />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={selected.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition"
                  >
                    <Github size={18} />
                    <span>View Code</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
