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
import { useQuoteForm } from '@/hooks/useFormSubmissions';

const GetQuote = () => {
  const { submitQuote, isLoading } = useQuoteForm();
  const [contactMethod, setContactMethod] = useState('phone');
  const [formStep, setFormStep] = useState(1);
  const [formData, setFormData] = useState({
    projectType: '',
    poolSize: '',
    features: [] as string[],
    notes: '',
    name: '',
    email: '',
    phone: '',
    preferredCallbackTime: '',
    address: '',
    timeline: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleFeatureChange = (feature: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      features: checked 
        ? [...prev.features, feature]
        : prev.features.filter(f => f !== feature)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await submitQuote({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      address: formData.address,
      project_type: formData.projectType,
      pool_size: formData.poolSize,
      features: formData.features,
      timeline: formData.timeline,
      notes: formData.notes,
      contact_method: contactMethod,
      preferred_callback_time: contactMethod === 'callback' ? formData.preferredCallbackTime : undefined
    });
    
    if (result.success) {
      // Reset form
      setFormData({
        projectType: '',
        poolSize: '',
        features: [],
        notes: '',
        name: '',
        email: '',
        phone: '',
        preferredCallbackTime: '',
        address: '',
        timeline: ''
      });
      setFormStep(1);
      setContactMethod('phone');
    }
  };

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

                {/* Conditional Contact Method Sections */}
                {contactMethod === 'phone' && (
                  <div className="mt-6 p-6 bg-blue-50 rounded-xl border border-blue-100">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Schedule a Phone Call</h3>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="phoneName">Your Name</Label>
                        <Input
                          id="phoneName"
                          placeholder="Enter your name"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phoneNumber">Phone Number</Label>
                        <Input
                          id="phoneNumber"
                          placeholder="(832) 555-0123"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="callTime">Best Time to Call</Label>
                        <Select value={formData.preferredCallbackTime} onValueChange={(value) => handleInputChange('preferredCallbackTime', value)}>
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
                    </div>
                  </div>
                )}

                {contactMethod === 'email' && (
                  <div className="mt-6 p-6 bg-blue-50 rounded-xl border border-blue-100">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Email Quote Request</h3>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="emailAddress">Email Address</Label>
                        <Input
                          id="emailAddress"
                          type="email"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="projectDetails">Project Details</Label>
                        <Textarea
                          id="projectDetails"
                          placeholder="Tell us about your project (optional)"
                          value={formData.notes}
                          onChange={(e) => handleInputChange('notes', e.target.value)}
                          className="mt-1"
                          rows={4}
                        />
                      </div>
                    </div>
                  </div>
                )}

                {contactMethod === 'callback' && (
                  <div className="mt-6 p-6 bg-blue-50 rounded-xl border border-blue-100">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Request a Callback</h3>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="callbackName">Your Name</Label>
                        <Input
                          id="callbackName"
                          placeholder="Enter your name"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="callbackPhone">Phone Number</Label>
                        <Input
                          id="callbackPhone"
                          placeholder="(832) 555-0123"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          className="mt-1"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-4">Why Choose BluTouch Pools & Spas?</h3>
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

              <form onSubmit={handleSubmit} className="space-y-6">
                {formStep === 1 ? (
                  <>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="projectType">Project Type</Label>
                        <Select value={formData.projectType} onValueChange={(value) => handleInputChange('projectType', value)}>
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
                        <Select value={formData.poolSize} onValueChange={(value) => handleInputChange('poolSize', value)}>
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
                        <Label htmlFor="timeline">Timeline</Label>
                        <Select value={formData.timeline} onValueChange={(value) => handleInputChange('timeline', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Project timeline" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="immediate">ASAP</SelectItem>
                            <SelectItem value="1-3months">1-3 months</SelectItem>
                            <SelectItem value="3-6months">3-6 months</SelectItem>
                            <SelectItem value="6-12months">6-12 months</SelectItem>
                            <SelectItem value="planning">Just planning ahead</SelectItem>
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
                              <input 
                                type="checkbox" 
                                id={feature} 
                                checked={formData.features.includes(feature)}
                                onChange={(e) => handleFeatureChange(feature, e.target.checked)}
                                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" 
                              />
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
                          value={formData.notes}
                          onChange={(e) => handleInputChange('notes', e.target.value)}
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
                        <Input 
                          id="name" 
                          placeholder="Enter your full name" 
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="email">Email Address</Label>
                        <Input 
                          id="email" 
                          type="email" 
                          placeholder="Enter your email" 
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input 
                          id="phone" 
                          type="tel" 
                          placeholder="Enter your phone number" 
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                        />
                      </div>

                      {contactMethod === 'callback' && (
                        <div>
                          <Label htmlFor="preferredTime">Preferred Callback Time</Label>
                          <Select value={formData.preferredCallbackTime} onValueChange={(value) => handleInputChange('preferredCallbackTime', value)}>
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
                        <Input 
                          id="address" 
                          placeholder="Enter your property address" 
                          value={formData.address}
                          onChange={(e) => handleInputChange('address', e.target.value)}
                        />
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
                        disabled={isLoading}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                      >
                        {isLoading ? 'Submitting...' : 'Submit Quote Request'}
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
                  gary@blutouchpools.com
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
