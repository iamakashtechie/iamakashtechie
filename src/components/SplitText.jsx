import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

const SplitText = ({ children, className, delay = 0 }) => {
  const containerRef = useRef(null);
  const text = children.toString();
  const words = text.split(' ');

  useEffect(() => {
    const chars = containerRef.current.querySelectorAll('.split-char');
    const ctx = gsap.context(() => {
      gsap.fromTo(
        chars,
        { 
          yPercent: 100,
        },
        {
          yPercent: 0,
          duration: 0.8,
          ease: 'power4.out',
          stagger: 0.04,
          delay: delay,
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [delay]);

  return (
    <div
      ref={containerRef}
      className={`flex flex-wrap ${className}`}
    >
      {words.map((word, index) => (
        <span key={index} className="mr-[0.25em] inline-block whitespace-nowrap overflow-hidden">
          {word.split('').map((char, charIndex) => (
            <span key={charIndex} className="split-char inline-block">
              {char}
            </span>
          ))}
        </span>
      ))}
    </div>
  );
};

export default SplitText;
