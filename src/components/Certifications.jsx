import React from "react";

import guviCert from "../assets/GuviCert.png";
import internshipCert from "../assets/InternCert.jpeg";

const certifications = [
  {
    title: "Full Stack Development Certification",
    issuer: "GUVI",
    image: guviCert,
    description:
      "Completed Full Stack Development program covering MERN stack with hands-on projects.",
  },
  {
    title: "Web Development Internship",
    issuer: "VR SOFTTECH",
    image: internshipCert,
    description:
      "Completed internship focusing on real-world web development and project implementation.",
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="bg-[#020617] text-white py-24">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* HEADING */}
        <h2 className="text-3xl md:text-4xl font-bold">
          My <span className="text-[#38bdf8]">Certifications</span>
        </h2>

        <div className="w-20 h-1 bg-[#38bdf8] mx-auto mt-4 mb-12 rounded"></div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-[#0f172a] rounded-xl overflow-hidden shadow-lg hover:shadow-[#38bdf8]/30 transition duration-300 hover:scale-105"
            >
              
              {/* IMAGE CONTAINER FIXED HEIGHT */}
              <a
                href={cert.image}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-black flex items-center justify-center h-64 p-4"
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="max-h-full max-w-full object-contain"
                />
              </a>

              {/* CONTENT */}
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold text-[#38bdf8]">
                  {cert.title}
                </h3>

                <p className="text-sm text-gray-400 mt-1">
                  {cert.issuer}
                </p>

                <p className="text-gray-300 mt-3 text-sm leading-relaxed">
                  {cert.description}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Certifications;