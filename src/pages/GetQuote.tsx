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
import { toast } from 'sonner';

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

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    // Add contact method and preferred callback time to form data
    formData.append('contactMethod', contactMethod);
    if (contactMethod === 'callback' && formData.get('preferredCallbackTime')) {
       formData.append('preferredCallbackTime', formData.get('preferredCallbackTime') as string);
    } else {
      formData.delete('preferredCallbackTime'); // Remove if not callback or not selected
    }

    // Handle features which are checkboxes - FormData might not handle arrays well
    // Collect checked features manually
    const selectedFeatures = Array.from(form.elements).filter(element => 
      (element as HTMLInputElement).name === 'features' && (element as HTMLInputElement).checked
    ).map(element => (element as HTMLInputElement).value);
    // Remove individual 'features' entries added by FormData for unchecked boxes and add the collected array
    formData.delete('features');
    formData.append('features', selectedFeatures.join(', ')); // Join features with comma for single field


    try {
      const response = await fetch('/', { // Netlify intercepts POST to /
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString(),
      });

      if (response.ok) {
        toast.success('Quote request submitted successfully!');
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
      } else {
         // Attempt to parse response body for errors if not OK
         const errorText = await response.text();
         console.error('Form submission failed:', response.status, errorText);
         toast.error(`Form submission failed: ${response.status} ${errorText.substring(0, 100)}...`);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error('An error occurred during form submission.');
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
                          name="name"
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
                          name="phone"
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
                          name="email"
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
                          name="notes"
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
                          name="name"
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
                          name="phone"
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

              <form name="get-quote" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={handleSubmit}>
                <input type="hidden" name="form-name" value="get-quote" />
                <div className="hidden">
                  <label>Don't fill this out if you're human: <input name="bot-field" /></label>
                </div>
                
                <div className="space-y-6">
                  {/* Step 1 Fields */}
                  {formStep === 1 && (
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
                          <Label htmlFor="timeline">Project Timeline</Label>
                          <Select value={formData.timeline} onValueChange={(value) => handleInputChange('timeline', value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select timeline" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="immediate">Immediately</SelectItem>
                              <SelectItem value="1-3months">1-3 Months</SelectItem>
                              <SelectItem value="3-6months">3-6 Months</SelectItem>
                              <SelectItem value="6+months">6+ Months</SelectItem>
                              <SelectItem value="researching">Just Researching</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <Label htmlFor="features">Features of Interest</Label>
                          <div className="mt-2 space-y-2">
                            <div className="flex items-center">
                              <input 
                                type="checkbox" 
                                id="feature-hottub" 
                                name="features"
                                value="Hot Tub Integration"
                                checked={formData.features.includes('Hot Tub Integration')}
                                onChange={(e) => handleFeatureChange('Hot Tub Integration', e.target.checked)}
                                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                              />
                              <label htmlFor="feature-hottub" className="ml-2 block text-sm text-gray-900">Hot Tub Integration</label>
                            </div>
                            <div className="flex items-center">
                              <input 
                                type="checkbox" 
                                id="feature-waterfall" 
                                name="features"
                                value="Waterfall/Water Features"
                                checked={formData.features.includes('Waterfall/Water Features')}
                                onChange={(e) => handleFeatureChange('Waterfall/Water Features', e.target.checked)}
                                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                              />
                              <label htmlFor="feature-waterfall" className="ml-2 block text-sm text-gray-900">Waterfall/Water Features</label>
                            </div>
                            <div className="flex items-center">
                              <input 
                                type="checkbox" 
                                id="feature-lighting" 
                                name="features"
                                value="LED Lighting"
                                checked={formData.features.includes('LED Lighting')}
                                onChange={(e) => handleFeatureChange('LED Lighting', e.target.checked)}
                                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                              />
                              <label htmlFor="feature-lighting" className="ml-2 block text-sm text-gray-900">LED Lighting</label>
                            </div>
                            <div className="flex items-center">
                              <input 
                                type="checkbox" 
                                id="feature-decking" 
                                name="features"
                                value="Custom Decking"
                                checked={formData.features.includes('Custom Decking')}
                                onChange={(e) => handleFeatureChange('Custom Decking', e.target.checked)}
                                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                              />
                              <label htmlFor="feature-decking" className="ml-2 block text-sm text-gray-900">Custom Decking</label>
                            </div>
                            <div className="flex items-center">
                              <input 
                                type="checkbox" 
                                id="feature-automation" 
                                name="features"
                                value="Automation System"
                                checked={formData.features.includes('Automation System')}
                                onChange={(e) => handleFeatureChange('Automation System', e.target.checked)}
                                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                              />
                              <label htmlFor="feature-automation" className="ml-2 block text-sm text-gray-900">Automation System</label>
                            </div>
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="address">Project Address (Optional)</Label>
                          <Input
                            id="address"
                            name="address"
                            placeholder="123 Main St, Anytown, TX"
                            value={formData.address}
                            onChange={(e) => handleInputChange('address', e.target.value)}
                            className="mt-1"
                          />
                        </div>

                        <div>
                          <Label htmlFor="notes">Additional Notes (Optional)</Label>
                          <Textarea
                            id="notes"
                            name="notes"
                            placeholder="Any specific requests or details..."
                            value={formData.notes}
                            onChange={(e) => handleInputChange('notes', e.target.value)}
                            className="mt-1"
                            rows={4}
                          />
                        </div>
                      </div>

                      <Button type="button" onClick={() => setFormStep(2)} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium group">
                        Next: Your Contact Info
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </>
                  )}

                  {/* Step 2 Fields */}
                  {formStep === 2 && (
                    <>
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="name">Your Name</Label>
                          <Input
                            id="name"
                            name="name"
                            placeholder="Enter your name"
                            value={formData.name}
                            onChange={(e) => handleInputChange('name', e.target.value)}
                            required
                            className="mt-1"
                          />
                        </div>
                        
                        {/* Conditional Contact Fields based on method chosen on left */}
                        {contactMethod === 'phone' && (
                           <div>
                            <Label htmlFor="phone">Phone Number</Label>
                            <Input
                              id="phone"
                              name="phone"
                              placeholder="(832) 555-0123"
                              value={formData.phone}
                              onChange={(e) => handleInputChange('phone', e.target.value)}
                              required
                              className="mt-1"
                            />
                          </div>
                        )}

                        {contactMethod === 'email' && (
                          <div>
                            <Label htmlFor="email">Email Address</Label>
                            <Input
                              id="email"
                              type="email"
                              name="email"
                              placeholder="your@email.com"
                              value={formData.email}
                              onChange={(e) => handleInputChange('email', e.target.value)}
                              required
                              className="mt-1"
                            />
                          </div>
                        )}

                        {contactMethod === 'callback' && (
                           <>
                            <div>
                              <Label htmlFor="callbackName">Your Name</Label>
                              <Input
                                id="callbackName"
                                name="name"
                                placeholder="Enter your name"
                                value={formData.name}
                                onChange={(e) => handleInputChange('name', e.target.value)}
                                required
                                className="mt-1"
                              />
                            </div>
                             <div>
                              <Label htmlFor="phone">Phone Number</Label>
                              <Input
                                id="phone"
                                name="phone"
                                placeholder="(832) 555-0123"
                                value={formData.phone}
                                onChange={(e) => handleInputChange('phone', e.target.value)}
                                required
                                className="mt-1"
                              />
                            </div>
                             <div>
                              <Label htmlFor="callTime">Preferred Callback Time</Label>
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
                           </>
                        )}

                         {contactMethod === 'email' && (
                          <div>
                            <Label htmlFor="email">Email Address</Label>
                            <Input
                              id="email"
                              type="email"
                              name="email"
                              placeholder="your@email.com"
                              value={formData.email}
                              onChange={(e) => handleInputChange('email', e.target.value)}
                              required
                              className="mt-1"
                            />
                          </div>
                        )}
                      </div>

                      <Button type="button" onClick={() => setFormStep(1)} className="w-full bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium group">
                        Back
                      </Button>

                      <Button 
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium group"
                      >
                        {isLoading ? 'Submitting...' : 'Get Free Quote'}
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </>
                  )}
                </div>
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
