import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { 
  CheckCircle,
  Star,
  MapPin,
  Tag,
  Ruler,
  Droplets,
  Zap,
  Sparkles,
  Calendar,
  Phone,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const JonesFamilyProject = () => {
  const project = {
    id: 'jones-family-project',
    title: 'Jones Family Project',
    subtitle: 'Modern Pool with Raised Spa and Fire Features',
    description: 'A stunning modern pool and raised spa built for the Jones family, featuring dramatic fire bowls, integrated LED lighting, and a spacious patio area perfect for entertaining. This project highlights contemporary design elements and seamless integration with the scenic lake view.',
    location: 'Houston, TX',
    category: 'Custom Pool & Spa',
    size: 'Custom Design',
    features: [
      'Modern Geometric Design',
      'Raised Spa with Spillover',
      'Integrated Fire Bowls',
      'LED Pool and Spa Lighting',
      'Spacious Concrete Decking',
      'Scenic Lake View Integration'
    ],
    benefits: [
      'Enhanced Outdoor Entertainment',
      'Relaxing Spa Experience',
      'Dramatic Evening Ambiance',
      'Increased Property Value',
      'Year-Round Enjoyment',
      'Beautiful Aesthetics'
    ],
    images: [
      '/jones-family-pool-day-1.jpg',
      '/jones-family-pool-night-1.jpg',
      '/jones-family-pool-sunset.jpg',
      '/jones-family-pool-day-2.jpg',
      '/jones-family-pool-night-2.JPG',
    ]
  };

  return (
    <div className="min-h-screen font-inter bg-white">
      <Navbar />

      {/* Hero Section / Project Title */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 pt-28 sm:pt-32 pb-12 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-50/50 via-transparent to-transparent"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-white border border-blue-100 text-blue-700 text-sm font-semibold mb-4 shadow-sm">
            <Sparkles className="w-4 h-4 mr-2" />
            Featured Project
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 leading-tight">
            {project.title}
          </h1>
          <p className="text-xl text-blue-600 font-medium mb-6">{project.subtitle}</p>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            {project.description}
          </p>
        </div>
      </section>

      {/* Project Details Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Details */}
          <div className="lg:col-span-1 space-y-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 sm:p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Project Overview</h2>
                <div className="space-y-4">
                  <div className="flex items-center text-gray-700">
                    <MapPin className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                    <div>
                      <span className="font-semibold">Location:</span> {project.location}
                    </div>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Tag className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                    <div>
                      <span className="font-semibold">Category:</span> {project.category}
                    </div>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Ruler className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                    <div>
                      <span className="font-semibold">Size:</span> {project.size}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 sm:p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h2>
                <ul className="space-y-3">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 sm:p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Benefits</h2>
                <ul className="space-y-3">
                  {project.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <Star className="w-5 h-5 text-yellow-500 mr-3 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Call to Action */}
            <div className="bg-blue-600 rounded-xl shadow-xl p-6 sm:p-8 text-white text-center">
              <h3 className="text-xl font-bold mb-4">Ready to Start Your Project?</h3>
              <p className="text-blue-100 mb-6">Contact us today for a free consultation and 3D design.</p>
              <div className="flex flex-col space-y-4">
                <Button 
                  className="bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 px-6 shadow-md"
                  asChild
                >
                  <Link to="/get-quote">
                    <Calendar className="mr-2 h-5 w-5" />
                    Get a Free Quote
                  </Link>
                </Button>
                <Button 
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white/10 font-semibold py-3 px-6"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call (832) 961-0258
                </Button>
              </div>
            </div>
          </div>

          {/* Right Column - Image Gallery */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-lg overflow-hidden">
              <CardContent className="p-0">
                <Carousel className="w-full">
                  <CarouselContent>
                    {project.images.map((image, index) => (
                      <CarouselItem key={index}>
                        <div className="relative aspect-w-16 aspect-h-9">
                          <img
                            src={image}
                            alt={`${project.title} Image ${index + 1}`}
                            className="w-full h-auto object-cover"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-4" />
                  <CarouselNext className="right-4" />
                </Carousel>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default JonesFamilyProject; 