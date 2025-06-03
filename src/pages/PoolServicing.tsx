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
  Sparkles
} from 'lucide-react';

const service = {
  icon: Sparkles,
  title: "Routine Pool Servicing & Maintenance",
  description: "Ensure the longevity and pristine condition of your pool with expert routine pool servicing and maintenance from BluTouch Pools & Spas in Houston. Our comprehensive service plans are designed to take the hassle out of pool ownership, providing you with peace of mind and more time to enjoy your investment. Our experienced technicians perform thorough cleaning, chemical balancing, equipment checks, and more, tailored to the specific needs of your pool.",
  features: [
    "Weekly and Bi-Weekly Pool Cleaning Options",
    "Expert Chemical Testing and Balancing",
    "Skimming, Brushing, and Vacuuming",
    "Pool Equipment Inspection and Minor Adjustments",
    "Filter Cleaning and Backwashing",
    "Detailed Service Reports After Each Visit",
    "Seasonal Pool Opening and Closing Services"
  ],
  benefits: [
    "Maintain Optimal Water Quality and Safety",
    "Prevent Costly Equipment Issues Through Regular Checks",
    "Save Time and Effort on Pool Maintenance",
    "Extend the Life of Your Pool and Equipment",
    "Enjoy a Consistently Clean and Inviting Pool",
    "Receive Professional Service from Trusted Technicians in Houston"
  ],
  price: "Weekly Service",
  image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
};

const PoolServicing = () => {
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
              Ensure the longevity and pristine condition of your pool with expert routine pool servicing and maintenance from BluTouch Pools & Spas in Houston.
            </p>
            <p className="text-base sm:text-lg lg:text-xl text-blue-100 leading-relaxed">
              Our comprehensive service plans are designed to take the hassle out of pool ownership, providing you with peace of mind and more time to enjoy your investment.
            </p>
            <p className="text-base sm:text-lg lg:text-xl text-blue-100 leading-relaxed">
              Our experienced technicians perform thorough cleaning, chemical balancing, equipment checks, and more, tailored to the specific needs of your pool.
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
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Comprehensive Pool Maintenance for a Pristine Pool in Houston</h2>
          <div className="prose prose-lg text-gray-700 mx-auto leading-relaxed space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="mb-4">
                Maintaining a pool requires consistent effort and expertise. Our routine pool servicing plans in Houston are designed to keep your pool in pristine condition, allowing you to relax and enjoy it without the worry of upkeep.
              </p>
              <p>
                We offer flexible scheduling options, including weekly and bi-weekly visits, to fit your needs.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="mb-4">
                Our trained technicians follow a detailed checklist during each service visit, which includes testing and balancing water chemistry, skimming debris from the surface, brushing walls and steps, and vacuuming the pool floor.
              </p>
              <p className="mb-4">
                We also inspect your pool equipment, such as the pump, filter, and heater, to identify potential issues early on and ensure everything is running efficiently.
              </p>
              <p>
                Proper chemical balance is crucial for water safety and comfort, and our experts use precise measurements and adjustments to maintain ideal levels.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="mb-4">
                Choosing BluTouch Pools & Spas for your routine servicing means choosing reliability and quality.
              </p>
              <p>
                We are dedicated to providing thorough and consistent care, ensuring your pool is always ready for use. Let us handle the maintenance so you can focus on making memories by the poolside.
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
                Get a Quote for Routine Pool Maintenance
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Primary CTA Section */}
      <section className="py-16 lg:py-24 bg-blue-700 text-white text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Schedule Your Pool Servicing?</h2>
            <p className="text-lg text-blue-100 mb-10">Contact BluTouch Pools & Spas today to set up a regular maintenance plan and enjoy a clean, healthy pool year-round.</p>
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

export default PoolServicing; 