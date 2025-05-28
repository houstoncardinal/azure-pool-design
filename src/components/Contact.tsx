
import React from 'react';
import { Phone, Mail, MapPin, Clock, Award, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-ocean-900 via-ocean-800 to-ocean-950 relative overflow-hidden">
      {/* Premium Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-ocean-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-ocean-400/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-ocean-600/10 to-ocean-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass-morphism border border-white/20 text-white text-sm font-medium mb-6">
            <Phone className="w-4 h-4 mr-2" />
            Get In Touch
          </div>
          <h2 className="text-5xl lg:text-6xl font-playfair font-bold text-white mb-8">
            Start Your Pool
            <span className="block text-ocean-300">Journey Today</span>
          </h2>
          <p className="text-xl text-ocean-200 max-w-4xl mx-auto leading-relaxed">
            Ready to transform your backyard into a luxury oasis? Contact our expert team today 
            for a comprehensive consultation and detailed project proposal.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Enhanced Contact Form */}
          <div className="glass-morphism rounded-3xl p-10 border border-white/20 animate-slide-in shadow-luxury">
            <h3 className="text-3xl font-playfair font-bold text-white mb-8">
              Get Your Free Premium Consultation
            </h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <Input 
                  placeholder="First Name"
                  className="glass-morphism border-white/20 text-white placeholder:text-white/60 focus:border-ocean-400 focus-ring h-12 rounded-xl"
                />
                <Input 
                  placeholder="Last Name"
                  className="glass-morphism border-white/20 text-white placeholder:text-white/60 focus:border-ocean-400 focus-ring h-12 rounded-xl"
                />
              </div>
              <Input 
                type="email"
                placeholder="Email Address"
                className="glass-morphism border-white/20 text-white placeholder:text-white/60 focus:border-ocean-400 focus-ring h-12 rounded-xl"
              />
              <Input 
                type="tel"
                placeholder="Phone Number"
                className="glass-morphism border-white/20 text-white placeholder:text-white/60 focus:border-ocean-400 focus-ring h-12 rounded-xl"
              />
              <Input 
                placeholder="Project Location"
                className="glass-morphism border-white/20 text-white placeholder:text-white/60 focus:border-ocean-400 focus-ring h-12 rounded-xl"
              />
              <div className="grid md:grid-cols-2 gap-4">
                <select className="glass-morphism border border-white/20 text-white bg-transparent h-12 rounded-xl px-4 focus:border-ocean-400 focus-ring">
                  <option value="" className="bg-ocean-800">Project Type</option>
                  <option value="new" className="bg-ocean-800">New Pool Construction</option>
                  <option value="renovation" className="bg-ocean-800">Pool Renovation</option>
                  <option value="features" className="bg-ocean-800">Water Features</option>
                </select>
                <select className="glass-morphism border border-white/20 text-white bg-transparent h-12 rounded-xl px-4 focus:border-ocean-400 focus-ring">
                  <option value="" className="bg-ocean-800">Budget Range</option>
                  <option value="100-200" className="bg-ocean-800">$100K - $200K</option>
                  <option value="200-300" className="bg-ocean-800">$200K - $300K</option>
                  <option value="300+" className="bg-ocean-800">$300K+</option>
                </select>
              </div>
              <Textarea 
                placeholder="Tell us about your dream pool vision..."
                rows={4}
                className="glass-morphism border-white/20 text-white placeholder:text-white/60 focus:border-ocean-400 focus-ring resize-none rounded-xl"
              />
              <Button 
                type="submit"
                className="w-full btn-premium bg-gradient-ocean hover:shadow-luxury text-white py-4 text-lg font-semibold transition-all duration-500 hover:scale-105 rounded-xl h-14"
              >
                Request Premium Consultation
              </Button>
            </form>
          </div>

          {/* Enhanced Contact Information */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Main Contact Card */}
            <div className="glass-morphism rounded-3xl p-10 border border-white/20 shadow-luxury">
              <h3 className="text-3xl font-playfair font-bold text-white mb-8">
                Contact Information
              </h3>
              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="bg-gradient-ocean p-4 rounded-2xl shadow-corporate">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Phone</h4>
                    <p className="text-ocean-200 text-lg">(555) 123-POOL</p>
                    <p className="text-ocean-300 text-sm">Available 24/7 for emergencies</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6">
                  <div className="bg-gradient-ocean p-4 rounded-2xl shadow-corporate">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Email</h4>
                    <p className="text-ocean-200 text-lg">info@blutouchpools.com</p>
                    <p className="text-ocean-300 text-sm">Response within 2 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6">
                  <div className="bg-gradient-ocean p-4 rounded-2xl shadow-corporate">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Office</h4>
                    <p className="text-ocean-200 text-lg">123 Pool Construction Blvd</p>
                    <p className="text-ocean-200 text-lg">Los Angeles, CA 90210</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6">
                  <div className="bg-gradient-ocean p-4 rounded-2xl shadow-corporate">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Business Hours</h4>
                    <p className="text-ocean-200">Monday - Friday: 8AM - 6PM</p>
                    <p className="text-ocean-200">Saturday: 9AM - 4PM</p>
                    <p className="text-ocean-300 text-sm">Sunday: By Appointment</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Premium Features Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-morphism rounded-2xl p-6 border border-white/20 text-center shadow-corporate">
                <div className="bg-gradient-ocean w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-white font-semibold mb-2">Licensed & Insured</h4>
                <p className="text-ocean-200 text-sm">Fully bonded contractors</p>
              </div>
              
              <div className="glass-morphism rounded-2xl p-6 border border-white/20 text-center shadow-corporate">
                <div className="bg-gradient-ocean w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-white font-semibold mb-2">Warranty Included</h4>
                <p className="text-ocean-200 text-sm">12-month guarantee</p>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-gradient-to-r from-ocean-600 to-ocean-700 rounded-3xl p-8 text-center shadow-luxury">
              <h3 className="text-2xl font-playfair font-bold text-white mb-4">
                24/7 Emergency Service
              </h3>
              <p className="text-ocean-100 mb-6">
                Need immediate assistance? Our emergency service team is available around the clock for urgent pool issues.
              </p>
              <Button 
                className="btn-premium bg-white text-ocean-600 hover:bg-platinum-50 px-8 py-3 font-semibold transition-all duration-300 hover:scale-105 rounded-xl"
              >
                Emergency Hotline: (555) 911-POOL
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
