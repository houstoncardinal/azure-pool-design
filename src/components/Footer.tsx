
import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-ocean-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-playfair font-bold">BluTouch Pools</h3>
            <p className="text-ocean-200 leading-relaxed">
              Creating luxury aquatic experiences for over 25 years. Your premier partner 
              for custom pool design and construction.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-ocean-800 p-2 rounded-full hover:bg-ocean-700 transition-colors duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-ocean-800 p-2 rounded-full hover:bg-ocean-700 transition-colors duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-ocean-800 p-2 rounded-full hover:bg-ocean-700 transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-ocean-800 p-2 rounded-full hover:bg-ocean-700 transition-colors duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3 text-ocean-200">
              <li><a href="#" className="hover:text-white transition-colors duration-300">Custom Pool Design</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Pool Construction</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Pool Renovation</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Water Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Smart Technology</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Maintenance</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-3 text-ocean-200">
              <li><a href="#" className="hover:text-white transition-colors duration-300">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Portfolio</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Testimonials</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4 text-ocean-200">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-ocean-400" />
                <span>(555) 123-POOL</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-ocean-400" />
                <span>info@blutouchpools.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-ocean-400 mt-1" />
                <span>123 Pool Construction Blvd<br />Los Angeles, CA 90210</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-ocean-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-ocean-300 text-sm">
            © 2024 BluTouch Pools. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-ocean-300 hover:text-white text-sm transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-ocean-300 hover:text-white text-sm transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#" className="text-ocean-300 hover:text-white text-sm transition-colors duration-300">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
