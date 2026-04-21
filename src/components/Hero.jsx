import React from "react";
import { FaEnvelope, FaDownload, FaExternalLinkAlt } from "react-icons/fa";
import profile from "../assets/Arjun_Profile.jpeg";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen bg-[#020617] text-white flex items-center"
    >
      <div className="max-w-6xl mx-auto w-full px-6 flex flex-col-reverse md:flex-row items-center justify-between gap-12 pt-24">

        {/* LEFT */}
        <div className="flex-1 text-center md:text-left">

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Hi, I'm{" "}
            <span className="text-[#38bdf8]">Ananthraj</span>
          </h1>

          <p className="mt-4 text-xl text-gray-300 font-medium">
            MERN Stack Developer
          </p>

          <p className="mt-4 text-gray-400 max-w-xl mx-auto md:mx-0 leading-relaxed">
            I build responsive and scalable full-stack web applications using
            React, Node.js, and MongoDB.
          </p>

          {/* BUTTONS */}
          <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#38bdf8] text-black px-5 py-2 rounded-lg font-medium hover:bg-[#0ea5e9] transition"
            >
              <FaExternalLinkAlt /> View Resume
            </a>

            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 border border-gray-400 px-5 py-2 rounded-lg hover:bg-white hover:text-black transition"
            >
              <FaDownload /> Download
            </a>

            {/* Updated Contact Button */}
            <a
              href="#contact"
              className="flex items-center gap-2 border border-gray-400 px-5 py-2 rounded-lg hover:bg-white hover:text-black transition"
            >
              <FaEnvelope /> Contact Me
            </a>

          </div>
        </div>

        {/* RIGHT */}
        <div className="flex-1 flex justify-center relative">

          <div className="absolute w-72 h-72 bg-[#38bdf8] rounded-full blur-3xl opacity-20"></div>

          <img
            src={profile}
            alt="profile"
            className="relative w-64 h-64 md:w-80 md:h-80 object-cover object-top rounded-full border-4 border-[#38bdf8] shadow-xl hover:scale-105 transition"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;