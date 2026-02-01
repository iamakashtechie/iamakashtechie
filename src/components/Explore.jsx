import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Explore = () => {
  const textRef = useRef(null);

  useLayoutEffect(() => {
    if (textRef.current) {
      const chars = textRef.current.querySelectorAll('.reveal-char');
      gsap.fromTo(chars,
        { opacity: 0.1 },
        {
          opacity: 1,
          stagger: 0.1,
          ease: 'none',
          scrollTrigger: {
            trigger: textRef.current,
            start: 'top 85%',
            end: 'bottom 55%',
            scrub: true
          }
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  const splitText = (text) => {
    return text.split('').map((char, index) => (
      <span key={index} className="reveal-char">
        {char}
      </span>
    ));
  };

  return (
    <section id="explore" className="reveal-section border-b border-white/10">
      <div className="max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-12 min-h-[40vh]">
        <div className="md:col-span-3 p-6 md:p-10 border-r border-white/10">
          <div className="text-xs font-mono text-gray-500 uppercase tracking-widest sticky top-32">( 05 — Explore )</div>
        </div>
        <div className="md:col-span-9 p-10 md:p-20 flex items-center bg-brand-dark hover:bg-brand-dark-2 transition-colors duration-700">
          <div className="max-w-4xl">
            <h2 ref={textRef} className="text-3xl md:text-5xl font-sans font-bold leading-tight mb-6">
              {splitText("Sometimes I build things just to see how they ")}
              <span className="text-brand-accent">{splitText("feel.")}</span>
            </h2>
            <p className="text-gray-500 text-lg font-mono">
              Motion, interactions, small ideas — nothing too serious.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Explore;
