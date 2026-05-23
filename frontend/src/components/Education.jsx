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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            background: '#0a0a0a',
            border: '1px solid var(--divider)',
            borderRadius: '16px',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            boxShadow: '0 15px 40px rgba(0,0,0,0.4)'
          }}
        >
          {/* Terminal Header */}
          <div style={{
            background: 'var(--divider)',
            padding: '0.75rem 1.25rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <div style={{ display: 'flex', gap: '8px' }}>
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ff5f56' }} />
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ffbd2e' }} />
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#27c93f' }} />
            </div>
            <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontFamily: 'monospace' }}>
              academic_record.log
            </span>
          </div>

          <div style={{ padding: '4rem', display: 'grid', gridTemplateColumns: 'minmax(200px, 300px) 1fr', gap: '4rem' }}>
            <span style={{ 
              fontSize: '1rem', 
              color: 'var(--text-secondary)', 
              fontWeight: 600,
              fontFamily: 'monospace' 
            }}>
              [2021 — 2025]
            </span>
            <div>
              <h3 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '2.5rem',
                fontWeight: 800,
                marginBottom: '1rem',
                color: 'var(--text-primary)',
                letterSpacing: '-0.02em'
              }}>
                BE in Computer Engineering
              </h3>
              <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '2rem', fontWeight: 500 }}>
                Government Engineering College, Bhavnagar
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span style={{
                  fontSize: '0.85rem',
                  color: '#fff',
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  padding: '0.5rem 1rem',
                  border: '1px solid var(--divider)',
                  background: 'var(--divider)',
                  borderRadius: '4px'
                }}>
                  CGPA: 8.43 / 10.0
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
