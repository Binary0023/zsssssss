import React from 'react';
import { HERO_IMAGE_DESKTOP, HERO_IMAGE_MOBILE } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative aspect-[4/5] md:aspect-[21/9] w-full bg-gray-200">
        <picture>
          <source media="(min-width: 768px)" srcSet={HERO_IMAGE_DESKTOP} />
          <img 
            src={HERO_IMAGE_MOBILE} 
            alt="Clomana Christmas Collection" 
            className="w-full h-full object-cover"
          />
        </picture>
        {/* Minimal overlay if needed, sticking to instructions "dont write any text on header image" means NO text overlay on the image itself */}
      </div>
    </section>
  );
};

export default Hero;
