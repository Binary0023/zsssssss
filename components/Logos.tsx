import React from 'react';
import { LOGOS } from '../constants';

const Logos: React.FC = () => {
  return (
    <section className="py-20 bg-clomana-bg border-t border-gray-200">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <p className="text-center text-xs font-bold text-gray-400 uppercase tracking-[0.3em] mb-12">Proudly Stocked At</p>
        
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
          {LOGOS.map((logo) => (
            <div key={logo.id} className="group w-32 md:w-40 flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-500">
              <img 
                src={logo.src} 
                alt={logo.name} 
                className="max-w-full h-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-500 mix-blend-multiply"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Logos;
