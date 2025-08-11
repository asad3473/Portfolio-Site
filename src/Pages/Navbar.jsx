import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 shadow-lg">
      <div className="flex justify-around items-center py-3 px-6 max-w-7xl mx-auto">
        {/* Logo */}
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="text-2xl text-white font-bold"
        >
          Business Portfolio
        </motion.h1>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex gap-8">
          {navLinks.map((link, index) => (
            <motion.li
              key={link.name}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              {link.href.startsWith('#') ? (
                <a
                  href={link.href}
                  className="relative font-semibold text-white p-2 group"
                >
                  <span className="z-10 relative">{link.name}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                </a>
              ) : (
                <Link
                  to={link.href}
                  className="relative font-semibold text-white p-2 group"
                >
                  <span className="z-10 relative">{link.name}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                </Link>
              )}
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <FaTimes className="w-6 h-6" />
          ) : (
            <FaBars className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu (Animated) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25 }}
            className="md:hidden fixed top-14 right-0 w-64 h-screen bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 shadow-xl"
          >
            <ul className="flex flex-col justify-center items-center p-6 gap-6">
              {navLinks.map((link) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {link.href.startsWith('#') ? (
                    <a
                      href={link.href}
                      className="block text-white text-lg font-semibold py-2 px-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className="block text-white text-lg font-semibold py-2 px-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
