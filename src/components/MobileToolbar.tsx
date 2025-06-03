import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Phone, Mail, Calendar } from 'lucide-react';

const MobileToolbar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 z-50 grid grid-cols-4 lg:hidden">
      {/* Home Button */}
      <Link 
        to="/"
        className="flex flex-col items-center justify-center p-2 text-gray-700 hover:text-blue-600 transition-colors"
      >
        <Home className="w-6 h-6" />
        <span className="text-xs mt-1">Home</span>
      </Link>

      {/* Call Button */}
      <a 
        href="tel:8329610258"
        className="flex flex-col items-center justify-center p-2 text-gray-700 hover:text-blue-600 transition-colors"
      >
        <Phone className="w-6 h-6" />
        <span className="text-xs mt-1">Call</span>
      </a>

      {/* Email Button */}
      <a 
        href="mailto:gary@blutouchpools.com"
        className="flex flex-col items-center justify-center p-2 text-gray-700 hover:text-blue-600 transition-colors"
      >
        <Mail className="w-6 h-6" />
        <span className="text-xs mt-1">Email</span>
      </a>

      {/* Quote Button */}
      <Link 
        to="/get-quote"
        className="flex flex-col items-center justify-center p-2 text-gray-700 hover:text-blue-600 transition-colors"
      >
        <Calendar className="w-6 h-6" />
        <span className="text-xs mt-1">Quote</span>
      </Link>
    </div>
  );
};

export default MobileToolbar; 