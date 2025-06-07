import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { toast } from 'sonner';

const FloatingAvatar = () => {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Holographic Frame */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[2.5, 32, 32]} />
        <meshStandardMaterial
          color="#9d4edd"
          wireframe
          transparent
          opacity={0.3}
          emissive="#9d4edd"
          emissiveIntensity={0.1}
        />
      </mesh>
      
      {/* Inner Glow */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[2, 32, 32]} />
        <meshStandardMaterial
          color="#0ea5e9"
          transparent
          opacity={0.1}
          emissive="#0ea5e9"
          emissiveIntensity={0.2}
        />
      </mesh>
    </group>
  );
};

const HeroScene = () => {
  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#9d4edd" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#0ea5e9" />
      <FloatingAvatar />
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
    </Canvas>
  );
};

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const handleViewPortfolio = () => {
    window.open('https://www.linkedin.com/in/kunwarprakharsingh/', '_blank');
    toast.success("Opening LinkedIn profile!", {
      style: {
        background: '#1a1a2e',
        border: '1px solid #9d4edd',
        color: '#ffffff'
      }
    });
  };

  const handleDownloadResume = () => {
    window.open('https://drive.google.com/file/d/1RscX_dDL2kUxGVurFY-FhgZOrRKBurZ-/view?usp=sharing', '_blank');
    toast.success("Opening resume in new tab!", {
      style: {
        background: '#1a1a2e',
        border: '1px solid #0ea5e9',
        color: '#ffffff'
      }
    });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8 text-center lg:text-left"
        >
          <motion.div variants={itemVariants} className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="block text-white">Hello, I'm</span>
              <span className="block neon-text text-neon-purple typing-effect">
                John Doe
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-light">
              Full-Stack MERN Developer
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
              Crafting immersive digital experiences with cutting-edge technology. 
              Specializing in React, Node.js, MongoDB, and modern web technologies.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(157, 78, 221, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              onClick={handleViewPortfolio}
              className="px-8 py-4 bg-neon-purple text-white font-semibold rounded-lg neon-border hover:bg-opacity-90 transition-all"
            >
              View Portfolio
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownloadResume}
              className="px-8 py-4 border border-neon-blue text-neon-blue font-semibold rounded-lg hover:bg-neon-blue hover:text-white transition-all"
            >
              Download Resume
            </motion.button>
          </motion.div>

          {/* Tech Stack Icons */}
          <motion.div variants={itemVariants} className="flex justify-center lg:justify-start space-x-6 pt-8">
            {['React', 'Node.js', 'MongoDB', 'Next.js'].map((tech, index) => (
              <motion.div
                key={tech}
                whileHover={{ y: -5, scale: 1.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 bg-cyber-card border border-white/10 rounded-lg flex items-center justify-center mb-2 hover:border-neon-purple transition-colors">
                  <span className="text-sm font-mono">{tech.charAt(0)}</span>
                </div>
                <span className="text-xs text-gray-400">{tech}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* 3D Scene */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="h-[500px] relative"
        >
          <div className="absolute inset-0 holographic rounded-2xl" />
          <HeroScene />
          
          {/* Avatar Placeholder */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-gradient-to-br from-neon-purple to-neon-blue flex items-center justify-center border-2 border-white/20">
            <span className="text-4xl">👨‍💻</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-neon-purple rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-neon-purple rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
