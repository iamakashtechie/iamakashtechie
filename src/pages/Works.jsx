import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Works = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(containerRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: 'power2.out' }
    );
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen pt-32 px-6">
      <h1 className="text-6xl font-gothic mb-10">Selected Works</h1>
      <p className="text-xl font-light text-gray-400">
        A collection of my recent projects.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
        <div className="bg-gray-800 aspect-video rounded-lg"></div>
        <div className="bg-gray-800 aspect-video rounded-lg"></div>
      </div>
    </div>
  );
};

export default Works;
