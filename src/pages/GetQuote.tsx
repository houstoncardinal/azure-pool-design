import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Phone, Mail, MessageSquare, Calendar, Clock, MapPin, ArrowRight, CheckCircle, Award, Star, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const GetQuote = () => {
  const [contactMethod, setContactMethod] = useState('phone');
  const [formStep, setFormStep] = useState(1);

  return (
    <div className="min-h-screen font-inter bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-white pt-32 pb-16">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-semibold mb-6">
              <Calendar className="w-4 h-4 mr-2" />
              Free Quote Request
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Get Your Free
              <span className="block text-blue-600">Pool Design Quote</span>
            </h1>
            <p className="text-xl text-gray-600">
              Transform your backyard into a luxurious oasis. Our expert team will help you design the perfect pool for your space.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Contact Options */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Choose How to Connect</h2>
                
                <RadioGroup 
                  value={contactMethod} 
                  onValueChange={setContactMethod}
                  className="space-y-4"
                >
                  <div className="flex items-center space-x-3 p-4 rounded-xl border border-gray-200 hover:border-blue-200 transition-colors cursor-pointer">
                    <RadioGroupItem value="phone" id="phone" className="text-blue-600" />
                    <Label htmlFor="phone" className="flex-1 cursor-pointer">
                      <div className="flex items-center">
                        <Phone className="w-5 h-5 text-blue-600 mr-3" />
                        <div>
                          <div className="font-semibold text-gray-900">Phone Call</div>
                          <div className="text-sm text-gray-600">Schedule a call with our pool experts</div>
                        </div>
                      </div>
                    </Label>
                  </div>

                  <div className="flex items-center space-x-3 p-4 rounded-xl border border-gray-200 hover:border-blue-200 transition-colors cursor-pointer">
                    <RadioGroupItem value="email" id="email" className="text-blue-600" />
                    <Label htmlFor="email" className="flex-1 cursor-pointer">
                      <div className="flex items-center">
                        <Mail className="w-5 h-5 text-blue-600 mr-3" />
                        <div>
                          <div className="font-semibold text-gray-900">Email Quote</div>
                          <div className="text-sm text-gray-600">Receive a detailed quote via email</div>
                        </div>
                      </div>
                    </Label>
                  </div>

                  <div className="flex items-center space-x-3 p-4 rounded-xl border border-gray-200 hover:border-blue-200 transition-colors cursor-pointer">
                    <RadioGroupItem value="callback" id="callback" className="text-blue-600" />
                    <Label htmlFor="callback" className="flex-1 cursor-pointer">
                      <div className="flex items-center">
                        <MessageSquare className="w-5 h-5 text-blue-600 mr-3" />
                        <div>
                          <div className="font-semibold text-gray-900">Request Callback</div>
                          <div className="text-sm text-gray-600">We'll call you at your preferred time</div>
                        </div>
                      </div>
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-4">Why Choose Blu Touch Pools?</h3>
                <div className="space-y-4">
                  {[
                    'Free, no-obligation quotes',
                    'Expert pool design consultation',
                    'Custom solutions for your space',
                    'Professional installation team',
                    'Comprehensive warranty coverage'
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-blue-200 mr-3" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Quote Form */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${formStep >= 1 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'}`}>
                      1
                    </div>
                    <div className="ml-3">
                      <div className="text-sm font-medium text-gray-900">Project Details</div>
                      <div className="text-xs text-gray-500">Basic information</div>
                    </div>
                  </div>
                  <div className="h-px flex-1 bg-gray-200 mx-4"></div>
                  <div className="flex items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${formStep >= 2 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'}`}>
                      2
                    </div>
                    <div className="ml-3">
                      <div className="text-sm font-medium text-gray-900">Contact Info</div>
                      <div className="text-xs text-gray-500">How to reach you</div>
                    </div>
                  </div>
                </div>
              </div>

              <form className="space-y-6">
                {formStep === 1 ? (
                  <>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="projectType">Project Type</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select project type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="new-pool">New Pool Installation</SelectItem>
                            <SelectItem value="renovation">Pool Renovation</SelectItem>
                            <SelectItem value="maintenance">Pool Maintenance</SelectItem>
                            <SelectItem value="repair">Pool Repair</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="poolSize">Estimated Pool Size</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select pool size" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="small">Small (10x20 ft)</SelectItem>
                            <SelectItem value="medium">Medium (15x30 ft)</SelectItem>
                            <SelectItem value="large">Large (20x40 ft)</SelectItem>
                            <SelectItem value="custom">Custom Size</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="features">Desired Features</Label>
                        <div className="grid grid-cols-2 gap-4 mt-2">
                          {[
                            'Heating System',
                            'Lighting',
                            'Waterfall',
                            'Hot Tub',
                            'Automation',
                            'Salt System'
                          ].map((feature) => (
                            <div key={feature} className="flex items-center space-x-2">
                              <input type="checkbox" id={feature} className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                              <label htmlFor={feature} className="text-sm text-gray-700">{feature}</label>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="notes">Additional Notes</Label>
                        <Textarea 
                          id="notes" 
                          placeholder="Tell us about your vision for your pool..."
                          className="mt-2"
                        />
                      </div>
                    </div>

                    <Button 
                      type="button"
                      onClick={() => setFormStep(2)}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                    >
                      Continue to Contact Info
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </>
                ) : (
                  <>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" placeholder="Enter your full name" />
                      </div>

                      <div>
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" type="email" placeholder="Enter your email" />
                      </div>

                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" type="tel" placeholder="Enter your phone number" />
                      </div>

                      {contactMethod === 'callback' && (
                        <div>
                          <Label htmlFor="preferredTime">Preferred Callback Time</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select preferred time" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="morning">Morning (9AM - 12PM)</SelectItem>
                              <SelectItem value="afternoon">Afternoon (12PM - 5PM)</SelectItem>
                              <SelectItem value="evening">Evening (5PM - 8PM)</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      )}

                      <div>
                        <Label htmlFor="address">Property Address</Label>
                        <Input id="address" placeholder="Enter your property address" />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <Button 
                        type="button"
                        onClick={() => setFormStep(1)}
                        className="w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-50"
                      >
                        Back to Project Details
                      </Button>
                      <Button 
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                      >
                        Submit Quote Request
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </div>
                  </>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Contact Options */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-semibold mb-6">
              <MessageSquare className="w-4 h-4 mr-2" />
              Connect With Us
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Experience Premium Service
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose your preferred way to connect with our team of pool experts
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-white rounded-2xl p-8 shadow-xl border border-gray-100 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Direct Call</h3>
                <p className="text-gray-600 mb-6">
                  Speak with our pool experts for immediate assistance
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white group-hover:shadow-lg transition-all duration-300">
                  <Phone className="w-4 h-4 mr-2" />
                  (832) 961-0258
                </Button>
              </div>
            </div>

            <div className="group bg-white rounded-2xl p-8 shadow-xl border border-gray-100 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Email Inquiry</h3>
                <p className="text-gray-600 mb-6">
                  Send us your detailed requirements for a comprehensive response
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white group-hover:shadow-lg transition-all duration-300">
                  <Mail className="w-4 h-4 mr-2" />
                  info@blutouchpools.com
                </Button>
              </div>
            </div>

            <div className="group bg-white rounded-2xl p-8 shadow-xl border border-gray-100 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Visit Us</h3>
                <p className="text-gray-600 mb-6">
                  Schedule a personalized consultation at our showroom
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white group-hover:shadow-lg transition-all duration-300">
                  <MapPin className="w-4 h-4 mr-2" />
                  Get Directions
                </Button>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-16 border-t border-gray-200">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { icon: Award, text: "Licensed & Insured" },
                { icon: Star, text: "5-Star Rated" },
                { icon: Clock, text: "24/7 Support" },
                { icon: Shield, text: "Warranty Protected" }
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <span className="text-sm font-medium text-gray-600">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GetQuote; 