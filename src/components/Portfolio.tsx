import React from 'react';
import { ExternalLink, MapPin, Star, Award, ArrowRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Brown Family Project",
      location: "Houston, TX",
      image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Custom Pool & Spa",
      features: ["In-Ground Pool", "Hot Tub Integration", "Modern Design"]
    },
    {
      id: 2,
      title: "Robinson Family Project",
      location: "Pearland, TX",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Luxury Pool",
      features: ["Custom Design", "3-D Planning", "Premium Finishes"]
    },
    {
      id: 3,
      title: "Rucker Family Project",
      location: "Friendswood, TX",
      image: "https://images.unsplash.com/photo-1562778612-e1e0cda9915c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Backyard Oasis",
      features: ["Modern Pool", "Landscape Integration", "Entertainment Space"]
    }
  ];

  const testimonials = [
    {
      name: "Jeremy B.",
      review: "Great service and response. Blue Touch Pools was able to work with my budget on building the pool of my dreams. My project was completed in 60 days! Great service and response by Gary and my project manager on the job!"
    },
    {
      name: "Luke M.",
      review: "Responsive, reliable, and friendly. Gary and his team are responsive, reliable, and friendly. He has been taking care of my pool for years. I love that they send me a text each week explaining what they did for service and send pictures!"
    },
    {
      name: "Jarett L.",
      review: "Wouldn't consider going anywhere else. I've used blue touch pool service for years now and love every bit of it. I never have to worry if my pool will be clean as they come every week at the same time. Wouldn't consider going anywhere else."
    },
    {
      name: "Chelsea L.",
      review: "Top notch business. Blu Touch Pool Service is a top notch business. If you are looking for a detailed, customer service-oriented company definitely go with Blu Touch. They also build pools if you need one."
    },
    {
      name: "Lori M.",
      review: "Professional and courteous. The Blu Touch team are professional and courteous. They are dependable and always do a great job cleaning our pool. We have used them for several years and are very pleased with their service."
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-6">
            <Award className="w-4 h-4 mr-2" />
            Client Projects
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            No matter the size of your backyard, we can create a luxury pool and hot tub design that will shape perfectly to fit. Here are some of our recent client projects.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:-translate-y-1"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {project.category}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-2">
                  <MapPin className="w-4 h-4 mr-1" />
                  {project.location}
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{project.title}</h3>
                
                {/* Features */}
                <div className="space-y-2 mb-4">
                  {project.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-600">
                      <Star className="w-3 h-3 mr-2 text-blue-500" />
                      {feature}
                    </div>
                  ))}
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 group"
                  asChild
                >
                  <a href={project.title === 'Brown Family Project' ? '/BrownFamilyProject' : '#'}>
                    View Details
                    <ExternalLink className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Client Testimonials Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Client Testimonials</h3>
            <p className="text-xl text-gray-600">What our satisfied customers are saying about Blu Touch Pools</p>
          </div>
          
          {/* Carousel for Testimonials - Full Width & Responsive */}
          <div className="relative w-full px-0 sm:px-4 md:px-8 lg:px-0">
            <Carousel opts={{ loop: true, align: 'center' }}>
              <CarouselContent className="gap-6 md:gap-8">
                {testimonials.map((testimonial, index) => (
                  <CarouselItem
                    key={index}
                    className="px-2 sm:px-4 md:px-6 lg:px-8 basis-full md:basis-1/2 lg:basis-1/3 flex justify-center"
                  >
                    <div className="bg-gray-50 rounded-2xl p-4 sm:p-6 md:p-8 border border-gray-200 shadow-lg flex flex-col items-center w-full h-full max-w-md transition-all duration-500 ease-in-out">
                      <Quote className="w-8 h-8 text-blue-600 mb-4" />
                      <div className="flex mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400 mr-1" />
                        ))}
                      </div>
                      <p className="text-gray-700 mb-4 italic text-center">"{testimonial.review}"</p>
                      <p className="font-semibold text-gray-900">- {testimonial.name}</p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>

        {/* Enhanced View More Section */}
        <div className="bg-gray-50 rounded-2xl p-12 text-center border border-gray-200">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Start Your Pool Project Today
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            We love hearing from our community. For general questions, concerns & information - contact Blu Touch Pools now! Give us the opportunity to service your swimming pool and we will prove why we are the best pool service company around.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Button 
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 font-semibold group"
            >
              Contact Us Today
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              size="lg"
              variant="outline" 
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 font-semibold"
            >
              Free Estimate
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
