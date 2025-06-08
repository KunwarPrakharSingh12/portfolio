
import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Github, Link as LinkIcon, Code } from 'lucide-react';

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'Banking Management System (BMS)',
      description: 'A comprehensive banking solution enabling account creation and management for savings, checking, and fixed deposit accounts. Features secure fund transfers through NEFT, RTGS, IMPS, and UPI integration.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      tech: ['Java', 'DBMS', 'SQL', 'OOP'],
      github: 'https://github.com/kunwarprakharsingh',
      demo: 'https://linktr.ee/kunwar_prakhar_singh',
      featured: true,
    },
    {
      id: 2,
      title: 'Dhanvantri-Vatika: Virtual Herbal Garden',
      description: 'An immersive web-based educational platform showcasing Ayurvedic and AYUSH medicinal plants. Offers interactive 2D/3D experiences with comprehensive herbal garden environments.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      tech: ['HTML', 'CSS', 'JavaScript', '3D Graphics'],
      github: 'https://github.com/kunwarprakharsingh',
      demo: 'https://linktr.ee/kunwar_prakhar_singh',
      featured: true,
    },
    {
      id: 3,
      title: 'Algorithm Debugging Solutions',
      description: 'Collection of efficient algorithms and debugging solutions developed during internship at Rajeev Gandhi Computer Saksharta Mission. Focused on C programming optimization.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop',
      tech: ['C', 'GDB', 'Algorithms', 'Debugging'],
      github: 'https://github.com/kunwarprakharsingh',
      demo: 'https://linktr.ee/kunwar_prakhar_singh',
      featured: false,
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'Modern, responsive portfolio website built with React and Tailwind CSS featuring cyberpunk aesthetics and 3D elements. Showcasing professional development skills.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
      tech: ['React', 'Tailwind CSS', 'Three.js', 'TypeScript'],
      github: 'https://github.com/kunwarprakharsingh',
      demo: 'https://linktr.ee/kunwar_prakhar_singh',
      featured: false,
    },
  ];

  const ProjectCard = ({ project, index }: { project: typeof projects[0], index: number }) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        onHoverStart={() => setHoveredProject(project.id)}
        onHoverEnd={() => setHoveredProject(null)}
        className={`group relative cyber-card overflow-hidden ${
          project.featured ? 'lg:col-span-2' : ''
        }`}
      >
        {/* Background Image */}
        <div className="aspect-video overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            whileHover={{ scale: 1.05 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark via-cyber-dark/50 to-transparent" />
        </div>

        {/* Content */}
        <div className="absolute inset-0 p-6 flex flex-col justify-end">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={hoveredProject === project.id ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-cyber-glass backdrop-blur-sm border border-neon-purple/30 rounded text-xs text-neon-purple"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white group-hover:neon-text group-hover:text-neon-purple transition-all">
              {project.title}
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              {project.description}
            </p>
            
            {/* Action Buttons */}
            <div className="flex space-x-4">
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 bg-cyber-glass backdrop-blur-sm border border-white/10 rounded-lg hover:border-neon-purple/50 transition-colors"
              >
                <Github size={20} className="text-white hover:text-neon-purple transition-colors" />
              </motion.a>
              <motion.a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 bg-cyber-glass backdrop-blur-sm border border-white/10 rounded-lg hover:border-neon-blue/50 transition-colors"
              >
                <LinkIcon size={20} className="text-white hover:text-neon-blue transition-colors" />
              </motion.a>
            </div>
          </div>
        </div>

        {/* Hover Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/0 to-neon-blue/0 group-hover:from-neon-purple/10 group-hover:to-neon-blue/10 transition-all duration-500" />
      </motion.div>
    );
  };

  return (
    <section id="projects" className="py-20 px-6 relative" ref={ref}>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 right-10 w-96 h-96 bg-neon-blue opacity-5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-10 w-96 h-96 bg-neon-pink opacity-5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="neon-text text-neon-purple">Featured</span>{' '}
            <span className="text-white">Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Showcasing innovative solutions in web development, banking systems, and educational platforms
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(14, 165, 233, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open('https://github.com/kunwarprakharsingh', '_blank')}
            className="px-8 py-4 border border-neon-blue text-neon-blue font-semibold rounded-lg hover:bg-neon-blue hover:text-white transition-all flex items-center space-x-2 mx-auto"
          >
            <Code size={20} />
            <span>View All Projects</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
