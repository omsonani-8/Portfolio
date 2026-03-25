import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';

const projectsData = [
  {
    title: 'Real Estate Management Platform',
    subtitle: 'Khmer home',
    tag: 'Professional Project',
    mode: 'Offsite',
    timeline: '2026',
    stack: ['React.js', 'TypeScript', 'Node.js', 'Express.js', 'PostgreSQL', 'Sequelize'],
    description:
      'Contributed to a centralized real estate operations platform that helped agents manage properties, daily work, and media assets from a single system.',
    contributions: [
      'Built backend services and REST APIs with Node.js, Express.js, TypeScript, and Sequelize to support core platform workflows.',
      'Designed a reusable polymorphic media module so multiple entities could manage images, documents, and assets through one unified structure.',
      'Developed the Todo management module from scratch, enabling agents to create, track, and organize day-to-day tasks efficiently.',
      'Modeled scalable PostgreSQL schemas and relationships, then integrated responsive React.js frontend components with backend services.'
    ]
  },
  {
    title: 'Research Data Collection Platform',
    subtitle: 'Expiwell',
    tag: 'Professional Project',
    mode: 'Offsite',
    timeline: 'Jun 2025 - Dec 2025',
    stack: ['Node.js', 'Express.js', 'MongoDB', 'Redis', 'AWS S3', 'Pug', 'jQuery'],
    description:
      'Helped maintain a production research platform used to collect survey responses from students and other participants across web and mobile experiences.',
    contributions: [
      'Contributed to backend development for survey workflows, participant data handling, and production issue resolution.',
      'Improved reliability by fixing scheduling problems, strengthening error handling, and resolving race-condition edge cases.',
      'Implemented Redis caching and request chunking to reduce AWS S3 rate-limit failures during media download operations.',
      'Optimized multiple APIs and delivered smaller product enhancements such as pause and resume survey functionality.'
    ]
  },
  {
    title: 'Online Learning Platform',
    tag: 'Training Project',
    mode: 'Offsite',
    timeline: 'Jan 2025 - Aug 2025',
    stack: ['React.js', 'Redux', 'Node.js', 'Express.js', 'TypeScript', 'Redis', 'PostgreSQL', 'MongoDB'],
    description:
      'Built a Udemy-inspired learning platform during hands-on web development training, focused on scalable full stack architecture and practical product features.',
    contributions: [
      'Implemented course listing, authentication, and content management flows across the frontend and backend.',
      'Applied Redux for predictable client-side state management and smoother user interactions across course experiences.',
      'Worked with SQL and NoSQL systems including MySQL, PostgreSQL, and MongoDB while using Sequelize ORM for structured data operations.',
      'Strengthened practical experience with React, Node.js, Express.js, TypeScript, and JavaScript through an end-to-end product build.'
    ]
  },
  {
    title: 'Resume Builder',
    tag: 'Personal Project',
    mode: 'Independent Build',
    timeline: 'MERN Stack',
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    description:
      'Created a resume builder that turns structured user input into polished resume layouts with a clean editing experience.',
    contributions: [
      'Developed the full stack MERN application architecture and connected the full resume creation workflow.',
      'Built dynamic template rendering so resume content could be transformed into multiple presentable layouts.',
      'Focused on maintainable data handling for profile sections, formatting, and preview generation.'
    ]
  },
  {
    title: 'Food Fire',
    tag: 'Personal Project',
    mode: 'Independent Build',
    timeline: 'Frontend App',
    stack: ['React.js', 'JavaScript', 'CSS'],
    description:
      'Designed a food ordering interface with an interactive browsing flow, menu discovery, and a reliable cart experience.',
    contributions: [
      'Built the menu browsing and ordering interface with responsive UI patterns for a smoother customer experience.',
      'Implemented state management to keep cart actions consistent across add, remove, and quantity update flows.',
      'Improved component structure for reusable product cards and clean interaction handling.'
    ]
  },
  {
    title: 'Weather App',
    tag: 'Personal Project',
    mode: 'Independent Build',
    timeline: 'API Integration',
    stack: ['React.js', 'JavaScript', 'REST API'],
    description:
      'Developed a real-time weather dashboard that converts external API data into a simple, readable forecast interface.',
    contributions: [
      'Integrated live weather data APIs and mapped responses into user-friendly forecast views.',
      'Designed a responsive layout that visually adapts to weather conditions and key environmental metrics.',
      'Focused on clean data presentation, search flow, and lightweight interaction feedback.'
    ]
  }
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [expandedProject, setExpandedProject] = useState(null);

  const filters = useMemo(() => {
    const uniqueTags = Array.from(new Set(projectsData.map((project) => project.tag)));
    return ['All', ...uniqueTags];
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return projectsData;
    return projectsData.filter((project) => project.tag === activeFilter);
  }, [activeFilter]);

  const summary = useMemo(() => {
    const professionalCount = projectsData.filter((project) => project.tag === 'Professional Project').length;
    const personalCount = projectsData.filter((project) => project.tag === 'Personal Project').length;
    return {
      total: projectsData.length,
      professional: professionalCount,
      personal: personalCount
    };
  }, []);

  return (
    <section id="projects" className="projects-section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="projects-heading"
      >
        <span className="projects-kicker">Selected work</span>
        <h2 className="section-title">
          Featured <span className="text-gradient">Projects</span>
        </h2>
        <p className="projects-intro">
          A mix of production work and hands-on builds that reflect my experience across backend systems,
          frontend delivery, and product-focused problem solving.
        </p>
      </motion.div>

      <motion.div
        className="projects-summary"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="projects-summary__item">
          <span>{summary.total}</span>
          <p>Total Projects</p>
        </div>
        <div className="projects-summary__item">
          <span>{summary.professional}</span>
          <p>Professional</p>
        </div>
        <div className="projects-summary__item">
          <span>{summary.personal}</span>
          <p>Personal</p>
        </div>
      </motion.div>

      <motion.div
        className="project-filter"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            className={`project-filter__pill ${activeFilter === filter ? 'is-active' : ''}`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </motion.div>

      <div className="projects-grid">
        {filteredProjects.map((project, idx) => {
          const isExpanded = expandedProject === project.title;
          return (
          <motion.article
            key={project.title}
            className="glass-panel project-card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: idx * 0.06 }}
            whileHover={{ y: -6 }}
          >
            <div className="project-card__top">
              <span className="project-badge">{project.tag}</span>
              <div className="project-meta">
                <span>{project.mode}</span>
                <span>{project.timeline}</span>
              </div>
            </div>

            <div className="project-card__title-block">
              <h3>{project.title}</h3>
              {project.subtitle ? <p className="project-subtitle">{project.subtitle}</p> : null}
            </div>

            <p className="project-description">{project.description}</p>

            <div className="project-stack">
              {project.stack.map((item) => (
                <span key={`${project.title}-${item}`} className="tech-tag">
                  {item}
                </span>
              ))}
            </div>

            <div className="project-details">
              <button
                type="button"
                className="project-details__toggle"
                onClick={() => setExpandedProject(isExpanded ? null : project.title)}
              >
                {isExpanded ? 'Hide Key Contributions' : 'View Key Contributions'}
              </button>

              {isExpanded ? (
                <>
                  <h4>Key Contributions</h4>
                  <ul>
                    {project.contributions.map((point) => (
                      <li key={`${project.title}-${point}`}>{point}</li>
                    ))}
                  </ul>
                </>
              ) : null}
            </div>
          </motion.article>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
