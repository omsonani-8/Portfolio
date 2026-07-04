import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const projectsData = [
  {
    title: 'Research Data Collection Platform',
    category: 'Enterprise Research & S3 Orchestration',
    description: 'A highly scalable enterprise survey system enabling researchers to orchestrate surveys, register participants, and aggregate response sets across web and mobile viewports.',
    problemSolved: 'Aggregating large scale user logs and media attachments resulted in frequent S3 quota lockouts. Solved rate bottlenecks by implementing queue orchestration models and Redis pagination engines.',
    contributions: [
      'Engineered backend CRUD services using Node.js, Express, and MongoDB.',
      'Mitigated S3 rate exceptions via Redis memory-backed chunking and queues.',
      'Developed live toggle controls for Survey Status (Pause & Resume actions).',
      'Refactored legacy DOM and layout scripts using jQuery alongside Pug template engines.'
    ],
    features: [
      'Survey Designer Node Engine',
      'Dynamic Participant Registers',
      'High-Throughput Multi-Media Uploads',
      'Redis Payload Buffering',
      'Orchestrated AWS S3 Handshake',
      'JWT Authentication & Route Limits'
    ],
    technologies: ['Node.js', 'Express.js', 'MongoDB', 'Redis', 'AWS S3', 'Pug', 'jQuery'],
    github: 'https://github.com/omsonani-8',
    link: 'https://expiwell.com'
  },
  {
    title: 'Real Estate Management Platform',
    category: 'Centralized CRM & Asset Polymorph',
    description: 'A cloud-based real estate operations center giving agents structured tool sets to manage listings, track tasks, and index client documents from a single window.',
    problemSolved: 'Listing files and documentation models were scattered and lacked structural relationship mappings. Built a clean polymorphic asset model to aggregate various assets under a single database module.',
    contributions: [
      'Spearheaded Node.js, Express, and TypeScript controller templates.',
      'Designed custom PostgreSQL schemas using Sequelize ORM references.',
      'Built custom tasks scheduler pipelines and Todo listings.',
      'Created modular layout templates in React mapped to TypeScript types.'
    ],
    features: [
      'Property Listings Records Index',
      'Polymorphic Media Ingestion API',
      'Task Board & CRM Integrations',
      'Secure User Sign-up/Login Gateways',
      'Optimized Relational Database Architecture'
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'Express.js', 'PostgreSQL', 'Sequelize', 'JWT', 'REST API'],
    github: 'https://github.com/omsonani-8',
    link: '#'
  },
  {
    title: "Women's Fashion E-Commerce",
    category: 'Stripe Gateway & Catalog Service',
    description: 'A full-featured digital shop optimized for quick catalog parsing, seamless carts addition, and Stripe credit checkout.',
    problemSolved: 'Checkout page dropouts were high due to slow payment integration scripts. Accelerated validation checkouts using modern lightweight API hooks and secure Stripe elements.',
    contributions: [
      'Created secure express endpoints and REST interface architectures.',
      'Integrated Stripe Terminal and Webhook payment triggers.',
      'Constructed modular Cart state store and items listings.',
      'Designed responsive catalog filters, grids, and dashboard panel blocks.'
    ],
    features: [
      'Category Catalogs (Kurtis, Sarees, Dresses)',
      'Global Cart Persistence Engine',
      'Secure Credit Payments (Stripe Checkout)',
      'Customer Purchase Logs & Delivery Trackers',
      'Admin Center Stock Control & Inventory Logs'
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'Stripe', 'JWT', 'Tailwind CSS'],
    github: 'https://github.com/omsonani-8',
    link: '#'
  },
  {
    title: 'ATS-Friendly Resume Builder',
    category: 'PDF Compiler & Template Sandbox',
    description: 'An interactive template application helping developers format ATS-compatible PDF resume structures dynamically in the browser.',
    problemSolved: 'PDF converters often created invalid text containers, causing resume engines to flag parsed words. Designed custom HTML template blocks that compile directly into crisp PDF vector nodes.',
    contributions: [
      'Engineered React controller states linking fields to templates.',
      'Built MongoDB schemas storing resume layouts and settings records.',
      'Developed PDF download compiles and client previews.',
      'Authored secure passport/JWT logic for users profile dashboard.'
    ],
    features: [
      'Interactive Resume Fields Builder',
      'Real-Time Text Preview Renderer',
      'ATS-Optimized Formatting Rules',
      'Fast Dynamic PDF In-Browser Compiler',
      'Multi-Layout Sandbox Templates'
    ],
    technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JavaScript', 'JWT', 'HTML5', 'CSS3'],
    github: 'https://github.com/omsonani-8/Resume-Builder',
    link: '#'
  }
];

const Projects = () => {
  return (
    <section id="projects" style={{
      padding: 'var(--section-padding)',
      maxWidth: '1200px',
      margin: '0 auto'
    }}>
      {/* Title Header Block */}
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

      {/* Grid of Projects */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
        {projectsData.map((project, idx) => (
          <ProjectCard 
            key={project.title} 
            project={project} 
            idx={idx} 
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
