import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Sphere, Float } from '@react-three/drei';

const DisplacementSphere = ({ theme }) => {
  const meshRef = useRef();
  const mouse = useRef([0, 0]);

  React.useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current = [
        (e.clientX / window.innerWidth) * 2 - 1,
        -(e.clientY / window.innerHeight) * 2 + 1,
      ];
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame((state) => {
    const { clock } = state;
    if (meshRef.current) {
      meshRef.current.rotation.x = clock.getElapsedTime() * 0.1;
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.15;
      
      // Move slightly towards mouse
      meshRef.current.position.x += (mouse.current[0] * 0.5 - meshRef.current.position.x) * 0.05;
      meshRef.current.position.y += (mouse.current[1] * 0.5 - meshRef.current.position.y) * 0.05;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <Sphere ref={meshRef} args={[1, 100, 100]} scale={2.8}>
        <MeshDistortMaterial
          color={theme === 'dark' ? "#3b82f6" : "#2563eb"}
          attach="material"
          distort={0.4}
          speed={1.5}
          roughness={0.2}
          metalness={0.9}
          emissive={theme === 'dark' ? "#1d4ed8" : "#3b82f6"}
          emissiveIntensity={0.2}
        />
      </Sphere>
    </Float>
  );
};

const AnimatedBackground = ({ theme = 'dark' }) => {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      zIndex: 0,
      background: 'var(--bg-color)',
      pointerEvents: 'none',
      transition: 'background 0.5s ease'
    }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }} dpr={[1, 2]}>
        <ambientLight intensity={theme === 'dark' ? 0.4 : 0.6} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <pointLight position={[-10, -10, -10]} color={theme === 'dark' ? "#3b82f6" : "#2563eb"} intensity={1.5} />
        <DisplacementSphere theme={theme} />
      </Canvas>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle at center, transparent 0%, var(--bg-color) 85%)',
        pointerEvents: 'none',
        transition: 'background 0.5s ease'
      }} />
    </div>
  );
};

export default AnimatedBackground;
