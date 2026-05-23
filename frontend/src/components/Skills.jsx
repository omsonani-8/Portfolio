import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Frontend Architecture",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>,
    skills: ["HTML5 / CSS3", "React.js (Professional)", "Next.js & Vite", "TypeScript", "Tailwind / Vanilla CSS"]
  },
  {
    title: "Backend & Systems",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 7h-9m3 3H5m12 6h-4M21 3H3v18h18V3z"/></svg>,
    skills: ["Node.js / Express.js", "RESTful & GraphQL APIs", "Sequelize / Mongoose", "BullMQ & Scheduling"]
  },
  {
    title: "Data & Persistence",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>,
    skills: ["PostgreSQL / MySQL", "MongoDB", "Redis Caching", "Data Modeling"]
  },
  {
    title: "Infrastructure & Ops",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
    skills: ["Docker & Containers", "AWS (S3, SQS, EC2)", "Git Workflow", "CI/CD & AI Workflows"]
  }
];

const Skills = () => {
  return (
    <section id="skills" style={{
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
          Technological Stack
        </span>
        <h2 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(2.5rem, 8vw, 6rem)',
          fontWeight: 800,
          color: 'var(--text-primary)',
          letterSpacing: '-0.03em',
          lineHeight: 1
        }}>
          Expertise<span style={{ color: 'var(--text-muted)' }}>.</span>
        </h2>
      </motion.div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '2.5rem',
      }}>
        {skillCategories.map((category, idx) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -10 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: idx * 0.15 }}
            style={{
              padding: '2.5rem',
              background: 'var(--bg-secondary)',
              border: '1px solid var(--divider)',
              borderRadius: '24px',
              transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--text-muted)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--divider)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div style={{ 
              color: '#fff', 
              marginBottom: '2rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem' 
            }}>
              <div style={{ padding: '0.75rem', background: 'var(--divider)', borderRadius: '12px' }}>
                {category.icon}
              </div>
              <h3 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.25rem',
                color: 'var(--text-primary)',
                fontWeight: 700,
                letterSpacing: '-0.01em'
              }}>
                {category.title}
              </h3>
            </div>
            
            <ul style={{ 
              listStyle: 'none', 
              padding: 0, 
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}>
              {category.skills.map((skill, sIdx) => (
                <motion.li 
                  key={skill}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: (idx * 0.15) + (sIdx * 0.05), duration: 0.5 }}
                  style={{
                    fontSize: '1rem',
                    color: 'var(--text-secondary)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    fontWeight: 500
                  }}
                >
                  <span style={{ width: '4px', height: '4px', background: '#fff', borderRadius: '50%' }} />
                  {skill}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
