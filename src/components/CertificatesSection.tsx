
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  image: string;
  description: string;
  certificateImage?: string;
}

const certificates: Certificate[] = [
  {
    id: 1,
    title: "C-Language Certificate",
    issuer: "Punjab Technical University",
    date: "2024",
    image: "🏆",
    description: "Programming fundamentals and C language mastery with Grade A",
    certificateImage: "/lovable-uploads/b8f7c630-d481-49d7-8fb9-f875ce0771c7.png"
  },
  {
    id: 2,
    title: "Inno-Tech 2025 - 2nd Position",
    issuer: "Pushpa Gujral Science City",
    date: "2025",
    image: "🥈",
    description: "Secured 2nd position in innovation and technology competition",
    certificateImage: "/lovable-uploads/d3752124-0929-427a-987f-724c3602ebdd.png"
  },
  {
    id: 3,
    title: "Web-e-Stan Participation",
    issuer: "Coding Ninja",
    date: "2024",
    image: "💻",
    description: "Active participation in web development competition"
  },
  {
    id: 4,
    title: "Code-A-Hunt Participation",
    issuer: "Coding Block",
    date: "2024",
    image: "🎯",
    description: "Competitive programming and algorithm challenges"
  },
  {
    id: 5,
    title: "Hack_IITK CTF 2024",
    issuer: "IIT Kanpur",
    date: "2024",
    image: "🔐",
    description: "Cybersecurity capture the flag competition participation"
  },
  {
    id: 6,
    title: "RGCSM Internship",
    issuer: "Rajeev Gandhi Computer Saksharta Mission",
    date: "2024",
    image: "🎓",
    description: "Algorithm development and debugging expertise certification"
  }
];

const FloatingCertificate = ({ 
  certificate, 
  position, 
  index, 
  isSelected 
}: { 
  certificate: Certificate; 
  position: [number, number, number]; 
  index: number;
  isSelected: boolean;
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime + index) * 0.2;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5 + index) * 0.2;
      
      // Scale selected certificate
      const targetScale = isSelected ? 1.3 : 1;
      meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
    }
  });

  return (
    <group position={position}>
      <mesh ref={meshRef}>
        <boxGeometry args={[2, 1.4, 0.1]} />
        <meshStandardMaterial
          color={isSelected ? "#9d4edd" : "#1a1a2e"}
          transparent
          opacity={isSelected ? 1 : 0.9}
          emissive={isSelected ? "#9d4edd" : "#9d4edd"}
          emissiveIntensity={isSelected ? 0.3 : 0.1}
        />
      </mesh>
      
      {/* Holographic border */}
      <mesh position={[0, 0, 0.05]}>
        <boxGeometry args={[2.1, 1.5, 0.05]} />
        <meshStandardMaterial
          color={isSelected ? "#0ea5e9" : "#9d4edd"}
          wireframe
          transparent
          opacity={isSelected ? 1 : 0.6}
        />
      </mesh>
    </group>
  );
};

const CertificatesGallery = ({ selectedCertId }: { selectedCertId: number }) => {
  const positions: [number, number, number][] = [
    [-3, 1, 0],
    [3, 1, 0],
    [-3, -1, 0],
    [3, -1, 0],
    [0, 2, 0],
    [0, -2, 0]
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
          position={positions[index % positions.length]}
          index={index}
          isSelected={cert.id === selectedCertId}
        />
      ))}
      
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.3} />
    </Canvas>
  );
};

const CertificatesSection = () => {
  const [selectedCert, setSelectedCert] = useState<Certificate>(certificates[0]);

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
            <span className="text-white">& Achievements</span>
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            Professional certifications and achievements in programming, competitions, and technology
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
            <CertificatesGallery selectedCertId={selectedCert.id} />
          </motion.div>

          {/* Certificate Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 max-h-[500px] overflow-y-auto"
          >
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`cyber-card p-6 cursor-pointer transition-all ${
                  selectedCert.id === cert.id 
                    ? 'border-neon-purple bg-cyber-card/80' 
                    : 'hover:border-neon-purple'
                }`}
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
                  {selectedCert.id === cert.id && (
                    <div className="w-3 h-3 bg-neon-purple rounded-full animate-pulse" />
                  )}
                </div>
                <p className="text-gray-400 mt-4">{cert.description}</p>
                
                {/* Show certificate button if certificate image exists */}
                {cert.certificateImage && (
                  <Dialog>
                    <DialogTrigger asChild>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="mt-4 px-4 py-2 bg-neon-purple text-white rounded-lg hover:bg-opacity-90 transition-all text-sm"
                        onClick={(e) => e.stopPropagation()}
                      >
                        View Certificate
                      </motion.button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl max-h-[90vh] bg-cyber-dark border-neon-purple">
                      <div className="p-4">
                        <h3 className="text-xl font-bold text-neon-purple mb-4 text-center">
                          {cert.title}
                        </h3>
                        <div className="flex justify-center">
                          <img 
                            src={cert.certificateImage} 
                            alt={cert.title}
                            className="max-w-full max-h-[70vh] object-contain rounded-lg border border-neon-purple/30"
                          />
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
