import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="about" style={{
      minHeight: '90vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: '4rem 1.5rem',
      position: 'relative'
    }}>
      <div style={{ maxWidth: '800px', width: '100%', zIndex: 1 }}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            fontSize: '1.1rem',
            color: 'var(--accent)',
            fontWeight: 600,
            letterSpacing: '3px',
            textTransform: 'uppercase',
            marginBottom: '1rem'
          }}
        >
          Hello, I'm
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          style={{
            fontSize: 'clamp(2.5rem, 8vw, 5rem)',
            fontWeight: 800,
            marginBottom: '1rem',
            lineHeight: 1.1,
            letterSpacing: '-0.02em'
          }}
        >
          Om <span className="text-gradient">Sonani</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{
            fontSize: 'clamp(1.1rem, 3vw, 1.4rem)',
            fontWeight: 400,
            color: 'var(--text-secondary)',
            marginBottom: '2rem'
          }}
        >
          Full-Stack Web Developer based in Ahmedabad
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          style={{
            fontSize: 'clamp(0.95rem, 2vw, 1.05rem)',
            color: 'var(--text-secondary)',
            maxWidth: '600px',
            margin: '0 auto 3rem auto',
            lineHeight: 1.8
          }}
        >
          Motivated and detail-oriented developer with hands-on experience building
          & maintaining web applications using modern frontend & backend technologies.
          Passionate about writing clean, maintainable code & solving real-world problems.
        </motion.p>

        <motion.div
          style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <a href="#projects" className="cta-primary">
            View Projects
          </a>
          <a href="/OM_SONANI.pdf" download="Om_Sonani_Resume.pdf" className="cta-resume">
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download Resume
          </a>
          <a href="mailto:omsonani1928@gmail.com" className="cta-secondary">
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
