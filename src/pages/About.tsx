
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Award, Users, Heart, Star, CheckCircle, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <div className="min-h-screen font-inter">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-100/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-50/40 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-white shadow-lg border border-blue-100 text-blue-700 text-sm font-semibold mb-8">
              <Heart className="w-4 h-4 mr-2" />
              Experience the Blu Touch Difference
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              About 
              <span className="block text-blue-600">Blu Touch Pools</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Join the Blu Touch Pool family today and experience modern pools at affordable prices with over 10 years of expert service.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-up">
              <img 
                src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Beautiful backyard pool"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
            
            <div className="animate-fade-in-up">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Modern Pools At Affordable Prices</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Today, homeowners are busier than ever with very active lifestyles. Having a beautiful backyard pool that is ready for use every day is what you need.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Backyard pools are a luxury most homeowners desire and can provide an ideal environment for entertaining. Blu Touch Pools Service's goal is to help our customers maintain their backyard oasis in a worry-free manner.
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg">
                <Phone className="mr-2 h-5 w-5" />
                Get Started Today
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built on experience, driven by excellence, and focused on family values.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Expert Service & Attention to Detail</h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Providing proper care for your pool does not require genius; it simply requires a person that will provide consistent attention to the little details, and that is our goal at Blu Touch Pools Service LLC.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                With over 10 years' experience in the field of swimming pool maintenance, we have developed a service plan that helps us maintain sparkling pools. We also have an award-winning pool design team that specializes in new pool construction and pool remodeling.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="font-medium">Over 10 years of experience</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="font-medium">Award-winning pool design team</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="font-medium">Specialized in construction & remodeling</span>
                </div>
              </div>
            </div>
            
            <div>
              <img 
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Pool maintenance service"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Why Choose Blu Touch Pools</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We strive daily to be the "Best" pool service company throughout our area of operation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 text-center hover:shadow-2xl transition-all duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Quality Work</h3>
              <p className="text-gray-600 leading-relaxed">
                Here at Blu Touch Pools, we pride ourselves on having quality work. "The results of quality work last longer than the shock"
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 text-center hover:shadow-2xl transition-all duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Star className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Experience</h3>
              <p className="text-gray-600 leading-relaxed">
                Backed by major pool companies like Leslie's Pools, Blu Touch Pools has the experience to handle any task!
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 text-center hover:shadow-2xl transition-all duration-300">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Family Oriented</h3>
              <p className="text-gray-600 leading-relaxed">
                "My wife and I have built Blu Touch on the principle that family, our customers, comes first" – Gary Phillips, Owner
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Advantages Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Professional pool service"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
            </div>
            
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Professional Service?</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                You won't need to stand in line at a pool store or handle any chemicals yourself since we will bring the chemicals and our water chemistry knowledge right to your backyard!
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">8-Parameter Mobile Water Lab</h4>
                    <p className="text-gray-600">Our personnel are thoroughly educated to use our advanced water testing equipment.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Professional Equipment</h4>
                    <p className="text-gray-600">We're furnished with the best pool cleaning tools available in the market.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Real-Time Updates</h4>
                    <p className="text-gray-600">We let you know when we're on our way and when the service is complete.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Detailed Documentation</h4>
                    <p className="text-gray-600">Our system tracks chemistry results, dosage amounts, and before/after photos.</p>
                  </div>
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
              We proudly serve the following areas with prompt, professional & expert swimming pool maintenance and remodeling all year round.
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
            <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold rounded-lg shadow-lg">
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

export default About;
