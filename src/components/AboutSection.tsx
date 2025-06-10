
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    { name: 'React', level: 95, color: '#61dafb' },
    { name: 'Node.js', level: 90, color: '#68a063' },
    { name: 'MongoDB', level: 85, color: '#4db33d' },
    { name: 'Express.js', level: 88, color: '#000000' },
    { name: 'TypeScript', level: 92, color: '#3178c6' },
    { name: 'Next.js', level: 87, color: '#000000' },
    { name: 'Python', level: 80, color: '#3776ab' },
    { name: 'AWS', level: 75, color: '#ff9900' },
    { name: 'Java', level: 53, color: '#5382a1' },
    { name: 'C', level: 90, color: '#023e8a' },
    { name: 'C++', level: 60, color: '#023e8a' },
    { name: 'My Sql', level: 67, color: '#ce4257' },
    { name: 'M.E.R.N Stack', level: 84, color: '#e5383b' },
  ];

  const educational_timeline = [
    {
      year: '2021',
      title: 'Completed My 10th Grade',
      company: 'Saint Jhons Academy',
      description: 'Completed with a focus on science and mathematics, laying the foundation for my technical career from (I.C.S.E Board) Saint Jhons Academy, Rampur, Prayagraj .',
    },
    {
      year: '2023',
      title: 'Completed My 12th Grade',
      company: 'Saint Jhons Academy',
      description: 'Graduated with a focus on science and mathematics, preparing for higher education in technology from (I.S.C. Board) Saint Jhons Academy, Rampur, Prayagraj .',
      
    },
    {
      year: '2025',
      title: 'Completed my Diploma in Computer Science and Engineering',
      company: 'Lovely Professional University',
      description: 'Pursuing a Diploma in Computer Science and Engineering, gaining hands-on experience in software development and engineering principles from Lovely Professional University, Punjab.',
      
    },
    {
      year: '2025',
      title: 'Started My Journey in B.Tech in Computer Science and Engineering',
      company: 'Lovely Professional University',
      
      description: 'Currently enrolled in a B.Tech program in Computer Science and Engineering, focusing on advanced software development, algorithms, and system design at Lovely Professional University, Punjab.',
    },
   
  ];


  const professional_timeline = [
    {
      year: '2023',
      title: 'Code-By-Coder',
      company: 'Coding Block L.P.U',
      description:
        'Participated in my first web hackathon organized by Coding Block LPU, collaborating with peers to build innovative web solutions under time constraints.',
    },
    {
      year: '2024',
      title: 'HACK_IITK CTF 2024',
      company: 'IIT Kanpur',
      description:
        'Competed in the HACK_IITK CTF 2024, showcasing my skills in cybersecurity and problem-solving through various challenges.',
    },
    {
      year: '2024',
      title: 'Internship at R.G.S.M',
      company: 'R.G.S.M',
      description:
        'Completed an internship at R.G.S.M focused on software testing, gaining practical experience in quality assurance and contributing to real-world testing projects.',
    },
    {
      year: '2024',
      title: 'EBSCO ECM Certification',
      company: 'EBSCO Information Services',
      description:
        'Achieved EBSCO ECM Certification, demonstrating proficiency in electronic content management systems and enhancing my skills in digital information management.',
    },
    {
      year: '2025',
      title: 'Minor Project: Sign to Text Language Converter',
      company: 'Lovely Professional University',
      description:
        'Completed a minor project focused on developing a Sign to Text Language Converter, applying theoretical knowledge to practical software development and accessibility solutions at Lovely Professional University.',
    },
    {
      year: '2025',
      title: 'Major Project: Dhanvantrika - A Virtual Herbal Garden (P.S No: SIH1555)',
      company: 'Ministry of AYUSH in Smart India Hackathon',
      description:
        'Developed "Dhanvantrika", a Virtual Herbal Garden as part of the Smart India Hackathon with the Ministry of AYUSH. The platform provides an interactive, educational, and immersive experience, showcasing diverse medicinal plants used in AYUSH systems. Features include interactive 3D models of plants, comprehensive plant details (botanical names, uses, cultivation), multimedia integration (images, videos, audio), advanced search and filter options, guided virtual tours by health themes, and user interaction tools such as bookmarking, note-taking, and social sharing. This project aims to make traditional herbal knowledge accessible and engaging for a wide audience, blending technology with ancient wisdom.',
    },
  ];

  return (
    <section id="about" className="py-20 px-6 relative" ref={ref}>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-neon-purple opacity-5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-neon-blue opacity-5 rounded-full blur-3xl" />
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
            <span className="neon-text text-neon-purple">About</span>{' '}
            <span className="text-white">Me</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Passionate about creating innovative solutions and pushing the boundaries of web development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Profile Image */}
            <div className="relative">
              <div className="w-64 h-64 mx-auto lg:mx-0 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-neon-purple to-neon-blue rounded-2xl blur-lg opacity-30" />
                <div className="relative w-full h-full bg-cyber-card rounded-2xl border border-white/10 flex items-center justify-center overflow-hidden">
                  {/* Placeholder for user photo */}
                  <div className="w-full h-full bg-gradient-to-br from-neon-purple/20 to-neon-blue/20 flex items-center justify-center">
                    <span className="text-6xl"><img src="/uploads/84d2453e-bb4f-4067-b2fe-ec3ac7a688be.png" alt="Kunwar Prakhar Singh" className="w-full h-full object-cover" /></span>
                  </div>
                  
                  {/* 3D Frame Effect */}
                  <div className="absolute inset-0 border-2 border-neon-purple rounded-2xl animate-cyber-pulse" />
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-4 text-center lg:text-left">
              <h3 className="text-2xl font-bold text-white">Kunwar Prakhar Singh</h3>
              <p className="text-neon-purple font-semibold">Full-Stack MERN Developer</p>
              <p className="text-gray-300 leading-relaxed">
                With over 2 years of experience in web development, I specialize in creating 
                scalable and performant applications using the MERN stack. I'm passionate about 
                clean code, user experience, and staying up-to-date with the latest technologies.
              </p>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                {['JavaScript', 'React', 'Node.js', 'MongoDB', 'TypeScript', 'AWS','Java','C','C++','MySql'].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-cyber-card border border-neon-purple/30 rounded-full text-sm text-neon-purple"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Technical Skills</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="space-y-2"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-white font-medium">{skill.name}</span>
                    <span className="text-neon-purple">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-cyber-card rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1.5, delay: 0.2 * index, ease: "easeOut" }}
                      className="h-full rounded-full"
                      style={{
                        background: `linear-gradient(90deg, ${skill.color}, #9d4edd)`,
                        boxShadow: `0 0 10px ${skill.color}40`,
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-center text-white mb-12">
            Educational <span className="neon-text text-neon-purple">Journey</span>
          </h3>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-neon-purple to-neon-blue" />
            
            <div className="space-y-12">
              {educational_timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 * index }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="cyber-card p-6 hover:border-neon-purple/50 transition-colors">
                      <div className="text-neon-purple font-bold text-lg">{item.year}</div>
                      <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                      <div className="text-neon-blue font-medium mb-2">{item.company}</div>
                      <p className="text-gray-400">{item.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="w-6 h-6 bg-neon-purple rounded-full border-4 border-cyber-dark relative z-10 animate-glow" />
                  
                  <div className="w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

{/*-------------------------------- second timeline------------ */}

         <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-center text-white mb-12">
            Professional <span className="neon-text text-neon-purple">Journey</span>
          </h3>
          
          <div className="relative">


            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-neon-purple to-neon-blue" />
            
            <div className="space-y-12">
              {professional_timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 * index }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="cyber-card p-6 hover:border-neon-purple/50 transition-colors">
                      <div className="text-neon-purple font-bold text-lg">{item.year}</div>
                      <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                      <div className="text-neon-blue font-medium mb-2">{item.company}</div>
                      <p className="text-gray-400">{item.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="w-6 h-6 bg-neon-purple rounded-full border-4 border-cyber-dark relative z-10 animate-glow" />
                  
                  <div className="w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
