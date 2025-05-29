
import React from 'react';
import { Phone, Mail, MapPin, Clock, Award, Shield, ExternalLink, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Subtle Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-50/40 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-50/20 to-blue-100/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Premium Section Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-white shadow-lg border border-blue-100 text-blue-700 text-sm font-semibold mb-8">
            <Phone className="w-4 h-4 mr-2" />
            Premium Pool Services & Custom Design
          </div>
          <h2 className="text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
            Get In Touch
            <span className="block text-blue-600 text-5xl lg:text-6xl mt-2">With Our Team</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Transform your backyard into a luxury oasis. Our expert team of designers and craftsmen are ready to bring your dream pool to life with personalized consultation and premium service.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-16 items-start">
          {/* Luxury Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-12 relative overflow-hidden">
              {/* Subtle accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600"></div>
              
              <div className="mb-10">
                <h3 className="text-4xl font-bold text-gray-900 mb-4">
                  Request Your Free Consultation
                </h3>
                <p className="text-lg text-gray-600">
                  Let's discuss your vision and create a custom pool design that exceeds your expectations.
                </p>
              </div>

              <form className="space-y-8">
                {/* Name Fields */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      First Name
                    </label>
                    <div className="relative">
                      <Input 
                        placeholder="Enter your first name"
                        className="w-full bg-transparent border-0 border-b-2 border-gray-200 rounded-none px-0 py-4 text-lg focus:border-blue-600 focus:ring-0 transition-all duration-300 placeholder:text-gray-400"
                      />
                    </div>
                  </div>
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Last Name
                    </label>
                    <div className="relative">
                      <Input 
                        placeholder="Enter your last name"
                        className="w-full bg-transparent border-0 border-b-2 border-gray-200 rounded-none px-0 py-4 text-lg focus:border-blue-600 focus:ring-0 transition-all duration-300 placeholder:text-gray-400"
                      />
                    </div>
                  </div>
                </div>

                {/* Contact Fields */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Email Address
                    </label>
                    <div className="relative">
                      <Input 
                        type="email"
                        placeholder="your.email@example.com"
                        className="w-full bg-transparent border-0 border-b-2 border-gray-200 rounded-none px-0 py-4 text-lg focus:border-blue-600 focus:ring-0 transition-all duration-300 placeholder:text-gray-400"
                      />
                    </div>
                  </div>
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Input 
                        type="tel"
                        placeholder="(832) 555-0123"
                        className="w-full bg-transparent border-0 border-b-2 border-gray-200 rounded-none px-0 py-4 text-lg focus:border-blue-600 focus:ring-0 transition-all duration-300 placeholder:text-gray-400"
                      />
                    </div>
                  </div>
                </div>

                {/* Project Location */}
                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Project Location
                  </label>
                  <div className="relative">
                    <Input 
                      placeholder="Houston, Pearland, Alvin, Friendswood, etc."
                      className="w-full bg-transparent border-0 border-b-2 border-gray-200 rounded-none px-0 py-4 text-lg focus:border-blue-600 focus:ring-0 transition-all duration-300 placeholder:text-gray-400"
                    />
                  </div>
                </div>

                {/* Service Selection */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Service Type
                    </label>
                    <div className="relative">
                      <select className="w-full bg-transparent border-0 border-b-2 border-gray-200 rounded-none px-0 py-4 text-lg focus:border-blue-600 focus:ring-0 transition-all duration-300 text-gray-700 appearance-none cursor-pointer">
                        <option value="" className="text-gray-400">Select service type</option>
                        <option value="new">New Pool Construction</option>
                        <option value="renovation">Pool Renovation</option>
                        <option value="service">Pool Service & Maintenance</option>
                        <option value="repair">Repairs & Upgrades</option>
                        <option value="spa">Custom Spa Design</option>
                      </select>
                    </div>
                  </div>
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Timeline
                    </label>
                    <div className="relative">
                      <select className="w-full bg-transparent border-0 border-b-2 border-gray-200 rounded-none px-0 py-4 text-lg focus:border-blue-600 focus:ring-0 transition-all duration-300 text-gray-700 appearance-none cursor-pointer">
                        <option value="" className="text-gray-400">Project timeline</option>
                        <option value="immediate">ASAP - Emergency Service</option>
                        <option value="1-3months">1-3 months</option>
                        <option value="3-6months">3-6 months</option>
                        <option value="6-12months">6-12 months</option>
                        <option value="planning">Just planning ahead</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Tell Us About Your Vision
                  </label>
                  <div className="relative">
                    <Textarea 
                      placeholder="Describe your dream pool, spa, or service needs. Include any specific features, size requirements, or concerns you'd like to discuss..."
                      rows={5}
                      className="w-full bg-transparent border-0 border-b-2 border-gray-200 rounded-none px-0 py-4 text-lg focus:border-blue-600 focus:ring-0 transition-all duration-300 placeholder:text-gray-400 resize-none"
                    />
                  </div>
                </div>

                {/* Premium CTA Button */}
                <div className="pt-8">
                  <Button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-6 text-xl font-semibold transition-all duration-500 hover:scale-[1.02] rounded-2xl shadow-xl hover:shadow-2xl relative overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative flex items-center justify-center">
                      <Send className="mr-3 h-6 w-6" />
                      Request Free Consultation & Quote
                    </div>
                  </Button>
                  <p className="text-center text-sm text-gray-500 mt-4">
                    We'll respond within 2 hours during business hours
                  </p>
                </div>
              </form>
            </div>
          </div>

          {/* Enhanced Contact Information Sidebar */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Main Contact Card */}
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Phone className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Immediate Assistance
                </h3>
                <p className="text-gray-600">Call us for urgent pool needs</p>
              </div>
              
              <div className="space-y-6">
                <div className="text-center p-6 bg-blue-50 rounded-2xl border border-blue-100">
                  <p className="text-3xl font-bold text-blue-600 mb-2">(832) 961-0258</p>
                  <p className="text-sm text-blue-700 font-medium">Available 7 Days a Week</p>
                </div>
                
                <div className="text-center p-6 bg-gray-50 rounded-2xl">
                  <Mail className="h-6 w-6 text-gray-600 mx-auto mb-2" />
                  <p className="text-lg font-semibold text-gray-900">gary@blutouchpools.com</p>
                  <p className="text-sm text-gray-600">Quick email response</p>
                </div>
                
                <div className="text-center p-6 bg-gray-50 rounded-2xl">
                  <MapPin className="h-6 w-6 text-gray-600 mx-auto mb-2" />
                  <p className="font-semibold text-gray-900">5100 Westheimer, Suite 200</p>
                  <p className="text-gray-600">Houston, TX 77056</p>
                </div>
              </div>
            </div>

            {/* Service Promise */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-8 text-white text-center shadow-2xl">
              <Award className="h-12 w-12 mx-auto mb-4 text-blue-200" />
              <h4 className="text-xl font-bold mb-3">Our Promise</h4>
              <p className="text-blue-100 mb-4 text-sm leading-relaxed">
                Free estimates, 3D reality view, and personalized consultations for every project in Pearland, Alvin, Friendswood, Houston and surrounding areas.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="bg-white/10 rounded-lg p-3">
                  <p className="font-semibold">Licensed</p>
                  <p className="text-blue-200">& Insured</p>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <p className="font-semibold">25+ Years</p>
                  <p className="text-blue-200">Experience</p>
                </div>
              </div>
            </div>

            {/* Financing */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 text-center">
              <h4 className="font-bold text-gray-900 mb-3">Financing Available</h4>
              <p className="text-gray-600 text-sm mb-4">
                Make your dream pool affordable with financing through HFS Financial.
              </p>
              <Button 
                className="w-full bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 rounded-xl transition-all duration-300"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Apply for Financing
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
