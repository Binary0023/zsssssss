import React from 'react';
import { OFFERS_PRODUCTS } from '../constants';
import { ArrowRight } from 'lucide-react';
import ProductCard from './ProductCard';

const Offers: React.FC = () => {
  return (
    <section className="py-16 bg-[#f7f5f4]">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="text-center mb-10">
             <span className="text-clomana-gold text-xs font-bold uppercase tracking-[0.2em] mb-3 block">Limited Time</span>
             <h2 className="font-heading text-3xl md:text-4xl font-light text-clomana-dark uppercase tracking-widest">Don't Miss These Offers</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Offer Banner - Takes up more space */}
          <div className="lg:col-span-8 relative aspect-[16/10] lg:aspect-auto bg-gray-100 overflow-hidden group">
            <img 
              src="//clomana.com/cdn/shop/files/45.jpg?v=1763463384&width=1200" 
              alt="Cozy Christmas Comfort"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent p-12 flex flex-col justify-center items-start text-white">
              <span className="bg-white text-clomana-dark text-xs font-bold px-3 py-1 uppercase tracking-widest mb-4">Exclusive Deal</span>
              <h3 className="font-heading text-3xl md:text-5xl font-light mb-6 leading-tight">Cozy Christmas<br/>Comfort</h3>
              <p className="max-w-md text-white/90 mb-8 font-light text-lg">Wrap yourself in luxury this holiday season with our limited edition sleepwear collection.</p>
              <button className="bg-clomana-dark text-white px-8 py-3 text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-clomana-dark transition-colors duration-300">
                Shop The Collection
              </button>
            </div>
          </div>

          {/* Secondary Offers Grid - Vertical List */}
          <div className="lg:col-span-4 flex flex-col gap-6 justify-between">
              <div className="bg-white p-6 h-full flex flex-col justify-center items-center text-center border border-gray-100">
                  <h4 className="font-heading text-xl text-clomana-dark mb-2">Bundle & Save</h4>
                  <p className="text-gray-500 text-sm mb-4">Get 20% off when you buy 3 or more sponge sets.</p>
                  <a href="#" className="text-clomana-gold font-bold uppercase text-xs tracking-widest border-b border-clomana-gold pb-1">Shop Bundles</a>
              </div>
              
              <div className="grid grid-cols-2 gap-4 h-full">
                 {OFFERS_PRODUCTS.map((product) => (
                    <div key={product.id} className="h-full">
                        <ProductCard product={product} />
                    </div>
                 ))}
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offers;
