import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Award, Users, Heart, Star, CheckCircle, Phone, MapPin, ArrowRight, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <div className="min-h-screen font-inter bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Main Content */}
            <div className="animate-fade-in-up">
              {/* Corporate Badge */}
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-semibold mb-8">
                <Heart className="w-4 h-4 mr-2" />
                Experience Excellence in Pool Design
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                About
                <span className="block text-blue-600">Blu Touch Pools</span>
                <span className="block text-2xl lg:text-3xl font-normal text-gray-600 mt-4">
                  Crafting Aquatic Masterpieces
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
                Join the Blu Touch Pool family today and experience modern pools at affordable prices with over 10 years of expert service. We transform ordinary backyards into extraordinary aquatic sanctuaries.
              </p>

              {/* Key Benefits */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                <div className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="font-medium">10+ Years Experience</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="font-medium">Award-Winning Design</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="font-medium">Expert Team</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="font-medium">Quality Service</span>
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call (832) 961-0258
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold rounded-lg group"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Free Consultation
                </Button>
              </div>
            </div>

            {/* Right Column - Image & Features */}
            <div className="relative animate-fade-in-up">
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Luxury swimming pool"
                  className="w-full h-64 object-cover rounded-xl mb-6"
                />
                
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Commitment to Excellence</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                      <Award className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Quality Work</h4>
                      <p className="text-gray-600 text-sm">We pride ourselves on delivering exceptional results that exceed expectations.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mt-1">
                      <Users className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Family Values</h4>
                      <p className="text-gray-600 text-sm">Built on the principle that family and customers come first.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mt-1">
                      <Star className="w-4 h-4 text-yellow-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Expert Service</h4>
                      <p className="text-gray-600 text-sm">Professional maintenance and care for your pool all year round.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="pt-12 pb-24 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-100/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-50/40 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-semibold mb-6">
              <Award className="w-4 h-4 mr-2" />
              Our Journey
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built on experience, driven by excellence, and focused on family values
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl opacity-20 blur-xl"></div>
              <div className="relative grid grid-cols-2 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Pool maintenance service"
                  className="w-full h-[300px] object-cover rounded-2xl shadow-xl"
                />
                <img 
                  src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Luxury pool design"
                  className="w-full h-[300px] object-cover rounded-2xl shadow-xl mt-8"
                />
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Expert Service & Attention to Detail</h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Providing proper care for your pool does not require genius; it simply requires a person that will provide consistent attention to the little details, and that is our goal at Blu Touch Pools Service LLC.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  With over 10 years' experience in the field of swimming pool maintenance, we have developed a service plan that helps us maintain sparkling pools. We also have an award-winning pool design team that specializes in new pool construction and pool remodeling.
                </p>
                
                <div className="grid grid-cols-2 gap-6">
                  {[
                    'State-of-the-art design technology',
                    'Certified pool professionals',
                    'Sustainable water management',
                    'Custom automation solutions'
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-blue-600" />
                      </div>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-24 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-12">
            <MapPin className="h-12 w-12 mx-auto mb-6 text-blue-200" />
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Service Areas</h2>
            <p className="text-xl text-blue-100 mb-8">
              We proudly serve the following areas with prompt, professional & expert swimming pool maintenance and remodeling all year round
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {['Pearland', 'Alvin', 'Friendswood', 'Houston'].map((city) => (
              <div key={city} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h3 className="text-2xl font-bold text-white">{city}</h3>
                <p className="text-blue-100 mt-2">& surrounding areas</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12">
            <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold rounded-lg shadow-lg group">
              <Phone className="mr-2 h-5 w-5" />
              Call (832) 961-0258
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
