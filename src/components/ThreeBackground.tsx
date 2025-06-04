
import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

const AnimatedStars = () => {
  const ref = useRef<THREE.Points>(null);
  
  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(5000 * 3);
    const colors = new Float32Array(5000 * 3);
    
    for (let i = 0; i < 5000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 100;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 100;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 100;
      
      // Cyberpunk colors
      const colorChoice = Math.random();
      if (colorChoice < 0.33) {
        colors[i * 3] = 0.616; // Purple
        colors[i * 3 + 1] = 0.306;
        colors[i * 3 + 2] = 0.867;
      } else if (colorChoice < 0.66) {
        colors[i * 3] = 0.055; // Blue
        colors[i * 3 + 1] = 0.647;
        colors[i * 3 + 2] = 0.914;
      } else {
        colors[i * 3] = 0.925; // Pink
        colors[i * 3 + 1] = 0.282;
        colors[i * 3 + 2] = 0.600;
      }
    }
    
    return [positions, colors];
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime / 10) * 0.1;
      ref.current.rotation.y = state.clock.elapsedTime / 20;
    }
  });

  return (
    <Points ref={ref} positions={positions} colors={colors}>
      <PointMaterial
        transparent
        vertexColors
        size={0.8}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
};

const FloatingGeometry = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 2;
    }
  });

  return (
    <mesh ref={meshRef} position={[5, 0, -10]}>
      <octahedronGeometry args={[2, 0]} />
      <meshStandardMaterial 
        color="#9d4edd" 
        wireframe 
        transparent 
        opacity={0.3}
        emissive="#9d4edd"
        emissiveIntensity={0.2}
      />
    </mesh>
  );
};

const ThreeBackground = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={0.5} color="#9d4edd" />
        <pointLight position={[-10, -10, -10]} intensity={0.3} color="#0ea5e9" />
        <AnimatedStars />
        <FloatingGeometry />
      </Canvas>
    </div>
  );
};

export default ThreeBackground;
