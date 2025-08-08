import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaMapMarkerAlt, FaPhone, FaEnvelope, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';


const ContactPage = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      form.current,
      'YOUR_PUBLIC_KEY'
    )
      .then((result) => {
        console.log(result.text);
        alert('Message sent successfully!');
        e.target.reset();
      }, (error) => {
        console.log(error.text);
        alert('Failed to send message. Please try again.');
      });
  };

  return (
    <section id="contact" className="relative  px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white overflow-hidden">


      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-800 via-gray-700 to-gray-9000 mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Drop me a message!
          </p>
          <div className="w-20 mt-3 h-1 bg-gradient-to-r from-slate-400 via-gray-300 to-slate-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Send Me a Message</h3>
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="user_name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="user_email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                  placeholder="What's this about?"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full  bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 text-white rounded-full hover:shadow-lg  hover:scale-105 mx-auto py-3 px-6  font-medium flex items-center justify-center gap-2 transition-all"
              >
                Send Message<FaPaperPlane />
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
              <p className="text-gray-600 mb-8">
                Feel free to reach out through any of these channels. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full text-black">
                    <FaMapMarkerAlt className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Location</h4>
                    <p className="text-gray-600">Your City, Country</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-3 rounded-full text-black">
                    <FaPhone className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Phone</h4>
                    <p className="text-gray-600">+1 (123) 456-7890</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-red-100 p-3 rounded-full text-black">
                    <FaEnvelope className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Email</h4>
                    <p className="text-gray-600">your.email@example.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-xl font-semibold text-gray-800 mb-4">Connect With Me</h4>
              <div className="flex gap-4">
                {/* LinkedIn */}
                <motion.a
                  href="https://linkedin.com/in/your-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className="bg-[#0077B5] text-white p-3 rounded-full hover:bg-[#006097] transition-colors"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="text-xl" />
                </motion.a>

                {/* Twitter */}
                <motion.a
                  href="https://twitter.com/your-handle"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className="bg-[#1DA1F2] text-white p-3 rounded-full hover:bg-[#1991da] transition-colors"
                  aria-label="Twitter"
                >
                  <FaTwitter className="text-xl" />
                </motion.a>

                {/* GitHub */}
                <motion.a
                  href="https://github.com/your-username"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className="bg-gray-800 text-white p-3 rounded-full hover:bg-gray-900 transition-colors"
                  aria-label="GitHub"
                >
                  <FaGithub className="text-xl" />
                </motion.a>

                {/* Email */}
                <motion.a
                  href="mailto:your.email@example.com"
                  whileHover={{ y: -3 }}
                  className="bg-[#EA4335] text-white p-3 rounded-full hover:bg-[#d33426] transition-colors"
                  aria-label="Email"
                >
                  <FaEnvelope className="text-xl" />
                </motion.a>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;