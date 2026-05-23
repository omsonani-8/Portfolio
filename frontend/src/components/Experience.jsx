import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    company: "Prime Apps",
    position: "Software Developer Engineer",
    period: "April 2026 — Present",
    description: "Architecting high-performance headless architectures and scalable content ecosystems.",
    details: [
      "Orchestrating enterprise-scale headless CMS solutions using Payload CMS and Next.js App Router.",
      "Designing complex schema architectures and custom hooks to automate content workflows and business logic.",
      "Optimizing MongoDB aggregation pipelines and indexing strategies for high-traffic data retrieval.",
      "Implementing server-side rendering (SSR) and edge functions to maximize core web vitals and SEO performance."
    ]
  },
  {
    company: "eSparkBiz Technologies",
    position: "Junior Software Developer",
    period: "January 2025 — March 2026",
    description: "Engineered robust full-stack solutions and scalable backend architectures.",
    details: [
      "Optimized production systems by resolving complex race conditions, scheduling conflicts, and API rate limits.",
      "Implemented high-performance Redis caching layers to reduce database load and improve response latency.",
      "Designed and deployed a centralized Polymorphic Media Management system using PostgreSQL & Sequelize.",
      "Engineered automated agent workflows using Cursor AI, Claude, and Antigravity to accelerate development efficiency."
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" style={{
      padding: 'var(--section-padding)',
      maxWidth: '1200px',
      margin: '0 auto'
    }}>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        style={{ marginBottom: '8rem' }}
      >
        <span style={{
          fontSize: '0.8rem',
          color: 'var(--text-muted)',
          fontWeight: 700,
          letterSpacing: '0.4rem',
          textTransform: 'uppercase',
          display: 'block',
          marginBottom: '1rem',
        }}>
          Professional Journey
        </span>
        <h2 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(2.5rem, 8vw, 6rem)',
          fontWeight: 800,
          color: 'var(--text-primary)',
          letterSpacing: '-0.03em',
          lineHeight: 1
        }}>
          Experience<span style={{ color: 'var(--text-muted)' }}>.</span>
        </h2>
      </motion.div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
        {experiences.map((exp, idx) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: idx * 0.2 }}
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
                {exp.company.toLowerCase().replace(' ', '_')}.run
              </span>
            </div>

            <div style={{ padding: '4rem' }}>
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                alignItems: 'baseline',
                gap: '2rem',
                marginBottom: '3rem'
              }}>
                <div>
                  <h3 style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                    color: 'var(--text-primary)',
                    fontWeight: 700,
                    marginBottom: '0.5rem'
                  }}>
                    {exp.position}
                  </h3>
                  <p style={{
                    fontSize: '1.25rem',
                    color: 'var(--text-muted)',
                    fontWeight: 500,
                    fontFamily: 'monospace'
                  }}>
                    &gt; {exp.company}
                  </p>
                </div>
                <span style={{
                  color: 'var(--text-secondary)',
                  fontSize: '0.9rem',
                  fontFamily: 'monospace',
                  fontWeight: 600,
                  padding: '0.5rem 1rem',
                  background: 'var(--divider)',
                  borderRadius: '4px'
                }}>
                  [{exp.period}]
                </span>
              </div>

              <p style={{
                fontSize: '1.2rem',
                color: 'var(--text-secondary)',
                marginBottom: '2.5rem',
                lineHeight: 1.6,
                maxWidth: '800px',
                fontStyle: 'italic'
              }}>
                // {exp.description}
              </p>

              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem'
              }}>
                {exp.details.map((detail, dIdx) => (
                  <motion.li
                    key={detail}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: (idx * 0.2) + (dIdx * 0.1), duration: 0.5 }}
                    style={{
                      display: 'flex',
                      gap: '1.5rem',
                      fontSize: '1.1rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.5,
                      alignItems: 'flex-start'
                    }}
                  >
                    <span style={{
                      marginTop: '0.6rem',
                      width: '6px',
                      height: '6px',
                      background: '#fff',
                      borderRadius: '50%',
                      flexShrink: 0,
                      boxShadow: '0 0 8px rgba(255,255,255,0.5)'
                    }} />
                    {detail}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
