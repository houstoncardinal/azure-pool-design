import React from 'react';
import { Waves, Wrench, Sparkles, Shield, Droplets, Zap, ArrowRight, Phone, CheckCircle, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: Waves,
      title: "Custom Pools & Spas",
      description: "No matter the size of your backyard, we can create a luxury pool and hot tub design that will shape perfectly to fit. We offer estimates which include personal consultations and a 3-D reality view of your new swimming pool.",
      features: [
        "3-D Reality View",
        "Personal Consultations",
        "Custom In-Ground Pools",
        "Luxury Pool Features",
        "Professional Installation"
      ],
      benefits: [
        "Expert Design Team",
        "Quality Materials",
        "Timely Completion",
        "Comprehensive Warranty"
      ],
      price: "Free Estimates"
    },
    {
      icon: Wrench,
      title: "Upgrades & Repairs",
      description: "With a strong commitment to provide first-rate service & support to our customers, Blu Touch Pool Service offers a variety of services and repairs to fit every customer's needs and to fit their budget.",
      features: [
        "Equipment Repair",
        "System Upgrades",
        "Surface Renovation",
        "Feature Installation",
        "Emergency Repairs"
      ],
      benefits: [
        "24/7 Emergency Service",
        "Licensed Technicians",
        "Quality Parts",
        "Competitive Pricing"
      ],
      price: "Competitive Rates"
    },
    {
      icon: Sparkles,
      title: "Pool Servicing",
      description: "Blu Touch Pool Service specializes in routine pool maintenance, Drain & Fills, equipment repair of swimming pools in Fort Bend County and surrounding areas.",
      features: [
        "Weekly Maintenance",
        "Chemical Balancing",
        "Equipment Inspection",
        "Cleaning Services",
        "Water Testing"
      ],
      benefits: [
        "Regular Service Schedule",
        "Expert Technicians",
        "Comprehensive Care",
        "Detailed Reports"
      ],
      price: "Weekly Service"
    },
    {
      icon: Shield,
      title: "Modern Pool Designs",
      description: "Modern pools and designs to bring your backyard oasis to life. We strive to reflect the dream of each client in the pools we build.",
      features: [
        "Smart Controls",
        "Automation Systems",
        "Energy Efficiency",
        "Remote Monitoring",
        "Safety Features"
      ],
      benefits: [
        "Energy Savings",
        "Enhanced Safety",
        "Convenient Control",
        "Modern Integration"
      ],
      price: "Custom Pricing"
    },
    {
      icon: Droplets,
      title: "Hot Tub Integration",
      description: "From custom in-ground pools to in-ground pools with hot tubs, we create luxury designs that perfectly complement your outdoor space.",
      features: [
        "Custom Spa Design",
        "Integrated Systems",
        "Heating Solutions",
        "Water Features",
        "Lighting Options"
      ],
      benefits: [
        "Year-Round Use",
        "Energy Efficient",
        "Custom Design",
        "Professional Installation"
      ],
      price: "From $25K"
    },
    {
      icon: Zap,
      title: "Professional Installation",
      description: "Our amazing team of designers, technicians, and craftsmen guide you through the entire process of creating your luxury pool design.",
      features: [
        "Full-Service Solutions",
        "Expert Consultation",
        "Quality Installation",
        "Ongoing Support",
        "Warranty Coverage"
      ],
      benefits: [
        "One-Stop Service",
        "Experienced Team",
        "Quality Guarantee",
        "Customer Satisfaction"
      ],
      price: "Included"
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
            Experience The Blu Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Modern pools and designs to bring your backyard oasis to life. We strive to reflect the dream of each client in the pools we build from a custom in-ground pool to an in-ground pool with a hot tub!
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={service.title}
                className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col"
              >
                <CardContent className="p-8 flex flex-col h-full">
                  <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                    <IconComponent className="h-8 w-8 text-blue-600" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="grid sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 mb-3 flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        Key Features
                      </h4>
                      <ul className="space-y-2">
                        {service.features.slice(0, 3).map((feature) => (
                          <li key={feature} className="flex items-center text-gray-700 text-sm">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 mb-3 flex items-center">
                        <Star className="w-4 h-4 text-yellow-500 mr-2" />
                        Benefits
                      </h4>
                      <ul className="space-y-2">
                        {service.benefits.slice(0, 3).map((benefit) => (
                          <li key={benefit} className="flex items-center text-gray-700 text-sm">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="border-t border-gray-100 pt-6 mt-auto">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-gray-900">{service.price}</span>
                      <span className="text-sm text-gray-500">Professional service</span>
                    </div>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium" asChild>
                      <Link to="/get-quote">Get Quote</Link>
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
            We offer free estimates which include personal consultations and a 3-D reality view of your new swimming pool. Give us the opportunity to service your swimming pool and we will prove why we are the best pool service company around.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Button 
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg group"
              asChild
            >
              <a href="tel:8329610258">
                <Phone className="mr-2 h-5 w-5" />
                Call (832) 961-0258
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button 
              size="lg"
              variant="outline" 
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 font-semibold"
              asChild
            >
              <Link to="/get-quote">
                Free Consultation & 3-D View
              </Link>
            </Button>
          </div>
          
          <div className="mt-8 text-sm text-gray-500">
            ✓ Free consultation ✓ Personal consultation ✓ 3-D reality view
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
