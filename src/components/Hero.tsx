
import React from 'react';
import { ArrowRight, Award, Users, Calendar, Play, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Advanced Parallax */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-ocean-900 via-ocean-800 to-ocean-950"></div>
        <img 
          src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Luxury swimming pool"
          className="w-full h-full object-cover parallax opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ocean-900/90 via-ocean-800/70 to-transparent"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-ocean-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-ocean-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Main Content */}
          <div className="text-white animate-fade-in-up">
            {/* Premium Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full glass-morphism border border-white/20 text-sm font-medium mb-8 animate-glow">
              <Star className="w-4 h-4 mr-2 text-yellow-400" />
              Premium Pool Construction Since 1998
            </div>

            <h1 className="text-5xl lg:text-7xl font-playfair font-bold leading-tight mb-8">
              <span className="block">Luxury Pool</span>
              <span className="block text-ocean-300 text-premium">Construction</span>
              <span className="block text-3xl lg:text-4xl font-light mt-4 text-platinum-200">
                Redefined
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-platinum-200 mb-10 leading-relaxed max-w-2xl">
              Creating extraordinary aquatic experiences for discerning homeowners. 
              Where <span className="text-ocean-300 font-semibold">innovation</span> meets 
              <span className="text-ocean-300 font-semibold"> craftsmanship</span>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 mb-16">
              <Button 
                size="lg" 
                className="btn-premium bg-gradient-ocean hover:shadow-luxury text-white px-10 py-4 text-lg font-semibold transition-all duration-500 hover:scale-105 rounded-2xl shadow-corporate group"
              >
                Start Your Project
                <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="glass-morphism border-2 border-white/30 text-white hover:bg-white/20 px-10 py-4 text-lg font-semibold transition-all duration-500 rounded-2xl group backdrop-blur-xl"
              >
                <Play className="mr-3 h-5 w-5" />
                Watch Portfolio
              </Button>
            </div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center group animate-scale-in">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-ocean rounded-2xl flex items-center justify-center shadow-corporate group-hover:shadow-luxury transition-all duration-300 group-hover:scale-110">
                    <Award className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="text-4xl font-bold font-playfair mb-2">25+</div>
                <div className="text-platinum-300 text-sm font-medium">Years Experience</div>
              </div>
              <div className="text-center group animate-scale-in" style={{ animationDelay: '0.2s' }}>
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-ocean rounded-2xl flex items-center justify-center shadow-corporate group-hover:shadow-luxury transition-all duration-300 group-hover:scale-110">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="text-4xl font-bold font-playfair mb-2">500+</div>
                <div className="text-platinum-300 text-sm font-medium">Happy Clients</div>
              </div>
              <div className="text-center group animate-scale-in" style={{ animationDelay: '0.4s' }}>
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-ocean rounded-2xl flex items-center justify-center shadow-corporate group-hover:shadow-luxury transition-all duration-300 group-hover:scale-110">
                    <Calendar className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="text-4xl font-bold font-playfair mb-2">12</div>
                <div className="text-platinum-300 text-sm font-medium">Month Warranty</div>
              </div>
            </div>
          </div>

          {/* Right Column - Feature Cards */}
          <div className="space-y-6 animate-slide-in-right">
            <div className="glass-morphism rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 shadow-luxury group hover:shadow-2xl">
              <h3 className="text-2xl font-semibold text-white mb-4 font-playfair">Custom Design</h3>
              <p className="text-platinum-200 leading-relaxed">Every pool is uniquely designed to complement your lifestyle and property architecture.</p>
              <div className="mt-6 flex items-center text-ocean-300 group-hover:text-ocean-200 transition-colors">
                <span className="text-sm font-medium">Learn More</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
            
            <div className="glass-morphism rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 shadow-luxury group hover:shadow-2xl" style={{ animationDelay: '0.3s' }}>
              <h3 className="text-2xl font-semibold text-white mb-4 font-playfair">Premium Materials</h3>
              <p className="text-platinum-200 leading-relaxed">We use only the finest materials and cutting-edge technology for lasting excellence.</p>
              <div className="mt-6 flex items-center text-ocean-300 group-hover:text-ocean-200 transition-colors">
                <span className="text-sm font-medium">View Materials</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
            
            <div className="glass-morphism rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 shadow-luxury group hover:shadow-2xl" style={{ animationDelay: '0.6s' }}>
              <h3 className="text-2xl font-semibold text-white mb-4 font-playfair">Expert Installation</h3>
              <p className="text-platinum-200 leading-relaxed">Our certified team ensures flawless installation with meticulous attention to detail.</p>
              <div className="mt-6 flex items-center text-ocean-300 group-hover:text-ocean-200 transition-colors">
                <span className="text-sm font-medium">Meet Our Team</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center backdrop-blur-sm">
          <div className="w-1.5 h-4 bg-white/70 rounded-full mt-3 animate-pulse"></div>
        </div>
        <p className="text-white/60 text-xs mt-2 font-medium">Scroll to explore</p>
      </div>
    </section>
  );
};

export default Hero;
