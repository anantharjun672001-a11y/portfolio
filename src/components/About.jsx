import React from "react";

const About = () => {
  return (
    <section id="about" className="bg-[#020617] text-white py-20">

      {/* CONTAINER */}
      <div className="max-w-5xl mx-auto px-6 text-center">

        {/* HEADING */}
        <h2 className="text-3xl md:text-4xl font-bold">
          About <span className="text-[#38bdf8]">Me</span>
        </h2>

        {/* LINE */}
        <div className="w-20 h-1 bg-[#38bdf8] mx-auto mt-4 mb-8 rounded"></div>

        {/* CONTENT */}
        <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto text-lg">
          I am a passionate MERN stack developer with a strong interest in building
          responsive and user-friendly web applications. I enjoy solving real-world
          problems and continuously improving my skills in both frontend and backend
          development.
        </p>

        <p className="text-gray-400 mt-4 leading-relaxed max-w-3xl mx-auto">
          I have worked on multiple projects including full-stack applications and
          modern frontend interfaces. I am currently focused on strengthening my
          problem-solving abilities and gaining real-world development experience.
        </p>

      </div>
    </section>
  );
};

export default About;
