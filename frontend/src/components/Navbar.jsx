import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinks = [
    { name: 'About', href: '#hero' },
    { name: 'Journey', href: '#experience' },
    { name: 'Stack', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0, 
        zIndex: 110,
        padding: isMobile ? '1rem 1.5rem' : '1.5rem 4rem',
        background: 'var(--nav-bg)',
        backdropFilter: 'blur(10px)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid var(--divider)',
      }}
    >
      <a href="/" style={{ 
        fontFamily: 'var(--font-heading)', 
        fontSize: '1.8rem', 
        fontWeight: 700, 
        color: 'var(--text-primary)',
        textDecoration: 'none'
      }}>
        OS<span style={{ color: 'var(--accent)' }}>.</span>
      </a>

      {/* Desktop Links */}
      {!isMobile && (
        <div style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
          {navLinks.map(link => (
            <a key={link.name} href={link.href} className="nav-link">{link.name}</a>
          ))}
          <a href="#terminal" className="nav-link" style={{ 
            fontFamily: 'monospace', 
            fontSize: '0.8rem', 
            color: 'var(--text-primary)',
            border: '1px solid var(--divider)',
            padding: '0.2rem 0.6rem',
            borderRadius: '4px',
            background: 'rgba(255,255,255,0.05)'
          }}>&gt;_ TERMINAL</a>
          
          <button
             onClick={toggleTheme}
             className="theme-toggle"
             style={{ 
               marginLeft: '1rem', 
               width: '42px',
               height: '42px',
               display: 'flex', 
               alignItems: 'center', 
               justifyContent: 'center',
               background: 'var(--glass-bg)',
               border: '1px solid var(--glass-border)',
               borderRadius: '8px', 
               cursor: 'pointer',
               color: 'var(--text-primary)',
               flexShrink: 0
             }}
          >
            {theme === 'dark' ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
            )}
          </button>
        </div>
      )}

      {/* Mobile Menu Trigger */}
      {isMobile && (
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button
            onClick={toggleTheme}
            style={{ 
              background: 'none', 
              border: 'none', 
              color: 'var(--text-primary)', 
              cursor: 'pointer' 
            }}
          >
            {theme === 'dark' ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
            )}
          </button>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--text-primary)',
              cursor: 'pointer',
              padding: '0.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '6px'
            }}
          >
            <motion.span animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 8 : 0 }} style={{ width: '24px', height: '2px', background: 'currentColor', display: 'block' }} />
            <motion.span animate={{ opacity: isOpen ? 0 : 1 }} style={{ width: '24px', height: '2px', background: 'currentColor', display: 'block' }} />
            <motion.span animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -8 : 0 }} style={{ width: '24px', height: '2px', background: 'currentColor', display: 'block' }} />
          </button>
        </div>
      )}

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              style={{
                position: 'fixed',
                inset: 0,
                background: 'rgba(0,0,0,0.8)',
                backdropFilter: 'blur(10px)',
                zIndex: 1000
              }}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              style={{
                position: 'fixed',
                top: 0,
                right: 0,
                bottom: 0,
                width: '80%',
                maxWidth: '350px',
                background: '#0a0a0a',
                borderLeft: '1px solid var(--divider)',
                zIndex: 1001,
                padding: '4rem 2.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '2.5rem'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)', letterSpacing: '0.4rem', textTransform: 'uppercase' }}>Navigation</span>
                <button onClick={() => setIsOpen(false)} style={{ background: 'none', border: 'none', color: '#fff', fontSize: '1.5rem' }}>&times;</button>
              </div>
              
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  style={{
                    fontSize: '2.5rem',
                    fontWeight: 800,
                    color: '#fff',
                    textDecoration: 'none',
                    fontFamily: 'var(--font-heading)',
                    letterSpacing: '-0.02em'
                  }}
                >
                  {link.name}
                </motion.a>
              ))}
              
              <motion.a 
                href="#terminal" 
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
                style={{
                  marginTop: '2rem',
                  fontSize: '1rem',
                  fontFamily: 'monospace',
                  color: 'var(--text-muted)',
                  border: '1px solid var(--divider)',
                  padding: '1rem',
                  borderRadius: '12px',
                  textAlign: 'center',
                  background: 'rgba(255,255,255,0.05)'
                }}
              >
                &gt;_ SYSTEM TERMINAL
              </motion.a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

