import React from 'react';
import { STORIES } from '../constants';
import { ArrowRight, PlayCircle } from 'lucide-react';

const Stories: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-light text-clomana-dark mb-3">Stories</h2>
              <p className="text-gray-500 font-light text-lg">Read, watch and be inspired...</p>
            </div>
            <a href="#" className="hidden md:flex items-center text-sm font-bold text-clomana-dark hover:text-clomana-gold transition-colors uppercase tracking-widest group">
              View All <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
          {STORIES.map((story, index) => (
            <article key={story.id} className="group cursor-pointer flex flex-col h-full">
              <div className="relative overflow-hidden mb-6 aspect-[4/3] bg-gray-100">
                <img 
                  src={story.image} 
                  alt={story.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500"></div>
                
                {index === 1 && (
                     <div className="absolute inset-0 flex items-center justify-center">
                        <PlayCircle className="w-16 h-16 text-white opacity-90 drop-shadow-md group-hover:scale-110 transition-transform" />
                     </div>
                )}
              </div>
              
              <div className="flex flex-col flex-1 items-start">
                  <span className="text-[11px] font-bold text-clomana-gold uppercase tracking-[0.2em] mb-3">
                    {index === 0 ? 'Tips & Tricks' : index === 1 ? 'Tutorial' : 'Behind the Brand'}
                  </span>
                  <h3 className="font-heading text-xl font-medium text-clomana-dark mb-3 group-hover:text-clomana-gold transition-colors leading-tight">
                    {story.title}
                  </h3>
                  <p className="text-gray-500 font-light mb-6 text-sm leading-relaxed line-clamp-2">
                      {story.subtitle}. Expert advice and inspiration for your beauty routine.
                  </p>
                  <div className="mt-auto">
                    <span className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-clomana-dark border-b border-gray-200 pb-0.5 group-hover:border-clomana-gold group-hover:text-clomana-gold transition-colors">
                        {story.linkText}
                    </span>
                  </div>
              </div>
            </article>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
            <a href="#" className="inline-block px-8 py-3 border border-clomana-dark text-clomana-dark text-sm font-bold uppercase tracking-widest hover:bg-clomana-dark hover:text-white transition-all duration-300">
              View All Stories
            </a>
        </div>
      </div>
    </section>
  );
};

export default Stories;
