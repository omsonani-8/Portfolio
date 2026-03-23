import React from 'react';

const Navbar = ({ theme, toggleTheme }) => {
  return (
    <nav style={{ position: 'sticky', top: 0, zIndex: 50, padding: '1rem 2rem', background: 'var(--glass-bg)', backdropFilter: 'blur(12px)', borderBottom: '1px solid var(--glass-border)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 className="text-gradient" style={{ fontSize: '1.5rem', fontWeight: 800 }}>Om Sonani</h2>
        <div style={{ display: 'flex', gap: '2rem', fontSize: '1rem', fontWeight: 600, alignItems: 'center' }}>
          <a href="#about" style={{ transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color='var(--accent)'} onMouseLeave={(e) => e.target.style.color='inherit'}>About</a>
          <a href="#skills" style={{ transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color='var(--accent)'} onMouseLeave={(e) => e.target.style.color='inherit'}>Skills</a>
          <a href="#experience" style={{ transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color='var(--accent)'} onMouseLeave={(e) => e.target.style.color='inherit'}>Experience</a>
          <a href="#projects" style={{ transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color='var(--accent)'} onMouseLeave={(e) => e.target.style.color='inherit'}>Projects</a>
          <button 
            onClick={toggleTheme}
            style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--text-primary)', fontSize: '1.2rem', padding: '0.5rem', marginLeft: '1rem' }}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
