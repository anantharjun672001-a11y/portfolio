import AiImg from "../assets/Ai_Code_reviewer.png"; 
import hostelImg from "../assets/Hostel_Management.png";
import photoImg from "../assets/Stuart_Photography.png";
import notesImg from "../assets/Notes_app.png";

const projects = [
  {
    title: "AI Code Reviewer",
    description:
      "AI-powered code review tool that provides suggestions and improvements.",
    tech: ["React", "Tailwind", "OpenAI API"],
    image: AiImg,
    frontend: "https://github.com/anantharjun672001-a11y/AiFrontend",
    backend: "https://github.com/anantharjun672001-a11y/Backend",
    live_demo: "https://ai-code-reviewer-blue-six.vercel.app/",
  },
  {
    title: "Hostel Management",
    description:
      "Full-stack web app for managing student and room allocation.",
    tech: ["React", "Node", "MongoDB"],
    image: hostelImg,
    frontend: "https://github.com/anantharjun672001-a11y/HostelFrontend",
    backend: "https://github.com/anantharjun672001-a11y/HostelBackend",
    live_demo: "https://hostel-frontend-topaz.vercel.app/",
  },
  {
    title: "Photography Website",
    description:
      "Responsive client portfolio website with optimized UI and performance.",
    tech: ["React", "Tailwind","Node","Cloudinary"],
    image: photoImg,
    frontend: "https://github.com/anantharjun672001-a11y/StuartPhotography",
    backend: "https://github.com/anantharjun672001-a11y/StuartPhotography_Backend",
    live_demo: "https://www.stuartphtography.in/",
  },
  {
    title: "Notes App",
    description:
      "Simple note-taking app with localStorage persistence and responsive design.",
    tech: ["React", "Tailwind"],
    image: notesImg,
    frontend: "https://github.com/anantharjun672001-a11y/notes_app",
    backend: null,
    live_demo: "https://notes-app-3dtg.vercel.app/",
  }
];

const Projects = () => {
  return (
    <section id="projects" className="bg-[#020617] text-white py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* HEADING */}
        <h2 className="text-3xl md:text-4xl font-bold">
          My <span className="text-[#38bdf8]">Projects</span>
        </h2>

        <div className="w-20 h-1 bg-[#38bdf8] mx-auto mt-4 mb-10 rounded"></div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#0f172a] rounded-xl overflow-hidden shadow-md hover:shadow-[#38bdf8]/30 hover:scale-105 transition duration-300"
            >

              {/* IMAGE */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />

              {/* CONTENT */}
              <div className="p-5 text-left">

                <h3 className="text-xl font-semibold">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm mt-2">
                  {project.description}
                </p>

                {/* TECH STACK */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-[#38bdf8]/20 text-[#38bdf8] px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* BUTTONS */}
                <div className="flex gap-3 mt-4 flex-wrap">

                  {project.frontend && (
                    <a
                      href={project.frontend}
                      target="_blank"
                      className="text-xs border px-3 py-1 rounded hover:bg-white hover:text-black transition"
                    >
                      Frontend
                    </a>
                  )}

                  {project.backend && (
                    <a
                      href={project.backend}
                      target="_blank"
                      className="text-xs border px-3 py-1 rounded hover:bg-white hover:text-black transition"
                    >
                      Backend
                    </a>
                  )}

                  {project.live_demo && (
                    <a
                      href={project.live_demo}
                      target="_blank"
                      className="text-xs bg-[#38bdf8] text-black px-3 py-1 rounded hover:scale-105 transition"
                    >
                      Live Demo
                    </a>
                  )}

                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Projects;