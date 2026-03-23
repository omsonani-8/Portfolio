import React from 'react';
import { motion } from 'framer-motion';
import ViewCounter from './ViewCounter';

const Contact = () => {
  return (
    <section id="contact" style={{
      padding: '6rem 2rem 2rem',
      maxWidth: '800px',
      margin: '0 auto',
      textAlign: 'center'
    }}>
      <motion.div
        className="glass-panel"
        style={{ padding: '4rem 2rem', position: 'relative', overflow: 'hidden' }}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'var(--accent-gradient)',
          opacity: 0.05,
          zIndex: 0
        }} />

        <div style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 800,
            marginBottom: '1rem'
          }}>
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p style={{
            color: 'var(--text-secondary)',
            fontSize: '1.1rem',
            maxWidth: '500px',
            margin: '0 auto 2.5rem'
          }}>
            I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.
          </p>

          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            marginBottom: '3.5rem',
            flexWrap: 'wrap'
          }}>
            <a href="mailto:omsonani1928@gmail.com" className="contact-pill">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" />
              </svg>
              omsonani1928@gmail.com
            </a>
            <a href="tel:+919687959852" className="contact-pill">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79C8.06 13.62 10.38 15.93 13.21 17.38L15.41 15.18C15.68 14.91 16.08 14.82 16.43 14.94C17.55 15.31 18.76 15.51 20 15.51C20.55 15.51 21 15.96 21 16.51V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z" />
              </svg>
              +91 9687959852
            </a>
            <a href="https://www.linkedin.com/in/om-sonani-b31667273/" target="_blank" rel="noreferrer" className="contact-pill">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C13.92 9.94 13.4 10.6 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z" />
              </svg>
              LinkedIn
            </a>
            <a href="https://github.com/omsonani-8" target="_blank" rel="noreferrer" className="contact-pill">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2A10 10 0 0 0 8.84 21.5C9.34 21.58 9.5 21.27 9.5 21V19.31C6.73 19.91 6.14 17.97 6.14 17.97C5.68 16.81 5.03 16.5 5.03 16.5C4.12 15.88 5.1 15.9 5.1 15.9C6.1 15.97 6.63 16.93 6.63 16.93C7.5 18.45 8.97 18 9.54 17.76C9.63 17.11 9.89 16.67 10.17 16.42C7.95 16.16 5.62 15.31 5.62 11.5C5.62 10.39 6.02 9.5 6.65 8.79C6.55 8.54 6.2 7.5 6.75 6.15C6.75 6.15 7.59 5.88 9.5 7.17C10.29 6.95 11.15 6.84 12 6.84C12.85 6.84 13.71 6.95 14.5 7.17C16.41 5.88 17.25 6.15 17.25 6.15C17.8 7.5 17.45 8.54 17.35 8.79C17.98 9.5 18.38 10.39 18.38 11.5C18.38 15.32 16.04 16.16 13.81 16.41C14.17 16.72 14.5 17.33 14.5 18.26V21C14.5 21.27 14.66 21.59 15.17 21.5A10 10 0 0 0 12 2Z" />
              </svg>
              GitHub
            </a>
            <span className="contact-pill" style={{ cursor: 'default' }}>
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" />
              </svg>
              Ahmedabad
            </span>
          </div>

          {/* View Counter */}
          <div style={{ paddingTop: '2rem', borderTop: '1px solid var(--divider)' }}>
            <ViewCounter />
          </div>
        </div>
      </motion.div>

      <p style={{
        marginTop: '3rem',
        color: 'var(--text-secondary)',
        fontSize: '0.9rem'
      }}>
        © {new Date().getFullYear()} Om Sonani. All rights reserved.
      </p>
    </section>
  );
};

export default Contact;
