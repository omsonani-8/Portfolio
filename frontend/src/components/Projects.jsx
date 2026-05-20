import React from 'react';
import { motion } from 'framer-motion';

const projectsData = [
  {
    title: 'Real Estate Platform',
    subtitle: 'Khmer home',
    tag: 'Professional',
    timeline: '2026', 
    stack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    description: 'A centralized operations platform that helps agents manage properties, daily work, and media assets from a single system.',
  },
  {
    title: 'Research Collection',
    subtitle: 'Expiwell',
    tag: 'Professional',
    timeline: '2025',
    stack: ['Node.js', 'MongoDB', 'Redis', 'AWS S3'],
    description: 'A production research platform used to collect survey responses from students and participants globally.',
  },
  {
    title: 'Learning Platform',
    subtitle: 'Training Build',
    tag: 'Training',
    timeline: '2025',
    stack: ['React', 'Redux', 'Node.js', 'PostgreSQL'],
    description: 'Udemy-inspired learning platform focused on scalable full stack architecture and course management flows.',
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
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{ marginBottom: '8rem' }}
      >
        <p style={{
          fontSize: '0.9rem',
          color: 'var(--accent)',
          fontWeight: 600,
          letterSpacing: '5px',
          textTransform: 'uppercase',
          marginBottom: '1rem',
        }}>
          01. Work
        </p>
        <h2 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(2.5rem, 8vw, 5rem)',
          fontWeight: 700,
          color: 'var(--text-primary)',
          letterSpacing: '-0.02em',
        }}>
          Featured Projects
        </h2>
      </motion.div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
        gap: '4rem',
      }}>
        {projectsData.map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{
              paddingTop: '2rem',
              borderTop: '1px solid var(--divider)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{
                fontSize: '0.8rem',
                color: 'var(--accent)',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '2px',
              }}>
                {project.tag}
              </span>
              <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
                {project.timeline}
              </span>
            </div>

            <div>
              <h3 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '2.2rem',
                fontWeight: 600,
                marginBottom: '1rem',
                color: 'var(--text-primary)',
              }}>
                {project.title}
              </h3>
              <p style={{ 
                fontSize: '1.1rem', 
                color: 'var(--text-secondary)', 
                lineHeight: 1.7,
                maxWidth: '90%' 
              }}>
                {project.description}
              </p>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', marginTop: '1rem' }}>
              {project.stack.map((tech) => (
                <span key={tech} style={{
                  fontSize: '0.8rem',
                  color: 'var(--text-secondary)',
                  fontWeight: 600,
                  opacity: 0.7,
                  letterSpacing: '1px'
                }}>
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
