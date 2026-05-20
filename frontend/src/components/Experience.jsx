import React from 'react';
import { motion } from 'framer-motion';

const experienceData = [
  {
    company: 'eSparkBiz Technologies',
    role: 'Junior Software Developer',
    period: '2025 - Present',
    description: 'Contributing to production systems handling scheduling, error resolution, and API optimization. Leveraging AI agents to accelerate development workflows.',
  },
  {
    company: 'The Khmer Home',
    role: 'Full-Stack Developer (Offsite)',
    period: '2024 - 2025',
    description: 'Built backend services and media modules for a real estate platform using Node.js and PostgreSQL.',
  },
];

const Experience = () => {
  return (
    <section id="experience" style={{
      padding: 'var(--section-padding)',
      maxWidth: '1200px',
      margin: '0 auto',
    }}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{ marginBottom: '6rem' }}
      >
        <p style={{
          fontSize: '0.9rem',
          color: 'var(--accent)',
          fontWeight: 600,
          letterSpacing: '5px',
          textTransform: 'uppercase',
          marginBottom: '1rem',
        }}>
          02. Journey
        </p>
        <h2 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(2.5rem, 8vw, 5rem)',
          fontWeight: 700,
          color: 'var(--text-primary)',
          letterSpacing: '-0.02em',
        }}>
          Experience
        </h2>
      </motion.div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '6rem' }}>
        {experienceData.map((exp, idx) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(200px, 300px) 1fr',
              gap: '4rem',
              alignItems: 'start',
            }}
          >
            <div>
              <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', fontWeight: 600, marginBottom: '0.5rem' }}>
                {exp.period}
              </p>
              <h3 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '2rem',
                fontWeight: 600,
                color: 'var(--text-primary)',
                letterSpacing: '-0.01em'
              }}>
                {exp.company}
              </h3>
            </div>
            <div style={{ borderLeft: '1px solid var(--divider)', paddingLeft: '4rem' }}>
              <h4 style={{ 
                fontSize: '1.4rem', 
                fontWeight: 500, 
                marginBottom: '1.5rem', 
                color: 'var(--accent)',
              }}>
                {exp.role}
              </h4>
              <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', lineHeight: 1.8, maxWidth: '800px' }}>
                {exp.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
