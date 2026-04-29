import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Loader = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(textRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    )
      .to(textRef.current, {
        opacity: 0,
        y: -50,
        duration: 0.5,
        delay: 0.5,
        ease: 'power3.in'
      });

  }, []);

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center bg-brand-dark">
      <h1 ref={textRef} className="font-gothic text-4xl md:text-6xl text-brand-light tracking-widest">
        AKASH
      </h1>
    </div>
  );
};

export default Loader;