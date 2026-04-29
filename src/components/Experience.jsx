import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: "CodeIIEST",
      role: "Web Developer & UI/UX Designer",
      year: "Feb 2025 — Present",
      desc: [
        "Core team member maintaining the official CodeIIEST club website.",
        "Co-developed the Students' Senate website of IIEST Shibpur as primary frontend contributor.",
        "Contributed to the Kriti 2025 annual cultural fest website.",
        "Co-organised the Figma Summer Design Workshop."
      ]
    },
    {
      title: "GDG on Campus IIEST, Shibpur",
      role: "Web Developer & UI/UX Designer",
      year: "Oct 2024 — Present",
      desc: [
        "Contributed to the GenAI Study Jam Bootcamp website.",
        "Supported developer community events and workshops as part of the extended dev team."
      ]
    }
  ];

  return (
    <section id="experience" className="bg-brand-dark-2 reveal-section border-b border-white/10">
      <div className="max-w-450 mx-auto grid grid-cols-1 md:grid-cols-12">
        <div className="md:col-span-3 p-6 md:p-10 border-r border-white/10">
          <div className="text-xs font-mono uppercase tracking-widest text-brand-accent sticky top-32">( 06 — Experience )</div>
        </div>

        <div className="md:col-span-9">
          {experiences.map((job, j) => (
            <div key={j} className="group flex flex-col p-8 md:p-12 border-b border-white/10 hover:bg-brand-dark transition-colors duration-300 cursor-default">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                <h3 className="text-2xl md:text-3xl font-gothic text-white group-hover:translate-x-4 transition-transform duration-500 mb-2 md:mb-0">{job.title}</h3>
                <div className="flex items-center gap-10 font-mono text-xs uppercase text-gray-500 tracking-wider">
                  <span>{job.role}</span>
                  <span className="text-brand-accent">{job.year}</span>
                </div>
              </div>
              <ul className="flex flex-col gap-2">
                {job.desc.map((point, k) => (
                  <li key={k} className="flex items-start gap-3 text-gray-400 font-mono text-xs leading-relaxed">
                    <span className="text-brand-accent mt-0.5">—</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;