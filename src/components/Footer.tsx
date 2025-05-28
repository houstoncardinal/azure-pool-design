
import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin, Phone, Mail, MapPin, Award, Star } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-ocean-950 via-ocean-900 to-ocean-950 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-ocean-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-ocean-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Enhanced Company Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-playfair font-bold mb-4">
                <span className="text-ocean-gradient">BluTouch</span> Pools
              </h3>
              <p className="text-ocean-200 leading-relaxed mb-6">
                Creating luxury aquatic experiences for over 25 years. Your premier partner 
                for custom pool design and construction excellence.
              </p>
              
              {/* Premium Badges */}
              <div className="flex flex-wrap gap-3 mb-6">
                <div className="flex items-center bg-ocean-800/50 px-3 py-1 rounded-full text-sm">
                  <Award className="w-4 h-4 mr-2 text-yellow-400" />
                  Licensed
                </div>
                <div className="flex items-center bg-ocean-800/50 px-3 py-1 rounded-full text-sm">
                  <Star className="w-4 h-4 mr-2 text-yellow-400" />
                  5-Star Rated
                </div>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <a href="#" className="bg-ocean-800/50 p-3 rounded-2xl hover:bg-ocean-700/50 transition-all duration-300 hover:scale-110 shadow-corporate">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-ocean-800/50 p-3 rounded-2xl hover:bg-ocean-700/50 transition-all duration-300 hover:scale-110 shadow-corporate">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-ocean-800/50 p-3 rounded-2xl hover:bg-ocean-700/50 transition-all duration-300 hover:scale-110 shadow-corporate">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-ocean-800/50 p-3 rounded-2xl hover:bg-ocean-700/50 transition-all duration-300 hover:scale-110 shadow-corporate">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-semibold mb-8 font-playfair">Premium Services</h4>
            <ul className="space-y-4 text-ocean-200">
              <li><a href="#" className="hover:text-white transition-colors duration-300 flex items-center group">
                <span className="w-2 h-2 bg-ocean-400 rounded-full mr-3 group-hover:bg-ocean-300 transition-colors"></span>
                Custom Pool Design
              </a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300 flex items-center group">
                <span className="w-2 h-2 bg-ocean-400 rounded-full mr-3 group-hover:bg-ocean-300 transition-colors"></span>
                Luxury Pool Construction
              </a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300 flex items-center group">
                <span className="w-2 h-2 bg-ocean-400 rounded-full mr-3 group-hover:bg-ocean-300 transition-colors"></span>
                Pool Renovation & Remodeling
              </a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300 flex items-center group">
                <span className="w-2 h-2 bg-ocean-400 rounded-full mr-3 group-hover:bg-ocean-300 transition-colors"></span>
                Water Features & Spas
              </a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300 flex items-center group">
                <span className="w-2 h-2 bg-ocean-400 rounded-full mr-3 group-hover:bg-ocean-300 transition-colors"></span>
                Smart Pool Technology
              </a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300 flex items-center group">
                <span className="w-2 h-2 bg-ocean-400 rounded-full mr-3 group-hover:bg-ocean-300 transition-colors"></span>
                Maintenance & Service
              </a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-8 font-playfair">Company</h4>
            <ul className="space-y-4 text-ocean-200">
              <li><a href="#" className="hover:text-white transition-colors duration-300 flex items-center group">
                <span className="w-2 h-2 bg-ocean-400 rounded-full mr-3 group-hover:bg-ocean-300 transition-colors"></span>
                About BluTouch
              </a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300 flex items-center group">
                <span className="w-2 h-2 bg-ocean-400 rounded-full mr-3 group-hover:bg-ocean-300 transition-colors"></span>
                Portfolio Gallery
              </a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300 flex items-center group">
                <span className="w-2 h-2 bg-ocean-400 rounded-full mr-3 group-hover:bg-ocean-300 transition-colors"></span>
                Client Testimonials
              </a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300 flex items-center group">
                <span className="w-2 h-2 bg-ocean-400 rounded-full mr-3 group-hover:bg-ocean-300 transition-colors"></span>
                Careers
              </a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300 flex items-center group">
                <span className="w-2 h-2 bg-ocean-400 rounded-full mr-3 group-hover:bg-ocean-300 transition-colors"></span>
                Industry Blog
              </a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300 flex items-center group">
                <span className="w-2 h-2 bg-ocean-400 rounded-full mr-3 group-hover:bg-ocean-300 transition-colors"></span>
                Contact Us
              </a></li>
            </ul>
          </div>

          {/* Enhanced Contact */}
          <div>
            <h4 className="text-xl font-semibold mb-8 font-playfair">Get In Touch</h4>
            <div className="space-y-6 text-ocean-200">
              <div className="flex items-start space-x-4">
                <div className="bg-ocean-800/50 p-2 rounded-lg">
                  <Phone className="h-5 w-5 text-ocean-400" />
                </div>
                <div>
                  <p className="font-medium text-white">(555) 123-POOL</p>
                  <p className="text-sm">24/7 Emergency Service</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-ocean-800/50 p-2 rounded-lg">
                  <Mail className="h-5 w-5 text-ocean-400" />
                </div>
                <div>
                  <p className="font-medium text-white">info@blutouchpools.com</p>
                  <p className="text-sm">Response within 2 hours</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-ocean-800/50 p-2 rounded-lg">
                  <MapPin className="h-5 w-5 text-ocean-400" />
                </div>
                <div>
                  <p className="font-medium text-white">Los Angeles, CA</p>
                  <p className="text-sm">Serving Southern California</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Bottom Bar */}
        <div className="border-t border-ocean-800/50 mt-16 pt-10">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
              <p className="text-ocean-300 text-sm">
                © 2024 BluTouch Pools. All rights reserved.
              </p>
              <div className="flex items-center space-x-4 text-sm text-ocean-400">
                <span>Licensed #ABC123456</span>
                <span>•</span>
                <span>Bonded & Insured</span>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="#" className="text-ocean-300 hover:text-white text-sm transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-ocean-300 hover:text-white text-sm transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-ocean-300 hover:text-white text-sm transition-colors duration-300">
                Cookie Policy
              </a>
              <a href="#" className="text-ocean-300 hover:text-white text-sm transition-colors duration-300">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
