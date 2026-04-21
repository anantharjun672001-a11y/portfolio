import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-[#020617]/80 backdrop-blur-md text-white shadow-lg z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-xl font-bold text-[#38bdf8]">AnanthRaj</h1>

        {/* Desktop */}
        <ul className="hidden md:flex gap-8 font-medium">
          <li><a href="#hero" className="hover:text-[#38bdf8]">Home</a></li>
          <li><a href="#about" className="hover:text-[#38bdf8]">About</a></li>
          <li><a href="#skills" className="hover:text-[#38bdf8]">Skills</a></li>
          <li><a href="#projects" className="hover:text-[#38bdf8]">Projects</a></li>
          <li><a href="#contact" className="hover:text-[#38bdf8]">Contact</a></li>
        </ul>

        {/* Mobile Toggle */}
        <div
          className="md:hidden text-2xl cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile */}
      {isOpen && (
        <ul className="md:hidden bg-[#020617] px-6 pb-4 flex flex-col gap-4">
          <li><a href="#hero">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      )}
    </nav>
  );
}