import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const WhatIDo = () => {
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
    <section id="what-i-do" className="border-b bg-brand-dark border-white/10 reveal-section">
      <div className="max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-12 min-h-[50vh]">
        <div className="md:col-span-3 p-6 md:p-10 border-r border-white/10 flex items-start">
          <div className="text-xs font-mono text-gray-500 uppercase tracking-widest sticky top-32">
            ( 01 — What I do )
          </div>
        </div>
        <div className="md:col-span-9 p-6 md:p-20 flex flex-col justify-center space-y-10">
          <h2 ref={textRef} className="text-4xl md:text-7xl font-sans font-bold leading-[1.05] tracking-tight">
            {splitText("I build things that focus on how they ")}
            <span className="text-brand-accent">{splitText("feel,")}</span>
            {splitText(" not just how they ")}
            <span className="italic font-gothic text-gray-400">{splitText("work.")}</span>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
