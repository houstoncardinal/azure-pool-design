import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Star } from 'lucide-react';

const BrownFamilyProject = () => {
  return (
    <div className="min-h-screen font-inter bg-gray-50">
      <Navbar />
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="animate-fade-in-up">
              <img 
                src="/brown-family-pool.jpg"
                alt="Brown Family Project Pool"
                className="w-full h-[400px] object-cover rounded-2xl shadow-2xl border border-gray-200"
              />
            </div>
            {/* Details */}
            <div className="animate-fade-in-up">
              <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Brown Family Project
              </h1>
              <div className="flex items-center text-gray-500 text-lg mb-4">
                <MapPin className="w-5 h-5 mr-2" />
                Houston, TX
              </div>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                This custom pool and spa project for the Brown family features a modern design, integrated hot tub, and a luxurious sun shelf. The project was completed in just 60 days, delivering a backyard oasis perfect for relaxation and entertainment.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-700 text-lg"><Star className="w-4 h-4 text-blue-500 mr-2" /> In-Ground Pool</li>
                <li className="flex items-center text-gray-700 text-lg"><Star className="w-4 h-4 text-blue-500 mr-2" /> Hot Tub Integration</li>
                <li className="flex items-center text-gray-700 text-lg"><Star className="w-4 h-4 text-blue-500 mr-2" /> Modern Design</li>
                <li className="flex items-center text-gray-700 text-lg"><Star className="w-4 h-4 text-blue-500 mr-2" /> Sun Shelf & Stepping Stones</li>
                <li className="flex items-center text-gray-700 text-lg"><Star className="w-4 h-4 text-blue-500 mr-2" /> Premium Finishes</li>
              </ul>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg">
                Request a Similar Design
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* Highlights Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="rounded-2xl shadow-xl border border-gray-100">
            <CardContent className="p-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Project Highlights</h2>
              <ul className="grid md:grid-cols-2 gap-8 text-lg text-gray-700">
                <li><b>Timeline:</b> 60 days from start to finish</li>
                <li><b>Client Satisfaction:</b> 5/5 Stars</li>
                <li><b>Special Features:</b> Sun shelf, integrated spa, stepping stones, premium tile & coping</li>
                <li><b>Purpose:</b> Family relaxation, entertaining guests, and modern backyard aesthetics</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
      {/* Testimonial Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Client Testimonial</h3>
          <p className="text-xl text-gray-700 italic mb-6">
            "Great service and response. Blue Touch Pools was able to work with my budget on building the pool of my dreams. My project was completed in 60 days! Great service and response by Gary and my project manager on the job!"
          </p>
          <div className="flex justify-center mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400 mr-1" />
            ))}
          </div>
          <p className="font-semibold text-gray-900">- Jeremy B.</p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default BrownFamilyProject; 