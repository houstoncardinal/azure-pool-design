
import React from 'react';
import { Waves, Wrench, Sparkles, Shield, Droplets, Zap, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: Waves,
      title: "Custom Pool Design",
      description: "Bespoke pool designs tailored to your vision, property, and lifestyle requirements with 3D visualization.",
      features: ["3D Visualization", "Architectural Integration", "Landscape Harmony"],
      color: "from-ocean-500 to-ocean-600"
    },
    {
      icon: Wrench,
      title: "Pool Construction",
      description: "Expert construction using premium materials and cutting-edge techniques for lasting excellence.",
      features: ["Gunite Construction", "Premium Tile & Coping", "Equipment Installation"],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Sparkles,
      title: "Luxury Features",
      description: "Transform your pool into a resort-style oasis with premium amenities and smart technology.",
      features: ["Custom Water Features", "LED Lighting Systems", "Smart Automation"],
      color: "from-indigo-500 to-indigo-600"
    },
    {
      icon: Shield,
      title: "Pool Renovation",
      description: "Breathe new life into existing pools with comprehensive renovation and modernization services.",
      features: ["Surface Resurfacing", "Equipment Upgrades", "Design Modernization"],
      color: "from-teal-500 to-teal-600"
    },
    {
      icon: Droplets,
      title: "Water Features",
      description: "Custom waterfalls, fountains, and spa installations for the ultimate relaxation experience.",
      features: ["Natural Rock Waterfalls", "Precision Deck Jets", "Luxury Spillover Spas"],
      color: "from-cyan-500 to-cyan-600"
    },
    {
      icon: Zap,
      title: "Smart Pool Technology",
      description: "Integrate cutting-edge technology for effortless pool management and energy efficiency.",
      features: ["Remote Monitoring", "Automated Cleaning", "Energy Optimization"],
      color: "from-emerald-500 to-emerald-600"
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-platinum-50 via-white to-ocean-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-ocean-100 rounded-full blur-3xl opacity-30 -translate-x-48 -translate-y-48"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-ocean-200 rounded-full blur-3xl opacity-20 translate-x-48 translate-y-48"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-ocean-100 text-ocean-700 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            Comprehensive Services
          </div>
          <h2 className="text-5xl lg:text-6xl font-playfair font-bold text-ocean-900 mb-8 text-balance">
            Premium Pool
            <span className="block text-ocean-gradient">Solutions</span>
          </h2>
          <p className="text-xl text-platinum-600 max-w-4xl mx-auto leading-relaxed">
            From initial concept to final installation, we provide end-to-end pool construction 
            and renovation services that exceed the highest expectations.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={service.title}
                className="group hover:shadow-luxury transition-all duration-700 border-0 bg-white/80 backdrop-blur-sm hover:scale-105 animate-scale-in shadow-corporate hover:bg-white relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <CardContent className="p-8 relative">
                  <div className="mb-8">
                    <div className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-premium group-hover:shadow-luxury`}>
                      <IconComponent className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-ocean-900 mb-4 font-playfair group-hover:text-ocean-700 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-platinum-600 leading-relaxed mb-8 text-balance">
                      {service.description}
                    </p>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-ocean-700">
                        <div className="w-2 h-2 bg-ocean-400 rounded-full mr-4 group-hover:bg-ocean-500 transition-colors"></div>
                        <span className="font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center text-ocean-600 group-hover:text-ocean-500 transition-colors font-medium">
                    <span>Learn More</span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Enhanced Call to Action */}
        <div className="text-center animate-fade-in-up">
          <div className="bg-gradient-to-r from-ocean-600 via-ocean-700 to-ocean-800 rounded-3xl p-16 text-white shadow-luxury relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-60 h-60 bg-white rounded-full blur-3xl"></div>
            </div>
            
            <div className="relative">
              <h3 className="text-4xl font-playfair font-bold mb-6">
                Ready to Start Your Pool Project?
              </h3>
              <p className="text-xl text-ocean-100 mb-10 max-w-3xl mx-auto leading-relaxed">
                Contact our team of experts today for a comprehensive consultation and let's bring 
                your dream pool vision to life with unparalleled craftsmanship.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-premium bg-white text-ocean-600 px-10 py-4 rounded-2xl font-semibold text-lg hover:bg-platinum-50 transition-all duration-500 hover:scale-105 shadow-corporate group">
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </button>
                <button className="glass-morphism border border-white/30 text-white px-10 py-4 rounded-2xl font-semibold text-lg hover:bg-white/20 transition-all duration-500">
                  View Portfolio
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
