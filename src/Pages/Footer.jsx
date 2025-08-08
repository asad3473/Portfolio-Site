import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter, FaHeart } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-6 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* About Section */}
          <div className="space-y-4">
            <h1 className="text-2xl font-bold bg-clip-text text-white">
              Business's Portfolio
            </h1>
            <p className="text-gray-300 leading-relaxed">
              I build exceptional digital experiences with modern web technologies. 
              Passionate about creating clean, efficient code and beautiful user interfaces.
            </p>
            <div className="flex space-x-4 text-xl">
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-400 hover:text-white transition-colors duration-300">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                <FaLinkedin />
              </a>
              <a href="mailto:your@email.com" 
                 className="text-gray-400 hover:text-red-300 transition-colors duration-300">
                <FaEnvelope />
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-400 hover:text-blue-300 transition-colors duration-300">
                <FaTwitter />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-xl font-semibold mb-6 text-white border-b border-gray-700 pb-2">
              Navigation
            </h2>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2">
                <FiExternalLink size={14} /> About
              </a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2">
                <FiExternalLink size={14} /> Projects
              </a></li>
              <li><a href="#skills" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2">
                <FiExternalLink size={14} /> Skills
              </a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2">
                <FiExternalLink size={14} /> Contact
              </a></li>
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h2 className="text-xl font-semibold mb-6 text-white border-b border-gray-700 pb-2">
              Tech Stack
            </h2>
            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-white transition-colors duration-300">React.js</li>
              <li className="hover:text-white transition-colors duration-300">Next.js</li>
              <li className="hover:text-white transition-colors duration-300">Tailwind CSS</li>
              <li className="hover:text-white transition-colors duration-300">Node.js</li>
              <li className="hover:text-white transition-colors duration-300">MongoDB</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h2 className="text-xl font-semibold mb-6 text-white border-b border-gray-700 pb-2">
              Stay Updated
            </h2>
            <p className="text-gray-300 mb-4">
              Subscribe to my newsletter for the latest projects and articles.
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 w-full rounded-l-md focus:outline-none border border-[#ffffff76] text-white"
              />
              <button className="bg-gradient-to-r from-blue-200 via-gray-700 to-pink-900 px-4 py-2 rounded-r-md hover:opacity-90 transition-opacity">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-3"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm ">
            © {new Date().getFullYear()} Business's Portfolio. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
              Sitemap
            </a>
          </div>
        </div>

        
      </div>
    </footer>
  );
};

export default Footer;