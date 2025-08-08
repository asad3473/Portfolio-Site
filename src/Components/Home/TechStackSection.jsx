import React from 'react';
import { motion } from 'framer-motion';
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaGithub,
  FaFigma,
} from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiFirebase, SiTypescript } from 'react-icons/si';

const techIcons = [
  { icon: <FaReact className="text-[#61DAFB]" />, name: "React", delay: 0 },
  { icon: <SiTypescript className="text-blue-600" />, name: "TypeScript", delay: 0.2 },
  { icon: <FaNodeJs className="text-green-500" />, name: "Node.js", delay: 0.4 },
  { icon: <SiMongodb className="text-green-600" />, name: "MongoDB", delay: 0.6 },
  { icon: <SiFirebase className="text-yellow-500" />, name: "Firebase", delay: 0.8 },
  { icon: <SiTailwindcss className="text-cyan-400" />, name: "Tailwind", delay: 1.0 },
  { icon: <FaHtml5 className="text-orange-500" />, name: "HTML5", delay: 1.2 },
  { icon: <FaCss3Alt className="text-blue-400" />, name: "CSS3", delay: 1.4 },
  { icon: <FaGithub className="text-gray-800" />, name: "GitHub", delay: 1.6 },
  { icon: <FaFigma className="text-purple-500" />, name: "Figma", delay: 1.8 },
];

const TechStackGlobe = () => {
  return (
    <section className="px-6 relative overflow-hidden bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-2"
        >
          <h2 className="text-5xl p-2 font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 mb-4">
            My Tech Stack
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tools and technologies I use to bring ideas to life
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Description Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2"
          >
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
              <h3 className="text-3xl font-bold mb-6 text-gray-800">
                Building with Modern Technologies
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                I specialize in creating full-stack applications with cutting-edge technologies that deliver exceptional performance and user experiences.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="text-[#61DAFB] text-2xl mt-1">
                    <FaReact />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Frontend Development</h4>
                    <p className="text-gray-600">
                      React, TypeScript, Tailwind CSS, and responsive design principles
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-green-500 text-2xl mt-1">
                    <FaNodeJs />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Backend Development</h4>
                    <p className="text-gray-600">
                      Node.js, Express, MongoDB, and Firebase for scalable solutions
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-purple-500 text-2xl mt-1">
                    <FaFigma />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Design & Collaboration</h4>
                    <p className="text-gray-600">
                      Figma for prototyping and GitHub for version control
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Tech Globe */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full h-[400px] lg:w-1/2 flex items-center justify-center"
          >
            <div className="absolute w-64 h-64 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 blur-xl opacity-60"></div>
            
            {techIcons.map((tech, index) => {
              const angle = (index * 2 * Math.PI) / techIcons.length;
              const radius = 120;
              const x = radius * Math.cos(angle);
              const y = radius * Math.sin(angle);
              
              return (
                <motion.div
                  key={index}
                  className="absolute text-4xl flex flex-col items-center justify-center"
                  style={{
                    x: x,
                    y: y,
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: tech.delay,
                    duration: 0.6,
                    type: 'spring',
                    stiffness: 100,
                  }}
                >
                  <div className="p-3 bg-white rounded-full shadow-lg border border-gray-100">
                    {tech.icon}
                  </div>
                  <span className="text-xs font-medium mt-2 text-gray-700 bg-white/80 px-2 py-1 rounded-full opacity-0 hover:opacity-100 transition-opacity">
                    {tech.name}
                  </span>
                </motion.div>
              );
            })}
            
            <div className="absolute w-40 h-40 rounded-full bg-gradient-to-br from-blue-200 to-purple-200 flex items-center justify-center shadow-inner">
              <span className="text-gray-700 font-bold text-lg">Tech</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechStackGlobe;