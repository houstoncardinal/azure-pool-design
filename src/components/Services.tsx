
import React from 'react';
import { Waves, Wrench, Sparkles, Shield, Droplets, Zap, ArrowRight, Phone } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: Waves,
      title: "Custom Pool Design",
      description: "Bespoke pool designs tailored to your vision with 3D visualization and architectural integration.",
      features: ["3D Design Visualization", "Site Analysis", "Permit Assistance"],
      price: "Starting at $15K"
    },
    {
      icon: Wrench,
      title: "Pool Construction",
      description: "Expert construction using premium materials and industry-leading techniques for lasting quality.",
      features: ["Gunite Construction", "Premium Finishes", "Equipment Installation"],
      price: "From $45K"
    },
    {
      icon: Sparkles,
      title: "Luxury Features",
      description: "Transform your pool with premium amenities including lighting, water features, and automation.",
      features: ["LED Lighting Systems", "Water Features", "Smart Automation"],
      price: "From $8K"
    },
    {
      icon: Shield,
      title: "Pool Renovation",
      description: "Modernize and upgrade existing pools with comprehensive renovation services.",
      features: ["Surface Resurfacing", "Equipment Upgrades", "Feature Addition"],
      price: "From $12K"
    },
    {
      icon: Droplets,
      title: "Water Features & Spas",
      description: "Custom waterfalls, fountains, and spa installations for ultimate relaxation.",
      features: ["Natural Waterfalls", "Spillover Spas", "Fountain Systems"],
      price: "From $6K"
    },
    {
      icon: Zap,
      title: "Smart Technology",
      description: "Integrate cutting-edge technology for effortless pool management and energy efficiency.",
      features: ["Remote Monitoring", "Automated Systems", "Energy Optimization"],
      price: "From $4K"
    }
  ];

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            Professional Services
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive Pool Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From initial design to final installation, we provide complete pool construction 
            and renovation services with transparent pricing and guaranteed satisfaction.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={service.title}
                className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                    <IconComponent className="h-8 w-8 text-blue-600" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        <span className="text-sm font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="border-t border-gray-100 pt-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-gray-900">{service.price}</span>
                      <span className="text-sm text-gray-500">Professional installation</span>
                    </div>
                    
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium">
                      Get Quote
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="bg-white rounded-2xl shadow-xl p-12 text-center border border-gray-100">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Start Your Pool Project?
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Get a free consultation with our pool experts. We'll assess your space, 
            discuss your vision, and provide a detailed project proposal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Button 
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 font-semibold group"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call (555) 123-POOL
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              size="lg"
              variant="outline" 
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 font-semibold"
            >
              Schedule Consultation
            </Button>
          </div>
          
          <div className="mt-8 text-sm text-gray-500">
            ✓ Free consultation ✓ No obligation ✓ Licensed & insured
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
