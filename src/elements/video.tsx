// Video.tsx

import React from 'react';
import { useRef } from 'react';

interface VideoProps {
  src: string; // URL of the video source
  controls?: boolean; // Show playback controls (optional)
  width?: string; // Width of the video element (optional)
  height?: string; // Height of the video element (optional)
}

const Video: React.FC<VideoProps> = ({ src, controls = true, width, height }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <video ref={videoRef} src={src} controls={controls} width={width} height={height}>
      Your browser does not support the video tag.
    </video>
  );
};

export default Video;
