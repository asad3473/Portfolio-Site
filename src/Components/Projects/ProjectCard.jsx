import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

// Project data (replace with your client's projects)
const projects = [
    {
        id: 1,
        title: 'E-Commerce Platform',
        description: 'A full-stack online store with React, Node.js, and Stripe payments.',
        tags: ['React', 'Node.js', 'MongoDB'],
        image: '/ProjectCard/one.jpeg',
        github: '#',
        live: '#',
    },
    {
        id: 2,
        title: 'Portfolio Website',
        description: 'A minimalist portfolio design with animations and dark mode.',
        tags: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
        image: '/ProjectCard/two.avif',
        github: '#',
        live: '#',
    },
    {
        id: 3,
        title: 'Fitness App UI',
        description: 'Mobile-first fitness tracking app with custom illustrations.',
        tags: ['Figma', 'React Native', 'Firebase'],
        image: '/ProjectCard/three.jpg',
        github: '#',
        live: '#',
    },
    {
        id: 4,
        title: 'Weather Dashboard',
        description: 'Real-time weather forecasts with API integration.',
        tags: ['JavaScript', 'OpenWeather API', 'CSS3'],
        image: '/ProjectCard/four.webp',
        github: '#',
        live: '#',
    },
    {
        id: 5,
        title: 'Task Management App',
        description: 'Productivity app with drag-and-drop functionality.',
        tags: ['React', 'Redux', 'Firebase'],
        image: '/ProjectCard/five.webp',
        github: '#',
        live: '#',
    },
    {
        id: 6,
        title: 'Recipe Finder',
        description: 'Search engine for recipes with dietary filters.',
        tags: ['Vue.js', 'Spoonacular API', 'Tailwind'],
        image: '/ProjectCard/six.avif',
        github: '#',
        live: '#',
    },
];

// Animation variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2 },
    },
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.5 },
    },
};
export default function ProjectCard({ showAll = false }) {
    const [hoveredId, setHoveredId] = useState(null);
    const navigate = useNavigate();
    const displayedProjects = showAll ? projects : projects.slice(0, 3);

    return (
        <section id="projects" className="sm:py-20 py-14 px-4">
            <div className="max-w-6xl mx-auto">
                {!showAll && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-800 via-gray-700 to-gray-9000 mb-4">Featured Projects</h2>
                        <p className="text-lg text-black max-w-2xl mx-auto">
                              A curated selection of my most impactful projects demonstrating technical proficiency, user-centric design, and innovative solutions to real-world problems.
                        </p>
                    </motion.div>
                )}

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {displayedProjects.map((project) => (
                        <motion.div
                            key={project.id}
                            variants={itemVariants}
                            className="relative group rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white"
                            onMouseEnter={() => setHoveredId(project.id)}
                            onMouseLeave={() => setHoveredId(null)}
                            onClick={() => navigate(`/projects/${project.id}`)}
                            style={{ cursor: 'pointer' }}
                        >
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                            {/* {hoveredId === project.id && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end"
                                >
                                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                                    <p className="text-gray-200 mb-4">{project.description}</p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tags.map((tag) => (
                                            <span key={tag} className="px-3 py-1 bg-white/10 text-white text-sm rounded-full">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex gap-4">
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white hover:text-purple-300 transition">
                                            <FiGithub /> Code
                                        </a>
                                        <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white hover:text-purple-300 transition">
                                            <FiExternalLink /> Live Demo
                                        </a>
                                    </div>
                                </motion.div>
                            )} */}

                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.slice(0, 2).map((tag) => (
                                        <span key={tag} className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                    {project.tags.length > 2 && (
                                        <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">
                                            +{project.tags.length - 2}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {!showAll && projects.length > 3 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="text-center mt-12"
                    >
                        <button
                            onClick={() => navigate('/projects')}
                            className="px-8 py-3 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 text-white rounded-full font-medium hover:shadow-lg transition-all hover:scale-105 flex items-center gap-2 mx-auto"
                        >
                            View More Projects<FiChevronDown /> 
                        </button>
                    </motion.div>
                )}
            </div>
        </section>
    );
}