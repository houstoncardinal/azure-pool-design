import React from 'react';
import { Facebook, Instagram, Phone, Mail, MapPin, Award, Star, Clock, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12 sm:mb-16">
          {/* Company Info */}
          <div className="space-y-4 sm:space-y-6">
            <div>
              {/* Logo */}
              <Link to="/">
                <h3 className="text-2xl font-bold mb-4">
                  <span className="text-blue-400">Blu Touch</span> Pools
                </h3>
              </Link>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base mb-4 sm:mb-6">
                Houston's Premier Custom Pool Builder. Blu Touch Pools has an amazing team of designers, technicians, and craftsmen that will guide you through the process of creating your own luxury pool design.
              </p>
              
              {/* Service Areas */}
              <div className="mb-4 sm:mb-6">
                <h4 className="font-semibold text-white mb-2 text-sm sm:text-base">Service Areas:</h4>
                <p className="text-gray-300 text-xs sm:text-sm">Pearland, Alvin, Friendswood, Houston and surrounding areas</p>
              </div>
            </div>
            
            {/* Social Media */}
            <div className="flex space-x-3 sm:space-x-4">
              <a href="https://www.facebook.com/blutouchpools" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2 sm:p-3 rounded-md sm:rounded-lg hover:bg-blue-600 transition-colors">
                <Facebook className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a href="https://www.instagram.com/blutouchpools" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2 sm:p-3 rounded-md sm:rounded-lg hover:bg-blue-600 transition-colors">
                <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4 sm:space-y-6">
            <h4 className="font-semibold text-white mb-4 text-sm sm:text-base">Our Services</h4>
            <ul className="space-y-3 text-gray-300 text-sm sm:text-base">
              <li><Link to="/services#new-construction" className="hover:text-blue-400 transition-colors">New Pool Construction</Link></li>
              <li><Link to="/services#renovation" className="hover:text-blue-400 transition-colors">Pool Renovation</Link></li>
              <li><Link to="/services#maintenance" className="hover:text-blue-400 transition-colors">Pool Service & Maintenance</Link></li>
              <li><Link to="/services#repairs" className="hover:text-blue-400 transition-colors">Repairs & Upgrades</Link></li>
              <li><Link to="/services#spa-design" className="hover:text-blue-400 transition-colors">Custom Spa Design</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 sm:space-y-6">
            <h4 className="font-semibold text-white mb-4 text-sm sm:text-base">Quick Links</h4>
            <ul className="space-y-3 text-gray-300 text-sm sm:text-base">
              <li><Link to="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link to="/portfolio" className="hover:text-blue-400 transition-colors">Portfolio</Link></li>
              <li><Link to="/get-quote" className="hover:text-blue-400 transition-colors">Get a Quote</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info & Financing */}
          <div className="space-y-6 sm:space-y-8">
            {/* Contact Info */}
            <div className="space-y-3 sm:space-y-4">
              <h4 className="font-semibold text-white mb-4 text-sm sm:text-base">Contact Us</h4>
              <p className="flex items-center text-gray-300 text-sm sm:text-base"><Phone className="h-4 w-4 sm:h-5 sm:w-5 mr-3 text-blue-400" /> (832) 961-0258</p>
              <p className="flex items-center text-gray-300 text-sm sm:text-base"><Mail className="h-4 w-4 sm:h-5 sm:w-5 mr-3 text-blue-400" /> gary@blutouchpools.com</p>
              <p className="flex items-start text-gray-300 text-sm sm:text-base"><MapPin className="h-4 w-4 sm:h-5 sm:w-5 mr-3 text-blue-400 flex-shrink-0" /> 5100 Westheimer, Suite 200<br/>Houston, TX 77056</p>
            </div>

            {/* Financing */}
            <div className="bg-gray-800 rounded-lg sm:rounded-xl p-4 sm:p-6">
              <h5 className="font-semibold mb-2 sm:mb-3 text-sm sm:text-base">Financing Available</h5>
              <p className="text-sm text-gray-300 mb-3 sm:mb-4">Make your dream pool affordable with financing through HFS Financial.</p>
              <Button variant="outline" size="sm" className="w-full border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white text-sm sm:text-base"
                asChild
              >
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                  Apply Now
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
              <p className="text-gray-400 text-xs sm:text-sm">
                © 2024 Blu Touch Pools. All rights reserved.
              </p>
              <div className="flex items-center space-x-4 text-xs sm:text-sm text-gray-500">
                <span>Houston's Premier Pool Builder</span>
                <span>•</span>
                <span>Licensed & Insured</span>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
