import React from "react";
import { Mail, Phone, MapPin, Github } from "lucide-react";

const Contact = () => {
  return (
    <section className="bg-theme-color text-text-theme-color px-4 py-16" id="contact">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="flex items-center gap-4 mb-6">
          <h2 className="text-3xl font-bold text-orange-500 font-mono flex-shrink-0">
            Contact Me
          </h2>
          <div className="border-t border-text-theme-color w-full"></div>
        </div>

        <p className="text-lg font-mono mb-10 text-text-theme-color">→ Let's Work Together!</p>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Info Box */}
          <div className="bg-blue-theme text-text-theme-color p-6 rounded-xl font-mono">
            <h3 className="text-xl font-semibold mb-3">
              Have a <span className="text-orange-400">Project</span> in Mind?
            </h3>
            <p className="text-sm leading-relaxed mb-6 text-text-theme-color">
              I enjoy bringing ideas to life using the MERN stack. If you have a project or need help with web development, drop me a message and let's build something great together. I'm currently open to exciting job opportunities and freelance projects.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 text-sm text-text-theme-color">
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>thurain.dev@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>+959 891 150 371</span>
              </div>
              <div className="flex items-center gap-2">
                <Github size={16} />
                <a
                  href="https://github.com/ThurainDev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-text-theme-color"
                >
                  github.com/ThurainDev
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Yangon / Myanmar</span>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <form className="flex flex-col gap-4 font-mono">
            <input
              type="text"
              placeholder="Full Name"
              className="p-3 rounded bg-gray-300 text-black"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="p-3 rounded bg-gray-300 text-black"
            />
            <input
              type="text"
              placeholder="Subject"
              className="p-3 rounded bg-gray-300 text-black"
            />
            <textarea
              rows={5}
              placeholder="Your Message"
              className="p-3 rounded bg-gray-300 text-black"
            ></textarea>
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-400 text-black font-bold py-3 rounded transition"
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