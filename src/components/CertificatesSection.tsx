
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  image: string;
  description: string;
}

const certificates: Certificate[] = [
  {
    id: 1,
    title: "React Developer Certification",
    issuer: "Meta",
    date: "2024",
    image: "🏆",
    description: "Advanced React patterns and performance optimization"
  },
  {
    id: 2,
    title: "Node.js Professional",
    issuer: "NodeJS Foundation",
    date: "2024",
    image: "🥇",
    description: "Backend development and API design expertise"
  },
  {
    id: 3,
    title: "MongoDB Certified Developer",
    issuer: "MongoDB University",
    date: "2023",
    image: "🎖️",
    description: "Database design and optimization specialist"
  },
  {
    id: 4,
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2023",
    image: "☁️",
    description: "Cloud infrastructure and deployment"
  }
];

const FloatingCertificate = ({ certificate, position, index }: { certificate: Certificate; position: [number, number, number]; index: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime + index) * 0.2;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5 + index) * 0.2;
    }
  });

  return (
    <group position={position}>
      <mesh ref={meshRef}>
        <boxGeometry args={[2, 1.4, 0.1]} />
        <meshStandardMaterial
          color="#1a1a2e"
          transparent
          opacity={0.9}
          emissive="#9d4edd"
          emissiveIntensity={0.1}
        />
      </mesh>
      
      {/* Holographic border */}
      <mesh position={[0, 0, 0.05]}>
        <boxGeometry args={[2.1, 1.5, 0.05]} />
        <meshStandardMaterial
          color="#9d4edd"
          wireframe
          transparent
          opacity={0.6}
        />
      </mesh>
    </group>
  );
};

const CertificatesGallery = () => {
  const positions: [number, number, number][] = [
    [-3, 1, 0],
    [3, 1, 0],
    [-3, -1, 0],
    [3, -1, 0]
  ];

  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#9d4edd" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#0ea5e9" />
      
      {certificates.map((cert, index) => (
        <FloatingCertificate
          key={cert.id}
          certificate={cert}
          position={positions[index]}
          index={index}
        />
      ))}
      
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.3} />
    </Canvas>
  );
};

const CertificatesSection = () => {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  return (
    <section id="certificates" className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
      
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="neon-text text-neon-purple">Certificates</span>{' '}
            <span className="text-white">& Awards</span>
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            Professional certifications and achievements in web development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* 3D Gallery */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="h-[500px] relative"
          >
            <div className="absolute inset-0 holographic rounded-2xl" />
            <CertificatesGallery />
          </motion.div>

          {/* Certificate Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="cyber-card p-6 cursor-pointer hover:border-neon-purple transition-all"
                whileHover={{ scale: 1.02, boxShadow: "0 0 25px rgba(157, 78, 221, 0.3)" }}
                onClick={() => setSelectedCert(cert)}
              >
                <div className="flex items-center space-x-4">
                  <div className="text-4xl">{cert.image}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-neon-purple mb-2">
                      {cert.title}
                    </h3>
                    <p className="text-gray-300 mb-1">{cert.issuer}</p>
                    <p className="text-sm text-gray-400">{cert.date}</p>
                  </div>
                </div>
                <p className="text-gray-400 mt-4">{cert.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
