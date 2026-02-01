import React, { useLayoutEffect } from 'react';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Tools from '../components/Tools';
import WhatIDo from '../components/WhatIDo';
import FeaturedWork from '../components/FeaturedWork';
import Methodology from '../components/Methodology';
import Explore from '../components/Explore';
import Experience from '../components/Experience';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  useLayoutEffect(() => {
    const sections = document.querySelectorAll('.reveal-section');
    sections.forEach(section => {
      gsap.fromTo(section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div className="w-full">
      <main className="relative z-10 bg-brand-dark mb-[100vh] shadow-2xl">
        <Hero />
        <WhatIDo />
        <Tools />
        <FeaturedWork />
        <Methodology />
        <Explore />
        <Experience />
      </main>

      <div className="fixed bottom-0 left-0 w-full z-0 h-screen flex flex-col justify-end">
        <div className="w-full h-full">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
