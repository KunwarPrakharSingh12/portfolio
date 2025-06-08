
import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const ComputerModel = () => {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      // Gentle floating animation
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]} scale={[1.5, 1.5, 1.5]}>
      {/* Monitor Base */}
      <mesh position={[0, -1.2, 0]}>
        <cylinderGeometry args={[0.3, 0.4, 0.2, 8]} />
        <meshStandardMaterial color="#2a2a2a" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Monitor Stand */}
      <mesh position={[0, -0.8, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 0.8, 8]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.9} roughness={0.1} />
      </mesh>
      
      {/* Monitor Back */}
      <mesh position={[0, 0, -0.15]}>
        <boxGeometry args={[2.5, 1.5, 0.2]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.8} roughness={0.3} />
      </mesh>
      
      {/* Monitor Screen */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[2.3, 1.3, 0.05]} />
        <meshStandardMaterial 
          color="#000015" 
          emissive="#9d4edd" 
          emissiveIntensity={0.3}
          metalness={0.1} 
          roughness={0.1} 
        />
      </mesh>
      
      {/* Screen Glow Effect */}
      <mesh position={[0, 0, 0.03]}>
        <planeGeometry args={[2.1, 1.1]} />
        <meshStandardMaterial 
          color="#9d4edd" 
          transparent 
          opacity={0.6}
          emissive="#9d4edd"
          emissiveIntensity={0.5}
        />
      </mesh>
      
      {/* Keyboard */}
      <mesh position={[0, -1.5, 0.8]} rotation={[-0.1, 0, 0]}>
        <boxGeometry args={[1.8, 0.1, 0.6]} />
        <meshStandardMaterial color="#2a2a2a" metalness={0.6} roughness={0.4} />
      </mesh>
      
      {/* Mouse */}
      <mesh position={[1.2, -1.45, 0.5]}>
        <boxGeometry args={[0.3, 0.05, 0.4]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* CPU Tower */}
      <mesh position={[-2, -0.5, 0]}>
        <boxGeometry args={[0.4, 1.8, 0.8]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.7} roughness={0.3} />
      </mesh>
      
      {/* CPU Power LED */}
      <mesh position={[-1.8, 0.3, 0.41]}>
        <sphereGeometry args={[0.02, 8, 8]} />
        <meshStandardMaterial 
          color="#0ea5e9" 
          emissive="#0ea5e9" 
          emissiveIntensity={0.8}
        />
      </mesh>
      
      {/* Speaker Left */}
      <mesh position={[-1.5, 0, 1]}>
        <boxGeometry args={[0.3, 0.8, 0.3]} />
        <meshStandardMaterial color="#2a2a2a" metalness={0.6} roughness={0.4} />
      </mesh>
      
      {/* Speaker Right */}
      <mesh position={[1.5, 0, 1]}>
        <boxGeometry args={[0.3, 0.8, 0.3]} />
        <meshStandardMaterial color="#2a2a2a" metalness={0.6} roughness={0.4} />
      </mesh>
    </group>
  );
};

const Computer3D = () => {
  return (
    <div className="absolute inset-0 opacity-20">
      <Canvas camera={{ position: [3, 2, 5], fov: 60 }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 5, 5]} intensity={0.8} color="#9d4edd" />
        <pointLight position={[-5, -5, -5]} intensity={0.4} color="#0ea5e9" />
        <directionalLight position={[0, 10, 0]} intensity={0.5} color="#ffffff" />
        
        <ComputerModel />
        
        <OrbitControls 
          enableZoom={true}
          enablePan={false}
          autoRotate={true}
          autoRotateSpeed={0.5}
          minDistance={3}
          maxDistance={8}
          minPolarAngle={Math.PI / 6}
          maxPolarAngle={Math.PI - Math.PI / 6}
        />
      </Canvas>
    </div>
  );
};

export default Computer3D;
