import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { 
  CheckCircle,
  Star,
  ArrowRight,
  Calendar,
  Phone,
  Shield
} from 'lucide-react';

const service = {
  icon: Shield,
  title: "Modern Pool Designs",
  description: "Step into the future of outdoor living with stunning modern pool designs from Blu Touch Pools in Houston. We specialize in creating sleek, contemporary pools that feature clean lines, minimalist aesthetics, and integrated smart technology. Our design team works closely with you to envision a pool that is not only a beautiful focal point for your backyard but also a highly functional and energy-efficient swimming environment. Discover how modern design principles can transform your outdoor space into a sophisticated oasis.",
  features: [
    "Minimalist and Geometric Pool Shapes",
    "Integration of Smart Pool Technology (Automation, Lighting)",
    "Energy-Efficient Pool Equipment and Systems",
    "Infinity Edges, Perimeter Overflows, and other Modern Water Features",
    "Selection of Contemporary Pool Finishes and Materials",
    "Innovative Lighting Solutions for Ambiance and Safety",
    "Custom Designed for Seamless Integration with Modern Architecture"
  ],
  benefits: [
    "Enhance the Aesthetics and Value of Your Property",
    "Enjoy Convenient Control with Smart Home Integration",
    "Reduce Energy Consumption and Maintenance Needs",
    "Create a Sophisticated Outdoor Entertainment Area",
    "Benefit from Cutting-Edge Pool Technology",
    "Experience a Truly Unique and Personalized Pool Design"
  ],
  price: "Custom Pricing",
  image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
};

const ModernPoolDesigns = () => {
  const IconComponent = service.icon;
  return (
    <div className="min-h-screen font-sans antialiased bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-28 pb-20 lg:pt-40 lg:pb-32 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 sm:px-6 sm:py-3 rounded-full bg-white bg-opacity-20 text-white text-sm font-semibold mb-4 backdrop-filter backdrop-blur-sm">
            <IconComponent className="w-4 h-4 mr-2" />
            Our Services
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {service.title}
          </h1>
          <div className="max-w-3xl mx-auto space-y-4">
            <p className="text-base sm:text-lg lg:text-xl text-blue-100 leading-relaxed">
              Create a stunning outdoor oasis with our modern pool designs that blend contemporary aesthetics with innovative technology.
            </p>
            <p className="text-base sm:text-lg lg:text-xl text-blue-100 leading-relaxed">
              Our expert designers specialize in creating sleek, sophisticated poolscapes that complement your home's architecture and enhance your outdoor living space.
            </p>
            <p className="text-base sm:text-lg lg:text-xl text-blue-100 leading-relaxed">
              From infinity edges to smart automation systems, we incorporate the latest design trends and features to create a truly exceptional swimming experience.
            </p>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              size="lg"
              className="bg-white text-blue-700 hover:bg-gray-100 font-semibold shadow-lg transition-all duration-300 transform hover:scale-105"
              asChild
            >
              <Link to="/get-quote">
                Get a Free Quote
              </Link>
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-white text-blue-700 hover:bg-white hover:text-blue-700 font-semibold shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call (832) 961-0258
            </Button>
          </div>
        </div>
      </section>

      {/* Features and Benefits Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Features */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Key Features of Our {service.title} Service</h2>
              <ul className="space-y-6">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start text-gray-700">
                    <CheckCircle className="w-6 h-6 text-blue-600 mr-4 flex-shrink-0" />
                    <span className="text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Benefits You'll Enjoy</h2>
              <ul className="space-y-6">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start text-gray-700">
                    <Star className="w-6 h-6 text-yellow-500 mr-4 flex-shrink-0" />
                    <span className="text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Content Section */}
      <section className="py-16 lg:py-24 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Designing Your Dream Modern Pool in Houston</h2>
          <div className="prose prose-lg text-gray-700 mx-auto leading-relaxed space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="mb-4">
                Modern pool design is about more than just a place to swim; it's about creating a cohesive outdoor living environment that reflects contemporary style and incorporates the latest technology.
              </p>
              <p>
                At Blu Touch Pools, our designers are experts in translating modern architectural principles into stunning poolscapes throughout the Houston area. We focus on clean lines, geometric shapes, and a seamless integration with your home and landscape.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="mb-4">
                We incorporate features like sleek infinity edges that seemingly blend with the horizon, and sophisticated automation systems that allow you to control your pool's functions with a touch of a button.
              </p>
              <p className="mb-4">
                Energy efficiency is also a key component of modern design, and we utilize the latest pumps, filters, and heating systems to minimize environmental impact and reduce operating costs.
              </p>
              <p>
                Lighting plays a crucial role in modern pool design, and we offer innovative LED lighting solutions that create dramatic effects and enhance safety for evening enjoyment.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="mb-4">
                Choosing a modern pool design from Blu Touch Pools means investing in a sophisticated and functional outdoor space that will be the envy of your neighbors.
              </p>
              <p>
                We are committed to delivering a design that is not only visually striking but also perfectly suited to your lifestyle and the unique characteristics of your Houston property.
              </p>
            </div>
          </div>

          {/* Secondary CTA */}
          <div className="mt-12 text-center">
            <Button 
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold group shadow-lg transition-all duration-300 transform hover:scale-105"
              asChild
            >
              <Link to="/get-quote">
                Request a Modern Pool Design Consultation
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Primary CTA Section */}
      <section className="py-16 lg:py-24 bg-blue-700 text-white text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Start Your Modern Pool Project?</h2>
            <p className="text-lg text-blue-100 mb-10">Contact us today for a free consultation on modern pool designs in Houston.</p>
             <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                size="lg"
                className="bg-white text-blue-700 hover:bg-gray-100 font-semibold shadow-lg transition-all duration-300 transform hover:scale-105"
                asChild
              >
                <Link to="/get-quote">
                  Get Your Free Estimate
                </Link>
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-white text-blue-700 hover:bg-white hover:text-blue-700 font-semibold shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call (832) 961-0258
              </Button>
            </div>
          </div>
      </section>

      <Footer />
    </div>
  );
};

export default ModernPoolDesigns; 