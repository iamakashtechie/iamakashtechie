import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Blog = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(containerRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: 'power2.out' }
    );
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen pt-32 px-6">
      <h1 className="text-6xl font-gothic mb-10">Thoughts & Notes</h1>
      <p className="text-xl font-light text-gray-400">
        Ramblings about tech, space, and design.
      </p>
    </div>
  );
};

export default Blog;
