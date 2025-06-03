import React from 'react';
import { Facebook, Instagram, Phone, Mail, MapPin, Award, Star, Clock, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

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
                BluTouch Pools & Spas
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Houston's Premier Custom Pool Builder. BluTouch Pools & Spas has an amazing team of designers, technicians, and craftsmen that will guide you through the process of creating your own luxury pool design.
              </p>
              
              {/* Service Areas */}
              <div className="mb-6">
                <h4 className="font-semibold text-white mb-2">Service Areas:</h4>
                <p className="text-gray-300 text-sm">Pearland, Alvin, Friendswood, Houston and surrounding areas</p>
              </div>
            </div>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/blutouchpools" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-3 rounded-lg hover:bg-blue-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/blutouchpools" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-3 rounded-lg hover:bg-blue-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3 text-gray-300">
              <li><Link to="/custom-pools-spas" className="hover:text-white transition-colors">Custom Pools & Spas</Link></li>
              <li><Link to="/upgrades-repairs" className="hover:text-white transition-colors">Upgrades & Repairs</Link></li>
              <li><Link to="/pool-servicing" className="hover:text-white transition-colors">Pool Servicing</Link></li>
              <li><Link to="/modern-pool-designs" className="hover:text-white transition-colors">Modern Pool Designs</Link></li>
              <li><Link to="/hot-tub-integration" className="hover:text-white transition-colors">Hot Tub Integration</Link></li>
              <li><Link to="/professional-installation" className="hover:text-white transition-colors">Professional Installation</Link></li>
            </ul>
          </div>

          {/* Client Projects */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Featured Projects</h4>
            <ul className="space-y-3 text-gray-300">
              <li><Link to="/portfolio/brown-family-project" className="hover:text-white transition-colors">Brown Family Project</Link></li>
              <li><Link to="/portfolio/robinson-family-project" className="hover:text-white transition-colors">Robinson Family Project</Link></li>
              <li><Link to="/portfolio/rucker-family-project" className="hover:text-white transition-colors">Rucker Family Project</Link></li>
              <li><Link to="/portfolio" className="hover:text-white transition-colors">View All Projects</Link></li>
            </ul>
          </div>

          {/* Contact & CTA */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact BluTouch Pools & Spas</h4>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-600 p-2 rounded-lg">
                  <Phone className="h-4 w-4" />
                </div>
                <div>
                  <a href="tel:8329610258" className="font-semibold hover:underline">(832) 961-0258</a>
                  <p className="text-sm text-gray-400">Call for free estimate</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="bg-blue-600 p-2 rounded-lg">
                  <Mail className="h-4 w-4" />
                </div>
                <div>
                  <a href="mailto:gary@blutouchpools.com" className="font-semibold hover:underline">gary@blutouchpools.com</a>
                  <p className="text-sm text-gray-400">Quick response</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="bg-blue-600 p-2 rounded-lg">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-semibold">5100 Westheimer, Suite 200</p>
                  <p className="text-sm text-gray-400">Houston, TX 77056</p>
                </div>
              </div>
            </div>

            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 mb-4" asChild>
              <Link to="/get-quote">Get Free Estimate</Link>
            </Button>
            
            {/* Financing */}
            <div className="bg-gray-800 rounded-lg p-4">
              <h5 className="font-semibold mb-2">Financing Available</h5>
              <p className="text-sm text-gray-300 mb-3">Apply now through HFS Financial</p>
              <Button variant="outline" size="sm" className="w-full border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white" asChild>
                <a href="https://www.hfsfinancial.net/promo/blutouchpoolservice/" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
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
              <p className="text-gray-400 text-sm">
                © 2025 BluTouch Pools & Spas. All rights reserved.
              </p>
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <span>Houston's Premier Pool Builder</span>
                <span>•</span>
                <span>Licensed & Insured</span>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms-of-service" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link>
              <a href="/sitemap.xml" className="text-gray-400 hover:text-white transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
