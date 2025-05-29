import React from 'react';
import { Phone, Mail, MapPin, Clock, Award, Shield, ExternalLink, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Subtle Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-50/40 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-50/20 to-blue-100/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Premium Section Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
          <div className="inline-flex items-center px-3 sm:px-6 py-2 sm:py-3 rounded-full bg-white shadow-lg border border-blue-100 text-blue-700 text-sm font-semibold mb-6 sm:mb-8">
            <Phone className="w-4 h-4 mr-2" />
            Premium Pool Services & Custom Design
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            Get In Touch
            <span className="block text-blue-600 text-3xl sm:text-4xl lg:text-5xl mt-2">With Our Team</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Transform your backyard into a luxury oasis. Our expert team of designers and craftsmen are ready to bring your dream pool to life with personalized consultation and premium service.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 sm:gap-12 lg:gap-16 items-start">
          {/* Luxury Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl sm:rounded-3xl shadow-lg sm:shadow-2xl border border-gray-100 p-4 sm:p-8 lg:p-12 relative overflow-hidden">
              {/* Subtle accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600"></div>
              
              <div className="mb-6 sm:mb-10">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                  Request Your Free Consultation
                </h3>
                <p className="text-base sm:text-lg text-gray-600">
                  Let's discuss your vision and create a custom pool design that exceeds your expectations.
                </p>
              </div>

              <form className="space-y-5 sm:space-y-8">
                {/* Name Fields */}
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-2 sm:mb-3">
                      First Name
                    </label>
                    <div className="relative">
                      <Input 
                        placeholder="Enter your first name"
                        className="w-full bg-transparent border-0 border-b-2 border-gray-200 rounded-none px-0 py-3 sm:py-4 text-base sm:text-lg focus:border-blue-600 focus:ring-0 transition-all duration-300 placeholder:text-gray-400"
                      />
                    </div>
                  </div>
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-2 sm:mb-3">
                      Last Name
                    </label>
                    <div className="relative">
                      <Input 
                        placeholder="Enter your last name"
                        className="w-full bg-transparent border-0 border-b-2 border-gray-200 rounded-none px-0 py-3 sm:py-4 text-base sm:text-lg focus:border-blue-600 focus:ring-0 transition-all duration-300 placeholder:text-gray-400"
                      />
                    </div>
                  </div>
                </div>

                {/* Contact Fields */}
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-2 sm:mb-3">
                      Email Address
                    </label>
                    <div className="relative">
                      <Input 
                        type="email"
                        placeholder="your.email@example.com"
                        className="w-full bg-transparent border-0 border-b-2 border-gray-200 rounded-none px-0 py-3 sm:py-4 text-base sm:text-lg focus:border-blue-600 focus:ring-0 transition-all duration-300 placeholder:text-gray-400"
                      />
                    </div>
                  </div>
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-2 sm:mb-3">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Input 
                        type="tel"
                        placeholder="(832) 555-0123"
                        className="w-full bg-transparent border-0 border-b-2 border-gray-200 rounded-none px-0 py-3 sm:py-4 text-base sm:text-lg focus:border-blue-600 focus:ring-0 transition-all duration-300 placeholder:text-gray-400"
                      />
                    </div>
                  </div>
                </div>

                {/* Project Location */}
                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2 sm:mb-3">
                    Project Location
                  </label>
                  <div className="relative">
                    <Input 
                      placeholder="Houston, Pearland, Alvin, Friendswood, etc."
                      className="w-full bg-transparent border-0 border-b-2 border-gray-200 rounded-none px-0 py-3 sm:py-4 text-base sm:text-lg focus:border-blue-600 focus:ring-0 transition-all duration-300 placeholder:text-gray-400"
                    />
                  </div>
                </div>

                {/* Service Selection */}
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-2 sm:mb-3">
                      Service Type
                    </label>
                    <div className="relative">
                      <select className="w-full bg-transparent border-0 border-b-2 border-gray-200 rounded-none px-0 py-3 sm:py-4 text-base sm:text-lg focus:border-blue-600 focus:ring-0 transition-all duration-300 text-gray-700 appearance-none cursor-pointer">
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
                    <label className="block text-sm font-semibold text-gray-700 mb-2 sm:mb-3">
                      Timeline
                    </label>
                    <div className="relative">
                      <select className="w-full bg-transparent border-0 border-b-2 border-gray-200 rounded-none px-0 py-3 sm:py-4 text-base sm:text-lg focus:border-blue-600 focus:ring-0 transition-all duration-300 text-gray-700 appearance-none cursor-pointer">
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
                  <label className="block text-sm font-semibold text-gray-700 mb-2 sm:mb-3">
                    Tell Us About Your Vision
                  </label>
                  <div className="relative">
                    <Textarea 
                      placeholder="Describe your dream pool, spa, or service needs. Include any specific features, size requirements, or concerns you'd like to discuss..."
                      rows={4}
                      className="w-full bg-transparent border-0 border-b-2 border-gray-200 rounded-none px-0 py-3 sm:py-4 text-base sm:text-lg focus:border-blue-600 focus:ring-0 transition-all duration-300 placeholder:text-gray-400 resize-none"
                    />
                  </div>
                </div>

                {/* Premium CTA Button */}
                <div className="pt-4 sm:pt-8">
                  <Button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3 sm:py-6 text-base sm:text-xl font-semibold transition-all duration-500 hover:scale-[1.02] rounded-lg sm:rounded-2xl shadow-lg sm:shadow-xl hover:shadow-2xl relative overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative flex items-center justify-center">
                      <Send className="mr-2 sm:mr-3 h-4 w-4 sm:h-6 sm:w-6" />
                      Request Free Consultation & Quote
                    </div>
                  </Button>
                  <p className="text-center text-xs sm:text-sm text-gray-500 mt-2 sm:mt-4">
                    We'll respond within 2 hours during business hours
                  </p>
                </div>
              </form>
            </div>
          </div>

          {/* Enhanced Contact Information Sidebar */}
          <div className="space-y-4 sm:space-y-8 animate-fade-in-up">
            {/* Main Contact Card */}
            <div className="bg-white rounded-xl sm:rounded-3xl shadow-lg sm:shadow-2xl border border-gray-100 p-4 sm:p-8">
              <div className="text-center mb-4 sm:mb-8">
                <div className="w-14 h-14 sm:w-20 sm:h-20 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Phone className="h-6 w-6 sm:h-10 sm:w-10 text-white" />
                </div>
                <h3 className="text-lg sm:text-2xl font-bold text-gray-900 mb-2">
                  Immediate Assistance
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">Call us for urgent pool needs</p>
              </div>
              
              <div className="space-y-3 sm:space-y-6">
                <div className="text-center p-3 sm:p-6 bg-blue-50 rounded-lg sm:rounded-2xl border border-blue-100">
                  <p className="text-xl sm:text-3xl font-bold text-blue-600 mb-1 sm:mb-2">(832) 961-0258</p>
                  <p className="text-xs sm:text-sm text-blue-700 font-medium">Available 7 Days a Week</p>
                </div>
                
                <div className="text-center p-3 sm:p-6 bg-gray-50 rounded-lg sm:rounded-2xl">
                  <Mail className="h-4 w-4 sm:h-6 sm:w-6 text-gray-600 mx-auto mb-2" />
                  <p className="text-sm sm:text-lg font-semibold text-gray-900">gary@blutouchpools.com</p>
                  <p className="text-xs sm:text-sm text-gray-600">Quick email response</p>
                </div>
                
                <div className="text-center p-3 sm:p-6 bg-gray-50 rounded-lg sm:rounded-2xl">
                  <MapPin className="h-4 w-4 sm:h-6 sm:w-6 text-gray-600 mx-auto mb-2" />
                  <p className="text-sm sm:text-base font-semibold text-gray-900">5100 Westheimer, Suite 200</p>
                  <p className="text-xs sm:text-sm text-gray-600">Houston, TX 77056</p>
                </div>
              </div>
            </div>

            {/* Service Promise */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl sm:rounded-3xl p-4 sm:p-8 text-white text-center shadow-lg sm:shadow-2xl">
              <Award className="h-8 w-8 sm:h-12 sm:w-12 mx-auto mb-3 sm:mb-4 text-blue-200" />
              <h4 className="text-base sm:text-xl font-bold mb-2 sm:mb-3">Our Promise</h4>
              <p className="text-blue-100 mb-3 sm:mb-4 text-xs sm:text-sm leading-relaxed">
                Free estimates, 3D reality view, and personalized consultations for every project in Pearland, Alvin, Friendswood, Houston and surrounding areas.
              </p>
              <div className="grid grid-cols-2 gap-2 sm:gap-4 text-xs sm:text-sm">
                <div className="bg-white/10 rounded-lg p-2 sm:p-3">
                  <p className="font-semibold">Licensed</p>
                  <p className="text-blue-200">& Insured</p>
                </div>
                <div className="bg-white/10 rounded-lg p-2 sm:p-3">
                  <p className="font-semibold">25+ Years</p>
                  <p className="text-blue-200">Experience</p>
                </div>
              </div>
            </div>

            {/* Financing */}
            <div className="bg-white rounded-lg sm:rounded-2xl shadow-lg border border-gray-100 p-3 sm:p-6 text-center">
              <h4 className="font-bold text-gray-900 mb-2 sm:mb-3 text-sm sm:text-base">Financing Available</h4>
              <p className="text-gray-600 text-xs sm:text-sm mb-2 sm:mb-4">
                Make your dream pool affordable with financing through HFS Financial.
              </p>
              <Button 
                className="w-full bg-gray-900 hover:bg-gray-800 text-white font-semibold py-2 sm:py-3 rounded-lg sm:rounded-xl transition-all duration-300 text-sm sm:text-base"
              >
                <ExternalLink className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
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
