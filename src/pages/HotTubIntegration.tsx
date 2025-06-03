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
  Droplets
} from 'lucide-react';

const service = {
  icon: Droplets,
  title: "Hot Tub Integration",
  description: "Enhance your backyard oasis and extend your swimming season with seamless hot tub integration services from BluTouch Pools & Spas in Houston. Whether you desire a spillover spa that flows into your pool or a custom-designed separate hot tub, we have the expertise to create a perfectly integrated and luxurious addition to your outdoor space. Enjoy the therapeutic benefits and relaxation that a well-designed hot tub provides, expertly installed by our experienced team.",
  features: [
    "Custom Spillover Spa Design and Construction",
    "Seamless Integration with Existing or New Pools",
    "Variety of Jet and Seating Options",
    "Energy-Efficient Heating and Filtration Systems",
    "Custom Lighting and Water Features for Spas",
    "High-Quality Material Selection for Durability and Aesthetics",
    "Expert Installation and System Calibration"
  ],
  benefits: [
    "Extend the Use of Your Outdoor Space Year-Round",
    "Enjoy Therapeutic Benefits and Relaxation",
    "Increase the Value and Appeal of Your Home",
    "Create a Cohesive and Luxurious Backyard Environment",
    "Benefit from Energy-Efficient and Low-Maintenance Systems",
    "Receive Expert Design and Installation Services"
  ],
  price: "From $25K",
  image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
};

const HotTubIntegration = () => {
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
              Enhance your outdoor living space with a perfectly integrated hot tub that combines relaxation, hydrotherapy, and entertainment.
            </p>
            <p className="text-base sm:text-lg lg:text-xl text-blue-100 leading-relaxed">
              Our expert team specializes in seamlessly incorporating hot tubs with your existing pool, creating a cohesive and luxurious aquatic environment.
            </p>
            <p className="text-base sm:text-lg lg:text-xl text-blue-100 leading-relaxed">
              From standalone spas to integrated pool-spa combinations, we offer a range of options to suit your lifestyle and preferences.
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
            <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold rounded-lg shadow-lg group" asChild>
              <a href="tel:8329610258">
                <Phone className="mr-2 h-5 w-5" />
                Call (832) 961-0258
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
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
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Seamless Hot Tub Integration for Ultimate Relaxation in Houston</h2>
          <div className="prose prose-lg text-gray-700 mx-auto leading-relaxed space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="mb-4">
                Adding a hot tub to your property is a fantastic way to enhance your outdoor living experience, providing a dedicated space for relaxation, hydrotherapy, and socializing.
              </p>
              <p>
                BluTouch Pools & Spas specializes in seamlessly integrating hot tubs with new or existing pools, creating a cohesive and luxurious backyard environment in Houston. Whether you envision a classic spillover spa or a custom stand-alone unit, we design and build solutions that meet your specific needs and aesthetic preferences.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="mb-4">
                Our hot tub integration services include careful planning to ensure the new addition complements your existing pool and landscape. We offer a variety of sizes, shapes, and jet configurations to customize your hot tub experience.
              </p>
              <p className="mb-4">
                We also focus on energy efficiency, incorporating high-quality insulation and heating systems to ensure your hot tub is ready when you are, without excessive energy costs.
              </p>
              <p>
                From selecting the perfect location to the final plumbing and electrical connections, our experienced team manages every aspect of the installation process.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="mb-4">
                Investing in hot tub integration with BluTouch Pools & Spas means investing in years of relaxation and enjoyment.
              </p>
              <p>
                We are committed to delivering a high-quality product and a smooth installation experience, providing you with a beautiful and functional hot tub that enhances your backyard oasis.
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
                Get a Quote for Hot Tub Integration
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Primary CTA Section */}
      <section className="py-16 lg:py-24 bg-blue-700 text-white text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Add a Hot Tub to Your Pool?</h2>
            <p className="text-lg text-blue-100 mb-10">Contact us today for expert hot tub integration services in Houston.</p>
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
              <Button className="bg-blue-600 hover:bg-blue-700 text-white group-hover:shadow-lg transition-all duration-300" asChild>
                <a href="tel:8329610258">
                  <Phone className="w-4 h-4 mr-2" />
                  (832) 961-0258
                </a>
              </Button>
            </div>
          </div>
      </section>

      <Footer />
    </div>
  );
};

export default HotTubIntegration; 