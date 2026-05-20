import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Education from '../components/Education';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import IntroScreen from '../components/IntroScreen';

const Home = () => {
  const [theme, setTheme] = useState('dark');
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    // Hide intro screen after 2 seconds
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <>
      <Helmet>
        <title>Om Sonani | Full-Stack Web Developer</title>
        <meta name="description" content="Portfolio of Om Sonani, a Motivated Full Stack Web Developer based in Ahmedabad. Experienced in MERN stack, Node.js, Express, Sequelize ORM, and modern web applications." />
        <meta name="keywords" content="Om Sonani, Full Stack Developer, MERN stack, React.js, Node.js, Web Developer Ahmedabad, Software Engineer" />
        <meta name="author" content="Om Sonani" />
      </Helmet>

      <IntroScreen show={showIntro} />

      <div className="app-container">
        <div style={{ flex: 1, position: 'relative', zIndex: 1, paddingTop: '80px' }}>
          <Navbar theme={theme} toggleTheme={toggleTheme} />
          <main>
            <Hero />
            <Skills />
            <Experience />
            <Projects />
            <Education />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
