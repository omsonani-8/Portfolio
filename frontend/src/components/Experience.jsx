import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <section id="experience" style={{ padding: '6rem 2rem', maxWidth: '800px', margin: '0 auto' }}>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '3rem', textAlign: 'center' }}
      >
        Professional <span className="text-gradient">Experience</span>
      </motion.h2>

      <motion.div
        className="glass-panel"
        style={{ padding: '2.5rem', position: 'relative', overflow: 'hidden' }}
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: 'var(--accent-gradient)' }}></div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
          <div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, margin: 0 }}>Junior Software Developer</h3>
            <h4 style={{ fontSize: '1.1rem', color: 'var(--accent)', margin: '0.3rem 0 0 0', fontWeight: 600 }}>eSparkBiz Technologies</h4>
          </div>
          <span style={{ fontSize: '0.9rem', padding: '0.3rem 1rem', background: 'rgba(59,130,246,0.15)', color: '#60a5fa', borderRadius: '20px', fontWeight: 600 }}>
            Jan 2025 – Present
          </span>
        </div>
        
        <ul style={{ color: 'var(--text-secondary)', paddingLeft: '1.2rem', lineHeight: 1.8, margin: 0 }}>
          <li style={{ marginBottom: '0.8rem' }}>Contributed to production systems handling scheduling, error resolution, race conditions, and API rate limiting.</li>
          <li style={{ marginBottom: '0.8rem' }}>Enhanced performance through Redis caching and optimized database structures using Sequelize ORM.</li>
          <li>Leveraged AI tools like Cursor, Claude Code, and Antigravity to build agent workflows, accelerating dev efficiency.</li>
        </ul>
      </motion.div>
    </section>
  );
};

export default Experience;
