import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="bg-[#0f172a] text-white py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">

        {/* HEADING */}
        <h2 className="text-3xl md:text-4xl font-bold">
          Let's <span className="text-[#38bdf8]">Work Together</span>
        </h2>

        <div className="w-20 h-1 bg-[#38bdf8] mx-auto mt-4 mb-8 rounded"></div>

        {/* DESCRIPTION */}
        <p className="text-gray-400 max-w-xl mx-auto">
          I’m open to opportunities and collaborations. Feel free to connect with me anytime.
        </p>

        {/* CONTACT LINKS */}
        <div className="mt-10 flex flex-col gap-4 items-center">

          {/* Email */}
          <a
            href="mailto:anantharjun672001@gmail.com"
            className="flex items-center gap-3 hover:text-[#38bdf8] transition"
          >
            <FaEnvelope /> anantharjun672001@gmail.com
          </a>

          {/* Phone */}
          <a
            href="tel:8940695948"
            className="flex items-center gap-3 hover:text-[#38bdf8] transition"
          >
            <FaPhone /> 8940695948
          </a>

          {/* Social Links */}
          <div className="flex gap-6 mt-4 text-2xl">

            <a
              href="https://github.com/anantharjun672001-a11y"
              target="_blank"
              className="hover:text-[#38bdf8] transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/ananth-arjun-92b14a402"
              target="_blank"
              className="hover:text-[#38bdf8] transition"
            >
              <FaLinkedin />
            </a>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;