// Image optimization utilities for CliniGlobal website

export interface ImageConfig {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  quality?: number;
}

// 1. GENERATE SEO-OPTIMIZED ALT TEXT
export const generateAltText = (
  imageType: 'course' | 'facility' | 'team' | 'logo' | 'hero',
  context: string,
  location?: string
): string => {
  const templates = {
    course: `${context} course training at CliniGlobal Research Institute${location ? ` - ${location}` : ''}`,
    facility: `${context} training facility at CliniGlobal${location ? ` ${location} center` : ''}`,
    team: `${context} - CliniGlobal healthcare training experts and faculty`,
    logo: `CliniGlobal Research Institute logo - ${context}`,
    hero: `${context} - Professional healthcare training and education at CliniGlobal`
  };

  return templates[imageType] || context;
};

// 2. GENERATE RESPONSIVE SRCSET
export const generateSrcSet = (
  baseSrc: string,
  sizes: number[] = [400, 800, 1200, 1600]
): string => {
  const baseUrl = baseSrc.split('?')[0];
  const extension = baseUrl.split('.').pop();
  const baseName = baseUrl.replace(`.${extension}`, '');

  return sizes
    .map(size => `${baseName}-${size}w.${extension} ${size}w`)
    .join(', ');
};

// 3. OPTIMIZE IMAGE FILE NAMES
export const optimizeFileName = (
  originalName: string,
  keywords: string[],
  type: string
): string => {
  // Remove file extension
  const nameWithoutExt = originalName.replace(/\.[^/.]+$/, '');
  
  // Clean and format keywords
  const cleanKeywords = keywords
    .map(keyword => keyword.toLowerCase().replace(/[^a-z0-9]/g, '-'))
    .join('-');
  
  // Combine with type
  const optimizedName = `${cleanKeywords}-${type}-cliniglobal`;
  
  // Ensure it's under 60 characters
  return optimizedName.length > 60 
    ? optimizedName.substring(0, 57) + '...'
    : optimizedName;
};

// 4. IMAGE COMPRESSION SETTINGS
export const compressionSettings = {
  hero: { quality: 85, maxWidth: 1920 },
  courseCard: { quality: 80, maxWidth: 800 },
  thumbnail: { quality: 75, maxWidth: 400 },
  logo: { quality: 90, maxWidth: 200 },
  facility: { quality: 82, maxWidth: 1200 },
  team: { quality: 80, maxWidth: 600 }
};

// 5. LAZY LOADING INTERSECTION OBSERVER
export const createLazyLoadObserver = (
  callback: (entries: IntersectionObserverEntry[]) => void
): IntersectionObserver => {
  return new IntersectionObserver(callback, {
    threshold: 0.1,
    rootMargin: '50px 0px'
  });
};

// 6. PRELOAD CRITICAL IMAGES
export const preloadImage = (src: string, as: 'image' = 'image'): void => {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = as;
  link.href = src;
  document.head.appendChild(link);
};

// 7. WEBP/AVIF FORMAT DETECTION
export const supportsModernFormats = (): Promise<{
  webp: boolean;
  avif: boolean;
}> => {
  return new Promise((resolve) => {
    const webp = new Image();
    const avif = new Image();
    let results = { webp: false, avif: false };
    let completed = 0;

    const checkComplete = () => {
      completed++;
      if (completed === 2) {
        resolve(results);
      }
    };

    webp.onload = () => {
      results.webp = true;
      checkComplete();
    };
    webp.onerror = checkComplete;
    webp.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';

    avif.onload = () => {
      results.avif = true;
      checkComplete();
    };
    avif.onerror = checkComplete;
    avif.src = 'data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgABogQEAwgMg8f8D///8WfhwB8+ErK42A=';
  });
};

// 8. IMAGE SITEMAP GENERATOR
export const generateImageSitemapEntry = (
  pageUrl: string,
  images: Array<{
    src: string;
    caption: string;
    title: string;
    license?: string;
  }>
): string => {
  return `
  <url>
    <loc>${pageUrl}</loc>
    ${images.map(img => `
    <image:image>
      <image:loc>${img.src}</image:loc>
      <image:caption>${img.caption}</image:caption>
      <image:title>${img.title}</image:title>
      ${img.license ? `<image:license>${img.license}</image:license>` : ''}
    </image:image>`).join('')}
  </url>`;
};

// 9. STRUCTURED DATA FOR IMAGES
export const generateImageStructuredData = (
  imageUrl: string,
  title: string,
  description: string,
  organization: string = 'CliniGlobal Research Institute'
) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'ImageObject',
    contentUrl: imageUrl,
    name: title,
    description: description,
    creator: {
      '@type': 'Organization',
      name: organization
    },
    copyrightNotice: `© 2024 ${organization}`,
    license: 'https://cliniglobal.com/image-license',
    acquireLicensePage: 'https://cliniglobal.com/licensing'
  };
};

// 10. PERFORMANCE MONITORING
export const measureImagePerformance = (imageSrc: string): Promise<number> => {
  return new Promise((resolve) => {
    const startTime = performance.now();
    const img = new Image();
    
    img.onload = () => {
      const loadTime = performance.now() - startTime;
      resolve(loadTime);
    };
    
    img.onerror = () => {
      resolve(-1); // Error loading
    };
    
    img.src = imageSrc;
  });
};

// 11. CRITICAL CSS FOR IMAGES
export const generateCriticalImageCSS = (images: string[]): string => {
  return `
    /* Critical image styles */
    .hero-image {
      width: 100%;
      height: 100vh;
      object-fit: cover;
      object-position: center;
    }
    
    .course-card-image {
      width: 100%;
      height: 200px;
      object-fit: cover;
      border-radius: 8px;
    }
    
    .logo-image {
      width: auto;
      height: 40px;
      object-fit: contain;
    }
    
    /* Preload critical images */
    ${images.map((img, index) => `
    .preload-${index}::before {
      content: '';
      background-image: url('${img}');
      position: absolute;
      left: -9999px;
      top: -9999px;
      width: 1px;
      height: 1px;
    }`).join('')}
  `;
};

// 12. IMAGE OPTIMIZATION CHECKLIST
export const imageOptimizationChecklist = {
  fileNaming: [
    'Use descriptive keywords',
    'Separate words with hyphens',
    'Include brand/location when relevant',
    'Keep under 60 characters',
    'Use lowercase letters only'
  ],
  compression: [
    'Compress images to <100KB when possible',
    'Use appropriate quality settings (75-90%)',
    'Create multiple size variants',
    'Convert to modern formats (WebP/AVIF)'
  ],
  seo: [
    'Add descriptive alt text (<125 characters)',
    'Include relevant keywords naturally',
    'Create image sitemap',
    'Add structured data for key images'
  ],
  performance: [
    'Implement lazy loading for below-fold images',
    'Use responsive images with srcset',
    'Preload critical above-fold images',
    'Monitor Core Web Vitals impact'
  ]
};