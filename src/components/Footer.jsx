import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const sitemap = [
    { name: 'Home', path: '/' },
    { name: 'Work', path: '/works' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
  ];

  const socialLinks = [
    { name: 'LinkedIn', url: 'https://linkedin.com/in/iamakashtechie' },
    { name: 'Github', url: 'https://github.com/iamakashtechie' },
    { name: 'Instagram', url: 'https://instagram.com/iamakashtechie' },
    { name: 'Resume', url: 'https://drive.google.com/file/d/11_wRHS9bpGa2SJ3n9GIDY3AIbfF7EI8j/view' },
  ];

  return (
    <footer id='footer' className="relative w-full h-screen bg-brand-dark text-brand-light px-6 md:px-12 pb-8 pt-20 overflow-hidden border-t border-brand-light/10 flex flex-col justify-between">

      <div className="grow flex items-center justify-center">
        <h1 className="font-gothic font-bold text-[15vw] leading-none tracking-tighter text-brand-light select-none text-center opacity-[0.1]">
          LET'S TALK
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pb-10 max-w-450 mx-auto w-full z-10">

        <div className="md:col-span-6 flex flex-col justify-end">
          <div className="max-w-md">
            <h3 className="text-sm md:text-base font-medium uppercase leading-relaxed mb-6 text-brand-light/60 font-sans">
              Got a question, proposal, project, or want to work together on something?
            </h3>

            <a href="mailto:akash.techie01@gmail.com" className="group relative inline-block cursor-pointer border-b-2 border-brand-accent overflow-hidden transition-all duration-300">
              <span className="relative z-10 text-sm md:text-base font-gothic uppercase tracking-wider text-brand-light group-hover:text-black transition-colors duration-300">
                akash.techie01@gmail.com
              </span>
              <div className="absolute inset-0 bg-brand-accent transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out z-0"></div>
            </a>
          </div>
        </div>

        <div className="md:col-span-6 flex justify-between md:flex-row gap-8 md:gap-24 md:justify-end items-start md:items-end mt-8 md:mt-0">

          <div className="flex flex-col gap-2 text-left">
            <h4 className="text-brand-light/40 uppercase tracking-widest text-xs font-semibold mb-2 font-mono">Sitemap</h4>
            {sitemap.map((link) => (
              <Link key={link.name} to={link.path} className="group relative inline-block w-fit overflow-hidden border-b-2 border-transparent hover:border-brand-accent transition-all duration-300">
                <span className="relative z-10 text-base font-sans text-brand-light/80 group-hover:text-black transition-colors duration-300">{link.name}</span>
                <div className="absolute inset-0 bg-brand-accent transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out z-0"></div>
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-2 text-left">
            <h4 className="text-brand-light/40 uppercase tracking-widest text-xs font-semibold mb-2 font-mono">Socials</h4>
            {socialLinks.map((link) => (
              <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="group relative inline-block w-fit overflow-hidden border-b-2 border-transparent hover:border-brand-accent transition-all duration-300">
                <span className="relative z-10 text-base font-sans text-brand-light/80 group-hover:text-black transition-colors duration-300">{link.name}</span>
                <div className="absolute inset-0 bg-brand-accent transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out z-0"></div>
              </a>
            ))}
          </div>

        </div>
      </div>

      <div className="w-full max-w-450 mx-auto z-10">
        <div className="w-full h-px bg-brand-light/10 mb-6"></div>
        <p className="text-xs text-brand-light/50 uppercase tracking-wider font-mono text-center">
          Copyright © 2026 iamakashtechie, All Rights Reserved.
        </p>
      </div>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-15 right-5 z-50 w-12 h-12 bg-brand-accent text-white flex items-center justify-center hover:bg-brand-primary transition-all duration-300 shadow-lg hover:scale-110 border border-brand-accent/20"
      >
        <ArrowUp size={20} />
      </button>

    </footer>
  );
};

export default Footer;
