import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Waves, 
  Wrench, 
  Sparkles, 
  Shield, 
  Droplets, 
  Zap, 
  ArrowRight, 
  Phone, 
  Calendar,
  CheckCircle,
  Star,
  ChevronRight,
  ArrowUpRight
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Waves,
      title: "Custom Pools & Spas",
      description: "No matter the size of your backyard, we can create a luxury pool and hot tub design that will shape perfectly to fit. We offer estimates which include personal consultations and a 3-D reality view of your new swimming pool.",
      features: [
        "3-D Reality View Design",
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
      price: "Free Estimates",
      image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
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
      price: "Competitive Rates",
      image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
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
      price: "Weekly Service",
      image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
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
      price: "Custom Pricing",
      image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
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
      price: "From $25K",
      image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
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
      price: "Included",
      image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="min-h-screen font-inter bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 pt-28 sm:pt-32 pb-12 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-50/50 via-transparent to-transparent"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-white border border-blue-100 text-blue-700 text-sm font-semibold mb-4 shadow-sm hover:shadow-md transition-shadow duration-300">
              <Sparkles className="w-4 h-4 mr-2" />
              Professional Services
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
              Experience The
              <span className="block text-blue-600">Blu Touch Difference</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto px-2 sm:px-4">
              Modern pools and designs to bring your backyard oasis to life. We strive to reflect the dream of each client in the pools we build from a custom in-ground pool to an in-ground pool with a hot tub!
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 sm:py-16 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <Card 
                  key={service.title}
                  className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col"
                >
                  <CardContent className="p-6 sm:p-8 flex flex-col h-full">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                      <IconComponent className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
                    </div>
                    
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">
                      {service.title}
                    </h3>
                    
                    <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 mb-2 sm:mb-3 flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          Key Features
                        </h4>
                        <ul className="space-y-1.5 sm:space-y-2">
                          {service.features.slice(0, 3).map((feature) => (
                            <li key={feature} className="flex items-center text-gray-700 text-xs sm:text-sm">
                              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full mr-2 sm:mr-3"></div>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 mb-2 sm:mb-3 flex items-center">
                          <Star className="w-4 h-4 text-yellow-500 mr-2" />
                          Benefits
                        </h4>
                        <ul className="space-y-1.5 sm:space-y-2">
                          {service.benefits.slice(0, 3).map((benefit) => (
                            <li key={benefit} className="flex items-center text-gray-700 text-xs sm:text-sm">
                              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full mr-2 sm:mr-3"></div>
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="border-t border-gray-100 pt-4 sm:pt-6 mt-auto">
                      <div className="flex items-center justify-between mb-3 sm:mb-4">
                        <span className="text-xl sm:text-2xl font-bold text-gray-900">{service.price}</span>
                        <span className="text-xs sm:text-sm text-gray-500">Professional service</span>
                      </div>
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base font-medium" asChild>
                        <Link to="/get-quote">Get Quote</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Call to Action */}
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-6 sm:p-8 lg:p-12 text-center border border-gray-100">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
              Ready to Start Your Pool Project?
            </h3>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
              We offer free estimates which include personal consultations and a 3-D reality view of your new swimming pool. Give us the opportunity to service your swimming pool and we will prove why we are the best pool service company around.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md mx-auto">
              <Button 
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold group"
              >
                <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Call (832) 961-0258
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                size="lg"
                variant="outline" 
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold"
                asChild
              >
                <Link to="/get-quote">
                  Free Consultation & 3-D View
                </Link>
              </Button>
            </div>
            
            <div className="mt-6 sm:mt-8 text-xs sm:text-sm text-gray-500">
              ✓ Free consultation ✓ Personal consultation ✓ 3-D reality view
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services; 