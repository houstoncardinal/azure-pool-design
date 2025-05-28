
import React from 'react';
import { ExternalLink, MapPin, Star, Award, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Modern Infinity Pool",
      location: "Beverly Hills, CA",
      image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Luxury Residential",
      value: "$250K+",
      features: ["Infinity Edge", "Smart Lighting", "Automated Systems"]
    },
    {
      id: 2,
      title: "Resort-Style Oasis",
      location: "Malibu, CA",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Custom Design",
      value: "$180K+",
      features: ["Natural Stone", "Waterfall Feature", "Spa Integration"]
    },
    {
      id: 3,
      title: "Geometric Paradise",
      location: "Newport Beach, CA",
      image: "https://images.unsplash.com/photo-1562778612-e1e0cda9915c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Contemporary",
      value: "$320K+",
      features: ["Geometric Design", "LED Integration", "Premium Finishes"]
    },
    {
      id: 4,
      title: "Natural Rock Formation",
      location: "Laguna Beach, CA",
      image: "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Natural Design",
      value: "$275K+",
      features: ["Natural Boulder", "Grotto Design", "Tropical Landscaping"]
    },
    {
      id: 5,
      title: "Rooftop Sanctuary",
      location: "Manhattan Beach, CA",
      image: "https://images.unsplash.com/photo-1566737236500-c8ac43014a8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Urban Living",
      value: "$400K+",
      features: ["Rooftop Installation", "City Views", "Wind Resistance"]
    },
    {
      id: 6,
      title: "Family Entertainment Hub",
      location: "Palos Verdes, CA",
      image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Family Friendly",
      value: "$195K+",
      features: ["Safety Features", "Play Areas", "Energy Efficient"]
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-6">
            <Award className="w-4 h-4 mr-2" />
            Featured Projects
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Award-Winning Pool Installations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of exceptional pool installations showcasing our commitment 
            to quality craftsmanship and innovative design across Southern California.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:-translate-y-1"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Value Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                  {project.value}
                </div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {project.category}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-2">
                  <MapPin className="w-4 h-4 mr-1" />
                  {project.location}
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{project.title}</h3>
                
                {/* Features */}
                <div className="space-y-2 mb-4">
                  {project.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-600">
                      <Star className="w-3 h-3 mr-2 text-blue-500" />
                      {feature}
                    </div>
                  ))}
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 group"
                >
                  View Details
                  <ExternalLink className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced View More Section */}
        <div className="bg-gray-50 rounded-2xl p-12 text-center border border-gray-200">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Explore Our Complete Portfolio
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            View our complete collection of 500+ successfully completed projects and see why 
            we're Southern California's most trusted pool construction company.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Button 
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 font-semibold group"
            >
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              size="lg"
              variant="outline" 
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 font-semibold"
            >
              Request Catalog
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
