import React from 'react';
import { CATEGORIES } from '../constants';

const Categories: React.FC = () => {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 text-center">
        <h2 className="font-heading text-2xl md:text-3xl font-light text-clomana-dark mb-8 tracking-widest uppercase">Shop By Category</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {CATEGORIES.map((cat, index) => (
            <button
              key={cat.id}
              className={`
                px-8 py-3 text-sm font-medium uppercase tracking-wider transition-all duration-300 border
                ${index === 0 
                  ? 'bg-clomana-dark text-white border-clomana-dark' 
                  : 'bg-white text-gray-500 border-gray-200 hover:border-clomana-dark hover:text-clomana-dark'
                }
              `}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
