
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
    { name: 'Extractor', href: '/extractor' }
  ];

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-xl shadow-luxury border-b border-platinum-200/50' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className={`text-2xl font-bold font-playfair transition-all duration-500 ${
              isScrolled ? 'text-ocean-900' : 'text-white'
            }`}>
              <span className="relative">
                BluTouch
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-ocean rounded-full"></span>
              </span>
              <span className="ml-2 font-light">Pools</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-center space-x-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group ${
                    isScrolled 
                      ? 'text-ocean-900 hover:text-ocean-600 hover:bg-ocean-50' 
                      : 'text-white hover:text-ocean-300 hover:bg-white/10'
                  }`}
                >
                  {item.name}
                  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-ocean-400 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Button */}
          <div className="hidden lg:block">
            <Button 
              className="btn-premium bg-gradient-ocean hover:shadow-glow text-white font-medium px-6 py-2.5 rounded-xl transition-all duration-300 hover:scale-105 shadow-corporate"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-xl transition-all duration-300 ${
                isScrolled 
                  ? 'text-ocean-900 hover:bg-ocean-50' 
                  : 'text-white hover:bg-white/10'
              }`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 glass-morphism rounded-2xl mt-2 shadow-luxury border border-white/20">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 text-ocean-900 hover:text-ocean-600 hover:bg-ocean-50 transition-all duration-300 rounded-xl font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button className="w-full mt-4 btn-premium bg-gradient-ocean hover:shadow-glow text-white rounded-xl py-3">
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
