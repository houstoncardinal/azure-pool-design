import React from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Helmet } from 'react-helmet-async';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { useRef } from 'react';

interface Testimonial {
  author: string;
  rating: number;
  review: string;
  date: string;
  location: string;
}

const testimonials: Testimonial[] = [
  {
    author: "Jeremy B.",
    rating: 5,
    review: "Great service and response. Blue Touch Pools was able to work with my budget on building the pool of my dreams. My project was completed in 60 days! Great service and response by Gary and my project manager on the job!",
    date: "2024-03-15",
    location: "Houston, TX"
  },
  {
    author: "Luke M.",
    rating: 5,
    review: "Responsive, reliable, and friendly. Gary and his team are responsive, reliable, and friendly. He has been taking care of my pool for years. I love that they send me a text each week explaining what they did for service and send pictures!",
    date: "2024-02-28",
    location: "Pearland, TX"
  },
  {
    author: "Jarett L.",
    rating: 5,
    review: "Wouldn't consider going anywhere else. I've used blue touch pool service for years now and love every bit of it. I never have to worry if my pool will be clean as they come every week at the same time. Wouldn't consider going anywhere else.",
    date: "2024-03-01",
    location: "Friendswood, TX"
  },
  {
    author: "Chelsea L.",
    rating: 5,
    review: "Top notch business. Blu Touch Pool Service is a top notch business. If you are looking for a detailed, customer service-oriented company definitely go with Blu Touch. They also build pools if you need one.",
    date: "2024-02-15",
    location: "Houston, TX"
  },
  {
    author: "Lori M.",
    rating: 5,
    review: "Professional and courteous. The Blu Touch team are professional and courteous. They are dependable and always do a great job cleaning our pool. We have used them for several years and are very pleased with their service.",
    date: "2024-03-10",
    location: "Alvin, TX"
  }
];

const Testimonials = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  // Generate schema markup for reviews
  const reviewSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'BluTouch Pools & Spas',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: testimonials.length
    },
    review: testimonials.map(testimonial => ({
      '@type': 'Review',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: testimonial.rating.toString()
      },
      author: {
        '@type': 'Person',
        name: testimonial.author
      },
      datePublished: testimonial.date,
      reviewBody: testimonial.review,
      location: testimonial.location
    }))
  };

  return (
    <section id="testimonials" className="py-24 bg-gray-50">
      <Helmet>
        <title>Customer Reviews | BluTouch Pools & Spas - Houston's Premier Pool Builder</title>
        <meta name="description" content="Read what our satisfied customers say about BluTouch Pools & Spas - Houston's premier pool builder." />
        <script type="application/ld+json">
          {JSON.stringify(reviewSchema)}
        </script>
      </Helmet>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers about their experience with BluTouch Pools & Spas.
          </p>
        </div>

        <div className="relative w-full px-0 sm:px-4 md:px-8 lg:px-0">
          <Carousel 
            opts={{ 
              loop: true, 
              align: 'center',
              skipSnaps: false,
            }}
            className="w-full"
          >
            <CarouselContent className="gap-6 md:gap-8">
              {testimonials.map((testimonial, index) => (
                <CarouselItem
                  key={index}
                  className="px-2 sm:px-4 md:px-6 lg:px-8 basis-full md:basis-1/2 lg:basis-1/3 flex justify-center"
                >
                  <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 w-full max-w-md">
                    <CardContent className="p-8">
                      <Quote className="w-8 h-8 text-[#0983d2] mb-4" />
                      <div className="flex mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <p className="text-base sm:text-lg text-gray-600 mb-6 italic">"{testimonial.review}"</p>
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-base sm:text-lg font-semibold text-gray-900">{testimonial.author}</h4>
                          <p className="text-sm text-gray-500">{testimonial.location}</p>
                        </div>
                        <time className="text-sm text-gray-500">{testimonial.date}</time>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="absolute -left-4 sm:-left-8 top-1/2 -translate-y-1/2 z-10">
              <CarouselPrevious className="h-12 w-12 rounded-full bg-white shadow-lg border-2 border-[#0983d2] text-[#0983d2] hover:bg-[#0983d2]/10" />
            </div>
            <div className="absolute -right-4 sm:-right-8 top-1/2 -translate-y-1/2 z-10">
              <CarouselNext className="h-12 w-12 rounded-full bg-white shadow-lg border-2 border-[#0983d2] text-[#0983d2] hover:bg-[#0983d2]/10" />
            </div>
          </Carousel>

          {/* Progress Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <div
                key={index}
                className="h-2 w-2 rounded-full bg-[#0983d2]/20 transition-all duration-300"
                data-carousel-indicator={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 