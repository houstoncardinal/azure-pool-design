
import React from 'react';
import { ExternalLink, MapPin, Star, Award } from 'lucide-react';

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
    <section id="portfolio" className="py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-ocean-100 to-ocean-200 rounded-full blur-3xl opacity-20 translate-x-48"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-ocean-100 text-ocean-700 text-sm font-medium mb-6">
            <Award className="w-4 h-4 mr-2" />
            Featured Projects
          </div>
          <h2 className="text-5xl lg:text-6xl font-playfair font-bold text-ocean-900 mb-8">
            Exceptional Pool
            <span className="block text-ocean-gradient">Installations</span>
          </h2>
          <p className="text-xl text-platinum-600 max-w-4xl mx-auto leading-relaxed">
            Explore our portfolio of exceptional pool installations that showcase our commitment 
            to quality, innovation, and architectural excellence across California's finest properties.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="group relative overflow-hidden rounded-3xl bg-white shadow-corporate hover:shadow-luxury transition-all duration-700 animate-scale-in border border-platinum-200 hover:border-ocean-200"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Premium Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-ocean-900/90 via-ocean-800/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Value Badge */}
                <div className="absolute top-4 right-4 bg-gradient-ocean text-white px-3 py-1 rounded-full text-sm font-semibold shadow-premium">
                  {project.value}
                </div>
                
                {/* Overlay Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="flex items-center text-ocean-200 text-sm mb-2">
                      <MapPin className="w-4 h-4 mr-1" />
                      {project.location}
                    </div>
                    <h3 className="text-2xl font-playfair font-bold mb-3">{project.title}</h3>
                    
                    {/* Features */}
                    <div className="space-y-1 mb-4">
                      {project.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-ocean-200">
                          <Star className="w-3 h-3 mr-2 text-yellow-400" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="bg-ocean-600/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                        {project.category}
                      </span>
                      <button className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-colors duration-300 group">
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced View More Section */}
        <div className="text-center animate-fade-in-up">
          <div className="bg-gradient-platinum rounded-3xl p-12 shadow-corporate border border-platinum-200">
            <h3 className="text-3xl font-playfair font-bold text-ocean-900 mb-4">
              Explore Our Complete Portfolio
            </h3>
            <p className="text-platinum-600 mb-8 max-w-2xl mx-auto">
              Discover over 500 completed projects showcasing our expertise in luxury pool construction and design excellence.
            </p>
            <button className="btn-premium bg-gradient-ocean text-white px-10 py-4 rounded-2xl font-semibold text-lg hover:shadow-glow transition-all duration-500 hover:scale-105 shadow-corporate">
              View Complete Portfolio
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
