import React from 'react';
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1f1919] text-white pt-20 pb-10 font-light">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20 border-b border-gray-800 pb-12">
          
          {/* Brand Column */}
          <div className="md:col-span-4">
            <img 
               src="//clomana.com/cdn/shop/files/CLOMANA_RGB_White.png?v=1707475662&width=160" 
               alt="CLOMANÁ" 
               className="h-8 mb-8"
            />
            <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-sm">
              Premium makeup brand created in the Lake District by makeup artist, Chloe Walsh. Bringing you the famous Marshmallow Sponge and more.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-clomana-gold transition-colors transform hover:-translate-y-1 duration-300"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-clomana-gold transition-colors transform hover:-translate-y-1 duration-300"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-clomana-gold transition-colors transform hover:-translate-y-1 duration-300"><Twitter className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Links Column 1 */}
          <div className="md:col-span-2">
            <h4 className="font-heading text-sm font-bold uppercase tracking-widest mb-6 text-white">Shop</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-clomana-gold transition-colors">New In</a></li>
              <li><a href="#" className="hover:text-clomana-gold transition-colors">Bestsellers</a></li>
              <li><a href="#" className="hover:text-clomana-gold transition-colors">Gift Sets</a></li>
              <li><a href="#" className="hover:text-clomana-gold transition-colors">Brushes & Tools</a></li>
              <li><a href="#" className="hover:text-clomana-gold transition-colors">Mystery Boxes</a></li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div className="md:col-span-2">
            <h4 className="font-heading text-sm font-bold uppercase tracking-widest mb-6 text-white">Help</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-clomana-gold transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-clomana-gold transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-clomana-gold transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-clomana-gold transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-clomana-gold transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="md:col-span-4">
            <h4 className="font-heading text-sm font-bold uppercase tracking-widest mb-6 text-white">Stay Connected</h4>
            <p className="text-gray-400 text-sm mb-6">
              Subscribe to receive updates, access to exclusive deals, and more.
            </p>
            <form className="flex flex-col space-y-3">
              <div className="relative">
                 <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full bg-white/5 border border-white/10 px-4 py-3.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-clomana-gold transition-colors"
                />
              </div>
              <button className="w-full bg-white text-clomana-dark px-4 py-3.5 text-xs font-bold uppercase tracking-widest hover:bg-clomana-gold hover:text-white transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; 2025 Clomaná Beauty. All rights reserved.</p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
             <span className="hover:text-gray-300 cursor-default">Amex</span>
             <span className="hover:text-gray-300 cursor-default">Apple Pay</span>
             <span className="hover:text-gray-300 cursor-default">Mastercard</span>
             <span className="hover:text-gray-300 cursor-default">Visa</span>
             <span className="hover:text-gray-300 cursor-default">PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
