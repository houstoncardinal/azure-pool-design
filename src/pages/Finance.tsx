
import React from 'react';
import { Link } from 'react-router-dom';
import { DollarSign, ExternalLink, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Finance = () => {
  return (
    <div className="min-h-screen font-inter bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <DollarSign className="w-12 h-12 text-blue-600 mr-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Pool Financing Options
            </h1>
          </div>
          <p className="text-xl text-gray-600 mb-8">
            Make your dream pool a reality with our flexible financing solutions
          </p>
        </div>
      </section>

      {/* Financing Options */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* HFS Financial Option */}
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">HFS Financial</h3>
                <p className="text-gray-600">Specialized pool financing with competitive rates</p>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <span>Quick approval process</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <span>Competitive interest rates</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <span>Flexible payment terms</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <span>Pool construction specialists</span>
                </div>
              </div>
              
              <Button 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                asChild
              >
                <a 
                  href="https://www.hfsfinancial.net/promo/blutouchpoolservice/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Apply with HFS Financial
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>

            {/* VistaFi Option */}
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">VistaFi</h3>
                <p className="text-gray-600">Alternative financing solution for your pool project</p>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  <span>Fast online application</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  <span>Multiple financing options</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  <span>Digital payment solutions</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  <span>Contractor partnership benefits</span>
                </div>
              </div>
              
              <Button 
                className="w-full bg-green-600 hover:bg-green-700 text-white"
                asChild
              >
                <a 
                  href="https://vistafi.com/contractor/001uo00000ubzhoya5blutouch-pools-spas/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Apply with VistaFi
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
          </div>
          
          {/* Additional Information */}
          <div className="mt-12 bg-white rounded-xl shadow-lg p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              Need Help Choosing?
            </h3>
            <p className="text-gray-600 text-center mb-6">
              Our team can help you explore both financing options and find the best solution for your budget and timeline.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" asChild>
                <Link to="/contact">
                  Contact Our Team
                </Link>
              </Button>
              <Button asChild>
                <Link to="/get-quote">
                  Get Free Quote
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Finance;
