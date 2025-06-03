import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { 
  CheckCircle,
  Star,
  ArrowRight,
  Calendar,
  Phone,
  Zap
} from 'lucide-react';

const service = {
  icon: Zap,
  title: "Professional Pool Installation",
  description: "Entrust your pool project to the experienced and professional installation team at BluTouch Pools & Spas in Houston. We manage every phase of the pool installation process with meticulous attention to detail, ensuring a smooth, efficient, and high-quality build from groundbreaking to the final inspection. Our team of skilled craftsmen and technicians are dedicated to bringing your custom pool design to life, adhering to the highest standards of construction and safety.",
  features: [
    "Experienced and Certified Pool Installation Team",
    "Efficient and Timely Construction Process",
    "Adherence to Local Building Codes and Regulations in Houston",
    "Use of High-Quality and Durable Construction Materials",
    "Seamless Integration of Pool Features and Equipment",
    "Thorough Site Preparation and Excavation",
    "Final Inspection and Handover with Owner Guidance"
  ],
  benefits: [
    "Peace of Mind Knowing Your Pool is Built by Experts",
    "Faster Project Completion Without Compromising Quality",
    "A Pool Built to Last with High-Quality Craftsmanship",
    "Compliance with All Safety and Building Standards",
    "A Stress-Free and Transparent Construction Experience",
    "Confidence in Your Investment with Our Warranty and Support"
  ],
  price: "Included",
  image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
};

const ProfessionalInstallation = () => {
  const IconComponent = service.icon;
  return (
    <div className="min-h-screen font-sans antialiased bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-28 pb-20 lg:pt-40 lg:pb-32 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 sm:px-6 sm:py-3 rounded-full bg-white bg-opacity-20 text-white text-sm font-semibold mb-4 backdrop-filter backdrop-blur-sm">
            <IconComponent className="w-4 h-4 mr-2" />
            Our Services
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {service.title}
          </h1>
          <div className="max-w-3xl mx-auto space-y-4">
            <p className="text-base sm:text-lg lg:text-xl text-blue-100 leading-relaxed">
              Trust your pool installation to our team of certified professionals who bring years of experience and expertise to every project.
            </p>
            <p className="text-base sm:text-lg lg:text-xl text-blue-100 leading-relaxed">
              We handle every aspect of the installation process with precision and care, from initial site preparation to final inspection and handover.
            </p>
            <p className="text-base sm:text-lg lg:text-xl text-blue-100 leading-relaxed">
              Our commitment to quality craftsmanship and attention to detail ensures your new pool is built to the highest standards of safety and durability.
            </p>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              size="lg"
              className="bg-white text-blue-700 hover:bg-gray-100 font-semibold shadow-lg transition-all duration-300 transform hover:scale-105"
              asChild
            >
              <Link to="/get-quote">
                Get a Free Quote
              </Link>
            </Button>
            <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold rounded-lg shadow-lg group" asChild>
              <a href="tel:8329610258">
                <Phone className="mr-2 h-5 w-5" />
                Call (832) 961-0258
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Features and Benefits Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Features */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Key Features of Our {service.title} Service</h2>
              <ul className="space-y-6">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start text-gray-700">
                    <CheckCircle className="w-6 h-6 text-blue-600 mr-4 flex-shrink-0" />
                    <span className="text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Benefits You'll Enjoy</h2>
              <ul className="space-y-6">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start text-gray-700">
                    <Star className="w-6 h-6 text-yellow-500 mr-4 flex-shrink-0" />
                    <span className="text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Content Section */}
      <section className="py-16 lg:py-24 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Your Trusted Partner for Pool Construction in Houston</h2>
          <div className="prose prose-lg text-gray-700 mx-auto leading-relaxed space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="mb-4">
                Choosing the right team for your pool installation is as important as the design itself. At BluTouch Pools & Spas, our professional installation services in Houston are built on a foundation of expertise, efficiency, and a commitment to quality.
              </p>
              <p>
                Our certified installers have years of experience in constructing a wide range of pool types, from intricate custom designs to standard shapes, ensuring every project is completed to the highest standards.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="mb-4">
                We understand that the installation process can seem daunting, which is why we prioritize clear communication and transparency. Our team will guide you through each stage, from the initial site preparation and excavation to the steel reinforcement, plumbing, electrical work, and the application of the interior finish.
              </p>
              <p className="mb-4">
                We adhere strictly to all local building codes and regulations in Houston, guaranteeing a safe and compliant installation.
              </p>
              <p>
                We use only high-quality materials and proven techniques to ensure the structural integrity and longevity of your pool.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="mb-4">
                With BluTouch Pools & Spas, you can expect a smooth and well-managed installation process. Our goal is to minimize disruption to your property and complete your project on time and within budget.
              </p>
              <p>
                Upon completion, we conduct a thorough final inspection and provide you with all the necessary information on operating and maintaining your new pool. Trust BluTouch Pools & Spas to deliver a professionally installed pool that you and your family will enjoy for decades.
              </p>
            </div>
          </div>

          {/* Secondary CTA */}
          <div className="mt-12 text-center">
            <Button 
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold group shadow-lg transition-all duration-300 transform hover:scale-105"
              asChild
            >
              <Link to="/get-quote">
                Get a Quote for Professional Installation
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Primary CTA Section */}
      <section className="py-16 lg:py-24 bg-blue-700 text-white text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready for Professional Pool Installation?</h2>
            <p className="text-lg text-blue-100 mb-10">Contact us today for expert pool installation services in Houston.</p>
             <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                size="lg"
                className="bg-white text-blue-700 hover:bg-gray-100 font-semibold shadow-lg transition-all duration-300 transform hover:scale-105"
                asChild
              >
                <Link to="/get-quote">
                  Get Your Free Estimate
                </Link>
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white group-hover:shadow-lg transition-all duration-300" asChild>
                <a href="tel:8329610258">
                  <Phone className="w-4 h-4 mr-2" />
                  (832) 961-0258
                </a>
              </Button>
            </div>
          </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProfessionalInstallation; 