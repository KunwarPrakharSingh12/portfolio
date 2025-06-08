
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ThreeBackground from '../components/ThreeBackground';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ProjectsSection from '../components/ProjectsSection';
import CertificatesSection from '../components/CertificatesSection';
import ContactSection from '../components/ContactSection';

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
          <p className="text-gray-400">Initializing Kunwar Prakhar Singh's portfolio...</p>
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
              <CertificatesSection />
              <ContactSection />
            </main>

            {/* Footer */}
            <footer className="py-12 px-6 border-t border-white/10">
              <div className="max-w-7xl mx-auto text-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-2xl font-bold neon-text text-neon-purple mb-4"
                >
                  &lt;KPS/&gt;
                </motion.div>
                <p className="text-gray-400">
                  © 2024 Kunwar Prakhar Singh. Crafted with React, Three.js & Cyber Dreams
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  Student at Lovely Professional University | Prayagraj, Uttar Pradesh
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
