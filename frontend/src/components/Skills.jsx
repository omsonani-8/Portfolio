import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Frontend",
    skills: ["HTML/CSS", "Tailwind CSS", "React.js", "Next.js", "TypeScript", "jQuery"]
  },
  {
    title: "Backend & APIs",
    skills: ["Node.js", "Express.js", "REST APIs", "Sequelize ORM"]
  },
  {
    title: "Databases",
    skills: ["MySQL", "PostgreSQL", "MongoDB"]
  },
  {
    title: "Tools",
    skills: ["Redis", "BullMQ", "Docker", "AWS (S3, SQS)", "Git"]
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
          Stack
        </p>
        <h2 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(2.5rem, 8vw, 5rem)',
          fontWeight: 700,
          color: 'var(--text-primary)',
          letterSpacing: '-0.02em',
        }}>
          Expertise
        </h2>
      </motion.div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '4rem',
      }}>
        {skillCategories.map((category, idx) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <h3 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.2rem',
              color: 'var(--accent)',
              marginBottom: '2rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '2px'
            }}>
              {category.title}
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {category.skills.map(skill => (
                <div key={skill} style={{
                  fontSize: '1.2rem',
                  color: 'var(--text-secondary)',
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: '1rem',
                  opacity: 0.9
                }}>
                  <span style={{ fontSize: '0.6rem', color: 'var(--divider)' }}>●</span>
                  {skill}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
