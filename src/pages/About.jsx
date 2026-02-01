import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const About = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(containerRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: 'power2.out' }
    );
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen pt-32 px-6">
      <h1 className="text-6xl font-gothic mb-10">About Me</h1>
      <p className="text-xl max-w-2xl font-light text-gray-400">
        I am Akash, a passionate developer and designer who loves space, physics, and the beauty of logic.
      </p>
    </div>
  );
};

export default About;
