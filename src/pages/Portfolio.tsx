import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

// Placeholder data for portfolio projects
const projects = [
  {
    id: 'brown-family-project',
    title: 'Brown Family Project',
    location: 'Pearland, TX',
    image: '/brown-family-pool.jpg',
    description: 'A stunning custom pool and spa built for the Brown family.'
  },
  {
    id: 'white-family-project',
    title: 'White Family Project',
    location: 'Houston, TX',
    image: '/white-family-pool.jpg',
    description: 'Modern pool design with integrated smart features.'
  },
  {
    id: 'rodriguez-family-project',
    title: 'Rodriguez Family Project',
    location: 'Alvin, TX',
    image: '/rodriguez-family-pool.jpg',
    description: 'Luxury geometric pool with extensive decking.'
  },
  {
    id: 'coastal-oasis-project',
    title: 'Coastal Oasis Project',
    location: 'Friendswood, TX',
    image: '/coastal-oasis-pool.jpg',
    description: 'Resort-style pool with rock features and lush landscaping.'
  },
  {
    id: 'modern-retreat-project',
    title: 'Modern Retreat Project',
    location: 'Houston, TX',
    image: '/modern-retreat-pool.jpg',
    description: 'Clean lines and minimalist design for a tranquil escape.'
  },
  {
    id: 'serene-escape-project',
    title: 'Serene Escape Project',
    location: 'Pearland, TX',
    image: '/serene-escape-pool.jpg',
    description: 'A peaceful backyard oasis with a beautiful swimming pool.'
  },
];

const Portfolio = () => {
  return (
    <div className="min-h-screen font-inter bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 pt-28 sm:pt-32 pb-12 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-50/50 via-transparent to-transparent"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 leading-tight">
            Our Portfolio
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our collection of stunning custom pool and spa projects.
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
            {projects.map(project => (
              <Link 
                key={project.id} 
                to={`/portfolio/${project.id}`} 
                className="block bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden group animate-fade-in-up"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                    <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                    <p className="text-sm">{project.location}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm">{project.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio; 