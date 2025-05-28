
import React from 'react';
import { ArrowRight, Phone, Calendar, CheckCircle, Award, Users, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="relative bg-white overflow-hidden">
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
              Industry Leader Since 1998
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Premium Pool
              <span className="block text-blue-600">Construction</span>
              <span className="block text-2xl lg:text-3xl font-normal text-gray-600 mt-4">
                & Design Excellence
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
              Transform your property with professionally designed and constructed pools. 
              <strong className="text-gray-900"> Trusted by 500+ satisfied clients</strong> across Southern California.
            </p>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              <div className="flex items-center text-gray-700">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                <span className="font-medium">Licensed & Insured</span>
              </div>
              <div className="flex items-center text-gray-700">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                <span className="font-medium">12-Month Warranty</span>
              </div>
              <div className="flex items-center text-gray-700">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                <span className="font-medium">Premium Materials</span>
              </div>
              <div className="flex items-center text-gray-700">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                <span className="font-medium">Expert Installation</span>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call (555) 123-POOL
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold rounded-lg group"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Free Consultation
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-1">25+</div>
                <div className="text-sm text-gray-600 font-medium">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-1">500+</div>
                <div className="text-sm text-gray-600 font-medium">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-1">5★</div>
                <div className="text-sm text-gray-600 font-medium">Average Rating</div>
              </div>
            </div>
          </div>

          {/* Right Column - Image & Features */}
          <div className="relative animate-fade-in-up">
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Luxury swimming pool"
                className="w-full h-64 object-cover rounded-xl mb-6"
              />
              
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Why Choose BluTouch Pools?</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                    <Award className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Award-Winning Design</h4>
                    <p className="text-gray-600 text-sm">Recognized excellence in pool construction and design innovation.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mt-1">
                    <Users className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Expert Team</h4>
                    <p className="text-gray-600 text-sm">Certified professionals with decades of combined experience.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mt-1">
                    <Star className="w-4 h-4 text-yellow-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">5-Star Service</h4>
                    <p className="text-gray-600 text-sm">Consistently rated excellent by our satisfied customers.</p>
                  </div>
                </div>
              </div>
              
              <Button className="w-full mt-6 bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 rounded-lg">
                View Our Portfolio
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
