interface ImageOptimizationConfig {
  quality?: number;
  width?: number;
  height?: number;
  format?: 'webp' | 'jpeg' | 'png';
}

// Default optimization settings
const defaultConfig: ImageOptimizationConfig = {
  quality: 80,
  format: 'webp'
};

// Helper function to generate optimized image URL
export const getOptimizedImageUrl = (
  src: string,
  config: ImageOptimizationConfig = {}
): string => {
  const finalConfig = { ...defaultConfig, ...config };
  const params = new URLSearchParams();

  if (finalConfig.quality) {
    params.append('q', finalConfig.quality.toString());
  }
  if (finalConfig.width) {
    params.append('w', finalConfig.width.toString());
  }
  if (finalConfig.height) {
    params.append('h', finalConfig.height.toString());
  }
  if (finalConfig.format) {
    params.append('fm', finalConfig.format);
  }

  // If using a CDN or image optimization service, you would add the base URL here
  // For now, we'll just return the original src
  return src;
};

// Helper function to generate responsive image sizes
export const getResponsiveImageSizes = (
  src: string,
  sizes: number[] = [320, 640, 960, 1280]
): string[] => {
  return sizes.map(size => getOptimizedImageUrl(src, { width: size }));
};

// Helper function to generate srcset string
export const generateSrcSet = (
  src: string,
  sizes: number[] = [320, 640, 960, 1280]
): string => {
  return getResponsiveImageSizes(src, sizes)
    .map((url, index) => `${url} ${sizes[index]}w`)
    .join(', ');
}; 