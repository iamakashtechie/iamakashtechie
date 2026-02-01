import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FeaturedWork = () => {
  const workRefs = useRef([]);

  const works = [
    { 
      title: "Kriti", 
      tag: "Cultural Fest Website", 
      year: "2024", 
      img: "/works/kriti.png",
      description: "Developed the landing page of Kriti with our team.",
      tech: "React, HTML, CSS",
      url: "https://github.com/DugarRishab/kriti"
    },
    { 
      title: "JanVaani", 
      tag: "Civic Tech Platform", 
      year: "2024", 
      img: "/works/jan-vaani.png",
      description: "JanVaani facilitates collaborative problem-solving for civic issues by bridging the communication gap between residents and local government.",
      tech: "React, Node.js, Express.js, Firebase",
      url: "https://janvaani.vercel.app/login"
    },
    { 
      title: "NidhiRakshak", 
      tag: "Banking Security App", 
      year: "2024", 
      img: "/works/nidhi-rakshak.png",
      description: "A Flutter-based banking security app ensuring RBI/NPCI compliance through device and app risk analysis.",
      tech: "Flutter",
      url: "https://github.com/Light-700/Nidhi-Rakshak"
    },
    { 
      title: "Portfolio Website", 
      tag: "Personal Portfolio", 
      year: "2023", 
      img: "/works/portfolio-website.png",
      description: "Minimal themed website.",
      tech: "HTML, CSS, JS",
      url: "https://iamakashtechie.vercel.app/"
    }
  ];

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    
    if (isMobile) {
      workRefs.current.forEach((work) => {
        if (!work) return;

        ScrollTrigger.create({
          trigger: work,
          start: 'top 80%',
          end: 'top 10%',
          onEnter: () => work.classList.add('active'),
          onLeave: () => work.classList.remove('active'),
          onEnterBack: () => work.classList.add('active'),
          onLeaveBack: () => work.classList.remove('active'),
        });
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section id="works" className="bg-brand-dark relative z-10 w-full reveal-section border-b border-white/10">
      <div className="max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-12">
        <div className="md:col-span-3 p-6 md:p-10 border-r border-white/10 flex items-start">
          <div className="text-xs font-mono text-gray-500 uppercase tracking-widest sticky top-32">
            ( 03 — My Works )
          </div>
        </div>

        <div className="md:col-span-9">
          <div className="flex flex-col">
            {works.map((work, index) => (
              <a
                href={work.url}
                target="_blank"
                rel="noreferrer"
                key={index}
                ref={(el) => (workRefs.current[index] = el)}
                className="work-item group border-b hover:bg-brand-dark-2 border-white/10 last:border-b-0 p-6 md:p-16 flex flex-col md:flex-row items-center gap-10 transition-colors duration-500 relative overflow-hidden"
              >
                <div className="w-full md:w-auto text-xs font-mono text-gray-500 uppercase tracking-widest md:absolute md:top-16 md:left-10">
                  {work.year} — 0{index + 1}
                </div>

                <div className="work-image w-full md:w-[240px] h-[140px] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                  <img src={work.img} alt={work.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                </div>

                <div className="flex-1 text-center md:text-left z-10">
                  <h3 className="work-title text-4xl md:text-6xl font-gothic text-white group-hover:text-brand-accent transition-colors duration-300 uppercase">{work.title}</h3>
                  <p className="font-mono text-xs text-gray-500 mt-2 uppercase tracking-wide">{work.tag}</p>
                </div>

                <div className="md:ml-auto z-10">
                  <div className="group relative overflow-hidden inline-block border-b-2 border-transparent hover:border-brand-accent transition-all duration-300">
                    <span className="relative z-10 text-sm font-mono uppercase tracking-widest text-gray-400 group-hover:text-black transition-colors duration-300">View Case</span>
                    <div className="absolute inset-0 bg-brand-accent transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out z-0"></div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
