import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Terminal = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'output', content: 'SYSTEM BOOT: v4.0.1 - KERNEL: MONOCHROMATIC-OM' },
    { type: 'output', content: 'TYPE "help" TO SEE AVAILABLE COMMANDS.' },
    { type: 'output', content: '' }
  ]);
  const [currentDir, setCurrentDir] = useState('~');
  const scrollRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (cmd) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    const parts = trimmedCmd.split(' ');
    const command = parts[0];
    const args = parts.slice(1);

    const newHistory = [...history, { type: 'input', content: `${currentDir} $ ${cmd}` }];

    switch (command) {
      case 'help':
        newHistory.push({ type: 'output', content: 'AVAILABLE COMMANDS: ls, cd, cat, help, whoami, clear, date' });
        break;
      case 'ls':
        if (currentDir === '~') {
          newHistory.push({ type: 'output', content: 'projects/  experience/  education/  resume.txt  portfolio.txt' });
        } else if (currentDir === '~/projects') {
          newHistory.push({ type: 'output', content: 'research_ecosystem.md  nexus_real_estate.md  architect_portfolio.md' });
        } else if (currentDir === '~/experience') {
          newHistory.push({ type: 'output', content: 'prime_apps.txt  esparkbiz.txt' });
        } else if (currentDir === '~/education') {
          newHistory.push({ type: 'output', content: 'academic_record.log' });
        }
        break;
      case 'cd':
        const target = args[0];
        if (!target || target === '~' || target === '..') {
          setCurrentDir('~');
        } else if (['projects', 'experience', 'education'].includes(target)) {
          setCurrentDir(`~/${target}`);
        } else {
          newHistory.push({ type: 'error', content: `DIRECTORY NOT FOUND: ${target}` });
        }
        break;
      case 'cat':
        const file = args[0];
        const contentMap = {
          'resume.txt': 'OM SONANI - Full Stack SDE. Email: omsonani1928@gmail.com. GitHub: omsonani-8.',
          'portfolio.txt': 'PORTFOLIO v4.0: A high-end monochromatic digital engine built with React, Framer Motion, and a custom Terminal CLI. Designed for architectural speed and technical depth.',
          'prime_apps.txt': 'PRIME APPS: SDE (Apr 2026 - Present). Architecting enterprise headless ecosystems with Payload CMS, Next.js, and MongoDB clusters.',
          'esparkbiz.txt': 'ESPARKBIZ: Junior SDE (Jan 2025 - Mar 2026). Engineered production systems, optimized S3 throughput, and automated AI-agent workflows.',
          'research_ecosystem.md': 'RESEARCH ECOSYSTEM: A high-concurrency ingestion engine. Solved AWS S3 bottlenecks using Redis-backed async orchestration.',
          'nexus_real_estate.md': 'NEXUS REAL ESTATE: Unified polymorphic media management system for enterprise asset scaling.',
          'architect_portfolio.md': 'ARCHITECT PORTFOLIO: High-fidelity branding engine leveraging Payload CMS dynamic schemas.',
          'academic_record.log': 'BE Computer Engineering, GEC Bhavnagar (2021-2025). CGPA: 8.43. Record Finalized.'
        };
        
        if (contentMap[file]) {
          newHistory.push({ type: 'output', content: contentMap[file] });
        } else {
          newHistory.push({ type: 'error', content: `FILE NOT FOUND: ${file}` });
        }
        break;
      case 'whoami':
        newHistory.push({ type: 'output', content: 'I am Om Sonani, an SDE at Prime Apps, architecting high-performance digital ecosystems.' });
        break;
      case 'clear':
        setHistory([]);
        return;
      case 'date':
        newHistory.push({ type: 'output', content: new Date().toString() });
        break;
      default:
        if (trimmedCmd !== '') {
          newHistory.push({ type: 'error', content: `COMMAND NOT RECOGNIZED: ${command}` });
        }
    }

    setHistory(newHistory);
  };

  const suggestions = [
    { cmd: 'ls', desc: 'List files & directories' },
    { cmd: 'cat portfolio.txt', desc: 'Read portfolio description' },
    { cmd: 'cd projects', desc: 'Explore project archive' },
    { cmd: 'cat resume.txt', desc: 'View professional summary' },
    { cmd: 'whoami', desc: 'Identify system user' }
  ];

  const handleKeyDown = (e) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      if (input.startsWith('/')) {
        const query = input.slice(1).toLowerCase();
        const match = suggestions.find(s => s.cmd.startsWith(query));
        if (match) {
          setInput(match.cmd);
        }
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input) {
      handleCommand(input);
      setInput('');
    }
  };

  const filteredSuggestions = input.startsWith('/') 
    ? suggestions.filter(s => s.cmd.startsWith(input.slice(1).toLowerCase())) 
    : [];

  return (
    <section id="terminal" style={{
      padding: 'var(--section-padding)',
      maxWidth: '1200px',
      margin: '0 auto',
      minHeight: '80vh',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ marginBottom: '4rem' }}
      >
        <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 700, letterSpacing: '0.4rem', textTransform: 'uppercase' }}>
          System Console
        </span>
        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.5rem, 8vw, 5rem)', fontWeight: 800, color: 'var(--text-primary)', marginTop: '1rem' }}>
          Terminal Access<span style={{ color: 'var(--text-muted)' }}>_</span>
        </h2>
      </motion.div>

      <div style={{
        background: '#0a0a0a',
        border: '1px solid var(--divider)',
        borderRadius: '12px',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
        flex: 1,
        display: 'flex',
        flexDirection: 'column'
      }}>
        {/* Terminal Header */}
        <div style={{
          background: 'var(--divider)',
          padding: '0.75rem 1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: '1px solid var(--divider)'
        }}>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }} />
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }} />
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f' }} />
          </div>
          <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', fontFamily: 'monospace' }}>bash — omsonani@portfolio</span>
          <div style={{ width: '40px' }} />
        </div>

        {/* Console Content */}
        <div 
          ref={scrollRef}
          style={{
            padding: '2rem',
            fontFamily: '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace',
            fontSize: '1rem',
            lineHeight: 1.6,
            color: '#fff',
            overflowY: 'auto',
            flex: 1,
            position: 'relative'
          }}
          onClick={() => inputRef.current?.focus()}
        >
          {/* Scanline Overlay */}
          <div style={{
            position: 'absolute',
            top: 0, left: 0, right: 0, bottom: 0,
            background: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))',
            backgroundSize: '100% 4px, 3px 100%',
            pointerEvents: 'none',
            zIndex: 1
          }} />

          {history.map((line, i) => (
            <div key={i} style={{ 
              marginBottom: line.content === '' ? '1rem' : '0.2rem',
              color: line.type === 'error' ? '#ff5f56' : line.type === 'input' ? '#707171' : '#fff',
              display: 'flex',
              gap: '0.5rem'
            }}>
              {line.content}
            </div>
          ))}

          {/* Input Area */}
          <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '1rem', position: 'relative', zIndex: 10, alignItems: 'center', marginBottom: '150px' }}>
            <span style={{ color: 'var(--text-muted)' }}>{currentDir} $</span>
            <input
              ref={inputRef}
              autoFocus
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              style={{
                background: 'none',
                border: 'none',
                outline: 'none',
                color: '#fff',
                fontFamily: 'inherit',
                fontSize: 'inherit',
                flex: 1
              }}
            />
            
            {/* Suggestions Overlay */}
            <AnimatePresence>
              {filteredSuggestions.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  style={{
                    position: 'absolute',
                    left: '0',
                    top: '100%',
                    background: '#1a1a1a',
                    border: '1px solid var(--divider)',
                    borderRadius: '8px',
                    padding: '1rem',
                    marginTop: '1rem',
                    width: '320px',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.8)',
                    zIndex: 100
                  }}
                >
                  <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginBottom: '0.75rem', borderBottom: '1px solid #333', paddingBottom: '0.5rem', fontWeight: 700 }}>AVAILABLE COMMANDS [TAB TO FILL]</p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                    {filteredSuggestions.map(s => (
                      <li key={s.cmd} 
                          onClick={() => { setInput(s.cmd); inputRef.current?.focus(); }}
                          style={{ fontSize: '0.8rem', cursor: 'pointer', padding: '0.2rem 0' }}
                          onMouseEnter={e => e.currentTarget.style.opacity = '0.7'}
                          onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                      >
                        <code style={{ color: '#fff', fontWeight: 700 }}>{s.cmd}</code>
                        <span style={{ color: 'var(--text-muted)', marginLeft: '0.8rem' }}>— {s.desc}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Terminal;
