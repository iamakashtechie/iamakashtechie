import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Explore = () => {
  const textRef = useRef(null);

  useLayoutEffect(() => {
    if (textRef.current) {
      const chars = textRef.current.querySelectorAll('.reveal-char');
      const anim = gsap.fromTo(chars,
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

      return () => {
        anim.scrollTrigger?.kill();
        anim.kill();
      };
    }
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
      <div className="max-w-450 mx-auto grid grid-cols-1 md:grid-cols-12 min-h-[40vh]">
        <div className="md:col-span-3 p-6 md:p-10 border-r border-white/10">
          <div className="text-xs font-mono text-gray-500 uppercase tracking-widest sticky top-32">( 05 — Side Experiments )</div>
        </div>
        <div className="md:col-span-9 p-10 md:p-20 flex flex-col justify-center gap-10 bg-brand-dark">
          <div className="max-w-4xl">
            <h2 ref={textRef} className="text-3xl md:text-5xl font-sans font-bold leading-tight mb-4">
              {splitText("Not every project needs a reason. Some are just ")}
              <span className="text-brand-accent">{splitText("curiosity.")}</span>
            </h2>
            <p className="text-gray-500 text-base font-mono mt-4 leading-relaxed">
              Outside of structured work, I explore things that interest me — signal processing, P2P systems, offline-first architecture, weird ideas that probably won't ship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/10">
            {[
              {
                name: "AFSK Modem",
                desc: "Off-grid text communication between two Android phones using Bell 202 tones & a browser-based PLL decoder.",
                tag: "Signal Processing"
              },
              {
                name: "ChatGun",
                desc: "Local-first P2P chat app using GunDB with no central server — relayed via Cloudflare tunnels from Termux.",
                tag: "P2P / Decentralised"
              },
              {
                name: "Notes Bubble App",
                desc: "Force-directed notes app in React Native where each note is a physics-simulated bubble using d3-force.",
                tag: "React Native / D3"
              }
            ].map((exp, i, arr) => (
              <div
                key={i}
                className={`p-8 flex flex-col gap-3 hover:bg-brand-dark-2 transition-colors duration-300 ${i < arr.length - 1 ? 'border-b md:border-b-0 md:border-r border-white/10' : ''}`}
              >
                <span className="text-[10px] font-mono uppercase tracking-widest text-brand-accent">{exp.tag}</span>
                <h3 className="text-lg font-gothic font-bold text-white uppercase">{exp.name}</h3>
                <p className="text-gray-500 text-xs font-mono leading-relaxed">{exp.desc}</p>
              </div>
            ))}
          </div>

          <a
            href="https://github.com/iamakashtechie"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-block cursor-pointer border-b-2 border-brand-accent overflow-hidden transition-all duration-300 w-fit mt-4"
          >
            <span className="relative z-10 flex items-center gap-3 text-sm font-mono uppercase tracking-widest text-brand-light group-hover:text-black transition-colors duration-300 pb-1">
              <span>Explore all on GitHub</span>
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </span>
            <div className="absolute inset-0 bg-brand-accent transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out z-0"></div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Explore;