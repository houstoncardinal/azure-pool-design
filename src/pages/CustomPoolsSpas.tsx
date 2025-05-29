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
  Waves
} from 'lucide-react';

const service = {
  icon: Waves,
  title: "Custom Pools & Spas",
  description: "Transform your backyard into a breathtaking retreat with a custom pool and spa designed and built by Blu Touch Pools. We specialize in creating unique aquatic masterpieces that perfectly complement your home's architecture and your personal style. From initial consultation and innovative 3D design to meticulous construction and final touches, our expert team in Houston ensures a seamless and enjoyable process. We use high-quality materials and the latest building techniques to deliver a durable, beautiful, and luxurious swimming environment tailored specifically for you.",
  features: [
    "Personalized 3D Pool Design in Houston", // SEO Keyword
    "Comprehensive Site Evaluation and Consultation",
    "Selection of Premium Construction Materials",
    "Integration of Luxury Pool Features (waterfalls, lighting, etc.)",
    "Efficient and Professional Construction Process",
    "Custom In-Ground Pool and Spa Builds",
    "Detailed Project Management and Communication"
  ],
  benefits: [
    "Increase Home Value and Appeal in Houston", // SEO Keyword
    "Create a Unique Backyard Oasis for Relaxation and Entertainment",
    "Enjoy a Swimming Environment Tailored to Your Needs",
    "Benefit from Expert Craftsmanship and Quality Construction",
    "Experience a Smooth and Stress-Free Building Process",
    "Gain Access to the Latest Pool Technology and Features"
  ],
  price: "Free Estimates",
  image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
};

const CustomPoolsSpas = () => {
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
              Transform your backyard into a breathtaking retreat with a custom pool and spa designed and built by Blu Touch Pools.
            </p>
            <p className="text-base sm:text-lg lg:text-xl text-blue-100 leading-relaxed">
              We specialize in creating unique aquatic masterpieces that perfectly complement your home's architecture and your personal style.
            </p>
            <p className="text-base sm:text-lg lg:text-xl text-blue-100 leading-relaxed">
              From initial consultation and innovative 3D design to meticulous construction and final touches, our expert team in Houston ensures a seamless and enjoyable process.
            </p>
            <p className="text-base sm:text-lg lg:text-xl text-blue-100 leading-relaxed">
              We use high-quality materials and the latest building techniques to deliver a durable, beautiful, and luxurious swimming environment tailored specifically for you.
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
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Your Dream Pool, Crafted with Expertise in Houston</h2>
          <div className="prose prose-lg text-gray-700 mx-auto leading-relaxed space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="mb-4">
                Building a custom pool is a significant investment, and choosing the right partner is crucial. At Blu Touch Pools, we bring years of experience and a passion for creating stunning, functional, and enduring custom pools and spas across the greater Houston area.
              </p>
              <p>
                Our process is collaborative and transparent, ensuring your vision is brought to life with precision and care.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="mb-4">
                We understand the unique climate and soil conditions in Houston, which allows us to build pools that are not only beautiful but also structurally sound and built to last.
              </p>
              <p className="mb-4">
                Our designers stay updated on the latest trends in pool design, from modern geometric shapes to naturalistic freeform pools. We integrate features like infinity edges, tanning ledges, and custom water features.
              </p>
              <p>
                We also specialize in integrating luxurious spas that provide a perfect spot for relaxation and hydrotherapy.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="mb-4">
                Our commitment to quality extends to the materials we use, from the tile and coping to the interior finish and decking.
              </p>
              <p className="mb-4">
                We help you select the best options to fit your aesthetic preferences and budget, ensuring a cohesive and visually appealing outdoor living space.
              </p>
              <p>
                With Blu Touch Pools, you're not just getting a pool; you're getting a personalized outdoor retreat designed for years of enjoyment.
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
                Request a Free 3D Design Consultation 
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Primary CTA Section */}
      <section className="py-16 lg:py-24 bg-blue-700 text-white text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Build Your Custom Pool or Spa?</h2>
            <p className="text-lg text-blue-100 mb-10">Contact Blu Touch Pools today for a personalized consultation and a free estimate. Let us help you create the backyard oasis of your dreams.</p>
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

export default CustomPoolsSpas; 