import React from 'react';
import { ArrowRight, Phone, Calendar, CheckCircle, Award, Users, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
const Hero = () => {
  return <section id="home" className="relative bg-white overflow-hidden">
      {/* Clean Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white"></div>
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Main Content */}
          <div className="animate-fade-in-up">
            {/* Corporate Badge */}
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-semibold mb-8">
              <Award className="w-4 h-4 mr-2" />
              Houston's Premier Custom Pool Builder
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              <span className="block">Experience The</span>
              <span className="block text-blue-600">Blu Touch Difference</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl">BluTouch Pools & Spas has an amazing team of designers, technicians, and craftsmen that will guide you through the process of creating your own luxury pool design. </p>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              <div className="flex items-center text-gray-700">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                <span className="font-medium">Free Estimates</span>
              </div>
              <div className="flex items-center text-gray-700">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                <span className="font-medium">3-D Reality View</span>
              </div>
              <div className="flex items-center text-gray-700">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                <span className="font-medium">Personal Consultations</span>
              </div>
              <div className="flex items-center text-gray-700">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                <span className="font-medium">Custom Designs</span>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-gray-200 text-gray-700 hover:bg-gray-50 px-8 py-4 text-lg font-semibold rounded-lg group"
                asChild
              >
                <a href="tel:8329610258">
                  <Phone className="mr-2 h-5 w-5" />
                  Call (832) 961-0258
                </a>
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold rounded-lg group" asChild>
                <Link to="/get-quote">
                  <Calendar className="mr-2 h-5 w-5" />
                  Free Consultation
                </Link>
              </Button>
            </div>

            {/* Service Areas */}
            <div className="pt-8 border-t border-gray-200">
              <p className="text-gray-600 font-medium mb-2">Serving:</p>
              <p className="text-gray-700">Pearland, Alvin, Friendswood, Houston and surrounding areas</p>
            </div>
          </div>

          {/* Right Column - Image & Features */}
          <div className="relative animate-fade-in-up">
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
              <img src="/brown-family-pool.jpg" alt="Luxury swimming pool" className="w-full h-64 object-cover rounded-xl mb-6" />
              
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Why Choose BluTouch Pools & Spas?</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                    <Award className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Custom Pool & Spa Design</h4>
                    <p className="text-gray-600 text-sm">No matter the size of your backyard, we can create a luxury pool design that fits perfectly.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mt-1">
                    <Users className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Expert Team</h4>
                    <p className="text-gray-600 text-sm">Amazing team of designers, technicians, and craftsmen guiding you through the process.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mt-1">
                    <Star className="w-4 h-4 text-yellow-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Pool Servicing</h4>
                    <p className="text-gray-600 text-sm">Specializing in routine maintenance, repairs, and equipment service in Fort Bend County.</p>
                  </div>
                </div>
              </div>
              
              <Button className="w-full mt-6 bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 rounded-lg" asChild>
                <Link to="/portfolio">
                  View Our Portfolio
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;