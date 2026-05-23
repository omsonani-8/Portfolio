import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const IntroScreen = ({ show }) => {
  const [loadingText, setLoadingText] = React.useState('INITIALIZING SYSTEM...');
  const [progress, setProgress] = React.useState(0);
  const [videoReady, setVideoReady] = React.useState(false);

  useEffect(() => {
    if (!show || !videoReady) return;

    const phrases = [
      'DECRYPTING ASSETS...',
      'BYPASSING FIREWALL...',
      'LOADING CORE MODULES...',
      'ESTABLISHING SECURE CONNECTION...',
      'OM SONANI | ARCHITECT ACCESS GRANTED'
    ];

    let currentPhraseIdx = 0;
    const phraseInterval = setInterval(() => {
      currentPhraseIdx++;
      if (currentPhraseIdx < phrases.length) {
        setLoadingText(phrases[currentPhraseIdx]);
      }
    }, 700);

    const progressInterval = setInterval(() => {
      setProgress(prev => Math.min(prev + 1, 100));
    }, 35);

    return () => {
      clearInterval(phraseInterval);
      clearInterval(progressInterval);
    };
  }, [show, videoReady]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
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
          {/* High Impact Background Video - THE ONLY BACKGROUND */}
          <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
            <video
              autoPlay
              loop
              muted
              playsInline
              onLoadedData={() => setVideoReady(true)}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                opacity: videoReady ? 1 : 0,
                transition: 'opacity 1s ease-in-out',
                filter: 'grayscale(0.8) contrast(1.2) brightness(0.6)'
              }}
            >
              <source src="/background_video.mp4" type="video/mp4" />
            </video>
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.4) 100%)'
            }} />
          </div>

          <AnimatePresence>
            {videoReady && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                style={{ 
                  position: 'relative', 
                  zIndex: 2, 
                  textAlign: 'center',
                  width: '100%',
                  maxWidth: '800px',
                  padding: '0 2rem'
                }}
              >
                <motion.h1
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'clamp(2.5rem, 9vw, 8rem)',
                    color: '#fff',
                    textTransform: 'uppercase',
                    letterSpacing: '0.2rem',
                    margin: '0 0 4rem 0',
                    fontWeight: 900,
                    textShadow: '0 0 30px rgba(255,255,255,0.8)',
                    whiteSpace: 'nowrap'
                  }}
                >
                  Om Sonani
                </motion.h1>

                <div style={{ 
                  textAlign: 'left', 
                  fontFamily: 'monospace',
                  color: '#fff',
                  fontSize: '0.9rem',
                  letterSpacing: '0.1rem'
                }}>
                  <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'space-between' }}>
                    <span>{loadingText}</span>
                    <span>{progress}%</span>
                  </div>
                  <div style={{ 
                    height: '4px', 
                    background: 'rgba(255,255,255,0.1)', 
                    position: 'relative',
                    overflow: 'hidden' 
                  }}>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${progress}%` }}
                      style={{ 
                        height: '100%', 
                        background: '#fff',
                        boxShadow: '0 0 15px #fff'
                      }}
                    />
                  </div>
                  <div style={{ marginTop: '0.5rem', opacity: 0.5, fontSize: '0.7rem' }}>
                    &gt; TERMINAL_ID: OS_0923_B <br />
                    &gt; SECURE_LINK: ESTABLISHED
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroScreen;
