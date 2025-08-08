import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiPause, FiPlay } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Developed a comprehensive e-commerce solution with React frontend, Node.js backend, and Stripe payment integration. The platform features product filtering, user authentication, cart functionality, and responsive design that works seamlessly across all devices. Implemented advanced features like product recommendations and real-time inventory updates.',
    image: '/homeimage/one.avif',
    link: '/projects',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe']
  },
  {
    id: 2,
    title: 'Creative Portfolio',
    description: 'Designed and developed a minimalist portfolio for a photographer that showcases their work in an elegant gallery format. The site features smooth animations, lazy loading for images, and a contact form with email integration. The design emphasizes whitespace and typography to let the visual work stand out.',
    image: '/homeimage/two.jfif',
    link: '/projects',
    tags: ['React', 'GSAP', 'CSS3', 'Netlify']
  },
  {
    id: 3,
    title: 'Fitness Mobile App',
    description: 'Created a sleek UI/UX for a fitness startup mobile application. The design includes workout tracking, nutrition logging, and social features. Focused on creating an intuitive user flow with micro-interactions that enhance engagement. Conducted user testing to refine the onboarding experience and improve retention metrics.',
    image: '/homeimage/three.jpeg',
    link: '/projects',
    tags: ['Figma', 'React Native', 'Firebase', 'UI/UX']
  },
];

export default function ProjectSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState('right');
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let interval;
    if (isAutoPlaying && !isHovered) {
      interval = setInterval(() => {
        handleNext();
      }, 6000);
    }
    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying, isHovered]);

  const handleNext = () => {
    setDirection('right');
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setDirection('left');
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setDirection(index > currentIndex ? 'right' : 'left');
    setCurrentIndex(index);
  };

  const slideVariants = {
    hiddenRight: { x: '100%', opacity: 0 },
    hiddenLeft: { x: '-100%', opacity: 0 },
    visible: { 
      x: '0%', 
      opacity: 1, 
      transition: { 
        duration: 0,
        ease: [0.32, 0.72, 0, 1]
      } 
    },
    exitRight: { 
      x: '-100%', 
      opacity: 0, 
      transition: { 
        duration: 0,
        ease: [0.32, 0.72, 0, 1]
      } 
    },
    exitLeft: { 
      x: '100%', 
      opacity: 0, 
      transition: { 
        duration: 0.8,
        ease: [0.32, 0.72, 0, 1]
      } 
    },
  };

  const fadeVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.6, delay: 0.3 }
    }
  };

  return (
    <div 
      className="relative w-full sm:py-14 py-10  mx-auto  overflow-hidden shadow-2xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Slider Container */}
      <div className="relative h-[500px] md:h-[500px]">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial={direction === 'right' ? 'hiddenRight' : 'hiddenLeft'}
            animate="visible"
            exit={direction === 'right' ? 'exitLeft' : 'exitRight'}
            className="absolute w-full h-full"
          >
            {/* Project Image with Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10" />
            <img
              src={projects[currentIndex].image}
              alt={projects[currentIndex].title}
              className="w-full h-full object-cover"
            />

            {/* Project Info Overlay */}
            <div className="absolute bottom-0 left-10 right-0 z-20 p-6 md:p-12 text-white">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeVariants}
                className="max-w-3xl"
              >
                <div className="flex flex-wrap  gap-2 mb-4">
                  {projects[currentIndex].tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-3xl md:text-5xl font-bold mb-4">
                  {projects[currentIndex].title}
                </h3>
                
                <p className="text-lg md:text-xl mb-6 leading-relaxed opacity-90">
                  {projects[currentIndex].description}
                </p>
                
                <Link
                  to={projects[currentIndex].link}
                  className="inline-flex items-center px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition group"
                >
                  View Project
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows - Always visible but more subtle */}
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/60 text-white p-3 rounded-full transition-all z-30 backdrop-blur-sm"
        >
          <FiChevronLeft size={28} />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/60 text-white p-3 rounded-full transition-all z-30 backdrop-blur-sm"
        >
          <FiChevronRight size={28} />
        </button>

        {/* Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex gap-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${index === currentIndex ? 'bg-white w-6' : 'bg-white/50 hover:bg-white/70'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </div>
  );
}