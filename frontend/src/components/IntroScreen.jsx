import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const IntroScreen = ({ show }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!show || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Set canvas dimensions
    const setDimensions = () => {
      // Use offsetWidth and offsetHeight from the parent container if available,
      // or a bit larger than innerHeight to prevent bottom clipping
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight + 100;
    };
    
    setDimensions();
    window.addEventListener('resize', setDimensions);

    const codeSnippets = [
      "import React, { useState, useEffect } from 'react';",
      "const UserContext = React.createContext();",
      "export const useAuth = () => useContext(UserContext);",
      "function App() {",
      "  const [user, setUser] = useState(null);",
      "  return <Provider value={user}>{children}</Provider>;",
      "}",
      "const fetchData = async () => {",
      "  const res = await fetch('/api/data');",
      "  return res.json();",
      "};",
      "npm install --save framer-motion",
      "docker-compose up -d --build",
      "git push origin main --force",
      "while(true) {",
      "  bypassSecurity();",
      "}",
      "db.collection('users').find({ root: true })",
      "Object.keys(window).forEach(k => delete window[k]);",
      "console.log('Access Granted...');"
    ];

    const fontSize = 14;
    ctx.font = `${fontSize}px monospace`;
    
    // We will have lines of code moving vertically
    const maxLines = Math.floor(window.innerHeight / fontSize) * 2;
    const lines = [];

    for (let i = 0; i < 150; i++) {
        lines.push({
            text: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            speed: (Math.random() * 2.5) + 0.5,
            opacity: Math.random() * 0.6 + 0.1
        });
    }

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.2)'; // fade effect
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        
        ctx.fillStyle = `rgba(0, 255, 255, ${line.opacity})`;
        ctx.fillText(line.text, line.x, line.y);

        // Move line upwards
        line.y -= line.speed;

        // Reset line if it goes off top
        if (line.y + fontSize < 0) {
            line.y = canvas.height + fontSize;
            line.x = Math.random() * (canvas.width - 200); // keep mostly on screen
            line.text = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
            line.speed = (Math.random() * 4) + 1;
        }
      }
    };

    const interval = setInterval(draw, 33); // ~30fps

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', setDimensions);
    };
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            background: '#000',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden'
          }}
        >
          <canvas
            ref={canvasRef}
            style={{ position: 'absolute', inset: 0, opacity: 0.7 }}
          />
          <motion.h1
            initial={{ x: '-100vw', opacity: 1 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100vw', opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            style={{
              position: 'relative',
              zIndex: 1,
              fontFamily: 'var(--font-heading, monospace)',
              fontSize: 'clamp(3rem, 10vw, 8rem)',
              color: '#fff',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              textShadow: '0 0 20px rgba(0, 255, 255, 0.8), 0 0 40px rgba(0, 255, 255, 0.4)',
              margin: 0,
              fontWeight: 800
            }}
          >
            Om Sonani
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroScreen;
