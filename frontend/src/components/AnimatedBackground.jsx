import React from 'react';

const AnimatedBackground = ({ theme = 'dark' }) => {
  return (
    <div className="background-video-container">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="background-video"
      >
        <source src="/background_video.mp4" type="video/mp4" />
      </video>
      {/* <div className="background-overlay" /> */}
    </div>
  );
};

export default AnimatedBackground;

