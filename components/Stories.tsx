import React from 'react';
import { STORIES } from '../constants';
import { ArrowRight, PlayCircle } from 'lucide-react';

const Stories: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-light text-clomana-dark mb-4">Stories</h2>
            <p className="text-gray-500 font-light text-lg">Read, watch and be inspired...</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {STORIES.map((story, index) => (
            <article key={story.id} className="group cursor-pointer flex flex-col h-full">
              <div className="relative overflow-hidden mb-6 aspect-[4/3]">
                <img 
                  src={story.image} 
                  alt={story.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay for visual interest */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
                
                {/* Optional Play Icon for video content implies interactivity */}
                {index === 1 && (
                     <div className="absolute inset-0 flex items-center justify-center">
                        <PlayCircle className="w-12 h-12 text-white opacity-80" />
                     </div>
                )}
              </div>
              
              <div className="flex flex-col flex-1 items-start">
                  <span className="text-xs font-bold text-clomana-gold uppercase tracking-widest mb-3">
                    {index === 0 ? 'Tips & Tricks' : index === 1 ? 'Video' : 'Behind the Brand'}
                  </span>
                  <h3 className="font-heading text-xl font-medium text-clomana-dark mb-3 group-hover:text-clomana-gold transition-colors leading-snug">
                    {story.title}
                  </h3>
                  <p className="text-gray-500 font-light mb-6 text-sm leading-relaxed line-clamp-3">
                      {story.subtitle}. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
                  </p>
                  <div className="mt-auto pt-4 border-t border-gray-100 w-full">
                    <span className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-clomana-dark group-hover:text-clomana-gold transition-colors">
                        {story.linkText} <ArrowRight className="w-3 h-3 ml-2" />
                    </span>
                  </div>
              </div>
            </article>
          ))}
        </div>
        
        <div className="mt-16 text-center">
            <a href="#" className="inline-block px-10 py-3 border border-clomana-dark text-clomana-dark text-sm font-bold uppercase tracking-widest hover:bg-clomana-dark hover:text-white transition-all duration-300">
              View All Stories
            </a>
        </div>
      </div>
    </section>
  );
};

export default Stories;
