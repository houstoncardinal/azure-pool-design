import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, CreditCard, DollarSign, Shield, Timer, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const Finance = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Pool Financing Made Simple
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Turn your dream pool into reality with our flexible financing options. Choose the plan that works best for you.
          </p>
        </div>
      </div>

      {/* Financing Options */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* VistaFi Option */}
          <Card className="border-2 border-blue-100 hover:border-blue-300 transition-all duration-300 hover:shadow-xl">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-2xl font-bold text-gray-900">VistaFi Financing</CardTitle>
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <CardDescription className="text-lg text-gray-600">
                Flexible financing solutions for your pool project
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <DollarSign className="w-5 h-5 text-blue-600" />
                  <span>Loans from $5,000 to $150,000</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Timer className="w-5 h-5 text-blue-600" />
                  <span>Terms up to 20 years</span>
                </div>
                <div className="flex items-center space-x-3">
                  <TrendingUp className="w-5 h-5 text-blue-600" />
                  <span>Competitive rates for all credit profiles</span>
                </div>
                <div className="pt-4">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white" asChild>
                    <a href="https://vistafi.com/contractor/001uo00000ubzhoya5blutouch-pools-spas/" target="_blank" rel="noopener noreferrer">
                      Get Your Rate
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Current Financing Option */}
          <Card className="border-2 border-blue-100 hover:border-blue-300 transition-all duration-300 hover:shadow-xl">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-2xl font-bold text-gray-900">Standard Financing</CardTitle>
                <CreditCard className="w-8 h-8 text-blue-600" />
              </div>
              <CardDescription className="text-lg text-gray-600">
                Traditional financing options for your pool project
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <DollarSign className="w-5 h-5 text-blue-600" />
                  <span>Flexible payment options</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Timer className="w-5 h-5 text-blue-600" />
                  <span>Quick approval process</span>
                </div>
                <div className="flex items-center space-x-3">
                  <TrendingUp className="w-5 h-5 text-blue-600" />
                  <span>Competitive interest rates</span>
                </div>
                <div className="pt-4">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white" asChild>
                    <Link to="/get-quote">
                      Apply Now
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose Our Financing Options?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure Process</h3>
              <p className="text-gray-600">Your information is always protected</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Timer className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quick Approval</h3>
              <p className="text-gray-600">Get approved in as little as 24 hours</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Flexible Terms</h3>
              <p className="text-gray-600">Choose the plan that fits your budget</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Start Your Pool Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get started today with our flexible financing options and turn your dream pool into reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-blue-600 hover:bg-blue-50" asChild>
              <a href="https://vistafi.com/contractor/001uo00000ubzhoya5blutouch-pools-spas/" target="_blank" rel="noopener noreferrer">
                Get Your Rate
              </a>
            </Button>
            <Button className="bg-blue-700 text-white hover:bg-blue-800" asChild>
              <Link to="/contact">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Finance; 