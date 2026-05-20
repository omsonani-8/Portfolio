import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const contactLinks = [
    { name: 'Email', value: 'omsonani1928@gmail.com', href: 'mailto:omsonani1928@gmail.com' },
    { name: 'LinkedIn', value: 'om-sonani', href: 'https://www.linkedin.com/in/om-sonani-b31667273/' },
    { name: 'GitHub', value: 'omsonani-8', href: 'https://github.com/omsonani-8' },
  ];

  return (
    <section id="contact" style={{
      padding: '10rem 4rem 4rem',
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
          fontSize: '1rem',
          color: 'var(--accent)',
          fontWeight: 600,
          letterSpacing: '5px',
          textTransform: 'uppercase',
          marginBottom: '1.5rem',
        }}>
          03. Connection
        </p>
        <h2 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(2.5rem, 8vw, 6rem)',
          fontWeight: 700,
          color: 'var(--text-primary)',
          letterSpacing: '-0.02em',
          lineHeight: 1.1,
        }}>
          Let's Build <br /> Something Together
        </h2>
      </motion.div>

      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '4rem',
        marginBottom: '8rem',
      }}>
        {contactLinks.map((link, idx) => (
          <motion.a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            style={{
              textDecoration: 'none',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
            }}
          >
            <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '2px' }}>{link.name}</span>
            <span style={{ fontSize: '1.5rem', color: 'var(--text-primary)', fontWeight: 600, transition: 'color 0.3s ease' }}
              onMouseEnter={(e) => e.target.style.color = 'var(--accent)'}
              onMouseLeave={(e) => e.target.style.color = 'var(--text-primary)'}
            >{link.value}</span>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
