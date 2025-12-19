import React from 'react';
import { Product } from '../types';
import { ShoppingBag, Star, Heart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group relative flex flex-col h-full bg-white rounded-sm overflow-hidden transition-all duration-300">
      <div className="relative aspect-[3/4] overflow-hidden bg-[#f7f5f4]">
        <img 
          src={product.image} 
          alt={product.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {product.badge && (
          <span className={`absolute top-3 left-3 text-[10px] font-bold px-3 py-1 uppercase tracking-widest ${
            product.badge === 'Sale' ? 'bg-red-600 text-white' : 'bg-white text-clomana-dark'
          }`}>
            {product.badge}
          </span>
        )}
        <button className="absolute top-3 right-3 p-2 rounded-full bg-white/80 text-clomana-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white hover:text-clomana-gold">
            <Heart className="w-4 h-4" />
        </button>

        {/* Quick Add Button */}
        <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
             <button className="w-full bg-white text-clomana-dark font-medium text-xs uppercase tracking-widest py-3 hover:bg-clomana-dark hover:text-white transition-colors shadow-lg flex items-center justify-center gap-2">
                <ShoppingBag className="w-4 h-4" />
                Quick Add
             </button>
        </div>
      </div>
      
      <div className="p-4 flex flex-col flex-1 text-center">
        <div className="flex items-center justify-center gap-0.5 mb-2">
          {[...Array(5)].map((_, i) => (
             <Star 
               key={i} 
               className={`w-3 h-3 ${i < Math.floor(product.rating || 0) ? 'fill-clomana-gold text-clomana-gold' : 'fill-gray-200 text-gray-200'}`} 
             />
          ))}
          <span className="text-[10px] text-gray-400 ml-1 mt-0.5">({product.rating?.toFixed(1)})</span>
        </div>
        
        <h3 className="font-heading text-sm font-medium text-clomana-dark leading-relaxed line-clamp-2 mb-2 group-hover:text-clomana-gold transition-colors">
          {product.title}
        </h3>
        
        <div className="mt-auto flex items-center justify-center gap-3">
           {product.originalPrice && (
             <span className="text-sm text-gray-400 line-through decoration-1">{product.originalPrice}</span>
           )}
           <span className={`font-bold ${product.originalPrice ? 'text-red-600' : 'text-clomana-dark'}`}>
             {product.price}
           </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
