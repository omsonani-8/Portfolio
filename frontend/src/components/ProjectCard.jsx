import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiReact, SiTypescript, SiJavascript, SiNodedotjs, SiExpress, 
  SiMongodb, SiPostgresql, SiSequelize, SiRedis, SiStripe, 
  SiTailwindcss, SiJsonwebtokens, SiJquery, SiHtml5, SiCss, SiPug,
  SiGithub
} from 'react-icons/si';
import { TbApi, TbBrandFramerMotion, TbExternalLink } from 'react-icons/tb';
import { FaAws } from 'react-icons/fa';

// Monochromatic Brand Icon mapping definitions
const techInfo = {
  'React': SiReact,
  'TypeScript': SiTypescript,
  'JavaScript': SiJavascript,
  'Node.js': SiNodedotjs,
  'Express.js': SiExpress,
  'MongoDB': SiMongodb,
  'PostgreSQL': SiPostgresql,
  'Sequelize': SiSequelize,
  'Redis': SiRedis,
  'AWS S3': FaAws,
  'Stripe': SiStripe,
  'Tailwind CSS': SiTailwindcss,
  'Framer Motion': TbBrandFramerMotion,
  'JWT': SiJsonwebtokens,
  'REST API': TbApi,
  'Pug': SiPug,
  'jQuery': SiJquery,
  'HTML5': SiHtml5,
  'CSS3': SiCss
};

const TechBadge = ({ techName, delay }) => {
  const IconComponent = techInfo[techName];

  return (
    <motion.span
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: delay * 0.05 }}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.5rem',
        fontSize: '0.8rem',
        color: 'var(--text-muted)',
        fontFamily: 'monospace',
        border: '1px solid var(--divider)',
        borderRadius: '4px',
        padding: '0.25rem 0.6rem',
        transition: 'border-color 0.2s, color 0.2s',
        cursor: 'default'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'var(--text-secondary)';
        e.currentTarget.style.color = 'var(--text-primary)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'var(--divider)';
        e.currentTarget.style.color = 'var(--text-muted)';
      }}
    >
      {IconComponent && <IconComponent size={14} />}
      <span>{techName.toLowerCase().replace(/\s+/g, '')}</span>
    </motion.span>
  );
};

const ProjectCard = ({ project, idx }) => {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 768);

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <motion.div
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
        boxShadow: '0 15px 40px rgba(0,0,0,0.4)',
        transition: 'border-color 0.3s ease, box-shadow 0.3s ease'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'var(--text-muted)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'var(--divider)';
      }}
    >
      {/* Terminal Header Bar */}
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
          {project.title.toLowerCase().replace(/[^a-z0-9]/g, '_')}.sh
        </span>
      </div>

      {/* Terminal Body Content */}
      <div style={{ padding: isMobile ? '1.5rem' : '4rem' }}>
        <div style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          justifyContent: 'space-between',
          alignItems: isMobile ? 'flex-start' : 'baseline',
          gap: isMobile ? '1rem' : '2rem',
          marginBottom: isMobile ? '2rem' : '3rem'
        }}>
          <div>
            <h3 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: isMobile ? '1.5rem' : 'clamp(1.5rem, 3vw, 2.5rem)',
              color: 'var(--text-primary)',
              fontWeight: 700,
              marginBottom: '0.5rem'
            }}>
              {project.title}
            </h3>
            <p style={{
              fontSize: isMobile ? '1rem' : '1.25rem',
              color: 'var(--text-muted)',
              fontWeight: 500,
              fontFamily: 'monospace'
            }}>
              &gt; {project.category}
            </p>
          </div>
          
          {/* External Action Links */}
          <div style={{ display: 'flex', gap: '1rem', flexShrink: 0 }}>
            {project.github && (
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  color: 'var(--text-secondary)',
                  fontSize: '0.8rem',
                  fontFamily: 'monospace',
                  fontWeight: 600,
                  padding: '0.5rem 1rem',
                  background: 'var(--divider)',
                  borderRadius: '4px',
                  transition: 'background 0.2s, color 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#222';
                  e.currentTarget.style.color = '#fff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'var(--divider)';
                  e.currentTarget.style.color = 'var(--text-secondary)';
                }}
              >
                <SiGithub size={12} /> repo
              </a>
            )}
            {project.link && project.link !== '#' && (
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  color: 'var(--text-secondary)',
                  fontSize: '0.8rem',
                  fontFamily: 'monospace',
                  fontWeight: 600,
                  padding: '0.5rem 1rem',
                  background: 'var(--divider)',
                  borderRadius: '4px',
                  transition: 'background 0.2s, color 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#222';
                  e.currentTarget.style.color = '#fff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'var(--divider)';
                  e.currentTarget.style.color = 'var(--text-secondary)';
                }}
              >
                <TbExternalLink size={12} /> demo
              </a>
            )}
          </div>
        </div>

        {/* Description */}
        <p style={{
          fontSize: isMobile ? '1rem' : '1.2rem',
          color: 'var(--text-secondary)',
          marginBottom: '2rem',
          lineHeight: 1.6,
          maxWidth: '800px',
          fontStyle: 'italic'
        }}>
          // {project.description}
        </p>

        {/* Monochromatic Technology Pills */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.65rem',
          marginBottom: '2.5rem'
        }}>
          {project.technologies.map((tech, tIdx) => (
            <TechBadge key={tech} techName={tech} delay={tIdx} />
          ))}
        </div>

        {/* Deep Technical Specs (Problem & Contributions) */}
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '2rem', 
          marginTop: '2.5rem', 
          borderTop: '1px solid var(--divider)', 
          paddingTop: '2.5rem' 
        }}>
          {/* Problem Solved */}
          <div>
            <h4 style={{
              fontSize: '0.85rem',
              color: 'var(--text-primary)',
              fontFamily: 'monospace',
              fontWeight: 750,
              marginBottom: '0.75rem',
              textTransform: 'uppercase',
              letterSpacing: '0.15em'
            }}>
              &gt; PROBLEM_SOLVED
            </h4>
            <p style={{
              fontSize: isMobile ? '0.95rem' : '1.1rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.6
            }}>
              {project.problemSolved}
            </p>
          </div>

          {/* Contributions */}
          <div>
            <h4 style={{
              fontSize: '0.85rem',
              color: 'var(--text-primary)',
              fontFamily: 'monospace',
              fontWeight: 750,
              marginBottom: '0.75rem',
              textTransform: 'uppercase',
              letterSpacing: '0.15em'
            }}>
              &gt; CONTRIBUTIONS
            </h4>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}>
              {project.contributions.map((detail) => (
                <li key={detail} style={{
                  display: 'flex',
                  gap: '1rem',
                  fontSize: isMobile ? '0.95rem' : '1.1rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.5,
                  alignItems: 'flex-start'
                }}>
                  <span style={{
                    marginTop: '0.5rem',
                    width: '6px',
                    height: '6px',
                    background: '#fff',
                    borderRadius: '50%',
                    flexShrink: 0,
                    boxShadow: '0 0 8px rgba(255,255,255,0.5)'
                  }} />
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
