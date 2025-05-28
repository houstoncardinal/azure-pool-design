
import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin, Phone, Mail, MapPin, Award, Star, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                <span className="text-blue-400">BluTouch</span> Pools
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Southern California's premier pool construction company. Creating luxury 
                aquatic experiences with unmatched craftsmanship since 1998.
              </p>
              
              {/* Credentials */}
              <div className="flex flex-wrap gap-2 mb-6">
                <div className="flex items-center bg-gray-800 px-3 py-1 rounded-full text-sm">
                  <Award className="w-4 h-4 mr-2 text-blue-400" />
                  Licensed #123456
                </div>
                <div className="flex items-center bg-gray-800 px-3 py-1 rounded-full text-sm">
                  <Star className="w-4 h-4 mr-2 text-yellow-400" />
                  5-Star Rated
                </div>
              </div>
            </div>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-3 rounded-lg hover:bg-blue-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-lg hover:bg-blue-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-lg hover:bg-blue-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-lg hover:bg-blue-600 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Custom Pool Design</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pool Construction</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pool Renovation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Water Features & Spas</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Smart Pool Technology</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Maintenance & Service</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact & CTA */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Get Started Today</h4>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-600 p-2 rounded-lg">
                  <Phone className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-semibold">(555) 123-POOL</p>
                  <p className="text-sm text-gray-400">24/7 Emergency Service</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="bg-blue-600 p-2 rounded-lg">
                  <Mail className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-semibold">info@blutouchpools.com</p>
                  <p className="text-sm text-gray-400">Response within 2 hours</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="bg-blue-600 p-2 rounded-lg">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-semibold">Los Angeles, CA</p>
                  <p className="text-sm text-gray-400">Serving all of SoCal</p>
                </div>
              </div>
            </div>

            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3">
              Get Free Quote
            </Button>
            
            <div className="mt-4 text-center">
              <div className="flex items-center justify-center text-sm text-gray-400">
                <Clock className="w-4 h-4 mr-2" />
                Free consultation • No obligation
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
              <p className="text-gray-400 text-sm">
                © 2024 BluTouch Pools. All rights reserved.
              </p>
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <span>Licensed & Bonded</span>
                <span>•</span>
                <span>Fully Insured</span>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm">
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
