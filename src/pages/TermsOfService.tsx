import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Terms of Service"
        description="Terms of Service for BluTouch Pools & Spas - Learn about our terms and conditions for using our services."
      />
      <Navbar />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">Last updated: {new Date().toLocaleDateString()}</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Agreement to Terms</h2>
            <p className="text-gray-600 mb-4">
              By accessing or using our services, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Services</h2>
            <p className="text-gray-600 mb-4">
              BluTouch Pools & Spas provides custom pool design, construction, and maintenance services. We reserve the right to modify or discontinue any service at any time.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Project Terms</h2>
            <p className="text-gray-600 mb-4">
              All projects are subject to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Written contract and agreement</li>
              <li>Local building codes and regulations</li>
              <li>Property survey and inspection</li>
              <li>Permit requirements</li>
              <li>Weather conditions</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Payment Terms</h2>
            <p className="text-gray-600 mb-4">
              Payment terms include:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Deposit requirements</li>
              <li>Progress payment schedule</li>
              <li>Final payment upon completion</li>
              <li>Financing options through approved lenders</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Warranty</h2>
            <p className="text-gray-600 mb-4">
              We provide warranties for our workmanship and materials as specified in your contract. Warranty claims must be submitted in writing within the warranty period.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Limitation of Liability</h2>
            <p className="text-gray-600 mb-4">
              BluTouch Pools & Spas shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Contact Information</h2>
            <p className="text-gray-600 mb-4">
              For questions about these Terms of Service, please contact us at:
            </p>
            <p className="text-gray-600">
              Email: legal@blutouchpools.com<br />
              Phone: (832) 961-0258<br />
              Address: 12345 Pool Lane, Houston, TX 77001
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsOfService; 