import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaPalette, FaRocket } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-10 w-40 h-40 bg-blue-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-purple-500 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-800 via-gray-700 to-gray-9000 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-slate-400 via-gray-300 to-slate-500 mx-auto"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
        
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full lg:w-3/5"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Crafting Digital Experiences That Matter
            </h3>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-2">
              I'm a <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900">Full-Stack Developer</span> with a passion for building performant, accessible, and visually stunning web applications. My journey in tech began with a curiosity about how things work, which evolved into a deep love for solving complex problems through code.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="text-black text-3xl mb-4">
                  <FaCode />
                </div>
                <h4 className="font-bold text-lg mb-2">Clean Code</h4>
                <p className="text-gray-600">Modular, maintainable code following best practices</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="text-black text-3xl mb-4">
                  <FaPalette />
                </div>
                <h4 className="font-bold text-lg mb-2">Beautiful UI</h4>
                <p className="text-gray-600">Pixel-perfect interfaces with attention to detail</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="text-black text-3xl mb-4">
                  <FaRocket />
                </div>
                <h4 className="font-bold text-lg mb-2">Performance</h4>
                <p className="text-gray-600">Lightning-fast applications optimized for speed</p>
              </div>
            </div>

          
          </motion.div>


           <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-2/5 relative"
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-slate-400 via-gray-300 to-slate-500 rounded-2xl opacity-75 group-hover:opacity-100 blur transition-all duration-300"></div>
              <div className="relative overflow-hidden rounded-2xl border-8 border-white shadow-2xl">
                <img 
                  src="https://img.freepik.com/free-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg?w=740&t=st=1716480000~exp=1716480600~hmac=1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef" 
                  alt="Profile" 
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;