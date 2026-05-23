import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    },
  };

  return (
    <section id="hero" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 8rem',
      background: 'transparent',
      overflow: 'visible',
    }}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ 
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '4rem',
        }}
      >
        {/* Left Side */}
        <div style={{ flex: 1.2, minWidth: '300px' }}>
          {/* Om Sonani Name with unique slow-motion character animation */}
          <div style={{ marginBottom: '2.5rem' }}>
            <div style={{ display: 'flex', gap: '1.5rem', overflow: 'hidden' }}>
              <motion.div
                initial={{ y: "110%", skewY: 10 }}
                animate={{ y: 0, skewY: 0 }}
                transition={{ duration: 1.2, delay: 5.8, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  fontSize: 'clamp(3rem, 7vw, 5.5rem)',
                  color: 'var(--text-primary)',
                  fontWeight: 900,
                  textTransform: 'uppercase',
                  fontFamily: 'var(--font-heading)',
                  lineHeight: 1
                }}
              >
                Om
              </motion.div>
              <motion.div
                initial={{ y: "110%", skewY: 10 }}
                animate={{ y: 0, skewY: 0 }}
                transition={{ duration: 1.2, delay: 6.0, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  fontSize: 'clamp(3rem, 7vw, 5.5rem)',
                  color: 'var(--text-muted)',
                  fontWeight: 900,
                  textTransform: 'uppercase',
                  fontFamily: 'var(--font-heading)',
                  lineHeight: 1
                }}
              >
                Sonani
              </motion.div>
            </div>
            {/* Unique slow-growing monochromatic line */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 2, delay: 6.6, ease: "circOut" }}
              style={{ 
                height: '3px', 
                background: 'linear-gradient(90deg, #fff, var(--text-muted), transparent)', 
                marginTop: '1.5rem', 
                width: '100%', 
                transformOrigin: 'left center',
                boxShadow: `0 0 15px rgba(255, 255, 255, 0.3)`
              }}
            />
          </div>
  
          <motion.div
            variants={itemVariants}
            style={{ display: 'flex', alignItems: 'center', gap: '2.5rem', marginBottom: '0.5rem' }}
          >
            <h1 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(3rem, 8vw, 6rem)',
              fontWeight: 700,
              lineHeight: 1,
              letterSpacing: '-0.02em',
              color: 'var(--text-primary)',
              margin: 0,
            }}>
              Full-Stack Developer
            </h1>
            <motion.div 
               initial={{ scaleX: 0 }}
               animate={{ scaleX: 1 }}
               transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
               style={{ flex: 1, height: '1px', background: 'var(--divider)', maxWidth: '200px', transformOrigin: 'left' }} 
            />
          </motion.div>
        </div>

        {/* Right Side */}
        <motion.div 
          variants={itemVariants}
          style={{ flex: 1, minWidth: '300px', display: 'flex', flexDirection: 'column', gap: '2rem', paddingRight: '2rem' }}
        >
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.8, maxWidth: '450px' }}>
            Motivated Full Stack Web Developer with a passion for building scalable APIs, designing efficient database structures, and high-performance web experiences. 
            Currently leveraging agentic workflows to accelerate production-grade engineering at eSparkBiz.
          </p>
          <a href="/resume.pdf" download className="cta-resume" style={{ width: 'fit-content', display: 'inline-flex', alignItems: 'center', gap: '0.75rem' }}>
            Download Resume
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
