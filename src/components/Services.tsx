
import React from 'react';
import { Waves, Wrench, Sparkles, Shield, Droplets, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: Waves,
      title: "Custom Pool Design",
      description: "Bespoke pool designs tailored to your vision, property, and lifestyle requirements.",
      features: ["3D Visualization", "Architectural Integration", "Landscape Harmony"]
    },
    {
      icon: Wrench,
      title: "Pool Construction",
      description: "Expert construction using premium materials and cutting-edge techniques.",
      features: ["Gunite Construction", "Tile & Coping", "Equipment Installation"]
    },
    {
      icon: Sparkles,
      title: "Luxury Features",
      description: "Transform your pool into a resort-style oasis with premium amenities.",
      features: ["Water Features", "LED Lighting", "Automation Systems"]
    },
    {
      icon: Shield,
      title: "Pool Renovation",
      description: "Breathe new life into existing pools with comprehensive renovation services.",
      features: ["Resurfacing", "Equipment Upgrade", "Design Modernization"]
    },
    {
      icon: Droplets,
      title: "Water Features",
      description: "Custom waterfalls, fountains, and spa installations for ultimate relaxation.",
      features: ["Natural Rock Waterfalls", "Deck Jets", "Spillover Spas"]
    },
    {
      icon: Zap,
      title: "Smart Pool Technology",
      description: "Integrate the latest technology for effortless pool management and control.",
      features: ["Remote Monitoring", "Automated Cleaning", "Energy Efficiency"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-platinum-50 to-ocean-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-ocean-900 mb-6">
            Comprehensive Pool Services
          </h2>
          <p className="text-xl text-platinum-600 max-w-3xl mx-auto leading-relaxed">
            From initial concept to final installation, we provide end-to-end pool construction 
            and renovation services that exceed expectations.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={service.title}
                className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white hover:scale-105 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-ocean-500 to-ocean-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-ocean-900 mb-3 font-playfair">
                      {service.title}
                    </h3>
                    <p className="text-platinum-600 leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-ocean-700">
                        <div className="w-2 h-2 bg-ocean-400 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in-up">
          <div className="bg-gradient-to-r from-ocean-600 to-ocean-700 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-playfair font-bold mb-4">
              Ready to Start Your Pool Project?
            </h3>
            <p className="text-xl text-ocean-100 mb-8 max-w-2xl mx-auto">
              Contact our team today for a consultation and let's bring your dream pool to life.
            </p>
            <button className="bg-white text-ocean-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-platinum-50 transition-colors duration-300 hover:scale-105 transform">
              Get Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
