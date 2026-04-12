import React from "react";
import { FaEnvelope, FaDownload } from "react-icons/fa";
import profile from "../assets/Arjun_Profile.jpeg";

const Hero = () => {
  return (
    <section className="min-h-screen bg-[#0f172a] text-white flex items-center">
      
      {/* CONTAINER */}
      <div className="max-w-6xl mx-auto w-full px-6 flex flex-col md:flex-row items-center justify-between gap-10 pt-20">

        {/* LEFT SIDE */}
        <div className="flex-1 text-center md:text-left">
          
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Hi, I'm{" "}
            <span className="text-[#38bdf8]">AnanthRaj</span>
          </h1>

          <p className="mt-4 text-lg md:text-xl text-gray-200">
            MERN Stack Developer
          </p>

          <p className="mt-4 text-gray-400 max-w-xl mx-auto md:mx-0">
            Passionate developer focused on building responsive and
            user-friendly web applications.
          </p>

          {/* BUTTONS */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">

            {/* Resume */}
            <a
              href="/resume.pdf"
              download
              className="flex items-center justify-center gap-2 bg-[#38bdf8] text-black px-5 py-2 rounded font-medium hover:scale-105 transition duration-300"
            >
              <FaDownload /> Resume
            </a>

            {/* Email */}
            <a
              href="mailto:anantharjun672001@gmail.com"
              className="flex items-center justify-center gap-2 border border-gray-400 px-5 py-2 rounded hover:bg-white hover:text-black transition duration-300"
            >
              <FaEnvelope /> Email Me
            </a>

          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="flex-1 flex justify-center">
          <img
            src={profile}
            alt="profile"
            className="w-64 h-64 md:w-80 md:h-80 object-cover object-top rounded-full border-4 border-[#38bdf8] shadow-lg hover:scale-105 transition duration-300"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;