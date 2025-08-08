import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiArrowLeft } from 'react-icons/fi';
import { useParams, useNavigate } from 'react-router-dom';
import { image } from 'framer-motion/m';

const projects = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'A full-stack online store with React, Node.js, and Stripe payments.',
    longDescription: 'Developed a complete e-commerce solution featuring product listings, user authentication, shopping cart functionality, and Stripe payment integration. Implemented responsive design for optimal viewing across all devices with performance optimizations for product filtering and search.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux'],
    image: '/ProjectCard/one.jpeg',
    github: '#',
    liveDemo: '#',
    features: [
      'Product catalog with advanced filters and search',
      'User authentication with JWT',
      'Shopping cart with persistent storage',
      'Stripe payment processing',
      'Admin dashboard for inventory management',
      'Order history and tracking system'
    ],
    challenges: 'Implementing real-time inventory updates required solving concurrency issues during high traffic periods. Developed a reservation system for items in carts and used WebSockets for live inventory updates.',
    technologies: [
      { name: 'React', purpose: 'Frontend framework' },
      { name: 'Node.js', purpose: 'Backend server' },
      { name: 'MongoDB', purpose: 'Database' },
      { name: 'Stripe API', purpose: 'Payment processing' },
      { name: 'Redux', purpose: 'State management' }
    ],
    screenshots: [
      '/ProjectDetail/one (1).png',
      '/ProjectDetail/one (2).png',
      '/ProjectDetail/one (3).png',
    ]
  },
  {
    id: '2',
    title: 'Portfolio Website',
    description: 'A minimalist portfolio design with animations and dark mode.',
    longDescription: 'Designed and developed a modern portfolio website with smooth animations, dark/light mode toggle, and responsive layout. Focused on performance optimization and accessibility standards while showcasing creative work in an elegant gallery format.',
    tags: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    image: '/ProjectCard/two.avif',
    github: '#',
    liveDemo: '#',
    features: [
      'Dark/light mode toggle',
      'Smooth page transitions',
      'Responsive image gallery',
      'Contact form with email integration',
      'Performance optimized (95+ Lighthouse score)',
      'Accessibility compliant'
    ],
    challenges: 'Implementing smooth animations without compromising performance required careful optimization of Framer Motion animations and lazy loading of assets.',
    technologies: [
      { name: 'Next.js', purpose: 'React framework' },
      { name: 'Tailwind CSS', purpose: 'Styling' },
      { name: 'Framer Motion', purpose: 'Animations' },
      { name: 'Vercel', purpose: 'Hosting' }
    ],
    screenshots: [
      '/ProjectDetail/port.webp',
      '/ProjectDetail/port2.webp',
      '/ProjectDetail/port3.webp',
    ]
  },
  {
    id: '3',
    title: 'Fitness App UI',
    description: 'Mobile-first fitness tracking app with custom illustrations.',
    longDescription: 'Created a mobile fitness application UI with custom workout illustrations, progress tracking, and social features. Designed with a focus on user motivation through visual feedback and gamification elements.',
    tags: ['Figma', 'React Native', 'Firebase'],
    image: '/ProjectCard/three.jpg',
    github: '#',
    liveDemo: '#',
    features: [
      'Workout tracking with exercise library',
      'Progress visualization with charts',
      'Custom workout plan creation',
      'Social sharing and challenges',
      'Nutrition tracking integration',
      'Dark mode support'
    ],
    challenges: 'Designing an intuitive workout tracking flow that accommodates various exercise types while maintaining a clean interface required multiple iterations and user testing.',
    technologies: [
      { name: 'Figma', purpose: 'UI/UX design' },
      { name: 'React Native', purpose: 'Mobile development' },
      { name: 'Firebase', purpose: 'Backend services' },
      { name: 'Lottie', purpose: 'Animations' }
    ],
    screenshots: [
        '/ProjectDetail/fit.webp',
        '/ProjectDetail/fit2.webp',
        '/ProjectDetail/fit3.webp',
    ]
  },
  {
    id: '4',
    title: 'Weather Dashboard',
    description: 'Real-time weather forecasts with API integration.',
    longDescription: 'Built a weather application that provides current conditions, hourly forecasts, and 7-day predictions. Integrated with multiple weather APIs to ensure reliability and added location-based services for personalized forecasts.',
    tags: ['JavaScript', 'OpenWeather API', 'CSS3'],
    image: '/ProjectCard/four.webp',
    github: '#',
    liveDemo: '#',
    features: [
      'Current weather conditions',
      'Hourly and 7-day forecasts',
      'Location-based services',
      'Severe weather alerts',
      'Customizable dashboard',
      'Multiple weather data sources'
    ],
    challenges: 'Handling different API response formats and creating a unified data model required careful data normalization and error handling implementation.',
    technologies: [
      { name: 'JavaScript', purpose: 'Core functionality' },
      { name: 'OpenWeather API', purpose: 'Weather data' },
      { name: 'Geolocation API', purpose: 'User location' },
      { name: 'Chart.js', purpose: 'Data visualization' }
    ],
    screenshots: [
     '/ProjectDetail/dash.webp',
     '/ProjectDetail/dash2.webp',
     '/ProjectDetail/dash3.webp',
    ]
  },
  {
    id: '5',
    title: 'Task Management App',
    description: 'Productivity app with drag-and-drop functionality.',
    longDescription: 'Developed a comprehensive task management solution with team collaboration features. Implemented a responsive interface with drag-and-drop functionality, real-time updates, and customizable workflows for different project methodologies.',
    tags: ['React', 'Redux', 'Firebase'],
    image:'/ProjectCard/five.webp',
    github: '#',
    liveDemo: '#',
    features: [
      'Drag-and-drop task organization',
      'Team collaboration tools',
      'Customizable project views',
      'Due date reminders',
      'File attachments',
      'Activity history'
    ],
    challenges: 'Implementing smooth drag-and-drop across different project states while maintaining real-time sync required careful state management and performance optimization.',
    technologies: [
      { name: 'React', purpose: 'Frontend framework' },
      { name: 'Redux', purpose: 'State management' },
      { name: 'Firebase', purpose: 'Backend services' },
      { name: 'React Beautiful DnD', purpose: 'Drag and drop' }
    ],
    screenshots: [
      '/ProjectDetail/task.webp',
      '/ProjectDetail/task2.webp',
      '/ProjectDetail/task3.webp',
    ]
  },
  {
    id: '6',
    title: 'Recipe Finder',
    description: 'Search engine for recipes with dietary filters.',
    longDescription: 'Created a recipe discovery platform with advanced search capabilities and dietary restriction filters. Integrated with multiple recipe APIs to provide a comprehensive database and added meal planning functionality with grocery list generation.',
    tags: ['Vue.js', 'Spoonacular API', 'Tailwind'],
    image: '/ProjectCard/six.avif',
    github: '#',
    liveDemo: '#',
    features: [
      'Advanced recipe search',
      'Dietary restriction filters',
      'Meal planning tools',
      'Grocery list generator',
      'User recipe saving',
      'Nutrition information'
    ],
    challenges: 'Combining data from multiple recipe APIs with different schemas required creating a unified data model and implementing complex filtering logic.',
    technologies: [
      { name: 'Vue.js', purpose: 'Frontend framework' },
      { name: 'Spoonacular API', purpose: 'Recipe data' },
      { name: 'Tailwind CSS', purpose: 'Styling' },
      { name: 'IndexedDB', purpose: 'Offline storage' }
    ],
    screenshots: [
      '/ProjectDetail/cake.webp',
      '/ProjectDetail/cake2.webp',
      '/ProjectDetail/cake3.webp',
    ]
  }
];
export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-50">
        <div className="text-center p-8 bg-white rounded-xl shadow-lg">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Project not found</h1>
          <button
            onClick={() => navigate('/projects')}
            className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
          >
            Back to Projects
          </button>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-7xl mx-auto px-4 py-2 sm:px-6 lg:px-8"
    >
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800 transition mb-8"
      >
        <FiArrowLeft className="text-lg" />
        <span className="font-medium">Back to Projects</span>
      </button>

      {/* Project Content - Adjusted layout */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Content (Left) */}
        <div className="lg:w-2/3">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-start mb-12"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{project.title}</h1>
            <p className="text-xl text-gray-600">{project.description}</p>
          </motion.div>

          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mb-12 rounded-xl overflow-hidden shadow-lg"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto object-cover"
            />
          </motion.div>

          {/* Overview Section */}
          <motion.section
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Project Overview</h2>
            <p className="text-gray-600 leading-relaxed">{project.longDescription}</p>
          </motion.section>

          {/* Features Section */}
          <motion.section
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Key Features</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-1 flex-shrink-0 w-2 h-2 bg-indigo-600 rounded-full"></span>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </motion.section>

          {/* Challenges Section */}
          {project.challenges && (
            <motion.section
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.0 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Challenges & Solutions</h2>
              <p className="text-gray-600 leading-relaxed">{project.challenges}</p>
            </motion.section>
          )}

          {/* Screenshots Section */}
          {project.screenshots && project.screenshots.length > 0 && (
            <motion.section
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Screenshots</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {project.screenshots.map((screenshot, index) => (
                  <div key={index} className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
                    <img
                      src={screenshot}
                      alt={`${project.title} screenshot ${index + 1}`}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                ))}
              </div>
            </motion.section>
          )}
        </div>

        {/* Sidebar (Right) - Sticky */}
        <div className="lg:w-1/3">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="bg-gray-50 p-6 rounded-xl sticky top-8"
          >
           
            {/* Technologies Section */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Technologies Used</h2>
              <div className="space-y-4">
                {project.technologies.map((tech, index) => (
                  <div key={index} className="border-b border-gray-200 pb-4 last:border-0 last:pb-0">
                    <h3 className="font-medium text-gray-900">{tech.name}</h3>
                    <p className="text-sm text-gray-600">{tech.purpose}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-indigo-100 text-indigo-800 text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}