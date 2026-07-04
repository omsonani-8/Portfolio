import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiHtml5, SiCss, SiJavascript, SiTypescript, SiReact, SiNextdotjs, 
  SiNodedotjs, SiExpress, SiMongodb, SiMysql, SiPostgresql, SiPrisma, 
  SiRedux, SiTailwindcss, SiBootstrap, SiMui, SiGit, SiGithub, 
  SiDocker, SiFirebase, SiVercel, SiNetlify, SiGraphql, 
  SiSocketdotio, SiJsonwebtokens, SiFigma 
} from 'react-icons/si';
import { TbApi, TbBrandFramerMotion } from 'react-icons/tb';
import { FaAws } from 'react-icons/fa';

// Array of 29 technologies for the professional list
const technologies = [
  { name: 'HTML5', icon: SiHtml5 },
  { name: 'CSS3', icon: SiCss },
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'React', icon: SiReact },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'Express.js', icon: SiExpress },
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'MySQL', icon: SiMysql },
  { name: 'PostgreSQL', icon: SiPostgresql },
  { name: 'Prisma', icon: SiPrisma },
  { name: 'Redux Toolkit', icon: SiRedux },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  { name: 'Bootstrap', icon: SiBootstrap },
  { name: 'Material UI', icon: SiMui },
  { name: 'Git', icon: SiGit },
  { name: 'GitHub', icon: SiGithub },
  { name: 'Docker', icon: SiDocker },
  { name: 'Firebase', icon: SiFirebase },
  { name: 'Vercel', icon: SiVercel },
  { name: 'Netlify', icon: SiNetlify },
  { name: 'AWS', icon: FaAws },
  { name: 'REST API', icon: TbApi },
  { name: 'GraphQL', icon: SiGraphql },
  { name: 'Socket.io', icon: SiSocketdotio },
  { name: 'JWT', icon: SiJsonwebtokens },
  { name: 'Framer Motion', icon: TbBrandFramerMotion },
  { name: 'Figma', icon: SiFigma }
];

// Split the list of 29 technologies to create two opposite paths
const row1 = technologies.slice(0, 15);
const row2 = technologies.slice(15);

// Duplicate elements to ensure smooth and gap-less loop scrolling
const duplicatedRow1 = [...row1, ...row1, ...row1];
const duplicatedRow2 = [...row2, ...row2, ...row2];

const TechCard = ({ tech }) => {
  const IconComponent = tech.icon;

  return (
    <div
      style={{
        transition: 'all 400ms cubic-bezier(0.16, 1, 0.3, 1)',
      }}
      className="relative flex flex-col items-center justify-center w-36 h-36 md:w-40 md:h-40 rounded-xl bg-[var(--bg-secondary)] border border-[var(--divider)] hover:border-[var(--text-primary)] hover:scale-[1.03] mx-3 p-4 cursor-pointer select-none group"
    >
      {/* Icon Wrapper */}
      <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors duration-300">
        <IconComponent size={40} />
      </div>

      {/* Text Label */}
      <span className="mt-4 text-xs md:text-sm font-bold font-mono tracking-wide text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors duration-300 text-center">
        {tech.name}
      </span>
    </div>
  );
};

const Expertise = () => {
  return (
    <section 
      id="skills" 
      className="relative overflow-hidden bg-transparent border-t border-b border-[var(--divider)]"
    >
      {/* Subtle background grid matching dark/light themes */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.02] dark:opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(var(--divider) 1px, transparent 1px),
            linear-gradient(90deg, var(--divider) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Styled Heading Container - Aligned exactly with other portfolio sections */}
      <div 
        style={{
          padding: 'var(--section-padding)',
          paddingBottom: 0,
          maxWidth: '1200px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 10
        }}
      >
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
      </div>

      {/* Marquee Container - Full Bleed */}
      <div 
        className="relative z-10 flex flex-col gap-6 py-4 cursor-grab active:cursor-grabbing group/marquee"
        style={{
          paddingBottom: 'clamp(5rem, 15vw, 10rem)'
        }}
      >
        {/* Row 1 - Moves Right to Left (Always Scrolls) */}
        <div className="flex overflow-hidden w-full mask-gradient">
          <div className="animate-marquee">
            {duplicatedRow1.map((tech, idx) => (
              <TechCard key={`row1-${tech.name}-${idx}`} tech={tech} />
            ))}
          </div>
        </div>

        {/* Row 2 - Moves Left to Right (Always Scrolls) */}
        <div className="flex overflow-hidden w-full mask-gradient">
          <div className="animate-marquee-reverse">
            {duplicatedRow2.map((tech, idx) => (
              <TechCard key={`row2-${tech.name}-${idx}`} tech={tech} />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .mask-gradient {
          mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
        }
      `}</style>
    </section>
  );
};

export default Expertise;
