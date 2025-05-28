
import React from 'react';
import { ArrowRight, Award, Users, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Luxury swimming pool"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ocean-900/80 via-ocean-800/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Content */}
          <div className="text-white animate-fade-in-up">
            <h1 className="text-5xl lg:text-7xl font-playfair font-bold leading-tight mb-6">
              Luxury Pool
              <span className="block text-ocean-300">Construction</span>
            </h1>
            <p className="text-xl lg:text-2xl text-platinum-200 mb-8 leading-relaxed">
              Creating extraordinary aquatic experiences for discerning homeowners. 
              Where craftsmanship meets innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                size="lg" 
                className="bg-ocean-600 hover:bg-ocean-700 text-white px-8 py-4 text-lg font-medium transition-all duration-300 hover:scale-105"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-white text-white hover:bg-white hover:text-ocean-900 px-8 py-4 text-lg font-medium transition-all duration-300"
              >
                View Portfolio
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center animate-scale-in">
                <div className="flex justify-center mb-2">
                  <Award className="h-8 w-8 text-ocean-300" />
                </div>
                <div className="text-3xl font-bold font-playfair">25+</div>
                <div className="text-platinum-300 text-sm">Years Experience</div>
              </div>
              <div className="text-center animate-scale-in" style={{ animationDelay: '0.2s' }}>
                <div className="flex justify-center mb-2">
                  <Users className="h-8 w-8 text-ocean-300" />
                </div>
                <div className="text-3xl font-bold font-playfair">500+</div>
                <div className="text-platinum-300 text-sm">Happy Clients</div>
              </div>
              <div className="text-center animate-scale-in" style={{ animationDelay: '0.4s' }}>
                <div className="flex justify-center mb-2">
                  <Calendar className="h-8 w-8 text-ocean-300" />
                </div>
                <div className="text-3xl font-bold font-playfair">12</div>
                <div className="text-platinum-300 text-sm">Month Warranty</div>
              </div>
            </div>
          </div>

          {/* Right Column - Feature Cards */}
          <div className="space-y-6 animate-slide-in">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-3">Custom Design</h3>
              <p className="text-platinum-200">Every pool is uniquely designed to complement your lifestyle and property.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300" style={{ animationDelay: '0.3s' }}>
              <h3 className="text-xl font-semibold text-white mb-3">Premium Materials</h3>
              <p className="text-platinum-200">We use only the finest materials and cutting-edge technology.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300" style={{ animationDelay: '0.6s' }}>
              <h3 className="text-xl font-semibold text-white mb-3">Expert Installation</h3>
              <p className="text-platinum-200">Our certified team ensures flawless installation and lasting quality.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
