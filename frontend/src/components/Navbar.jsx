import React, { useState, useEffect } from 'react';

const Navbar = ({ theme, toggleTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* Mobile overlay */}
      <div
        className={`nav-overlay ${menuOpen ? 'visible' : ''}`}
        onClick={closeMenu}
      />

      <nav style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        padding: scrolled ? '0.7rem 2rem' : '1rem 2rem',
        background: 'var(--nav-bg)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid var(--glass-border)',
        transition: 'padding 0.3s ease, background 0.3s ease'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <h2 className="text-gradient" style={{
            fontSize: '1.5rem',
            fontWeight: 800,
            letterSpacing: '-0.02em'
          }}>
            Om Sonani
          </h2>

          {/* Desktop & mobile nav links */}
          <div
            className={`nav-links ${menuOpen ? 'open' : ''}`}
            style={{
              display: 'flex',
              gap: '2rem',
              fontSize: '0.95rem',
              alignItems: 'center'
            }}
          >
            {['About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact'].map(item => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="nav-link"
                onClick={closeMenu}
              >
                {item}
              </a>
            ))}
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
          </div>

          {/* Hamburger for mobile */}
          <button
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span style={menuOpen ? { transform: 'rotate(45deg) translate(5px, 5px)' } : {}} />
            <span style={menuOpen ? { opacity: 0 } : {}} />
            <span style={menuOpen ? { transform: 'rotate(-45deg) translate(5px, -5px)' } : {}} />
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
