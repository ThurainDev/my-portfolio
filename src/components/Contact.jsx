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
          <form className="flex flex-col gap-6 font-mono bg-blue-theme/30 backdrop-blur-md p-8 rounded-xl border border-gray-500/20">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 bg-transparent border-b border-gray-400 text-text-theme-color placeholder-gray-400 focus:outline-none focus:border-orange-400 transition appearance-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 bg-transparent border-b border-gray-400 text-text-theme-color placeholder-gray-400 focus:outline-none focus:border-orange-400 transition appearance-none"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full p-3 bg-transparent border-b border-gray-400 text-text-theme-color placeholder-gray-400 focus:outline-none focus:border-orange-400 transition appearance-none"
            />
            <textarea
              rows={4}
              placeholder="Message"
              className="w-full p-3 bg-transparent border-b border-gray-400 text-text-theme-color placeholder-gray-400 focus:outline-none focus:border-orange-400 transition resize-none appearance-none"
            ></textarea>
            <button
              type="submit"
              className="mt-2 bg-transparent border-2 border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-text-theme-color font-medium py-2 rounded-lg transition duration-300"
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