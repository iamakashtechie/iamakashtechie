import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X, Globe } from 'lucide-react';
import { gsap } from 'gsap';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef(null);

  const marqueeImage = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop";

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (isOpen) {
        gsap.to('.menu-overlay', {
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
          duration: 0.8,
          ease: 'power4.inOut'
        });

        gsap.fromTo('.menu-divider',
          { scaleX: 0, transformOrigin: 'left' },
          { scaleX: 1, duration: 0.8, ease: 'power3.out', delay: 0.2, stagger: 0.1 }
        );

        gsap.fromTo('.menu-content-static',
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, delay: 0.4, ease: 'power3.out' }
        );

        gsap.fromTo('.menu-footer-item',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5, delay: 0.8, stagger: 0.05 }
        );

      } else {
        gsap.to('.menu-overlay', {
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
          duration: 0.8,
          ease: 'power4.inOut'
        });
      }
    }, menuRef);

    return () => ctx.revert();
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const links = [
    { name: 'Work', path: '/works', external: false },
    { name: 'About', path: '/about', external: false },
    { name: 'Contact', path: 'mailto:iamakashtechie@gmail.com', external: true },
    { name: 'Blog', path: '/blog', external: false },
  ];

  const socialLinks = [
    { name: 'LinkedIn', url: 'https://linkedin.com/in/iamakashtechie' },
    { name: 'Github', url: 'https://github.com/iamakashtechie' },
    { name: 'Instagram', url: 'https://instagram.com/iamakashtechie' },
    { name: 'Resume', url: '#' },
  ];

  return (
    <div ref={menuRef}>
      <nav className="fixed top-0 left-0 w-full px-6 md:px-12 py-6 md:py-8 flex justify-between items-center z-[60] mix-blend-difference text-white pointer-events-none">
        <Link to="/" className="text-xl font-bold tracking-tight uppercase font-gothic pointer-events-auto">
          Akash.
        </Link>

        <button
          onClick={toggleMenu}
          className="focus:outline-none group flex flex-col justify-center items-end gap-1.5 w-12 h-12 p-2 pointer-events-auto"
        >
          {isOpen ? (
            <X size={32} strokeWidth={1} />
          ) : (
            <>
              <span className="w-8 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
              <span className="w-6 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </>
          )}
        </button>
      </nav>

      <div
        className="menu-overlay fixed inset-0 bg-brand-dark z-50 flex flex-col overflow-hidden"
        style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)' }}
      >

        <div className="h-24 md:h-32 flex-shrink-0"></div>

        <div className="flex-1 flex flex-col w-full relative">
          <div className="menu-divider w-full h-[1px] bg-white/20"></div>

          {links.map((link) => (
            <div key={link.name} className="flex-1 w-full relative flex flex-col">

              {link.external ? (
                <a
                  href={link.path}
                  onClick={toggleMenu}
                  className="flex-1 w-full flex items-center justify-center relative overflow-hidden group transition-colors duration-300 hover:bg-brand-accent"
                >
                  <div className="menu-content-static z-10 text-center absolute inset-0 flex items-center justify-center transition-opacity duration-75 group-hover:opacity-0 md:group-hover:opacity-0 opacity-100 pointer-events-none">
                    <span className="text-5xl md:text-7xl lg:text-8xl font-gothic font-bold uppercase tracking-tighter text-white">
                      {link.name}
                    </span>
                  </div>

                  <div className="absolute inset-0 items-center overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:flex">
                    <div className="flex animate-marquee whitespace-nowrap items-center shrink-0 min-w-full pl-0">
                      {[1, 2, 3, 4].map((i) => (
                        <React.Fragment key={i}>
                          <span className="text-5xl md:text-7xl lg:text-8xl font-gothic font-bold uppercase tracking-tighter text-black mx-12 md:mx-24">
                            {link.name}
                          </span>
                          <div className="w-24 h-12 md:w-48 md:h-20 rounded-full overflow-hidden bg-black mx-4 md:mx-8 inline-block align-middle">
                            <img src={marqueeImage} alt="" className="w-full h-full object-cover opacity-80" />
                          </div>
                        </React.Fragment>
                      ))}
                    </div>
                    <div className="flex animate-marquee whitespace-nowrap items-center shrink-0 min-w-full pl-0">
                      {[1, 2, 3, 4].map((i) => (
                        <React.Fragment key={`dup-${i}`}>
                          <span className="text-5xl md:text-7xl lg:text-8xl font-gothic font-bold uppercase tracking-tighter text-black mx-12 md:mx-24">
                            {link.name}
                          </span>
                          <div className="w-24 h-12 md:w-48 md:h-20 rounded-full overflow-hidden bg-black mx-4 md:mx-8 inline-block align-middle">
                            <img src={marqueeImage} alt="" className="w-full h-full object-cover opacity-80" />
                          </div>
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </a>
              ) : (
                <Link
                  to={link.path}
                  onClick={toggleMenu}
                  className="flex-1 w-full flex items-center justify-center relative overflow-hidden group transition-colors duration-300 hover:bg-brand-accent"
                >

                <div className="menu-content-static z-10 text-center absolute inset-0 flex items-center justify-center transition-opacity duration-75 group-hover:opacity-0 md:group-hover:opacity-0 opacity-100 pointer-events-none">
                  <span className="text-5xl md:text-7xl lg:text-8xl font-gothic font-bold uppercase tracking-tighter text-white">
                    {link.name}
                  </span>
                </div>

                <div className="absolute inset-0 items-center overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:flex">
                  <div className="flex animate-marquee whitespace-nowrap items-center shrink-0 min-w-full pl-0">
                    {[1, 2, 3, 4].map((i) => (
                      <React.Fragment key={i}>
                        <span className="text-5xl md:text-7xl lg:text-8xl font-gothic font-bold uppercase tracking-tighter text-black mx-12 md:mx-24">
                          {link.name}
                        </span>
                        <div className="w-24 h-12 md:w-48 md:h-20 rounded-full overflow-hidden bg-black mx-4 md:mx-8 inline-block align-middle transform rotate-0">
                          <img src={marqueeImage} alt="" className="w-full h-full object-cover opacity-80" />
                        </div>
                      </React.Fragment>
                    ))}
                  </div>
                  <div className="flex animate-marquee whitespace-nowrap items-center shrink-0 min-w-full pl-0">
                    {[1, 2, 3, 4].map((i) => (
                      <React.Fragment key={`dup-${i}`}>
                        <span className="text-5xl md:text-7xl lg:text-8xl font-gothic font-bold uppercase tracking-tighter text-black mx-12 md:mx-24">
                          {link.name}
                        </span>
                        <div className="w-24 h-12 md:w-48 md:h-20 rounded-full overflow-hidden bg-black mx-4 md:mx-8 inline-block align-middle transform rotate-0">
                          <img src={marqueeImage} alt="" className="w-full h-full object-cover opacity-80" />
                        </div>
                      </React.Fragment>
                    ))}
                  </div>
                </div>

              </Link>
              )}

              <div className="menu-divider w-full h-px bg-white/20 absolute bottom-0 left-0 z-20 pointer-events-none"></div>
            </div>
          ))}
        </div>

        <div className="h-20 md:h-24 px-6 md:px-12 flex items-center justify-between text-white/50 font-mono text-xs uppercase tracking-widest bg-brand-dark z-10 border-t border-white/10">
          <div className="flex items-center gap-2 menu-footer-item">
            <Globe size={14} />
            <span>Based in Kolkata</span>
          </div>

          <div className="flex gap-6 menu-footer-item">
            {socialLinks.map((social) => (
              <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="group relative inline-block text-white transition-colors duration-300">
                <span className="relative z-10">{social.name}</span>
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-brand-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
