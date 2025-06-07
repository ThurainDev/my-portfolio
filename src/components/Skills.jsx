import React from 'react';
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
} from 'react-icons/fa';
import { SiTailwindcss, SiExpress, SiPostman } from 'react-icons/si';

const SkillCard = ({ title, techs, icons }) => (
  <div className="border border-gray-400 rounded-lg p-5 text-center space-y-3">
    <h3 className="font-bold text-xl font-mono">{title}</h3>
    <p className="text-gray-300 font-mono">{techs}</p>
    <div className="flex justify-center gap-4 text-2xl text-white">
      {icons.map((Icon, i) => (
        <Icon key={i} />
      ))}
    </div>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="bg-theme-color text-white px-4 pt-6 pb-12">
      <div className="max-w-6xl mx-auto">
       <div className="flex items-center mb-6">
  <div className="w-[15%] sm:w-[30%] lg:w-[50%] h-px bg-white" />
  <h2 className="w-[85%] hidden:sm:w-[70%] lg:w-[50%] text-3xl md:text-4xl font-bold text-orange-500 font-mono text-right pl-4">
    Skills & Technologies
  </h2>
</div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SkillCard
            title="Core Languages"
            techs="HTML - CSS3 - JavaScript"
            icons={[FaHtml5, FaCss3Alt, FaJsSquare]}
          />
          <SkillCard
            title="Front-End Development"
            techs="React.js - TailwindCss - MaterialUI"
            icons={[FaReact, SiTailwindcss]}
          />
          <SkillCard
            title="Back-End Development"
            techs="Express.js - Node.js - REST API"
            icons={[SiExpress, FaNodeJs, SiPostman]}
          />
          <SkillCard
            title="Database"
            techs="MongoDB"
            icons={[FaJsSquare]} // Replace with MongoDB icon if you prefer
          />
          <SkillCard
            title="Tools & DevOps"
            techs="VSCode - Git - GitHub"
            icons={[FaReact, SiTailwindcss]}
          />
          <SkillCard
            title="Others"
            techs="REST API - Postman"
            icons={[SiExpress, FaNodeJs, SiPostman]}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;