import React from 'react';
import { motion } from 'framer-motion';

const projectsData = [
  {
    title: 'Research Ecosystem',
    subtitle: 'Expiwell Survey Engine',
    tag: 'Infrastructure Engineering',
    timeline: '2025', 
    stack: ['Node.js', 'Redis', 'MongoDB', 'AWS S3', 'BullMQ'],
    description: 'A high-concurrency research ingestion engine. Spearheaded the implementation of asynchronous request orchestration and Redis-backed chunking to mitigate AWS S3 rate-limiting bottlenecks during extreme data throughput.',
    github: 'https://github.com/omsonani-8',
    link: 'https://expiwell.com'
  },
  {
    title: 'Nexus Real Estate',
    subtitle: 'Agent Operations Hub',
    tag: 'Architectural Solution',
    timeline: '2025',
    stack: ['TypeScript', 'Node.js', 'PostgreSQL', 'Payload CMS'],
    description: 'An enterprise-grade real estate management ecosystem. Architected a unified polymorphic media pattern for cross-entity asset handling and engineered a full-stack task-scheduling module with robust relational integrity.',
    github: 'https://github.com/omsonani-8',
    link: '#'
  },
  {
    title: 'Architect Portfolio',
    subtitle: 'Dynamic Branding Engine',
    tag: 'Full-Stack Performance',
    timeline: '2024',
    stack: ['Next.js', 'Payload CMS', 'MongoDB', 'Framer Motion'],
    description: 'A professional-grade portfolio management engine. Leveraged dynamic schema parsing in Payload CMS and advanced motion orchestration to deliver a high-fidelity, monochromatic user experience.',
    github: 'https://github.com/omsonani-8/Resume-Builder',
    link: '#'
  }
];

const Projects = () => {
  return (
    <section id="projects" style={{
      padding: 'var(--section-padding)',
      maxWidth: '1200px',
      margin: '0 auto',
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
          Selected Works
        </span>
        <h2 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(2.5rem, 8vw, 6rem)',
          fontWeight: 800,
          color: 'var(--text-primary)',
          letterSpacing: '-0.03em',
          lineHeight: 1
        }}>
          Projects<span style={{ color: 'var(--text-muted)' }}>.</span>
        </h2>
      </motion.div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
        gap: '6rem',
      }}>
        {projectsData.map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: idx * 0.2, ease: [0.16, 1, 0.3, 1] }}
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
                {project.tag.toLowerCase().replace(' ', '_')}.sh
              </span>
            </div>

            <div style={{ padding: '3rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '2rem' }}>
                <div style={{ flex: 1 }}>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'monospace', display: 'block', marginBottom: '0.5rem' }}>
                    [{project.timeline}]
                  </span>
                  <h3 style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'clamp(1.2rem, 2.5vw, 2.2rem)',
                    fontWeight: 800,
                    marginBottom: '1.2rem',
                    color: 'var(--text-primary)',
                    letterSpacing: '-0.01em'
                  }}>
                    {project.title}
                  </h3>
                  <p style={{ 
                    fontSize: '1rem', 
                    color: 'var(--text-secondary)', 
                    lineHeight: 1.6,
                  }}>
                    {project.description}
                  </p>
                </div>

                <div style={{ display: 'flex', gap: '1.5rem', paddingTop: '0.5rem' }}>
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      style={{ color: 'var(--text-primary)', transition: 'color 0.3s ease' }}
                      onMouseEnter={e => e.currentTarget.style.color = 'var(--text-muted)'}
                      onMouseLeave={e => e.currentTarget.style.color = 'var(--text-primary)'}
                      aria-label="GitHub Repository"
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    </a>
                  )}
                  {project.link !== '#' && (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      style={{ color: 'var(--text-primary)', transition: 'color 0.3s ease' }}
                      onMouseEnter={e => e.currentTarget.style.color = 'var(--text-muted)'}
                      onMouseLeave={e => e.currentTarget.style.color = 'var(--text-primary)'}
                      aria-label="Live Demo"
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                    </a>
                  )}
                </div>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginTop: 'auto' }}>
                {project.stack.map((tech) => (
                  <span key={tech} style={{
                    fontSize: '0.75rem',
                    color: 'var(--text-muted)',
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '0.05rem',
                    padding: '0.4rem 0.8rem',
                    background: 'var(--divider)',
                    borderRadius: '4px'
                  }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
