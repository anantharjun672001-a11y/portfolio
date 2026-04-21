import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiHtml5,
  SiTailwindcss,
  SiPython,
  SiC,
  SiCplusplus,
  SiDjango,
  SiBootstrap,
  SiGit,
  SiGithub,
  SiPostman,
  SiNpm,
} from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";

// SKILLS DATA
const coreSkills = [
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "React", icon: <SiReact className="text-cyan-400" /> },
  { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
  { name: "Express", icon: <SiExpress className="text-gray-300" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
  { name: "HTML", icon: <SiHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400" /> },
];

const additionalSkills = [
  { name: "C", icon: <SiC className="text-blue-400" /> },
  { name: "C++", icon: <SiCplusplus className="text-blue-500" /> },
  { name: "Python", icon: <SiPython className="text-yellow-300" /> },
  { name: "SQL", icon: <span className="text-white font-bold">SQL</span> },
  { name: "Django", icon: <SiDjango className="text-green-400" /> },
  { name: "Bootstrap", icon: <SiBootstrap className="text-purple-500" /> },
];

const tools = [
  { name: "Git", icon: <SiGit className="text-orange-500" /> },
  { name: "GitHub", icon: <SiGithub className="text-white" /> },
  { name: "VS Code", icon: <VscVscode className="text-blue-400" /> },
  { name: "Postman", icon: <SiPostman className="text-orange-400" /> },
  { name: "npm", icon: <SiNpm className="text-red-500" /> },
];

// SKILLS COMPONENT
const Skills = () => {
  return (
    <section id="skills" className="bg-[#0f172a] text-white py-24">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* HEADING */}
        <h2 className="text-3xl md:text-4xl font-bold">
          My <span className="text-[#38bdf8]">Skills</span>
        </h2>

        <div className="w-20 h-1 bg-[#38bdf8] mx-auto mt-4 mb-10 rounded"></div>

        {/* CORE SKILLS */}
        <h3 className="text-xl font-semibold mb-6 text-[#38bdf8]">
          Core Technologies
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-12">
          {coreSkills.map((skill, index) => (
            <div
              key={index}
              className="bg-[#020617] p-6 rounded-xl flex flex-col items-center gap-3 shadow-md hover:shadow-[#38bdf8]/30 hover:scale-105 transition duration-300 cursor-pointer"
            >
              <div className="text-4xl">{skill.icon}</div>
              <p className="text-sm font-medium">{skill.name}</p>
            </div>
          ))}
        </div>

        {/* Additional SKILLS */}
        <h3 className="text-xl font-semibold mb-6 text-[#38bdf8]">
          Soft Skills
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-12">
          {additionalSkills.map((skill, index) => (
            <div
              key={index}
              className="bg-[#020617] p-6 rounded-xl flex flex-col items-center gap-3 shadow-md hover:shadow-[#38bdf8]/30 hover:scale-105 transition duration-300 cursor-pointer"
            >
              <div className="text-4xl">{skill.icon}</div>
              <p className="text-sm font-medium">{skill.name}</p>
            </div>
          ))}
        </div>

        {/* TOOLS */}
        <h3 className="text-xl font-semibold mb-6 text-[#38bdf8]">
          Tools & Technologies
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="bg-[#020617] p-6 rounded-xl flex flex-col items-center gap-3 shadow-md hover:shadow-[#38bdf8]/30 hover:scale-105 transition duration-300 cursor-pointer"
            >
              <div className="text-4xl">{tool.icon}</div>
              <p className="text-sm font-medium">{tool.name}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;