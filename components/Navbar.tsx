import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'خانه', href: '#home' },
  { label: 'درباره من', href: '#about' },
  { label: 'مهارت‌ها', href: '#skills' },
  { label: 'نمونه کارها', href: '#portfolio' },
  { label: 'تماس', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-earth-cream/90 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="text-2xl font-bold text-earth-dark tracking-tighter">
          مهران <span className="text-earth-rust">مصباح‌زاده</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-earth-dark hover:text-earth-rust font-medium transition-colors relative group"
            >
              {item.label}
              <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-earth-rust transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-earth-dark hover:text-earth-rust"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu */}
        <div 
          className={`fixed inset-0 bg-earth-dark/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-300 ease-in-out md:hidden ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{ top: 0, right: 0, bottom: 0, left: 0 }}
        >
            <button 
                className="absolute top-6 left-6 text-earth-cream"
                onClick={() => setIsOpen(false)}
            >
                <X size={32} />
            </button>
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-2xl text-earth-cream hover:text-earth-sand font-bold"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;