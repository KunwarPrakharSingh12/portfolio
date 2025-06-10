
import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { SiGithub } from 'react-icons/si';
import { Link as LinkIcon, Code } from 'lucide-react';

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'Health Care System',
      description: 'A comprehensive health care management platform enabling patient registration, appointment scheduling, and medical record management. Features secure access for doctors and patients, prescription management, and telemedicine integration.',
      image: 'https://media.geeksforgeeks.org/wp-content/uploads/20240229162347/Hospital-Management-System.webp',
      tech: ['DBMS', 'SQL', 'PHP', 'REACT'],
      github: 'https://github.com/KunwarPrakharSingh12/constitution-quest-online.git',
      demo: 'https://linktr.ee/kunwar_prakhar_singh',
      featured: true,
    },
    {
      id: 2,
      title: 'Dhanvantri-Vatika: Virtual Herbal Garden',
      description: 'An immersive web-based educational platform showcasing Ayurvedic and AYUSH medicinal plants. Offers interactive 2D/3D experiences with comprehensive herbal garden environments.',
      image: 'https://imgs.search.brave.com/N6vP2KbXl0g4hxuZ_FWhm9woqi9D0Ut2a1pYpI5oZa4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAwLzQ0LzQ2LzI2/LzM2MF9GXzQ0NDYy/NjUyX3VJRUFZc0Jk/dkJBZjA3SzhTZmZ2/UldtbGtxd1NZOE9J/LmpwZw',
      tech: ['REACT', '3D JS', 'WebGL', 'TypeScript', 'WebXR'],
      github: 'https://github.com/kunwarprakharsingh12',
      demo: 'https://linktr.ee/kunwar_prakhar_singh',
      featured: true,
    },
    {
      id: 3,
      title: 'Sign-To-Text (vice-versa) Language Converter',
      description: 'A Python-based application that converts sign language gestures to text and vice versa using computer vision and natural language processing libraries such as OpenCV and TensorFlow. Enables real-time communication between hearing and speech-impaired individuals and others.',
      image: 'https://miro.medium.com/v2/resize:fit:1200/1*tpsXWn-xbmRLTzXG6TiomQ.png',
      tech: ['Python', 'OpenCV', 'TensorFlow', 'NLP'],
      github: 'https://github.com/kunwarprakharsingh12',
      demo: 'https://linktr.ee/kunwar_prakhar_singh',
      featured: false,
    },
    {
      id: 4,
      title: 'Gamified Learning Platform for constitutional knowledge',
      description: 'A gamified learning platform that motivates users through interactive challenges, rewards, and progress tracking. Built with React and Tailwind CSS, it features engaging UI, real-time feedback, and a modular lesson system to enhance the educational experience.',
      image: 'https://blog.efmdglobal.org/wp-content/uploads/2021/09/iStock-1309704632.jpg',
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
      className="group relative cyber-card overflow-hidden"
      >
        {/* Background Image */}
        <div className="aspect-[4/3] overflow-hidden">
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
                onClick={(e) => {
                  e.preventDefault();
                  window.open(project.github, '_blank', 'noopener,noreferrer');
                }}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5, boxShadow: "0 0 10px #8b5cf6" }}
                whileTap={{ scale: 0.9 }}
                className="p-2 bg-cyber-glass backdrop-blur-sm border border-white/10 rounded-lg hover:border-neon-purple/50 transition-colors pointer-events-auto"
              >
                <SiGithub size={20} className="text-white hover:text-neon-purple transition-colors" />
              </motion.a>
              <motion.a
                href={project.demo}
                onClick={(e) => {
                  e.preventDefault();
                  window.open(project.demo, '_blank', 'noopener,noreferrer');
                }}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: -5, boxShadow: "0 0 10px #3b82f6" }}
                whileTap={{ scale: 0.9 }}
                className="p-2 bg-cyber-glass backdrop-blur-sm border border-white/10 rounded-lg hover:border-neon-blue/50 transition-colors pointer-events-auto"
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
            Showcasing innovative solutions and creative projects that demonstrate my skills in software development, web design, and problem-solving.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
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
            onClick={() => window.open('https://github.com/kunwarprakharsingh12', '_blank')}

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
