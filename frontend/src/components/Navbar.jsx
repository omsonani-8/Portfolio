import React from 'react';

const Navbar = ({ theme, toggleTheme }) => {
  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0, 
        zIndex: 110,
        padding: '1.5rem 4rem',
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

      <div style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
        <a href="#hero" className="nav-link">About</a>
        <a href="#experience" className="nav-link">Journey</a>
        <a href="#skills" className="nav-link">Stack</a>
        <a href="#projects" className="nav-link">Projects</a>
        <a href="#contact" className="nav-link">Contact</a>
        
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
    </nav>
  );
};

export default Navbar;
