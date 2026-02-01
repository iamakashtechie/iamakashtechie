import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const cursorTextRef = useRef(null);
  const xTo = useRef();
  const yTo = useRef();
  const [isMobile, setIsMobile] = useState(false);
  const lastMousePos = useRef({ x: 0, y: 0 });
  const isHovering = useRef(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useGSAP(() => {
    if (isMobile) return;

    const cursor = cursorRef.current;
    
    // Reduced duration for snappier tracking
    xTo.current = gsap.quickTo(cursor, 'x', { duration: 0.04, ease: 'power3.out' });
    yTo.current = gsap.quickTo(cursor, 'y', { duration: 0.04, ease: 'power3.out' });

    gsap.set(cursor, { 
      xPercent: -50, 
      yPercent: -50, 
      scale: 0, 
      opacity: 0 
    });

    const onFirstMove = () => {
      gsap.to(cursor, { scale: 1, opacity: 1, duration: 0.5 });
      window.removeEventListener('mousemove', onFirstMove);
    };
    window.addEventListener('mousemove', onFirstMove);

    const moveCursor = (e) => {
      const { clientX, clientY } = e;
      
      const deltaX = clientX - lastMousePos.current.x;
      const deltaY = clientY - lastMousePos.current.y;
      lastMousePos.current = { x: clientX, y: clientY };

      xTo.current(clientX);
      yTo.current(clientY);

      // Update hover state based on element under the real pointer immediately
      updateHoverAt(clientX, clientY);

      if (!isHovering.current) {
        const velocity = Math.sqrt(deltaX**2 + deltaY**2);
        const stretch = Math.min(velocity * 0.002, 0.15);
        
        if (velocity > 0.5) {
          const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
          gsap.to(cursor, {
            rotation: angle,
            scaleX: 1 + stretch,
            scaleY: 1 - stretch * 0.4,
            duration: 0.1,
            overwrite: 'auto'
          });
        } else {
          gsap.to(cursor, {
            scaleX: 1,
            scaleY: 1,
            duration: 0.2,
            overwrite: 'auto'
          });
        }
      }
    };

    const handleMouseDown = () => {
      gsap.to(cursor, { scale: 0.8, duration: 0.1 });
    };
    
    const handleMouseUp = () => {
      gsap.to(cursor, { scale: 1, duration: 0.2 });
    };

    // determine and apply hover styles for element under point
    const updateHoverAt = (x, y) => {
      try {
        const el = document.elementFromPoint(x, y);
        if (!el) return;

        const target = el.nodeType === 3 ? el.parentElement : el;

        const isLink = (target && target.tagName === 'A') ||
                       (target && target.tagName === 'BUTTON') ||
                       (target && typeof target.closest === 'function' && (target.closest('a') || target.closest('button'))) ||
                       (target && target.classList && target.classList.contains('cursor-pointer'));

        const customLabel = target && target.getAttribute ? target.getAttribute('data-cursor') : null;

        if (customLabel) {
          isHovering.current = true;
          gsap.to(cursor, {
            rotation: 0,
            scaleX: 1,
            scaleY: 1,
            width: 80,
            height: 80,
            backgroundColor: '#ffffff',
            mixBlendMode: 'exclusion',
            duration: 0.18,
            ease: 'power2.out'
          });
          if (cursorTextRef.current) {
            cursorTextRef.current.textContent = customLabel;
            gsap.to(cursorTextRef.current, { opacity: 1, scale: 1, duration: 0.18 });
          }
        } else if (isLink) {
          isHovering.current = true;
          gsap.to(cursor, {
            rotation: 0,
            scaleX: 1,
            scaleY: 1,
            width: 48,
            height: 48,
            backgroundColor: '#ffffff',
            mixBlendMode: 'exclusion',
            duration: 0.18,
            ease: 'back.out(1.7)'
          });
          if (cursorTextRef.current) {
            gsap.to(cursorTextRef.current, { opacity: 0, scale: 0, duration: 0.12 });
          }
        } else {
          if (isHovering.current) {
            isHovering.current = false;
          }
          gsap.to(cursor, {
            width: 12,
            height: 12,
            backgroundColor: '#ffffff',
            mixBlendMode: 'exclusion',
            duration: 0.18
          });
          if (cursorTextRef.current) {
            gsap.to(cursorTextRef.current, { opacity: 0, scale: 0, duration: 0.12 });
          }
        }
      } catch (err) {
        // safe guard: ignore errors from elementFromPoint in some environments
      }
    };

    const handleMouseOver = (e) => {
      // keep support for original mouseover events but delegate to updateHoverAt
      const { clientX, clientY } = e;
      updateHoverAt(clientX, clientY);
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousemove', onFirstMove);
    };
  }, { scope: cursorRef, dependencies: [isMobile] });

  if (isMobile) return null;

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] flex items-center justify-center bg-white mix-blend-exclusion"
      style={{ width: '12px', height: '12px' }}
    >
      <span 
        ref={cursorTextRef} 
        className="text-[10px] font-bold text-black uppercase tracking-widest opacity-0 transform scale-0"
      ></span>
    </div>
  );
};

export default CustomCursor;
