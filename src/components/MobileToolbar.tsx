import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Phone, Mail, Calendar, DollarSign } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const MobileToolbar = () => {
  const location = useLocation();

  const isActive = (pathname) => location.pathname === pathname || (pathname !== '/' && location.pathname.startsWith(pathname));

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 z-50 grid grid-cols-5 lg:hidden">
      {/* Home Button */}
      <Link 
        to="/"
        className={`flex flex-col items-center justify-center p-3 text-gray-700 hover:text-blue-600 transition-colors ${isActive('/') ? 'text-blue-600 font-semibold' : ''}`}
      >
        <Home className={`w-7 h-7 ${isActive('/') ? 'text-blue-600' : 'text-gray-700'}`} />
        <span className="text-xs mt-1">Home</span>
      </Link>

      {/* Call Button */}
      <a 
        href="tel:8329610258"
        className="flex flex-col items-center justify-center p-3 text-gray-700 hover:text-blue-600 transition-colors"
      >
        <Phone className="w-7 h-7 text-gray-700 group-hover:text-blue-600" />
        <span className="text-xs mt-1">Call</span>
      </a>

      {/* Email Button */}
      <a 
        href="mailto:gary@blutouchpools.com"
        className="flex flex-col items-center justify-center p-3 text-gray-700 hover:text-blue-600 transition-colors"
      >
        <Mail className="w-7 h-7 text-gray-700 group-hover:text-blue-600" />
        <span className="text-xs mt-1">Email</span>
      </a>

      {/* Financing Button */}
      <a 
        href="https://www.hfsfinancial.net/promo/blutouchpoolservice/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center justify-center p-3 text-gray-700 hover:text-blue-600 transition-colors"
      >
        <DollarSign className="w-7 h-7 text-gray-700 group-hover:text-blue-600" />
        <span className="text-xs mt-1">Finance</span>
      </a>

      {/* Quote Button */}
      <Link 
        to="/get-quote"
        className={`flex flex-col items-center justify-center p-3 text-gray-700 hover:text-blue-600 transition-colors ${isActive('/get-quote') ? 'text-blue-600 font-semibold' : ''}`}
      >
        <Calendar className={`w-7 h-7 ${isActive('/get-quote') ? 'text-blue-600' : 'text-gray-700'}`} />
        <span className="text-xs mt-1">Quote</span>
      </Link>
    </div>
  );
};

export default MobileToolbar; 