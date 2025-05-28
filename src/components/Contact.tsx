
import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-ocean-900 to-ocean-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-white mb-6">
            Start Your Pool Journey
          </h2>
          <p className="text-xl text-ocean-200 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your backyard into a luxury oasis? Contact our team today 
            for a consultation and detailed project proposal.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 animate-slide-in">
            <h3 className="text-2xl font-playfair font-bold text-white mb-6">
              Get Your Free Consultation
            </h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <Input 
                  placeholder="First Name"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-ocean-400"
                />
                <Input 
                  placeholder="Last Name"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-ocean-400"
                />
              </div>
              <Input 
                type="email"
                placeholder="Email Address"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-ocean-400"
              />
              <Input 
                type="tel"
                placeholder="Phone Number"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-ocean-400"
              />
              <Input 
                placeholder="Project Location"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-ocean-400"
              />
              <Textarea 
                placeholder="Tell us about your dream pool..."
                rows={4}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-ocean-400 resize-none"
              />
              <Button 
                type="submit"
                className="w-full bg-ocean-500 hover:bg-ocean-600 text-white py-4 text-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                Request Free Consultation
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
              <h3 className="text-2xl font-playfair font-bold text-white mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-ocean-500 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Phone</h4>
                    <p className="text-ocean-200">(555) 123-POOL</p>
                    <p className="text-ocean-200">(555) 123-7665</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-ocean-500 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Email</h4>
                    <p className="text-ocean-200">info@blutouchpools.com</p>
                    <p className="text-ocean-200">projects@blutouchpools.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-ocean-500 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Office</h4>
                    <p className="text-ocean-200">123 Pool Construction Blvd</p>
                    <p className="text-ocean-200">Los Angeles, CA 90210</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-ocean-500 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Hours</h4>
                    <p className="text-ocean-200">Monday - Friday: 8AM - 6PM</p>
                    <p className="text-ocean-200">Saturday: 9AM - 4PM</p>
                    <p className="text-ocean-200">Sunday: By Appointment</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-gradient-to-r from-ocean-600 to-ocean-700 rounded-3xl p-8 text-center">
              <h3 className="text-2xl font-playfair font-bold text-white mb-4">
                24/7 Emergency Service
              </h3>
              <p className="text-ocean-100 mb-6">
                Need immediate assistance? Our emergency service team is available around the clock.
              </p>
              <Button 
                className="bg-white text-ocean-600 hover:bg-platinum-50 px-8 py-3 font-semibold transition-all duration-300 hover:scale-105"
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
