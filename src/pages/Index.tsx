
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ThreeBackground from '../components/ThreeBackground';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ProjectsSection from '../components/ProjectsSection';

const Preloader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="preloader"
    >
      <div className="text-center space-y-8">
        <div className="cyber-loader" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-2"
        >
          <h2 className="text-2xl font-bold neon-text text-neon-purple">
            Loading Portfolio
          </h2>
          <p className="text-gray-400">Initializing cyberpunk experience...</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

const Index = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-cyber-dark text-white overflow-x-hidden">
      <AnimatePresence mode="wait">
        {loading ? (
          <Preloader key="preloader" />
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* 3D Background */}
            <ThreeBackground />
            
            {/* Navigation */}
            <Navigation />
            
            {/* Main Content */}
            <main>
              <HeroSection />
              <AboutSection />
              <ProjectsSection />
              
              {/* Certificates Section Placeholder */}
              <section id="certificates" className="py-20 px-6">
                <div className="max-w-7xl mx-auto text-center">
                  <h2 className="text-4xl md:text-6xl font-bold mb-6">
                    <span className="neon-text text-neon-purple">Certificates</span>{' '}
                    <span className="text-white">& Awards</span>
                  </h2>
                  <p className="text-xl text-gray-400 mb-12">
                    Professional certifications and achievements in web development
                  </p>
                  <div className="cyber-card p-12">
                    <div className="text-6xl mb-4">🏆</div>
                    <p className="text-gray-400">
                      Certificates section coming soon with 3D gallery view
                    </p>
                  </div>
                </div>
              </section>

              {/* Contact Section Placeholder */}
              <section id="contact" className="py-20 px-6">
                <div className="max-w-7xl mx-auto text-center">
                  <h2 className="text-4xl md:text-6xl font-bold mb-6">
                    <span className="text-white">Get In</span>{' '}
                    <span className="neon-text text-neon-purple">Touch</span>
                  </h2>
                  <p className="text-xl text-gray-400 mb-12">
                    Let's create something amazing together
                  </p>
                  <div className="cyber-card p-12">
                    <div className="text-6xl mb-4">📧</div>
                    <p className="text-gray-400">
                      Contact form with neon effects coming soon
                    </p>
                  </div>
                </div>
              </section>
            </main>

            {/* Footer */}
            <footer className="py-12 px-6 border-t border-white/10">
              <div className="max-w-7xl mx-auto text-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-2xl font-bold neon-text text-neon-purple mb-4"
                >
                  &lt;DEV/&gt;
                </motion.div>
                <p className="text-gray-400">
                  © 2024 John Doe. Crafted with React, Three.js & Cyber Dreams
                </p>
              </div>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
