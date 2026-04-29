import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const MouseFollower = () => {
  const followerRef = useRef(null);
  const textRef = useRef(null);
  const cursorState = useRef('default');

  useEffect(() => {
    const follower = followerRef.current;
    const textElement = textRef.current;

    gsap.set(follower, { xPercent: -50, yPercent: -50, scale: 0 });

    const moveFollower = (e) => {
      gsap.to(follower, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        ease: 'power2.out'
      });
    };

    const handleHover = (e) => {
      const target = e.target;
      const customCursor = target.closest('[data-cursor="view"]');
      const link = target.closest('a') || target.closest('button');

      let newState = 'default';
      if (customCursor) newState = 'view';
      else if (link) newState = 'link';

      if (newState !== cursorState.current) {
        cursorState.current = newState;

        if (newState === 'view') {
          if (textElement) textElement.innerText = "VIEW";

          gsap.to(follower, {
            scale: 5,
            backgroundColor: 'white',
            border: 'none',
            opacity: 1,
            mixBlendMode: 'difference',
            overwrite: 'auto'
          });
          if (textElement) gsap.to(textElement, { opacity: 1, scale: 0.2, overwrite: 'auto' });

        } else if (newState === 'link') {
          gsap.to(follower, {
            scale: 1.5,
            opacity: 0.5,
            backgroundColor: 'transparent',
            border: '1px solid white',
            mixBlendMode: 'difference',
            overwrite: 'auto'
          });
          if (textElement) gsap.to(textElement, { opacity: 0, overwrite: 'auto' });

        } else {
          gsap.to(follower, {
            scale: 1,
            opacity: 1,
            backgroundColor: 'white',
            border: 'none',
            mixBlendMode: 'difference',
            overwrite: 'auto'
          });
          if (textElement) gsap.to(textElement, { opacity: 0, overwrite: 'auto' });
        }
      }
    };

    window.addEventListener('mousemove', moveFollower);
    window.addEventListener('mouseover', handleHover);

    return () => {
      window.removeEventListener('mousemove', moveFollower);
      window.removeEventListener('mouseover', handleHover);
    };
  }, []);

  return (
    <div
      ref={followerRef}
      className="fixed top-0 left-0 w-4 h-4 bg-white rounded-full pointer-events-none z-100 mix-blend-difference hidden md:flex items-center justify-center"
    >
      <span ref={textRef} className="text-black font-bold text-[10px] opacity-0 pointer-events-none absolute font-mono"></span>
    </div>
  );
};

export default MouseFollower;
