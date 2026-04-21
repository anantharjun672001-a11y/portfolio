import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="bg-[#0f172a] text-white py-24">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* HEADING */}
        <h2 className="text-3xl md:text-4xl font-bold">
          Let's <span className="text-[#38bdf8]">Work Together</span>
        </h2>

        <div className="w-20 h-1 bg-[#38bdf8] mx-auto mt-4 mb-8 rounded"></div>

        {/* DESCRIPTION */}
        <p className="text-gray-400 max-w-xl mx-auto">
          I’m open to opportunities and collaborations. Feel free to connect with me anytime.
        </p>

        {/* GRID (INFO + FORM) */}
        <div className="mt-12 grid md:grid-cols-2 gap-10 items-start">

          {/* LEFT SIDE - CONTACT INFO */}
          <div className="flex flex-col gap-6 items-center md:items-start text-center md:text-left">

            <a
              href="mailto:anantharjun672001@gmail.com"
              className="flex items-center gap-3 hover:text-[#38bdf8] transition"
            >
              <FaEnvelope /> anantharjun672001@gmail.com
            </a>

            <a
              href="tel:8940695948"
              className="flex items-center gap-3 hover:text-[#38bdf8] transition"
            >
              <FaPhone /> 8940695948
            </a>

            <div className="flex gap-6 mt-2 text-2xl">
              <a
                href="https://github.com/anantharjun672001-a11y"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#38bdf8] transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/in/ananth-arjun-92b14a402"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#38bdf8] transition"
              >
                <FaLinkedin />
              </a>
            </div>

          </div>

          {/* RIGHT SIDE - CONTACT FORM */}
          <form className="bg-[#020617] p-6 rounded-xl shadow-lg flex flex-col gap-4">

            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded bg-[#0f172a] outline-none focus:ring-2 focus:ring-[#38bdf8]"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="p-3 rounded bg-[#0f172a] outline-none focus:ring-2 focus:ring-[#38bdf8]"
            />

            <textarea
              rows="4"
              placeholder="Your Message"
              className="p-3 rounded bg-[#0f172a] outline-none focus:ring-2 focus:ring-[#38bdf8]"
            ></textarea>

            <button
              type="submit"
              className="bg-[#38bdf8] text-black py-2 rounded font-medium hover:bg-[#0ea5e9] transition"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
};

export default Contact;