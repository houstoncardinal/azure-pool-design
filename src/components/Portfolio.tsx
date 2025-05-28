
import React from 'react';
import { ExternalLink, MapPin } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Modern Infinity Pool",
      location: "Beverly Hills, CA",
      image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Luxury Residential"
    },
    {
      id: 2,
      title: "Resort-Style Oasis",
      location: "Malibu, CA",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Custom Design"
    },
    {
      id: 3,
      title: "Geometric Paradise",
      location: "Newport Beach, CA",
      image: "https://images.unsplash.com/photo-1562778612-e1e0cda9915c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Contemporary"
    },
    {
      id: 4,
      title: "Natural Rock Formation",
      location: "Laguna Beach, CA",
      image: "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Natural Design"
    },
    {
      id: 5,
      title: "Rooftop Sanctuary",
      location: "Manhattan Beach, CA",
      image: "https://images.unsplash.com/photo-1566737236500-c8ac43014a8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Urban Living"
    },
    {
      id: 6,
      title: "Family Entertainment Hub",
      location: "Palos Verdes, CA",
      image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Family Friendly"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-ocean-900 mb-6">
            Our Featured Projects
          </h2>
          <p className="text-xl text-platinum-600 max-w-3xl mx-auto leading-relaxed">
            Explore our portfolio of exceptional pool installations that showcase our commitment 
            to quality, innovation, and architectural excellence.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ocean-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Overlay Content */}
                <div className="absolute inset-0 flex items-end p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center text-ocean-200 text-sm mb-2">
                      <MapPin className="w-4 h-4 mr-1" />
                      {project.location}
                    </div>
                    <h3 className="text-2xl font-playfair font-bold mb-2">{project.title}</h3>
                    <div className="flex items-center justify-between">
                      <span className="bg-ocean-600/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                        {project.category}
                      </span>
                      <button className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-colors duration-300">
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12 animate-fade-in-up">
          <button className="bg-ocean-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-ocean-700 transition-all duration-300 hover:scale-105 transform">
            View Complete Portfolio
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
