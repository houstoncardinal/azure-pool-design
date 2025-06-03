import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

// Placeholder data for portfolio projects
export const projects = [
  {
    id: 'jones-family-project',
    title: 'Jones Family Project',
    location: 'Houston, TX',
    image: '/jones-family-pool-night-2.JPG',
    description: 'A beautiful custom pool and spa project.'
  },
  {
    id: 'phillips-family-project',
    title: 'Phillips Family Project',
    location: 'Pearland, TX',
    image: '/phillips1.jpg',
    description: 'Modern pool design with integrated smart features.'
  },
  {
    id: 'blount-family-project',
    title: 'Blount Family Project',
    location: 'Pearland, TX',
    image: '/blount1.jpg',
    description: 'A stunning transformation that reflects luxury, comfort, and craftsmanship.'
  },
  {
    id: 'brown-family-project',
    title: 'Brown Family Project',
    location: 'Friendswood, TX',
    image: '/brown-family-pool.jpg',
    description: 'Resort-style pool with rock features and lush landscaping.'
  },
  {
    id: 'robinson-family-project',
    title: 'Robinson Family Project',
    location: 'Houston, TX',
    image: '/robinson1.jpg',
    description: 'A modern pool design for the Robinson family, featuring a seamless integration with their outdoor living space.'
  },
  {
    id: 'rucker-family-project',
    title: 'Rucker Family Project',
    location: 'Friendswood, TX',
    image: '/rucker-family.jpg',
    description: 'A stunning pool and spa combination for the Rucker family, featuring premium materials and sophisticated design elements.'
  },
  {
    id: 'jennings-family-project',
    title: 'Jennings Family Project',
    location: 'Pearland, TX',
    image: '/jennings1.jpg',
    description: 'A perfect family pool design for the Jennings family, featuring a spacious layout, safety features, and fun elements.'
  },
  {
    id: 'tems-family-project',
    title: 'Tems Family Project',
    location: 'Houston, TX',
    image: '/tems2.jpg',
    description: 'A sophisticated pool design for the Tems family, featuring modern aesthetics and seamless integration with their outdoor living space.'
  },
  {
    id: 'myers-family-project',
    title: 'Myers Family Project',
    location: 'Alvin, TX',
    image: '/myers1.jpg',
    description: 'An exceptional pool design for the Myers family, featuring premium materials and sophisticated entertainment features.'
  }
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
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white">
                    <h3 className="text-xl font-bold mb-0 leading-tight">{project.title}</h3>
                    <p className="text-sm opacity-90 leading-tight">{project.location}</p>
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