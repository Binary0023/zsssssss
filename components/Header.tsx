import React, { useState, useEffect } from 'react';
import { Menu, Search, User, ShoppingBag, X, ChevronRight } from 'lucide-react';
import { NAV_LINKS } from '../constants';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm py-2' : 'bg-clomana-bg py-4'
        } border-b border-gray-100`}
      >
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 flex items-center justify-between">
          
          {/* Mobile: Hamburger Menu */}
          <div className="flex lg:hidden flex-1 justify-start">
            <button 
              onClick={() => setIsMenuOpen(true)}
              className="p-2 hover:bg-black/5 rounded-full transition-colors"
              aria-label="Menu"
            >
              <Menu className="w-6 h-6 text-clomana-dark" />
            </button>
          </div>

          {/* Desktop: Navigation Left */}
          <nav className="hidden lg:flex flex-1 justify-start items-center space-x-6">
            {NAV_LINKS.slice(0, 4).map((link) => (
              <a 
                key={link} 
                href="#" 
                className="text-sm font-medium text-clomana-dark hover:text-clomana-gold transition-colors uppercase tracking-wide font-sans"
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Center: Logo */}
          <div className="flex-0 flex justify-center">
            <a href="/" className="block">
              <img 
                src="//clomana.com/cdn/shop/files/CLOMANA_RGB_Black.png?v=1707475662&width=160" 
                alt="CLOMANÁ" 
                className="h-8 md:h-10 w-auto object-contain transition-all duration-300"
              />
            </a>
          </div>

           {/* Desktop: Navigation Right (Remaining links) */}
           <nav className="hidden lg:flex flex-1 justify-end items-center space-x-6 mr-6">
            {NAV_LINKS.slice(4).map((link) => (
              <a 
                key={link} 
                href="#" 
                className="text-sm font-medium text-clomana-dark hover:text-clomana-gold transition-colors uppercase tracking-wide font-sans"
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Icons */}
          <div className="flex-1 lg:flex-0 flex justify-end items-center space-x-2 md:space-x-4">
            <button className="p-2 hover:bg-black/5 rounded-full transition-colors hidden md:block">
              <Search className="w-5 h-5 text-clomana-dark" />
            </button>
            <button className="p-2 hover:bg-black/5 rounded-full transition-colors hidden md:block">
              <User className="w-5 h-5 text-clomana-dark" />
            </button>
            <button className="p-2 hover:bg-black/5 rounded-full transition-colors relative">
              <ShoppingBag className="w-5 h-5 text-clomana-dark" />
              <span className="absolute top-0 right-0 bg-clomana-gold text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full min-w-[16px] text-center">0</span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div 
        className={`fixed inset-0 z-[60] transform transition-transform duration-300 ease-in-out lg:hidden ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="absolute inset-0 bg-black/20" onClick={() => setIsMenuOpen(false)} />
        <div className="relative w-[300px] h-full bg-white shadow-xl flex flex-col">
          <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-clomana-bg">
            <span className="font-heading font-semibold text-lg tracking-widest uppercase">Menu</span>
            <button onClick={() => setIsMenuOpen(false)} className="p-2 hover:bg-gray-200 rounded-full transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>
          <nav className="flex-1 overflow-y-auto py-4">
            <ul className="space-y-1">
              {NAV_LINKS.map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="flex items-center justify-between px-6 py-4 text-clomana-dark hover:bg-clomana-bg transition-colors font-medium border-b border-gray-50"
                  >
                    {link}
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="p-6 bg-clomana-bg border-t border-gray-100">
             <a href="/account" className="flex items-center space-x-3 text-sm font-medium text-clomana-dark mb-4 hover:text-clomana-gold transition-colors">
               <User className="w-5 h-5" />
               <span>Log In / Register</span>
             </a>
             <div className="text-xs text-gray-500 mt-4">
               &copy; 2025 Clomaná Beauty
             </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
