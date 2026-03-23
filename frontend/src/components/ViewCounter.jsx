import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const ViewCounter = () => {
  const [views, setViews] = useState(null);

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL || '';
    fetch(`${apiUrl}/api/views`)
      .then(res => res.json())
      .then(data => setViews(data.count))
      .catch(err => console.error('Failed to fetch views:', err));
  }, []);

  return (
    <motion.div 
      className="glass-panel"
      style={{ padding: '1rem 2rem', display: 'inline-block', marginTop: '2rem' }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.8 }}
    >
      <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '1px' }}>
        Total Views
      </span>
      <h2 className="text-gradient" style={{ fontSize: '2rem', margin: '0.5rem 0 0 0' }}>
        {views !== null ? views : '---'}
      </h2>
    </motion.div>
  );
};

export default ViewCounter;
