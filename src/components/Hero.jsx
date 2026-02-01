import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ArrowRight, MapPin } from 'lucide-react';

const Hero = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.to('.grid-line-hor, .grid-line-ver', {
        scaleX: 1,
        scaleY: 1,
        opacity: 1,
        duration: 1.5,
        stagger: 0.1,
        ease: 'expo.out',
      });

      tl.fromTo(
        '.hero-content',
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.05 },
        '-=1'
      );

      tl.fromTo(
        '.cta-bg',
        { scaleX: 0 },
        { scaleX: 1, duration: 0.8, ease: 'expo.out' },
        '-=0.6'
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative h-dvh w-full bg-brand-dark flex flex-col justify-center items-center py-4 px-4 md:px-10 overflow-hidden"
    >
      {/* Main Grid Container */}
      <div className="relative w-full max-w-[1600px] h-full max-h-[90vh] md:max-h-[800px] grid grid-cols-2 md:grid-cols-12 grid-rows-[auto_1fr_auto] border border-white/10">
        <div className="grid-line-hor absolute top-[60px] md:top-[80px] left-0 w-full h-px bg-white/10 origin-left scale-x-0 opacity-0 z-0" />

        <div className="col-span-1 md:col-span-3 h-[60px] md:h-[80px] p-4 md:p-6 flex items-center border-b md:border-b-0 border-white/10 relative z-10">
          <div className="hero-content flex items-center gap-3">
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <span className="font-gothic text-sm uppercase tracking-widest text-white font-bold">
              Akash
            </span>
          </div>
        </div>

        <div className="col-span-1 md:col-span-3 h-[60px] md:h-[80px] p-6 hidden md:flex items-center justify-start z-10">
        </div>

        <div className="col-span-1 md:col-span-3 h-[80px] hidden md:block z-10"></div>

        <div className="col-span-1 md:col-span-3 h-[60px] md:h-[80px] p-4 md:p-6 flex items-center justify-end relative z-10">
          <div className="hero-content flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="font-mono text-[10px] md:text-xs text-brand-accent uppercase tracking-wider">
              Available
            </span>
          </div>
        </div>

        <div className="col-span-2 md:col-span-12 relative flex items-center justify-center border-t md:border-t-0 border-white/10 bg-brand-dark z-10">
          <div className="w-full px-4 md:px-0 flex flex-col items-start md:items-center justify-center z-10">
            <div className="overflow-hidden w-full text-left md:text-center">
              <h1 className="hero-content text-[11vw] md:text-[5.5vw] font-bold font-sans uppercase leading-[0.9] text-white tracking-tighter mix-blend-exclusion">
                I build things <br />
                <span className="text-gray-400">that focus on</span> <br />
                how they feel.
              </h1>
            </div>
          </div>

          <div
            className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]"
            style={{
              backgroundImage:
                'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          ></div>
          <div
            className="absolute inset-0 z-0 pointer-events-none opacity-[0.05]"
            style={{
              backgroundImage:
                'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")'
            }}
          ></div>
        </div>

        <div className="col-span-2 md:col-span-9 h-auto md:h-[140px] p-6 md:p-8 flex items-center border-t border-white/10 border-r-0 md:border-r z-10">
          <div className="hero-content w-full">
            <p className="text-gray-400 text-sm md:text-base font-light leading-relaxed max-w-md">
              Frontend-focused full-stack developer working with UI, motion, and
              backend systems.
            </p>

            <div className="flex gap-3 text-gray-500 font-mono text-[10px] md:text-xs mt-4 uppercase tracking-wider items-center">
              <span>React</span>
              <span>/</span>
              <span>GSAP</span>
              <span>/</span>
              <span>Node.js</span>
              <span>/</span>
              <span>Figma</span>
            </div>
          </div>
        </div>

        <div
          className="col-span-2 md:col-span-3 h-[80px] md:h-[140px] relative group overflow-hidden cursor-pointer border-t border-white/10 z-10"
          onClick={() =>
            document.getElementById('works')?.scrollIntoView({ behavior: 'smooth' })
          }
        >
          <div className="absolute inset-0 bg-white translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] z-0" />

          <div className="absolute inset-0 flex items-center justify-between px-6 md:px-8 z-10 text-white group-hover:text-black transition-colors duration-300 delay-100">
            <span className="hero-content font-gothic text-lg md:text-2xl font-bold uppercase tracking-wide">
              View Work
            </span>
            <span className="hero-content">
              <ArrowRight className="w-6 h-6 md:w-8 md:h-8 rotate-45 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-300" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
