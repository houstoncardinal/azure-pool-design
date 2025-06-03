import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  canonical?: string;
  schemaType?: 'LocalBusiness' | 'Service' | 'Project';
  serviceType?: string;
  projectType?: string;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords = 'pool builder, custom pools, pool design, Houston pool builder, pool construction, pool installation, pool maintenance, pool renovation, luxury pools, swimming pools',
  ogImage = '/blutouch-logo.png',
  ogType = 'website',
  canonical,
  schemaType = 'LocalBusiness',
  serviceType,
  projectType
}) => {
  const fullTitle = `${title} | BluTouch Pools & Spas - Houston's Premier Pool Builder`;
  const baseUrl = 'https://www.blutouchpools.com';
  
  const generateStructuredData = () => {
    const baseSchema = {
      '@context': 'https://schema.org',
      '@type': schemaType,
      name: 'BluTouch Pools & Spas',
      description: description,
      url: baseUrl,
      logo: `${baseUrl}/blutouch-logo.png`,
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.8',
        ratingCount: '53',
        bestRating: '5',
        worstRating: '1'
      },
      review: [
        {
          '@type': 'Review',
          reviewRating: {
            '@type': 'Rating',
            ratingValue: '5',
            bestRating: '5'
          },
          author: {
            '@type': 'Person',
            name: 'Sarah Johnson'
          },
          datePublished: '2024-03-15',
          reviewBody: 'BluTouch Pools transformed our backyard into a stunning oasis. Their attention to detail and professionalism exceeded our expectations.',
          location: 'Houston, TX'
        },
        {
          '@type': 'Review',
          reviewRating: {
            '@type': 'Rating',
            ratingValue: '5',
            bestRating: '5'
          },
          author: {
            '@type': 'Person',
            name: 'Michael Rodriguez'
          },
          datePublished: '2024-03-10',
          reviewBody: 'Exceptional service from start to finish. The team at BluTouch Pools made our dream pool a reality.',
          location: 'Pearland, TX'
        }
      ],
      address: {
        '@type': 'PostalAddress',
        streetAddress: '12345 Pool Lane',
        addressLocality: 'Houston',
        addressRegion: 'TX',
        postalCode: '77001',
        addressCountry: 'US'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '29.7604',
        longitude: '-95.3698'
      },
      telephone: '+1-832-961-0258',
      priceRange: '$$$',
      openingHours: 'Mo-Fr 08:00-18:00',
      sameAs: [
        'https://www.facebook.com/blutouchpools',
        'https://www.instagram.com/blutouchpools'
      ],
      areaServed: {
        '@type': 'GeoCircle',
        geoMidpoint: {
          '@type': 'GeoCoordinates',
          latitude: '29.7604',
          longitude: '-95.3698'
        },
        geoRadius: '50000'
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Pool Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Custom Pool Design',
              description: 'Professional custom pool design services in Houston'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Pool Construction',
              description: 'Expert pool construction and installation in Houston'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Pool Maintenance',
              description: 'Professional pool maintenance and repair services'
            }
          }
        ]
      }
    };

    if (schemaType === 'Service') {
      return {
        ...baseSchema,
        '@type': 'Service',
        serviceType: serviceType || 'Pool Construction',
        provider: {
          '@type': 'LocalBusiness',
          name: 'BluTouch Pools & Spas'
        },
        areaServed: {
          '@type': 'GeoCircle',
          geoMidpoint: {
            '@type': 'GeoCoordinates',
            latitude: '29.7604',
            longitude: '-95.3698'
          },
          geoRadius: '50000'
        }
      };
    }

    if (schemaType === 'Project') {
      return {
        ...baseSchema,
        '@type': 'Project',
        name: title,
        description: description,
        projectType: projectType || 'Pool Construction',
        location: {
          '@type': 'Place',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Houston',
            addressRegion: 'TX'
          }
        }
      };
    }

    return baseSchema;
  };

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonical || baseUrl} />
      <meta property="og:site_name" content="BluTouch Pools & Spas" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@blutouchpools" />
      
      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="BluTouch Pools & Spas" />
      <meta name="geo.region" content="US-TX" />
      <meta name="geo.placename" content="Houston" />
      <meta name="geo.position" content="29.7604;-95.3698" />
      <meta name="ICBM" content="29.7604, -95.3698" />
      
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(generateStructuredData())}
      </script>
    </Helmet>
  );
};

export default SEO; 