import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  return (
    <section id="education" style={{ padding: '6rem 2rem', maxWidth: '1000px', margin: '0 auto' }}>
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Education & <span className="text-gradient">Certificates</span>
      </motion.h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '1.5rem'
      }}>
        <motion.div
          className="glass-panel"
          style={{ padding: '2rem' }}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h3 style={{
            fontSize: '1.2rem',
            color: 'var(--accent)',
            marginBottom: '1.5rem',
            borderBottom: '1px solid var(--divider)',
            paddingBottom: '0.5rem',
            fontWeight: 700
          }}>
            🎓 Academics
          </h3>

          <div style={{ marginBottom: '1.5rem' }}>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 700, margin: '0 0 0.2rem 0' }}>
              BE in Computer Engineering
            </h4>
            <p style={{ margin: 0, color: 'var(--text-secondary)' }}>
              Government Engineering College, Bhavnagar
            </p>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginTop: '0.5rem',
              fontSize: '0.9rem'
            }}>
              <span className="status-badge" style={{ padding: '0.2rem 0.8rem', fontSize: '0.85rem' }}>
                CGPA: 8.43
              </span>
              <span style={{ color: 'var(--text-secondary)' }}>Sep 2021 – May 2025</span>
            </div>
          </div>

          <div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 700, margin: '0 0 0.2rem 0' }}>HSC</h4>
            <p style={{ margin: 0, color: 'var(--text-secondary)' }}>
              Vidyadhish Vidyasankul, Bhavnagar
            </p>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginTop: '0.5rem',
              fontSize: '0.9rem'
            }}>
              <span className="status-badge" style={{ padding: '0.2rem 0.8rem', fontSize: '0.85rem' }}>
                85.8%
              </span>
              <span style={{ color: 'var(--text-secondary)' }}>Jun 2020 – Jun 2021</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="glass-panel"
          style={{ padding: '2rem' }}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h3 style={{
            fontSize: '1.2rem',
            color: 'var(--accent)',
            marginBottom: '1.5rem',
            borderBottom: '1px solid var(--divider)',
            paddingBottom: '0.5rem',
            fontWeight: 700
          }}>
            📜 Certifications
          </h3>

          <div>
            <h4 style={{ fontSize: '1.2rem', fontWeight: 700, margin: '0 0 0.5rem 0' }}>
              Full Stack Web Development with MERN Stack
            </h4>
            <p style={{
              margin: '0 0 1rem 0',
              color: 'var(--accent)',
              fontSize: '0.9rem',
              fontWeight: 600
            }}>
              Udemy
            </p>
            <ul style={{
              color: 'var(--text-secondary)',
              paddingLeft: '1.2rem',
              lineHeight: 1.6,
              margin: 0,
              fontSize: '0.95rem'
            }}>
              <li style={{ marginBottom: '0.4rem' }}>
                Gained comprehensive knowledge in MongoDB, Express.js, React.js, and Node.js.
              </li>
              <li style={{ marginBottom: '0.4rem' }}>
                Developed dynamic applications from scratch, handling database schema, server-side logic, and responsive UIs.
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
