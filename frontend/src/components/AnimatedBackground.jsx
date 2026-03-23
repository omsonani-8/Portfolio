import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground = ({ theme }) => {
  
  // Generate random stars once
  const stars = useMemo(() => {
    return Array.from({ length: 150 }).map(() => ({
      x: Math.random() * 100, // vw
      y: Math.random() * 100, // vh
      size: Math.random() * 2 + 1, // px
      duration: Math.random() * 3 + 2, // twinkle speed
      delay: Math.random() * 2 // initial delay
    }));
  }, []);

  const isDark = theme === 'dark';

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 0, overflow: 'hidden', pointerEvents: 'none' }}>
      
      {/* Starry Night Effect - Visible mostly in Dark Mode */}
      {isDark && stars.map((star, i) => (
        <motion.div
           key={`star-${i}`}
           style={{
             position: 'absolute',
             top: `${star.y}vh`, left: `${star.x}vw`,
             width: `${star.size}px`, height: `${star.size}px`,
             backgroundColor: '#fff',
             borderRadius: '50%',
             boxShadow: '0 0 5px #fff',
           }}
           animate={{
             opacity: [0.2, 1, 0.2]
           }}
           transition={{
             duration: star.duration,
             repeat: Infinity,
             ease: "easeInOut",
             delay: star.delay
           }}
        />
      ))}

      {/* Clouds / Soft Orbs for Light Mode / General Aesthetic */}
      <motion.div
        animate={{
          x: [0, 100, -100, 0],
          y: [0, 100, -50, 0],
          scale: [1, 1.2, 0.8, 1],
        }}
        transition={{
          duration: 25,
          ease: "linear",
          repeat: Infinity,
        }}
        style={{
          position: 'absolute',
          top: '-10%', left: '-10%',
          width: '50vw', height: '50vw',
          background: isDark ? 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(15,23,42,0) 70%)' : 'radial-gradient(circle, rgba(147,197,253,0.4) 0%, rgba(248,250,252,0) 70%)',
          borderRadius: '50%',
          filter: 'blur(60px)'
        }}
      />

      <motion.div
        animate={{
          x: [0, -150, 100, 0],
          y: [0, -100, 150, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 30,
          ease: "linear",
          repeat: Infinity,
        }}
        style={{
          position: 'absolute',
          bottom: '-10%', right: '-10%',
          width: '60vw', height: '60vw',
          background: isDark ? 'radial-gradient(circle, rgba(236,72,153,0.1) 0%, rgba(15,23,42,0) 70%)' : 'radial-gradient(circle, rgba(244,114,182,0.3) 0%, rgba(248,250,252,0) 70%)',
          borderRadius: '50%',
          filter: 'blur(80px)'
        }}
      />
      
      {/* Grid Overlay for texture */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundImage: isDark ? 'linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)' : 'linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)',
        backgroundSize: '50px 50px',
        maskImage: 'radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 80%)',
        WebkitMaskImage: 'radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 80%)'
      }} />
    </div>
  );
};

export default AnimatedBackground;
