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
  Wrench
} from 'lucide-react';

const service = {
  icon: Wrench,
  title: "Pool Upgrades & Repairs",
  description: "Keep your pool in peak condition and enhance its functionality and aesthetics with expert pool upgrades and repairs from BluTouch Pools & Spas in Houston. Whether your pool equipment needs fixing, you're looking to modernize your system, or the pool surface requires attention, our licensed and experienced technicians are ready to help. We provide reliable, efficient, and affordable solutions to address any issue and improve your swimming experience. Trust us to use quality parts and deliver lasting repairs and valuable upgrades that breathe new life into your pool.",
  features: [
    "Diagnostic and Repair Services for All Pool Equipment",
    "Energy-Efficient Pump and Filter Upgrades",
    "Automation System Installation and Repair",
    "Pool Surface Repair and Resurfacing (Plaster, Tile, Coping)",
    "Leak Detection and Repair",
    "Upgrades for Lighting, Heating, and Water Features",
    "Emergency Pool Repair Services in Houston"
  ],
  benefits: [
    "Extend the Lifespan of Your Pool and Equipment",
    "Improve Pool Safety and Efficiency",
    "Enhance the Appearance and Functionality of Your Pool",
    "Reduce Energy Consumption and Operating Costs",
    "Ensure Reliable Pool Operation Year-Round",
    "Increase Your Enjoyment of Your Backyard Oasis"
  ],
  price: "Competitive Rates",
  image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
};

const UpgradesRepairs = () => {
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
              Keep your pool in peak condition and enhance its functionality and aesthetics with expert pool upgrades and repairs from BluTouch Pools & Spas in Houston.
            </p>
            <p className="text-base sm:text-lg lg:text-xl text-blue-100 leading-relaxed">
              Whether your pool equipment needs fixing, you're looking to modernize your system, or the pool surface requires attention, our licensed and experienced technicians are ready to help.
            </p>
            <p className="text-base sm:text-lg lg:text-xl text-blue-100 leading-relaxed">
              We provide reliable, efficient, and affordable solutions to address any issue and improve your swimming experience.
            </p>
            <p className="text-base sm:text-lg lg:text-xl text-blue-100 leading-relaxed">
              Trust us to use quality parts and deliver lasting repairs and valuable upgrades that breathe new life into your pool.
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
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Expert Pool Repair and Upgrade Services in Houston</h2>
          <div className="prose prose-lg text-gray-700 mx-auto leading-relaxed space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="mb-4">
                Is your pool equipment malfunctioning? Do you want to enhance your pool's features or improve its energy efficiency? BluTouch Pools & Spas provides comprehensive pool repair and upgrade services throughout the Houston area.
              </p>
              <p>
                We understand that a damaged or outdated pool can detract from your enjoyment and even lead to higher operating costs. Our skilled technicians are equipped to handle everything from minor repairs to major system overhauls.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="mb-4">
                We pride ourselves on diagnosing issues quickly and accurately, offering cost-effective and durable repair solutions. We can fix or replace pumps, filters, heaters, automation systems, and other essential components.
              </p>
              <p className="mb-4">
                Beyond repairs, we offer a range of upgrade options to modernize your pool, including energy-efficient equipment that saves you money on utility bills, advanced automation systems for easy control, and aesthetic enhancements like new tile, coping, or lighting.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="mb-4">
                Whether it's a leak, a broken pump, or a desire for a complete pool renovation, BluTouch Pools & Spas is your trusted partner for reliable pool upgrades and repairs in Houston.
              </p>
              <p>
                We are committed to restoring your pool's function and beauty, ensuring it remains a source of fun and relaxation for years to come.
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
                Schedule Your Pool Service or Upgrade
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Primary CTA Section */}
      <section className="py-16 lg:py-24 bg-blue-700 text-white text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Upgrade or Repair Your Pool?</h2>
            <p className="text-lg text-blue-100 mb-10">Contact BluTouch Pools & Spas today for a consultation and a free estimate. Let us help you keep your pool in perfect condition.</p>
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

export default UpgradesRepairs; 