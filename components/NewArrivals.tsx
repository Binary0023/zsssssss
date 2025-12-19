import React from 'react';
import { NEW_ARRIVALS } from '../constants';
import ProductCard from './ProductCard';

const NewArrivals: React.FC = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10">
          <div>
            <h2 className="font-heading text-2xl md:text-3xl font-light text-clomana-dark mb-2">New Arrivals</h2>
            <p className="text-gray-500 font-light">Explore our latest beauty innovations.</p>
          </div>
          <a href="/collections/new-in" className="hidden md:inline-block text-sm font-medium text-clomana-dark hover:text-clomana-gold transition-colors underline underline-offset-4">
            View All Products
          </a>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {NEW_ARRIVALS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <a href="/collections/new-in" className="inline-block px-8 py-3 bg-white border border-clomana-dark text-clomana-dark text-sm font-medium hover:bg-clomana-dark hover:text-white transition-colors">
            View All Products
          </a>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
