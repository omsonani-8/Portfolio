import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  return (
    <section id="education" style={{
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
          Learning
        </p>
        <h2 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(2.5rem, 8vw, 5rem)',
          fontWeight: 700,
          color: 'var(--text-primary)',
          letterSpacing: '-0.02em',
        }}>
          Education
        </h2>
      </motion.div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            paddingTop: '3rem',
            borderTop: '1px solid var(--divider)',
            display: 'grid',
            gridTemplateColumns: 'minmax(200px, 300px) 1fr',
            gap: '4rem',
          }}
        >
          <span style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', fontWeight: 600 }}>2021 – 2025</span>
          <div>
            <h3 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '2rem',
              fontWeight: 600,
              marginBottom: '1rem',
              color: 'var(--text-primary)'
            }}>
              BE in Computer Engineering
            </h3>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
              Government Engineering College, Bhavnagar
            </p>
            <span style={{
              fontSize: '0.9rem',
              color: 'var(--accent)',
              fontWeight: 600,
              padding: '6px 16px',
              border: '1px solid var(--accent-muted)',
            }}>
              CGPA: 8.43
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
