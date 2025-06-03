interface ImageAltTag {
  src: string;
  alt: string;
}

// Common alt tags for frequently used images
export const commonImageAltTags: ImageAltTag[] = [
  {
    src: '/blutouch-logo.png',
    alt: 'BluTouch Pools & Spas Logo - Houston\'s Premier Pool Builder'
  },
  {
    src: '/hero-image.jpg',
    alt: 'Luxury swimming pool design by BluTouch Pools & Spas in Houston'
  }
];

// Helper function to get alt tag for an image
export const getImageAltTag = (src: string, defaultAlt: string): string => {
  const commonTag = commonImageAltTags.find(tag => tag.src === src);
  return commonTag?.alt || defaultAlt;
};

// Helper function to validate image alt tags
export const validateImageAltTag = (alt: string): boolean => {
  if (!alt) return false;
  if (alt.length < 5) return false;
  if (alt.length > 125) return false;
  return true;
};

// Helper function to generate descriptive alt tag for pool projects
export const generatePoolProjectAltTag = (
  projectName: string,
  poolType: string,
  location: string = 'Houston'
): string => {
  return `${projectName} - ${poolType} pool design and construction by BluTouch Pools & Spas in ${location}`;
};

// Helper function to generate descriptive alt tag for services
export const generateServiceAltTag = (
  serviceName: string,
  description: string
): string => {
  const location = 'Houston';
  const keywords = ['custom pool', 'pool builder', 'pool design', 'pool construction'];
  
  // Extract main keyword from service name
  const mainKeyword = serviceName.toLowerCase().includes('pool') ? 'pool' : 'spa';
  
  // Create a descriptive alt tag
  return `${serviceName} - Professional ${mainKeyword} ${keywords[0]} services in ${location}. ${description}`;
};

// Helper function to generate alt tag for portfolio images
export const generatePortfolioAltTag = (
  projectName: string,
  location: string,
  features: string[]
): string => {
  const mainFeature = features[0] || 'custom pool';
  return `${projectName} - Luxury ${mainFeature} installation in ${location} by BluTouch Pools & Spas`;
};

// Helper function to generate alt tag for team members
export const generateTeamAltTag = (
  name: string,
  position: string
): string => {
  return `${name} - ${position} at BluTouch Pools & Spas, Houston's premier pool builder`;
};

// Helper function to generate alt tag for testimonials
export const generateTestimonialAltTag = (
  authorName: string,
  location: string
): string => {
  return `${authorName} - Satisfied customer from ${location} sharing their experience with BluTouch Pools & Spas`;
}; 