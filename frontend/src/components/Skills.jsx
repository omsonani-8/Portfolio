import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Frontend",
    icon: "🎨",
    skills: ["HTML/CSS", "Tailwind CSS", "React.js", "Next.js", "TypeScript", "jQuery"]
  },
  {
    title: "Backend & APIs",
    icon: "⚙️",
    skills: ["Node.js", "Express.js", "REST APIs", "Sequelize ORM"]
  },
  {
    title: "Databases",
    icon: "🗄️",
    skills: ["MySQL", "PostgreSQL", "MongoDB"]
  },
  {
    title: "Tools & Others",
    icon: "🛠️",
    skills: ["Redis", "BullMQ", "Redux", "TanStack", "Docker", "AWS (S3, SQS)", "Git"]
  }
];

const Skills = () => {
  return (
    <section id="skills" style={{ padding: '6rem 2rem', maxWidth: '1000px', margin: '0 auto' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-title">
          Technical <span className="text-gradient">Skills</span>
        </h2>
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
        {skillCategories.map((category, idx) => (
          <motion.div
            key={idx}
            className="glass-panel"
            style={{ padding: '2rem', textAlign: 'left' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <h3 style={{
              fontSize: '1.2rem',
              color: 'var(--accent)',
              marginBottom: '1.5rem',
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <span>{category.icon}</span> {category.title}
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {category.skills.map(skill => (
                <span key={skill} className="tech-tag">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '1.5rem', marginTop: '3rem' }}>
        <motion.div
          className="glass-panel"
          style={{ padding: '2rem', textAlign: 'left' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 style={{ fontSize: '1.2rem', color: 'var(--accent)', marginBottom: '1.5rem', fontWeight: 700 }}>
            🧠 What Makes Me Different
          </h3>
          <ul style={{ color: 'var(--text-secondary)', paddingLeft: '1.2rem', lineHeight: 1.8, margin: 0 }}>
            <li style={{ marginBottom: '0.5rem' }}>Real production experience (not just hobby projects)</li>
            <li style={{ marginBottom: '0.5rem' }}>Strong backend problem-solving skills & performance optimization mindset</li>
            <li style={{ marginBottom: '0.5rem' }}>Experience with system-level complexities (rate limiting, caching)</li>
            <li>Fast learner with AI-assisted development tools</li>
          </ul>
        </motion.div>

        <motion.div
          className="glass-panel"
          style={{ padding: '2rem', textAlign: 'left' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 style={{ fontSize: '1.2rem', color: 'var(--accent)', marginBottom: '1.5rem', fontWeight: 700 }}>
            📈 Current Focus
          </h3>
          <ul style={{ color: 'var(--text-secondary)', paddingLeft: '1.2rem', lineHeight: 1.8, margin: 0 }}>
            <li style={{ marginBottom: '0.5rem' }}>System Design & Architecture</li>
            <li style={{ marginBottom: '0.5rem' }}>Backend Scalability & Advanced Node.js</li>
            <li style={{ marginBottom: '0.5rem' }}>Queue Systems & Microservices</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
