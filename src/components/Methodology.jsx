import React from 'react';

const Methodology = () => {
  const methodologies = [
    { head: "Observe", desc: "Most problems are misunderstood before they're solved. I try not to rush that part." },
    { head: "Design", desc: "If something doesn't make the experience better, it probably shouldn't be there." },
    { head: "Refine", desc: "The first version is rarely right. Iteration is where things actually improve." }
  ];

  return (
    <section id="methodology" className="bg-brand-dark-2 reveal-section border-b border-white/10">
      <div className="max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-12">
        <div className="md:col-span-3 p-6 md:p-10 border-r border-white/10">
          <div className="text-xs font-mono text-brand-accent uppercase tracking-widest sticky top-32">
            ( 04 — How I Work )
          </div>
        </div>

        <div className="md:col-span-9 grid grid-cols-1 md:grid-cols-3">
          {methodologies.map((item, i, arr) => (
            <div 
              key={i} 
              className={`p-10 hover:bg-brand-dark transition-colors duration-500 ${i < arr.length - 1 ? 'md:border-r md:border-white/10' : ''} border-b md:border-b-0 border-white/10 last:border-b-0`}
            >
              <h3 className="text-2xl font-gothic text-white mb-6 uppercase">{item.head}</h3>
              <p className="text-gray-400 text-sm leading-relaxed font-mono">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Methodology;
