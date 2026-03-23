import React from 'react';
import { motion } from 'framer-motion';

const projectsData = [
  {
    title: "Research Data Collection Platform",
    description: "A platform for researchers to collect survey responses from students and other participants through web and mobile applications.",
    contributions: [
      "Built backend services for survey workflows.",
      "Optimized APIs and reduced unnecessary DB calls.",
      "Implemented Redis caching & request chunking (AWS S3) to resolve rate-limits.",
      "Improved system stability by fixing production issues."
    ]
  },
  {
    title: "Real Estate Management Platform",
    description: "A comprehensive platform designed to help agents manage properties, tasks, and media assets via a centralized system.",
    contributions: [
      "Developed REST APIs using Node.js, Express, TypeScript.",
      "Designed a centralized polymorphic media management system.",
      "Built an end-to-end Todo module for agents.",
      "Implemented a scalable database structure using PostgreSQL."
    ]
  },
  {
    title: "Resume Builder (MERN)",
    description: "Dynamic resume generation platform with a clean UI and structured data handling.",
    contributions: [
      "Developed fullstack MERN application.",
      "Designed dynamic template rendering engine."
    ]
  },
  {
    title: "Food Fire 🍔",
    description: "Food ordering app featuring a complete cart and menu system.",
    contributions: [
      "Built interactive food menu UI.",
      "Implemented state management for reliable cart functions."
    ]
  },
  {
    title: "Weather App 🌦️",
    description: "Real-time weather application using third-party API integrations.",
    contributions: [
      "Integrated live weather data endpoints.",
      "Designed responsive UI to reflect weather conditions visually."
    ]
  }
];

const Projects = () => {
  return (
    <section id="projects" style={{ padding: '6rem 2rem', maxWidth: '1000px', margin: '0 auto' }}>
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Featured <span className="text-gradient">Projects</span>
      </motion.h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '1.5rem'
      }}>
        {projectsData.map((project, idx) => (
          <motion.div
            key={idx}
            className="glass-panel"
            style={{
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: (idx % 2) * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <h3 style={{
              fontSize: '1.4rem',
              color: 'var(--text-primary)',
              margin: 0,
              fontWeight: 700
            }}>
              {project.title}
            </h3>
            <p style={{
              color: 'var(--text-secondary)',
              fontSize: '0.95rem',
              margin: 0,
              lineHeight: 1.7,
              flexGrow: 1
            }}>
              {project.description}
            </p>

            <div>
              <h4 style={{
                color: 'var(--accent)',
                fontSize: '0.85rem',
                textTransform: 'uppercase',
                letterSpacing: '1.5px',
                marginBottom: '0.6rem',
                fontWeight: 700
              }}>
                Key Contributions
              </h4>
              <ul style={{
                color: 'var(--text-secondary)',
                paddingLeft: '1.2rem',
                lineHeight: 1.7,
                margin: 0,
                fontSize: '0.9rem'
              }}>
                {project.contributions.map((point, i) => (
                  <li key={i} style={{ marginBottom: '0.3rem' }}>{point}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
