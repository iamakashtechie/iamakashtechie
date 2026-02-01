import React from 'react';

const UnderConstruction = ({ title = "Under Construction" }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4 bg-brand-dark text-brand-light">
      <div className="z-10 flex flex-col items-center text-center max-w-2xl w-full">
        <h1 className="text-5xl md:text-7xl font-gothic font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-light to-brand-primary/50">
          {title}
        </h1>
        <p className="text-xl text-brand-light/60 font-light tracking-wide">
          This page is currently being built.
        </p>
        <div className="mt-8 h-1 w-24 bg-brand-accent/50 rounded-full"></div>
      </div>
    </div>
  );
};

export default UnderConstruction;
