import React from 'react';
import './VideoBackground.scss';

const VideoBackground = ({ videoSrc }) => {
  return (
    <div className="video-background">
      <video autoPlay loop muted playsInline className="video-background__video">
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoBackground;
