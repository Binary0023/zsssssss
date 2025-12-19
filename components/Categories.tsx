import React, { useState } from 'react';
import { CATEGORIES, CATEGORY_PRODUCTS } from '../constants';
import ProductCard from './ProductCard';
import { ChevronRight } from 'lucide-react';

const Categories: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0].id);

  return (
    <section className="py-12 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        
        {/* Section Header & Tabs */}
        <div className="text-center mb-12">
            <h2 className="font-heading text-2xl md:text-3xl font-light text-clomana-dark mb-8 tracking-widest uppercase">Shop All New & Exclusive</h2>
            
            {/* Tabs / Pills */}
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {CATEGORIES.map((cat) => (
                <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`
                    px-6 md:px-8 py-2.5 text-sm font-medium uppercase tracking-wider transition-all duration-300 rounded-full border
                    ${activeCategory === cat.id
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

        {/* Product Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
          {CATEGORY_PRODUCTS[activeCategory]?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All Link */}
        <div className="mt-12 text-center">
            <a href={`/collections/${activeCategory}`} className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-clomana-dark hover:text-clomana-gold transition-colors border-b border-clomana-dark pb-1 hover:border-clomana-gold">
                View All {CATEGORIES.find(c => c.id === activeCategory)?.name} <ChevronRight className="w-4 h-4 ml-2" />
            </a>
        </div>

      </div>
    </section>
  );
};

export default Categories;
