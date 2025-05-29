
import React from 'react';
import { Phone, Mail, MapPin, Clock, Award, Shield, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 relative overflow-hidden">
      {/* Premium Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-600/10 to-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-6">
            <Phone className="w-4 h-4 mr-2" />
            Contact Blu Touch Pools Today!
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-8">
            Get In Touch
            <span className="block text-blue-300">With Our Team</span>
          </h2>
          <p className="text-xl text-blue-200 max-w-4xl mx-auto leading-relaxed">
            We love hearing from our community. For general questions, concerns & information - contact Blu Touch Pools now! Give us the opportunity to service your swimming pool and we will prove why we are the best pool service company around.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Enhanced Contact Form */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-10 border border-white/20 animate-slide-in shadow-2xl">
            <h3 className="text-3xl font-bold text-white mb-8">
              Get Your Free Estimate
            </h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <Input 
                  placeholder="First Name"
                  className="bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-white/60 focus:border-blue-400 h-12 rounded-xl"
                />
                <Input 
                  placeholder="Last Name"
                  className="bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-white/60 focus:border-blue-400 h-12 rounded-xl"
                />
              </div>
              <Input 
                type="email"
                placeholder="Email Address"
                className="bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-white/60 focus:border-blue-400 h-12 rounded-xl"
              />
              <Input 
                type="tel"
                placeholder="Phone Number"
                className="bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-white/60 focus:border-blue-400 h-12 rounded-xl"
              />
              <Input 
                placeholder="Project Location"
                className="bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-white/60 focus:border-blue-400 h-12 rounded-xl"
              />
              <div className="grid md:grid-cols-2 gap-4">
                <select className="bg-white/10 backdrop-blur-sm border border-white/20 text-white h-12 rounded-xl px-4 focus:border-blue-400">
                  <option value="" className="bg-blue-800">Project Type</option>
                  <option value="new" className="bg-blue-800">New Pool Construction</option>
                  <option value="renovation" className="bg-blue-800">Pool Renovation</option>
                  <option value="service" className="bg-blue-800">Pool Service</option>
                  <option value="repair" className="bg-blue-800">Repairs & Upgrades</option>
                </select>
                <select className="bg-white/10 backdrop-blur-sm border border-white/20 text-white h-12 rounded-xl px-4 focus:border-blue-400">
                  <option value="" className="bg-blue-800">Service Area</option>
                  <option value="houston" className="bg-blue-800">Houston</option>
                  <option value="pearland" className="bg-blue-800">Pearland</option>
                  <option value="alvin" className="bg-blue-800">Alvin</option>
                  <option value="friendswood" className="bg-blue-800">Friendswood</option>
                </select>
              </div>
              <Textarea 
                placeholder="Tell us about your pool project or service needs..."
                rows={4}
                className="bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-white/60 focus:border-blue-400 resize-none rounded-xl"
              />
              <Button 
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-4 text-lg font-semibold transition-all duration-500 hover:scale-105 rounded-xl h-14"
              >
                Request Free Consultation
              </Button>
            </form>
          </div>

          {/* Enhanced Contact Information */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Main Contact Card */}
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-10 border border-white/20 shadow-2xl">
              <h3 className="text-3xl font-bold text-white mb-8">
                Contact Information
              </h3>
              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-4 rounded-2xl shadow-lg">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Phone</h4>
                    <p className="text-blue-200 text-lg">(832) 961-0258</p>
                    <p className="text-blue-300 text-sm">Call for immediate assistance</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6">
                  <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-4 rounded-2xl shadow-lg">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Email</h4>
                    <p className="text-blue-200 text-lg">gary@blutouchpools.com</p>
                    <p className="text-blue-300 text-sm">Quick response guaranteed</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6">
                  <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-4 rounded-2xl shadow-lg">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Office</h4>
                    <p className="text-blue-200 text-lg">5100 Westheimer, Suite 200</p>
                    <p className="text-blue-200 text-lg">Houston, TX 77056</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Areas */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center shadow-lg">
              <h4 className="text-white font-semibold mb-4">Service Areas</h4>
              <p className="text-blue-200">Pearland • Alvin • Friendswood • Houston</p>
              <p className="text-blue-300 text-sm mt-2">& surrounding areas</p>
            </div>

            {/* Financing Options */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-8 text-center shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-4">
                Financing Available
              </h3>
              <p className="text-blue-100 mb-6">
                Make your dream pool affordable with our financing options through HFS Financial.
              </p>
              <Button 
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 font-semibold transition-all duration-300 hover:scale-105 rounded-xl"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Apply Now at HFS Financial
              </Button>
            </div>

            {/* Social Media */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center shadow-lg">
              <h4 className="text-white font-semibold mb-4">Connect With Us</h4>
              <div className="flex justify-center space-x-4">
                <Button variant="outline" size="sm" className="border-white/20 text-white hover:bg-white/10">
                  Facebook
                </Button>
                <Button variant="outline" size="sm" className="border-white/20 text-white hover:bg-white/10">
                  Instagram
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
