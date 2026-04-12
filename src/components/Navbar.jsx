import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-[#0f172a] text-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-xl font-bold text-[#38bdf8]">AnanthRaj</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-medium">
          <li className="hover:text-[#38bdf8] cursor-pointer">Home</li>
          <li className="hover:text-[#38bdf8] cursor-pointer">About</li>
          <li className="hover:text-[#38bdf8] cursor-pointer">Skills</li>
          <li className="hover:text-[#38bdf8] cursor-pointer">Projects</li>
          <li className="hover:text-[#38bdf8] cursor-pointer">Contact</li>
        </ul>

        {/* Mobile Menu Button */}
        <div
          className="md:hidden text-2xl cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-[#0f172a] px-6 pb-4 flex flex-col gap-4 font-medium">
          <li className="hover:text-[#38bdf8] cursor-pointer">Home</li>
          <li className="hover:text-[#38bdf8] cursor-pointer">About</li>
          <li className="hover:text-[#38bdf8] cursor-pointer">Skills</li>
          <li className="hover:text-[#38bdf8] cursor-pointer">Projects</li>
          <li className="hover:text-[#38bdf8] cursor-pointer">Contact</li>
        </ul>
      )}
    </nav>
  );
}